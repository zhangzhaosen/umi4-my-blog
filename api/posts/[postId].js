"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/.pnpm/@prisma+client@5.7.1_prisma@5.7.1/node_modules/@prisma/client/runtime/library.js
var require_library = __commonJS({
  "node_modules/.pnpm/@prisma+client@5.7.1_prisma@5.7.1/node_modules/@prisma/client/runtime/library.js"(exports, module) {
    "use strict";
    var Au = Object.create;
    var Kr = Object.defineProperty;
    var Ru = Object.getOwnPropertyDescriptor;
    var Mu = Object.getOwnPropertyNames;
    var Su = Object.getPrototypeOf;
    var Iu = Object.prototype.hasOwnProperty;
    var Q = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
    var Tt = (e, t) => {
      for (var r in t)
        Kr(e, r, { get: t[r], enumerable: true });
    };
    var Ko = (e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let i of Mu(t))
          !Iu.call(e, i) && i !== r && Kr(e, i, { get: () => t[i], enumerable: !(n = Ru(t, i)) || n.enumerable });
      return e;
    };
    var F = (e, t, r) => (r = e != null ? Au(Su(e)) : {}, Ko(t || !e || !e.__esModule ? Kr(r, "default", { value: e, enumerable: true }) : r, e));
    var ku = (e) => Ko(Kr({}, "__esModule", { value: true }), e);
    var es = Q((Hg, Xo) => {
      "use strict";
      var Ct = 1e3, At = Ct * 60, Rt = At * 60, ct = Rt * 24, Fu = ct * 7, Ou = ct * 365.25;
      Xo.exports = function(e, t) {
        t = t || {};
        var r = typeof e;
        if (r === "string" && e.length > 0)
          return Du(e);
        if (r === "number" && isFinite(e))
          return t.long ? Lu(e) : Nu(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
      };
      function Du(e) {
        if (e = String(e), !(e.length > 100)) {
          var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
          if (t) {
            var r = parseFloat(t[1]), n = (t[2] || "ms").toLowerCase();
            switch (n) {
              case "years":
              case "year":
              case "yrs":
              case "yr":
              case "y":
                return r * Ou;
              case "weeks":
              case "week":
              case "w":
                return r * Fu;
              case "days":
              case "day":
              case "d":
                return r * ct;
              case "hours":
              case "hour":
              case "hrs":
              case "hr":
              case "h":
                return r * Rt;
              case "minutes":
              case "minute":
              case "mins":
              case "min":
              case "m":
                return r * At;
              case "seconds":
              case "second":
              case "secs":
              case "sec":
              case "s":
                return r * Ct;
              case "milliseconds":
              case "millisecond":
              case "msecs":
              case "msec":
              case "ms":
                return r;
              default:
                return;
            }
          }
        }
      }
      function Nu(e) {
        var t = Math.abs(e);
        return t >= ct ? Math.round(e / ct) + "d" : t >= Rt ? Math.round(e / Rt) + "h" : t >= At ? Math.round(e / At) + "m" : t >= Ct ? Math.round(e / Ct) + "s" : e + "ms";
      }
      function Lu(e) {
        var t = Math.abs(e);
        return t >= ct ? Gr(e, t, ct, "day") : t >= Rt ? Gr(e, t, Rt, "hour") : t >= At ? Gr(e, t, At, "minute") : t >= Ct ? Gr(e, t, Ct, "second") : e + " ms";
      }
      function Gr(e, t, r, n) {
        var i = t >= r * 1.5;
        return Math.round(e / r) + " " + n + (i ? "s" : "");
      }
    });
    var di = Q((Wg, ts) => {
      "use strict";
      function $u(e) {
        r.debug = r, r.default = r, r.coerce = l, r.disable = o, r.enable = i, r.enabled = s, r.humanize = es(), r.destroy = u, Object.keys(e).forEach((c) => {
          r[c] = e[c];
        }), r.names = [], r.skips = [], r.formatters = {};
        function t(c) {
          let p = 0;
          for (let d = 0; d < c.length; d++)
            p = (p << 5) - p + c.charCodeAt(d), p |= 0;
          return r.colors[Math.abs(p) % r.colors.length];
        }
        r.selectColor = t;
        function r(c) {
          let p, d = null, f, y;
          function g(...T) {
            if (!g.enabled)
              return;
            let A = g, R = Number(/* @__PURE__ */ new Date()), E = R - (p || R);
            A.diff = E, A.prev = p, A.curr = R, p = R, T[0] = r.coerce(T[0]), typeof T[0] != "string" && T.unshift("%O");
            let S = 0;
            T[0] = T[0].replace(/%([a-zA-Z%])/g, (ee, ut) => {
              if (ee === "%%")
                return "%";
              S++;
              let K = r.formatters[ut];
              if (typeof K == "function") {
                let ne = T[S];
                ee = K.call(A, ne), T.splice(S, 1), S--;
              }
              return ee;
            }), r.formatArgs.call(A, T), (A.log || r.log).apply(A, T);
          }
          return g.namespace = c, g.useColors = r.useColors(), g.color = r.selectColor(c), g.extend = n, g.destroy = r.destroy, Object.defineProperty(g, "enabled", { enumerable: true, configurable: false, get: () => d !== null ? d : (f !== r.namespaces && (f = r.namespaces, y = r.enabled(c)), y), set: (T) => {
            d = T;
          } }), typeof r.init == "function" && r.init(g), g;
        }
        function n(c, p) {
          let d = r(this.namespace + (typeof p > "u" ? ":" : p) + c);
          return d.log = this.log, d;
        }
        function i(c) {
          r.save(c), r.namespaces = c, r.names = [], r.skips = [];
          let p, d = (typeof c == "string" ? c : "").split(/[\s,]+/), f = d.length;
          for (p = 0; p < f; p++)
            d[p] && (c = d[p].replace(/\*/g, ".*?"), c[0] === "-" ? r.skips.push(new RegExp("^" + c.slice(1) + "$")) : r.names.push(new RegExp("^" + c + "$")));
        }
        function o() {
          let c = [...r.names.map(a), ...r.skips.map(a).map((p) => "-" + p)].join(",");
          return r.enable(""), c;
        }
        function s(c) {
          if (c[c.length - 1] === "*")
            return true;
          let p, d;
          for (p = 0, d = r.skips.length; p < d; p++)
            if (r.skips[p].test(c))
              return false;
          for (p = 0, d = r.names.length; p < d; p++)
            if (r.names[p].test(c))
              return true;
          return false;
        }
        function a(c) {
          return c.toString().substring(2, c.toString().length - 2).replace(/\.\*\?$/, "*");
        }
        function l(c) {
          return c instanceof Error ? c.stack || c.message : c;
        }
        function u() {
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
        return r.enable(r.load()), r;
      }
      ts.exports = $u;
    });
    var rs = Q((he, Jr) => {
      "use strict";
      he.formatArgs = ju;
      he.save = Vu;
      he.load = Bu;
      he.useColors = qu;
      he.storage = Uu();
      he.destroy = (() => {
        let e = false;
        return () => {
          e || (e = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
        };
      })();
      he.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
      function qu() {
        return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? true : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? false : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      }
      function ju(e) {
        if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + Jr.exports.humanize(this.diff), !this.useColors)
          return;
        let t = "color: " + this.color;
        e.splice(1, 0, t, "color: inherit");
        let r = 0, n = 0;
        e[0].replace(/%[a-zA-Z%]/g, (i) => {
          i !== "%%" && (r++, i === "%c" && (n = r));
        }), e.splice(n, 0, t);
      }
      he.log = console.debug || console.log || (() => {
      });
      function Vu(e) {
        try {
          e ? he.storage.setItem("debug", e) : he.storage.removeItem("debug");
        } catch {
        }
      }
      function Bu() {
        let e;
        try {
          e = he.storage.getItem("debug");
        } catch {
        }
        return !e && typeof process < "u" && "env" in process && (e = process.env.DEBUG), e;
      }
      function Uu() {
        try {
          return localStorage;
        } catch {
        }
      }
      Jr.exports = di()(he);
      var { formatters: Ku } = Jr.exports;
      Ku.j = function(e) {
        try {
          return JSON.stringify(e);
        } catch (t) {
          return "[UnexpectedJSONParseError]: " + t.message;
        }
      };
    });
    var mi = Q((zg, ns) => {
      "use strict";
      ns.exports = (e, t = process.argv) => {
        let r = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", n = t.indexOf(r + e), i = t.indexOf("--");
        return n !== -1 && (i === -1 || n < i);
      };
    });
    var yi = Q((Yg, os) => {
      "use strict";
      var Qu = require("os"), is = require("tty"), Pe = mi(), { env: J } = process, He;
      Pe("no-color") || Pe("no-colors") || Pe("color=false") || Pe("color=never") ? He = 0 : (Pe("color") || Pe("colors") || Pe("color=true") || Pe("color=always")) && (He = 1);
      "FORCE_COLOR" in J && (J.FORCE_COLOR === "true" ? He = 1 : J.FORCE_COLOR === "false" ? He = 0 : He = J.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(J.FORCE_COLOR, 10), 3));
      function fi(e) {
        return e === 0 ? false : { level: e, hasBasic: true, has256: e >= 2, has16m: e >= 3 };
      }
      function gi(e, t) {
        if (He === 0)
          return 0;
        if (Pe("color=16m") || Pe("color=full") || Pe("color=truecolor"))
          return 3;
        if (Pe("color=256"))
          return 2;
        if (e && !t && He === void 0)
          return 0;
        let r = He || 0;
        if (J.TERM === "dumb")
          return r;
        if (process.platform === "win32") {
          let n = Qu.release().split(".");
          return Number(n[0]) >= 10 && Number(n[2]) >= 10586 ? Number(n[2]) >= 14931 ? 3 : 2 : 1;
        }
        if ("CI" in J)
          return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((n) => n in J) || J.CI_NAME === "codeship" ? 1 : r;
        if ("TEAMCITY_VERSION" in J)
          return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(J.TEAMCITY_VERSION) ? 1 : 0;
        if (J.COLORTERM === "truecolor")
          return 3;
        if ("TERM_PROGRAM" in J) {
          let n = parseInt((J.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
          switch (J.TERM_PROGRAM) {
            case "iTerm.app":
              return n >= 3 ? 3 : 2;
            case "Apple_Terminal":
              return 2;
          }
        }
        return /-256(color)?$/i.test(J.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(J.TERM) || "COLORTERM" in J ? 1 : r;
      }
      function Gu(e) {
        let t = gi(e, e && e.isTTY);
        return fi(t);
      }
      os.exports = { supportsColor: Gu, stdout: fi(gi(true, is.isatty(1))), stderr: fi(gi(true, is.isatty(2))) };
    });
    var as = Q((te, Wr) => {
      "use strict";
      var Ju = require("tty"), Hr = require("util");
      te.init = ec;
      te.log = Yu;
      te.formatArgs = Wu;
      te.save = Zu;
      te.load = Xu;
      te.useColors = Hu;
      te.destroy = Hr.deprecate(() => {
      }, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      te.colors = [6, 2, 3, 4, 5, 1];
      try {
        let e = yi();
        e && (e.stderr || e).level >= 2 && (te.colors = [20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62, 63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113, 128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221]);
      } catch {
      }
      te.inspectOpts = Object.keys(process.env).filter((e) => /^debug_/i.test(e)).reduce((e, t) => {
        let r = t.substring(6).toLowerCase().replace(/_([a-z])/g, (i, o) => o.toUpperCase()), n = process.env[t];
        return /^(yes|on|true|enabled)$/i.test(n) ? n = true : /^(no|off|false|disabled)$/i.test(n) ? n = false : n === "null" ? n = null : n = Number(n), e[r] = n, e;
      }, {});
      function Hu() {
        return "colors" in te.inspectOpts ? !!te.inspectOpts.colors : Ju.isatty(process.stderr.fd);
      }
      function Wu(e) {
        let { namespace: t, useColors: r } = this;
        if (r) {
          let n = this.color, i = "\x1B[3" + (n < 8 ? n : "8;5;" + n), o = `  ${i};1m${t} \x1B[0m`;
          e[0] = o + e[0].split(`
`).join(`
` + o), e.push(i + "m+" + Wr.exports.humanize(this.diff) + "\x1B[0m");
        } else
          e[0] = zu() + t + " " + e[0];
      }
      function zu() {
        return te.inspectOpts.hideDate ? "" : (/* @__PURE__ */ new Date()).toISOString() + " ";
      }
      function Yu(...e) {
        return process.stderr.write(Hr.format(...e) + `
`);
      }
      function Zu(e) {
        e ? process.env.DEBUG = e : delete process.env.DEBUG;
      }
      function Xu() {
        return process.env.DEBUG;
      }
      function ec(e) {
        e.inspectOpts = {};
        let t = Object.keys(te.inspectOpts);
        for (let r = 0; r < t.length; r++)
          e.inspectOpts[t[r]] = te.inspectOpts[t[r]];
      }
      Wr.exports = di()(te);
      var { formatters: ss } = Wr.exports;
      ss.o = function(e) {
        return this.inspectOpts.colors = this.useColors, Hr.inspect(e, this.inspectOpts).split(`
`).map((t) => t.trim()).join(" ");
      };
      ss.O = function(e) {
        return this.inspectOpts.colors = this.useColors, Hr.inspect(e, this.inspectOpts);
      };
    });
    var ls = Q((Zg, hi) => {
      "use strict";
      typeof process > "u" || process.type === "renderer" || process.browser === true || process.__nwjs ? hi.exports = rs() : hi.exports = as();
    });
    var bs = Q((Fy, _i) => {
      "use strict";
      var M = _i.exports;
      _i.exports.default = M;
      var D = "\x1B[", er = "\x1B]", It = "\x07", rn = ";", hs = process.env.TERM_PROGRAM === "Apple_Terminal";
      M.cursorTo = (e, t) => {
        if (typeof e != "number")
          throw new TypeError("The `x` argument is required");
        return typeof t != "number" ? D + (e + 1) + "G" : D + (t + 1) + ";" + (e + 1) + "H";
      };
      M.cursorMove = (e, t) => {
        if (typeof e != "number")
          throw new TypeError("The `x` argument is required");
        let r = "";
        return e < 0 ? r += D + -e + "D" : e > 0 && (r += D + e + "C"), t < 0 ? r += D + -t + "A" : t > 0 && (r += D + t + "B"), r;
      };
      M.cursorUp = (e = 1) => D + e + "A";
      M.cursorDown = (e = 1) => D + e + "B";
      M.cursorForward = (e = 1) => D + e + "C";
      M.cursorBackward = (e = 1) => D + e + "D";
      M.cursorLeft = D + "G";
      M.cursorSavePosition = hs ? "\x1B7" : D + "s";
      M.cursorRestorePosition = hs ? "\x1B8" : D + "u";
      M.cursorGetPosition = D + "6n";
      M.cursorNextLine = D + "E";
      M.cursorPrevLine = D + "F";
      M.cursorHide = D + "?25l";
      M.cursorShow = D + "?25h";
      M.eraseLines = (e) => {
        let t = "";
        for (let r = 0; r < e; r++)
          t += M.eraseLine + (r < e - 1 ? M.cursorUp() : "");
        return e && (t += M.cursorLeft), t;
      };
      M.eraseEndLine = D + "K";
      M.eraseStartLine = D + "1K";
      M.eraseLine = D + "2K";
      M.eraseDown = D + "J";
      M.eraseUp = D + "1J";
      M.eraseScreen = D + "2J";
      M.scrollUp = D + "S";
      M.scrollDown = D + "T";
      M.clearScreen = "\x1Bc";
      M.clearTerminal = process.platform === "win32" ? `${M.eraseScreen}${D}0f` : `${M.eraseScreen}${D}3J${D}H`;
      M.beep = It;
      M.link = (e, t) => [er, "8", rn, rn, t, It, e, er, "8", rn, rn, It].join("");
      M.image = (e, t = {}) => {
        let r = `${er}1337;File=inline=1`;
        return t.width && (r += `;width=${t.width}`), t.height && (r += `;height=${t.height}`), t.preserveAspectRatio === false && (r += ";preserveAspectRatio=0"), r + ":" + e.toString("base64") + It;
      };
      M.iTerm = { setCwd: (e = process.cwd()) => `${er}50;CurrentDir=${e}${It}`, annotation: (e, t = {}) => {
        let r = `${er}1337;`, n = typeof t.x < "u", i = typeof t.y < "u";
        if ((n || i) && !(n && i && typeof t.length < "u"))
          throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
        return e = e.replace(/\|/g, ""), r += t.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", t.length > 0 ? r += (n ? [e, t.length, t.x, t.y] : [t.length, e]).join("|") : r += e, r + It;
      } };
    });
    var Es = Q((Oy, ws) => {
      "use strict";
      var ac = yi(), kt = mi();
      function xs(e) {
        if (/^\d{3,4}$/.test(e)) {
          let r = /(\d{1,2})(\d{2})/.exec(e);
          return { major: 0, minor: parseInt(r[1], 10), patch: parseInt(r[2], 10) };
        }
        let t = (e || "").split(".").map((r) => parseInt(r, 10));
        return { major: t[0], minor: t[1], patch: t[2] };
      }
      function Ti(e) {
        let { env: t } = process;
        if ("FORCE_HYPERLINK" in t)
          return !(t.FORCE_HYPERLINK.length > 0 && parseInt(t.FORCE_HYPERLINK, 10) === 0);
        if (kt("no-hyperlink") || kt("no-hyperlinks") || kt("hyperlink=false") || kt("hyperlink=never"))
          return false;
        if (kt("hyperlink=true") || kt("hyperlink=always") || "NETLIFY" in t)
          return true;
        if (!ac.supportsColor(e) || e && !e.isTTY || process.platform === "win32" || "CI" in t || "TEAMCITY_VERSION" in t)
          return false;
        if ("TERM_PROGRAM" in t) {
          let r = xs(t.TERM_PROGRAM_VERSION);
          switch (t.TERM_PROGRAM) {
            case "iTerm.app":
              return r.major === 3 ? r.minor >= 1 : r.major > 3;
            case "WezTerm":
              return r.major >= 20200620;
            case "vscode":
              return r.major > 1 || r.major === 1 && r.minor >= 72;
          }
        }
        if ("VTE_VERSION" in t) {
          if (t.VTE_VERSION === "0.50.0")
            return false;
          let r = xs(t.VTE_VERSION);
          return r.major > 0 || r.minor >= 50;
        }
        return false;
      }
      ws.exports = { supportsHyperlink: Ti, stdout: Ti(process.stdout), stderr: Ti(process.stderr) };
    });
    var vs = Q((Dy, tr) => {
      "use strict";
      var lc = bs(), Ci = Es(), Ps = (e, t, { target: r = "stdout", ...n } = {}) => Ci[r] ? lc.link(e, t) : n.fallback === false ? e : typeof n.fallback == "function" ? n.fallback(e, t) : `${e} (\u200B${t}\u200B)`;
      tr.exports = (e, t, r = {}) => Ps(e, t, r);
      tr.exports.stderr = (e, t, r = {}) => Ps(e, t, { target: "stderr", ...r });
      tr.exports.isSupported = Ci.stdout;
      tr.exports.stderr.isSupported = Ci.stderr;
    });
    var Fs = Q((Xy, vc) => {
      vc.exports = { name: "dotenv", version: "16.0.3", description: "Loads environment variables from .env file", main: "lib/main.js", types: "lib/main.d.ts", exports: { ".": { require: "./lib/main.js", types: "./lib/main.d.ts", default: "./lib/main.js" }, "./config": "./config.js", "./config.js": "./config.js", "./lib/env-options": "./lib/env-options.js", "./lib/env-options.js": "./lib/env-options.js", "./lib/cli-options": "./lib/cli-options.js", "./lib/cli-options.js": "./lib/cli-options.js", "./package.json": "./package.json" }, scripts: { "dts-check": "tsc --project tests/types/tsconfig.json", lint: "standard", "lint-readme": "standard-markdown", pretest: "npm run lint && npm run dts-check", test: "tap tests/*.js --100 -Rspec", prerelease: "npm test", release: "standard-version" }, repository: { type: "git", url: "git://github.com/motdotla/dotenv.git" }, keywords: ["dotenv", "env", ".env", "environment", "variables", "config", "settings"], readmeFilename: "README.md", license: "BSD-2-Clause", devDependencies: { "@types/node": "^17.0.9", decache: "^4.6.1", dtslint: "^3.7.0", sinon: "^12.0.1", standard: "^16.0.4", "standard-markdown": "^7.1.0", "standard-version": "^9.3.2", tap: "^15.1.6", tar: "^6.1.11", typescript: "^4.5.4" }, engines: { node: ">=12" } };
    });
    var Ds = Q((eh, ln) => {
      "use strict";
      var _c = require("fs"), Os = require("path"), Tc = require("os"), Cc = Fs(), Ac = Cc.version, Rc = /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;
      function Mc(e) {
        let t = {}, r = e.toString();
        r = r.replace(/\r\n?/mg, `
`);
        let n;
        for (; (n = Rc.exec(r)) != null; ) {
          let i = n[1], o = n[2] || "";
          o = o.trim();
          let s = o[0];
          o = o.replace(/^(['"`])([\s\S]*)\1$/mg, "$2"), s === '"' && (o = o.replace(/\\n/g, `
`), o = o.replace(/\\r/g, "\r")), t[i] = o;
        }
        return t;
      }
      function Si(e) {
        console.log(`[dotenv@${Ac}][DEBUG] ${e}`);
      }
      function Sc(e) {
        return e[0] === "~" ? Os.join(Tc.homedir(), e.slice(1)) : e;
      }
      function Ic(e) {
        let t = Os.resolve(process.cwd(), ".env"), r = "utf8", n = !!(e && e.debug), i = !!(e && e.override);
        e && (e.path != null && (t = Sc(e.path)), e.encoding != null && (r = e.encoding));
        try {
          let o = an.parse(_c.readFileSync(t, { encoding: r }));
          return Object.keys(o).forEach(function(s) {
            Object.prototype.hasOwnProperty.call(process.env, s) ? (i === true && (process.env[s] = o[s]), n && Si(i === true ? `"${s}" is already defined in \`process.env\` and WAS overwritten` : `"${s}" is already defined in \`process.env\` and was NOT overwritten`)) : process.env[s] = o[s];
          }), { parsed: o };
        } catch (o) {
          return n && Si(`Failed to load ${t} ${o.message}`), { error: o };
        }
      }
      var an = { config: Ic, parse: Mc };
      ln.exports.config = an.config;
      ln.exports.parse = an.parse;
      ln.exports = an;
    });
    var Vs = Q((ah, js) => {
      "use strict";
      js.exports = (e) => {
        let t = e.match(/^[ \t]*(?=\S)/gm);
        return t ? t.reduce((r, n) => Math.min(r, n.length), 1 / 0) : 0;
      };
    });
    var Us = Q((lh, Bs) => {
      "use strict";
      var Dc = Vs();
      Bs.exports = (e) => {
        let t = Dc(e);
        if (t === 0)
          return e;
        let r = new RegExp(`^[ \\t]{${t}}`, "gm");
        return e.replace(r, "");
      };
    });
    var Ks = Q((uh, Nc) => {
      Nc.exports = { name: "@prisma/engines-version", version: "5.7.1-1.0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.3", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var Fi = Q((cn) => {
      "use strict";
      Object.defineProperty(cn, "__esModule", { value: true });
      cn.enginesVersion = void 0;
      cn.enginesVersion = Ks().prisma.enginesVersion;
    });
    var $i = Q((Mh, Js) => {
      "use strict";
      Js.exports = (e, t = 1, r) => {
        if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e != "string")
          throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof t != "number")
          throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
        if (typeof r.indent != "string")
          throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
        if (t === 0)
          return e;
        let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, r.indent.repeat(t));
      };
    });
    var Ys = Q((kh, zs) => {
      "use strict";
      zs.exports = ({ onlyFirst: e = false } = {}) => {
        let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(t, e ? void 0 : "g");
      };
    });
    var Bi = Q((Fh, Zs) => {
      "use strict";
      var Gc = Ys();
      Zs.exports = (e) => typeof e == "string" ? e.replace(Gc(), "") : e;
    });
    var Xs = Q((Nh, dn) => {
      "use strict";
      dn.exports = (e = {}) => {
        let t;
        if (e.repoUrl)
          t = e.repoUrl;
        else if (e.user && e.repo)
          t = `https://github.com/${e.user}/${e.repo}`;
        else
          throw new Error("You need to specify either the `repoUrl` option or both the `user` and `repo` options");
        let r = new URL(`${t}/issues/new`), n = ["body", "title", "labels", "template", "milestone", "assignee", "projects"];
        for (let i of n) {
          let o = e[i];
          if (o !== void 0) {
            if (i === "labels" || i === "projects") {
              if (!Array.isArray(o))
                throw new TypeError(`The \`${i}\` option should be an array`);
              o = o.join(",");
            }
            r.searchParams.set(i, o);
          }
        }
        return r.toString();
      };
      dn.exports.default = dn.exports;
    });
    var Do = Q((w_, Ol) => {
      "use strict";
      Ol.exports = function() {
        function e(t, r, n, i, o) {
          return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
        }
        return function(t, r) {
          if (t === r)
            return 0;
          if (t.length > r.length) {
            var n = t;
            t = r, r = n;
          }
          for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); )
            i--, o--;
          for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); )
            s++;
          if (i -= s, o -= s, i === 0 || o < 3)
            return o;
          var a = 0, l, u, c, p, d, f, y, g, T, A, R, E, S = [];
          for (l = 0; l < i; l++)
            S.push(l + 1), S.push(t.charCodeAt(s + l));
          for (var we = S.length - 1; a < o - 3; )
            for (T = r.charCodeAt(s + (u = a)), A = r.charCodeAt(s + (c = a + 1)), R = r.charCodeAt(s + (p = a + 2)), E = r.charCodeAt(s + (d = a + 3)), f = a += 4, l = 0; l < we; l += 2)
              y = S[l], g = S[l + 1], u = e(y, u, c, T, g), c = e(u, c, p, A, g), p = e(c, p, d, R, g), f = e(p, d, f, E, g), S[l] = f, d = p, p = c, c = u, u = y;
          for (; a < o; )
            for (T = r.charCodeAt(s + (u = a)), f = ++a, l = 0; l < we; l += 2)
              y = S[l], S[l] = f = e(y, u, f, T, S[l + 1]), u = y;
          return f;
        };
      }();
    });
    var Ng = {};
    Tt(Ng, { DMMF: () => Ee, DMMFClass: () => Qr, Debug: () => bi, Decimal: () => Ne, Extensions: () => li, MetricsClient: () => Dt, NotFoundError: () => Be, ObjectEnumValue: () => ke, PrismaClientInitializationError: () => k, PrismaClientKnownRequestError: () => H, PrismaClientRustPanicError: () => be, PrismaClientUnknownRequestError: () => W, PrismaClientValidationError: () => se, Public: () => ui, Sql: () => me, Types: () => ci, defineDmmfProperty: () => ta, detectRuntime: () => xl, empty: () => na, getPrismaClient: () => _u, itxClientDenyList: () => Ji, join: () => ra, makeStrictEnum: () => Tu, objectEnumNames: () => Wc, objectEnumValues: () => fn, raw: () => Zi, sqltag: () => Xi, warnEnvConflicts: () => Cu, warnOnce: () => lr });
    module.exports = ku(Ng);
    var li = {};
    Tt(li, { defineExtension: () => Qo, getExtensionContext: () => Go });
    function Qo(e) {
      return typeof e == "function" ? e : (t) => t.$extends(e);
    }
    function Go(e) {
      return e;
    }
    var ui = {};
    Tt(ui, { validator: () => Jo });
    function Jo(...e) {
      return (t) => t;
    }
    var ci = {};
    Tt(ci, { Extensions: () => Ho, Public: () => Wo, Result: () => zo, Utils: () => Yo });
    var Ho = {};
    var Wo = {};
    var zo = {};
    var Yo = {};
    var Je = (e, t) => {
      let r = {};
      for (let n of e) {
        let i = n[t];
        r[i] = n;
      }
      return r;
    };
    function Zo(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    var Qr = class {
      constructor(t) {
        this.document = t;
        this.compositeNames = new Set(this.datamodel.types.map((r) => r.name)), this.typeAndModelMap = this.buildTypeModelMap(), this.mappingsMap = this.buildMappingsMap(), this.outputTypeMap = this.buildMergedOutputTypeMap(), this.rootFieldMap = this.buildRootFieldMap(), this.inputTypesByName = this.buildInputTypesMap();
      }
      get datamodel() {
        return this.document.datamodel;
      }
      get mappings() {
        return this.document.mappings;
      }
      get schema() {
        return this.document.schema;
      }
      get inputObjectTypes() {
        return this.schema.inputObjectTypes;
      }
      get outputObjectTypes() {
        return this.schema.outputObjectTypes;
      }
      isComposite(t) {
        return this.compositeNames.has(t);
      }
      getOtherOperationNames() {
        return [Object.values(this.mappings.otherOperations.write), Object.values(this.mappings.otherOperations.read)].flat();
      }
      hasEnumInNamespace(t, r) {
        return this.schema.enumTypes[r]?.find((n) => n.name === t) !== void 0;
      }
      resolveInputObjectType(t) {
        return this.inputTypesByName.get(pi(t.type, t.namespace));
      }
      resolveOutputObjectType(t) {
        if (t.location === "outputObjectTypes")
          return this.outputObjectTypes[t.namespace ?? "prisma"].find((r) => r.name === t.type);
      }
      buildModelMap() {
        return Je(this.datamodel.models, "name");
      }
      buildTypeMap() {
        return Je(this.datamodel.types, "name");
      }
      buildTypeModelMap() {
        return { ...this.buildTypeMap(), ...this.buildModelMap() };
      }
      buildMappingsMap() {
        return Je(this.mappings.modelOperations, "model");
      }
      buildMergedOutputTypeMap() {
        return { model: Je(this.schema.outputObjectTypes.model, "name"), prisma: Je(this.schema.outputObjectTypes.prisma, "name") };
      }
      buildRootFieldMap() {
        return { ...Je(this.outputTypeMap.prisma.Query.fields, "name"), ...Je(this.outputTypeMap.prisma.Mutation.fields, "name") };
      }
      buildInputTypesMap() {
        let t = /* @__PURE__ */ new Map();
        for (let r of this.inputObjectTypes.prisma)
          t.set(pi(r.name, "prisma"), r);
        if (!this.inputObjectTypes.model)
          return t;
        for (let r of this.inputObjectTypes.model)
          t.set(pi(r.name, "model"), r);
        return t;
      }
    };
    function pi(e, t) {
      return t ? `${t}.${e}` : e;
    }
    var Ee;
    ((t) => {
      let e;
      ((E) => (E.findUnique = "findUnique", E.findUniqueOrThrow = "findUniqueOrThrow", E.findFirst = "findFirst", E.findFirstOrThrow = "findFirstOrThrow", E.findMany = "findMany", E.create = "create", E.createMany = "createMany", E.update = "update", E.updateMany = "updateMany", E.upsert = "upsert", E.delete = "delete", E.deleteMany = "deleteMany", E.groupBy = "groupBy", E.count = "count", E.aggregate = "aggregate", E.findRaw = "findRaw", E.aggregateRaw = "aggregateRaw"))(e = t.ModelAction || (t.ModelAction = {}));
    })(Ee || (Ee = {}));
    var zr = F(ls());
    var tc = 100;
    var Zt = [];
    typeof process < "u" && typeof process.stderr?.write != "function" && (zr.default.log = console.debug ?? console.log);
    function rc(e) {
      let t = (0, zr.default)(e), r = Object.assign((...n) => (t.log = r.log, n.length !== 0 && Zt.push([e, ...n]), Zt.length > tc && Zt.shift(), t("", ...n)), t);
      return r;
    }
    var bi = Object.assign(rc, zr.default);
    function us(e = 7500) {
      let t = Zt.map((r) => r.map((n) => typeof n == "string" ? n : JSON.stringify(n)).join(" ")).join(`
`);
      return t.length < e ? t : t.slice(-e);
    }
    function cs() {
      Zt.length = 0;
    }
    var $ = bi;
    var xi;
    var ps;
    var ds;
    var ms;
    var fs = true;
    typeof process < "u" && ({ FORCE_COLOR: xi, NODE_DISABLE_COLORS: ps, NO_COLOR: ds, TERM: ms } = process.env || {}, fs = process.stdout && process.stdout.isTTY);
    var nc = { enabled: !ps && ds == null && ms !== "dumb" && (xi != null && xi !== "0" || fs) };
    function q(e, t) {
      let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
      return function(o) {
        return !nc.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
      };
    }
    var ey = q(0, 0);
    var pe = q(1, 22);
    var We = q(2, 22);
    var ty = q(3, 23);
    var ue = q(4, 24);
    var ry = q(7, 27);
    var ny = q(8, 28);
    var iy = q(9, 29);
    var oy = q(30, 39);
    var ve = q(31, 39);
    var pt = q(32, 39);
    var Re = q(33, 39);
    var Mt = q(34, 39);
    var sy = q(35, 39);
    var ze = q(36, 39);
    var ay = q(37, 39);
    var Yr = q(90, 39);
    var ly = q(90, 39);
    var uy = q(40, 49);
    var cy = q(41, 49);
    var py = q(42, 49);
    var dy = q(43, 49);
    var my = q(44, 49);
    var fy = q(45, 49);
    var gy = q(46, 49);
    var yy = q(47, 49);
    var gs = F(require("fs"));
    function wi() {
      let e = process.env.PRISMA_QUERY_ENGINE_LIBRARY;
      if (!(e && gs.default.existsSync(e)) && process.arch === "ia32")
        throw new Error('The default query engine type (Node-API, "library") is currently not supported for 32bit Node. Please set `engineType = "binary"` in the "generator" block of your "schema.prisma" file (or use the environment variables "PRISMA_CLIENT_ENGINE_TYPE=binary" and/or "PRISMA_CLI_QUERY_ENGINE_TYPE=binary".)');
    }
    var Zr = "libquery_engine";
    function Xr(e, t) {
      let r = t === "url";
      return e.includes("windows") ? r ? "query_engine.dll.node" : `query_engine-${e}.dll.node` : e.includes("darwin") ? r ? `${Zr}.dylib.node` : `${Zr}-${e}.dylib.node` : r ? `${Zr}.so.node` : `${Zr}-${e}.so.node`;
    }
    var As = F(require("child_process"));
    var Ai = F(require("fs/promises"));
    var on = F(require("os"));
    var Ve = Symbol.for("@ts-pattern/matcher");
    var ic = Symbol.for("@ts-pattern/isVariadic");
    var tn = "@ts-pattern/anonymous-select-key";
    var Ei = (e) => !!(e && typeof e == "object");
    var en = (e) => e && !!e[Ve];
    var Ie = (e, t, r) => {
      if (en(e)) {
        let n = e[Ve](), { matched: i, selections: o } = n.match(t);
        return i && o && Object.keys(o).forEach((s) => r(s, o[s])), i;
      }
      if (Ei(e)) {
        if (!Ei(t))
          return false;
        if (Array.isArray(e)) {
          if (!Array.isArray(t))
            return false;
          let n = [], i = [], o = [];
          for (let s of e.keys()) {
            let a = e[s];
            en(a) && a[ic] ? o.push(a) : o.length ? i.push(a) : n.push(a);
          }
          if (o.length) {
            if (o.length > 1)
              throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
            if (t.length < n.length + i.length)
              return false;
            let s = t.slice(0, n.length), a = i.length === 0 ? [] : t.slice(-i.length), l = t.slice(n.length, i.length === 0 ? 1 / 0 : -i.length);
            return n.every((u, c) => Ie(u, s[c], r)) && i.every((u, c) => Ie(u, a[c], r)) && (o.length === 0 || Ie(o[0], l, r));
          }
          return e.length === t.length && e.every((s, a) => Ie(s, t[a], r));
        }
        return Object.keys(e).every((n) => {
          let i = e[n];
          return (n in t || en(o = i) && o[Ve]().matcherType === "optional") && Ie(i, t[n], r);
          var o;
        });
      }
      return Object.is(t, e);
    };
    var Xe = (e) => {
      var t, r, n;
      return Ei(e) ? en(e) ? (t = (r = (n = e[Ve]()).getSelectionKeys) == null ? void 0 : r.call(n)) != null ? t : [] : Array.isArray(e) ? Xt(e, Xe) : Xt(Object.values(e), Xe) : [];
    };
    var Xt = (e, t) => e.reduce((r, n) => r.concat(t(n)), []);
    function _e(e) {
      return Object.assign(e, { optional: () => oc(e), and: (t) => B(e, t), or: (t) => sc(e, t), select: (t) => t === void 0 ? ys(e) : ys(t, e) });
    }
    function oc(e) {
      return _e({ [Ve]: () => ({ match: (t) => {
        let r = {}, n = (i, o) => {
          r[i] = o;
        };
        return t === void 0 ? (Xe(e).forEach((i) => n(i, void 0)), { matched: true, selections: r }) : { matched: Ie(e, t, n), selections: r };
      }, getSelectionKeys: () => Xe(e), matcherType: "optional" }) });
    }
    function B(...e) {
      return _e({ [Ve]: () => ({ match: (t) => {
        let r = {}, n = (i, o) => {
          r[i] = o;
        };
        return { matched: e.every((i) => Ie(i, t, n)), selections: r };
      }, getSelectionKeys: () => Xt(e, Xe), matcherType: "and" }) });
    }
    function sc(...e) {
      return _e({ [Ve]: () => ({ match: (t) => {
        let r = {}, n = (i, o) => {
          r[i] = o;
        };
        return Xt(e, Xe).forEach((i) => n(i, void 0)), { matched: e.some((i) => Ie(i, t, n)), selections: r };
      }, getSelectionKeys: () => Xt(e, Xe), matcherType: "or" }) });
    }
    function O(e) {
      return { [Ve]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
    }
    function ys(...e) {
      let t = typeof e[0] == "string" ? e[0] : void 0, r = e.length === 2 ? e[1] : typeof e[0] == "string" ? void 0 : e[0];
      return _e({ [Ve]: () => ({ match: (n) => {
        let i = { [t ?? tn]: n };
        return { matched: r === void 0 || Ie(r, n, (o, s) => {
          i[o] = s;
        }), selections: i };
      }, getSelectionKeys: () => [t ?? tn].concat(r === void 0 ? [] : Xe(r)) }) });
    }
    function Me(e) {
      return typeof e == "number";
    }
    function dt(e) {
      return typeof e == "string";
    }
    function Ye(e) {
      return typeof e == "bigint";
    }
    var Ty = _e(O(function(e) {
      return true;
    }));
    var mt = (e) => Object.assign(_e(e), { startsWith: (t) => {
      return mt(B(e, (r = t, O((n) => dt(n) && n.startsWith(r)))));
      var r;
    }, endsWith: (t) => {
      return mt(B(e, (r = t, O((n) => dt(n) && n.endsWith(r)))));
      var r;
    }, minLength: (t) => mt(B(e, ((r) => O((n) => dt(n) && n.length >= r))(t))), maxLength: (t) => mt(B(e, ((r) => O((n) => dt(n) && n.length <= r))(t))), includes: (t) => {
      return mt(B(e, (r = t, O((n) => dt(n) && n.includes(r)))));
      var r;
    }, regex: (t) => {
      return mt(B(e, (r = t, O((n) => dt(n) && !!n.match(r)))));
      var r;
    } });
    var Cy = mt(O(dt));
    var Se = (e) => Object.assign(_e(e), { between: (t, r) => Se(B(e, ((n, i) => O((o) => Me(o) && n <= o && i >= o))(t, r))), lt: (t) => Se(B(e, ((r) => O((n) => Me(n) && n < r))(t))), gt: (t) => Se(B(e, ((r) => O((n) => Me(n) && n > r))(t))), lte: (t) => Se(B(e, ((r) => O((n) => Me(n) && n <= r))(t))), gte: (t) => Se(B(e, ((r) => O((n) => Me(n) && n >= r))(t))), int: () => Se(B(e, O((t) => Me(t) && Number.isInteger(t)))), finite: () => Se(B(e, O((t) => Me(t) && Number.isFinite(t)))), positive: () => Se(B(e, O((t) => Me(t) && t > 0))), negative: () => Se(B(e, O((t) => Me(t) && t < 0))) });
    var Ay = Se(O(Me));
    var Ze = (e) => Object.assign(_e(e), { between: (t, r) => Ze(B(e, ((n, i) => O((o) => Ye(o) && n <= o && i >= o))(t, r))), lt: (t) => Ze(B(e, ((r) => O((n) => Ye(n) && n < r))(t))), gt: (t) => Ze(B(e, ((r) => O((n) => Ye(n) && n > r))(t))), lte: (t) => Ze(B(e, ((r) => O((n) => Ye(n) && n <= r))(t))), gte: (t) => Ze(B(e, ((r) => O((n) => Ye(n) && n >= r))(t))), positive: () => Ze(B(e, O((t) => Ye(t) && t > 0))), negative: () => Ze(B(e, O((t) => Ye(t) && t < 0))) });
    var Ry = Ze(O(Ye));
    var My = _e(O(function(e) {
      return typeof e == "boolean";
    }));
    var Sy = _e(O(function(e) {
      return typeof e == "symbol";
    }));
    var Iy = _e(O(function(e) {
      return e == null;
    }));
    var Pi = { matched: false, value: void 0 };
    function St(e) {
      return new vi(e, Pi);
    }
    var vi = class e {
      constructor(t, r) {
        this.input = void 0, this.state = void 0, this.input = t, this.state = r;
      }
      with(...t) {
        if (this.state.matched)
          return this;
        let r = t[t.length - 1], n = [t[0]], i;
        t.length === 3 && typeof t[1] == "function" ? (n.push(t[0]), i = t[1]) : t.length > 2 && n.push(...t.slice(1, t.length - 1));
        let o = false, s = {}, a = (u, c) => {
          o = true, s[u] = c;
        }, l = !n.some((u) => Ie(u, this.input, a)) || i && !i(this.input) ? Pi : { matched: true, value: r(o ? tn in s ? s[tn] : s : this.input, this.input) };
        return new e(this.input, l);
      }
      when(t, r) {
        if (this.state.matched)
          return this;
        let n = !!t(this.input);
        return new e(this.input, n ? { matched: true, value: r(this.input, this.input) } : Pi);
      }
      otherwise(t) {
        return this.state.matched ? this.state.value : t(this.input);
      }
      exhaustive() {
        return this.run();
      }
      run() {
        if (this.state.matched)
          return this.state.value;
        let t;
        try {
          t = JSON.stringify(this.input);
        } catch {
          t = this.input;
        }
        throw new Error(`Pattern matching error: no pattern matches value ${t}`);
      }
      returnType() {
        return this;
      }
    };
    var Rs = require("util");
    var _s = F(vs());
    function rr(e) {
      return (0, _s.default)(e, e, { fallback: ue });
    }
    var uc = { warn: Re("prisma:warn") };
    var cc = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
    function nr(e, ...t) {
      cc.warn() && console.warn(`${uc.warn} ${e}`, ...t);
    }
    var pc = (0, Rs.promisify)(As.default.exec);
    var de = $("prisma:get-platform");
    var dc = ["1.0.x", "1.1.x", "3.0.x"];
    async function Ms() {
      let e = on.default.platform(), t = process.arch;
      if (e === "freebsd") {
        let s = await sn("freebsd-version");
        if (s && s.trim().length > 0) {
          let l = /^(\d+)\.?/.exec(s);
          if (l)
            return { platform: "freebsd", targetDistro: `freebsd${l[1]}`, arch: t };
        }
      }
      if (e !== "linux")
        return { platform: e, arch: t };
      let r = await fc(), n = await Pc(), i = yc({ arch: t, archFromUname: n, familyDistro: r.familyDistro }), { libssl: o } = await hc(i);
      return { platform: "linux", libssl: o, arch: t, archFromUname: n, ...r };
    }
    function mc(e) {
      let t = /^ID="?([^"\n]*)"?$/im, r = /^ID_LIKE="?([^"\n]*)"?$/im, n = t.exec(e), i = n && n[1] && n[1].toLowerCase() || "", o = r.exec(e), s = o && o[1] && o[1].toLowerCase() || "", a = St({ id: i, idLike: s }).with({ id: "alpine" }, ({ id: l }) => ({ targetDistro: "musl", familyDistro: l, originalDistro: l })).with({ id: "raspbian" }, ({ id: l }) => ({ targetDistro: "arm", familyDistro: "debian", originalDistro: l })).with({ id: "nixos" }, ({ id: l }) => ({ targetDistro: "nixos", originalDistro: l, familyDistro: "nixos" })).with({ id: "debian" }, { id: "ubuntu" }, ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).with({ id: "rhel" }, { id: "centos" }, { id: "fedora" }, ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).when(({ idLike: l }) => l.includes("debian") || l.includes("ubuntu"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "debian", originalDistro: l })).when(({ idLike: l }) => i === "arch" || l.includes("arch"), ({ id: l }) => ({ targetDistro: "debian", familyDistro: "arch", originalDistro: l })).when(({ idLike: l }) => l.includes("centos") || l.includes("fedora") || l.includes("rhel") || l.includes("suse"), ({ id: l }) => ({ targetDistro: "rhel", familyDistro: "rhel", originalDistro: l })).otherwise(({ id: l }) => ({ targetDistro: void 0, familyDistro: void 0, originalDistro: l }));
      return de(`Found distro info:
${JSON.stringify(a, null, 2)}`), a;
    }
    async function fc() {
      let e = "/etc/os-release";
      try {
        let t = await Ai.default.readFile(e, { encoding: "utf-8" });
        return mc(t);
      } catch {
        return { targetDistro: void 0, familyDistro: void 0, originalDistro: void 0 };
      }
    }
    function gc(e) {
      let t = /^OpenSSL\s(\d+\.\d+)\.\d+/.exec(e);
      if (t) {
        let r = `${t[1]}.x`;
        return Ss(r);
      }
    }
    function Ts(e) {
      let t = /libssl\.so\.(\d)(\.\d)?/.exec(e);
      if (t) {
        let r = `${t[1]}${t[2] ?? ".0"}.x`;
        return Ss(r);
      }
    }
    function Ss(e) {
      let t = (() => {
        if (ks(e))
          return e;
        let r = e.split(".");
        return r[1] = "0", r.join(".");
      })();
      if (dc.includes(t))
        return t;
    }
    function yc(e) {
      return St(e).with({ familyDistro: "musl" }, () => (de('Trying platform-specific paths for "alpine"'), ["/lib"])).with({ familyDistro: "debian" }, ({ archFromUname: t }) => (de('Trying platform-specific paths for "debian" (and "ubuntu")'), [`/usr/lib/${t}-linux-gnu`, `/lib/${t}-linux-gnu`])).with({ familyDistro: "rhel" }, () => (de('Trying platform-specific paths for "rhel"'), ["/lib64", "/usr/lib64"])).otherwise(({ familyDistro: t, arch: r, archFromUname: n }) => (de(`Don't know any platform-specific paths for "${t}" on ${r} (${n})`), []));
    }
    async function hc(e) {
      let t = 'grep -v "libssl.so.0"', r = await Cs(e);
      if (r) {
        de(`Found libssl.so file using platform-specific paths: ${r}`);
        let o = Ts(r);
        if (de(`The parsed libssl version is: ${o}`), o)
          return { libssl: o, strategy: "libssl-specific-path" };
      }
      de('Falling back to "ldconfig" and other generic paths');
      let n = await sn(`ldconfig -p | sed "s/.*=>s*//" | sed "s|.*/||" | grep libssl | sort | ${t}`);
      if (n || (n = await Cs(["/lib64", "/usr/lib64", "/lib"])), n) {
        de(`Found libssl.so file using "ldconfig" or other generic paths: ${n}`);
        let o = Ts(n);
        if (de(`The parsed libssl version is: ${o}`), o)
          return { libssl: o, strategy: "ldconfig" };
      }
      let i = await sn("openssl version -v");
      if (i) {
        de(`Found openssl binary with version: ${i}`);
        let o = gc(i);
        if (de(`The parsed openssl version is: ${o}`), o)
          return { libssl: o, strategy: "openssl-binary" };
      }
      return de("Couldn't find any version of libssl or OpenSSL in the system"), {};
    }
    async function Cs(e) {
      for (let t of e) {
        let r = await bc(t);
        if (r)
          return r;
      }
    }
    async function bc(e) {
      try {
        return (await Ai.default.readdir(e)).find((r) => r.startsWith("libssl.so.") && !r.startsWith("libssl.so.0"));
      } catch (t) {
        if (t.code === "ENOENT")
          return;
        throw t;
      }
    }
    async function ft() {
      let { binaryTarget: e } = await Is();
      return e;
    }
    function xc(e) {
      return e.binaryTarget !== void 0;
    }
    async function Ri() {
      let { memoized: e, ...t } = await Is();
      return t;
    }
    var nn = {};
    async function Is() {
      if (xc(nn))
        return Promise.resolve({ ...nn, memoized: true });
      let e = await Ms(), t = wc(e);
      return nn = { ...e, binaryTarget: t }, { ...nn, memoized: false };
    }
    function wc(e) {
      let { platform: t, arch: r, archFromUname: n, libssl: i, targetDistro: o, familyDistro: s, originalDistro: a } = e;
      t === "linux" && !["x64", "arm64"].includes(r) && nr(`Prisma only officially supports Linux on amd64 (x86_64) and arm64 (aarch64) system architectures. If you are using your own custom Prisma engines, you can ignore this warning, as long as you've compiled the engines for your system architecture "${n}".`);
      let l = "1.1.x";
      if (t === "linux" && i === void 0) {
        let c = St({ familyDistro: s }).with({ familyDistro: "debian" }, () => "Please manually install OpenSSL via `apt-get update -y && apt-get install -y openssl` and try installing Prisma again. If you're running Prisma on Docker, add this command to your Dockerfile, or switch to an image that already has OpenSSL installed.").otherwise(() => "Please manually install OpenSSL and try installing Prisma again.");
        nr(`Prisma failed to detect the libssl/openssl version to use, and may not work as expected. Defaulting to "openssl-${l}".
${c}`);
      }
      let u = "debian";
      if (t === "linux" && o === void 0 && nr(`Prisma doesn't know which engines to download for the Linux distro "${a}". Falling back to Prisma engines built "${u}".
Please report your experience by creating an issue at ${rr("https://github.com/prisma/prisma/issues")} so we can add your distro to the list of known supported distros.`), t === "darwin" && r === "arm64")
        return "darwin-arm64";
      if (t === "darwin")
        return "darwin";
      if (t === "win32")
        return "windows";
      if (t === "freebsd")
        return o;
      if (t === "openbsd")
        return "openbsd";
      if (t === "netbsd")
        return "netbsd";
      if (t === "linux" && o === "nixos")
        return "linux-nixos";
      if (t === "linux" && r === "arm64")
        return `${o === "musl" ? "linux-musl-arm64" : "linux-arm64"}-openssl-${i || l}`;
      if (t === "linux" && r === "arm")
        return `linux-arm-openssl-${i || l}`;
      if (t === "linux" && o === "musl") {
        let c = "linux-musl";
        return !i || ks(i) ? c : `${c}-openssl-${i}`;
      }
      return t === "linux" && o && i ? `${o}-openssl-${i}` : (t !== "linux" && nr(`Prisma detected unknown OS "${t}" and may not work as expected. Defaulting to "linux".`), i ? `${u}-openssl-${i}` : o ? `${o}-openssl-${l}` : `${u}-openssl-${l}`);
    }
    async function Ec(e) {
      try {
        return await e();
      } catch {
        return;
      }
    }
    function sn(e) {
      return Ec(async () => {
        let t = await pc(e);
        return de(`Command "${e}" successfully returned "${t.stdout}"`), t.stdout;
      });
    }
    async function Pc() {
      return typeof on.default.machine == "function" ? on.default.machine() : (await sn("uname -m"))?.trim();
    }
    function ks(e) {
      return e.startsWith("1.");
    }
    var Mi = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "linux-static-x64", "linux-static-arm64", "windows", "freebsd11", "freebsd12", "freebsd13", "openbsd", "netbsd", "arm"];
    var ki = F(Ds());
    var un = F(require("fs"));
    var Ft = F(require("path"));
    function Ns(e) {
      let t = e.ignoreProcessEnv ? {} : process.env, r = (n) => n.match(/(.?\${(?:[a-zA-Z0-9_]+)?})/g)?.reduce(function(o, s) {
        let a = /(.?)\${([a-zA-Z0-9_]+)?}/g.exec(s);
        if (!a)
          return o;
        let l = a[1], u, c;
        if (l === "\\")
          c = a[0], u = c.replace("\\$", "$");
        else {
          let p = a[2];
          c = a[0].substring(l.length), u = Object.hasOwnProperty.call(t, p) ? t[p] : e.parsed[p] || "", u = r(u);
        }
        return o.replace(c, u);
      }, n) ?? n;
      for (let n in e.parsed) {
        let i = Object.hasOwnProperty.call(t, n) ? t[n] : e.parsed[n];
        e.parsed[n] = r(i);
      }
      for (let n in e.parsed)
        t[n] = e.parsed[n];
      return e;
    }
    var Ii = $("prisma:tryLoadEnv");
    function ir({ rootEnvPath: e, schemaEnvPath: t }, r = { conflictCheck: "none" }) {
      let n = Ls(e);
      r.conflictCheck !== "none" && kc(n, t, r.conflictCheck);
      let i = null;
      return $s(n?.path, t) || (i = Ls(t)), !n && !i && Ii("No Environment variables loaded"), i?.dotenvResult.error ? console.error(ve(pe("Schema Env Error: ")) + i.dotenvResult.error) : { message: [n?.message, i?.message].filter(Boolean).join(`
`), parsed: { ...n?.dotenvResult?.parsed, ...i?.dotenvResult?.parsed } };
    }
    function kc(e, t, r) {
      let n = e?.dotenvResult.parsed, i = !$s(e?.path, t);
      if (n && t && i && un.default.existsSync(t)) {
        let o = ki.default.parse(un.default.readFileSync(t)), s = [];
        for (let a in o)
          n[a] === o[a] && s.push(a);
        if (s.length > 0) {
          let a = Ft.default.relative(process.cwd(), e.path), l = Ft.default.relative(process.cwd(), t);
          if (r === "error") {
            let u = `There is a conflict between env var${s.length > 1 ? "s" : ""} in ${ue(a)} and ${ue(l)}
Conflicting env vars:
${s.map((c) => `  ${pe(c)}`).join(`
`)}

We suggest to move the contents of ${ue(l)} to ${ue(a)} to consolidate your env vars.
`;
            throw new Error(u);
          } else if (r === "warn") {
            let u = `Conflict for env var${s.length > 1 ? "s" : ""} ${s.map((c) => pe(c)).join(", ")} in ${ue(a)} and ${ue(l)}
Env vars from ${ue(l)} overwrite the ones from ${ue(a)}
      `;
            console.warn(`${Re("warn(prisma)")} ${u}`);
          }
        }
      }
    }
    function Ls(e) {
      if (Fc(e)) {
        Ii(`Environment variables loaded from ${e}`);
        let t = ki.default.config({ path: e, debug: process.env.DOTENV_CONFIG_DEBUG ? true : void 0 });
        return { dotenvResult: Ns(t), message: We(`Environment variables loaded from ${Ft.default.relative(process.cwd(), e)}`), path: e };
      } else
        Ii(`Environment variables not found at ${e}`);
      return null;
    }
    function $s(e, t) {
      return e && t && Ft.default.resolve(e) === Ft.default.resolve(t);
    }
    function Fc(e) {
      return !!(e && un.default.existsSync(e));
    }
    var qs = "library";
    function gt(e) {
      let t = Oc();
      return t || (e?.config.engineType === "library" ? "library" : e?.config.engineType === "binary" ? "binary" : e?.config.engineType === "wasm" ? "wasm" : qs);
    }
    function Oc() {
      let e = process.env.PRISMA_CLIENT_ENGINE_TYPE;
      return e === "library" ? "library" : e === "binary" ? "binary" : e === "wasm" ? "wasm" : void 0;
    }
    var Lc = F(Fi());
    var j = F(require("path"));
    var $c = F(Fi());
    var xh = $("prisma:engines");
    function Qs() {
      return j.default.join(__dirname, "../");
    }
    var wh = "libquery-engine";
    j.default.join(__dirname, "../query-engine-darwin");
    j.default.join(__dirname, "../query-engine-darwin-arm64");
    j.default.join(__dirname, "../query-engine-debian-openssl-1.0.x");
    j.default.join(__dirname, "../query-engine-debian-openssl-1.1.x");
    j.default.join(__dirname, "../query-engine-debian-openssl-3.0.x");
    j.default.join(__dirname, "../query-engine-linux-static-x64");
    j.default.join(__dirname, "../query-engine-linux-static-arm64");
    j.default.join(__dirname, "../query-engine-rhel-openssl-1.0.x");
    j.default.join(__dirname, "../query-engine-rhel-openssl-1.1.x");
    j.default.join(__dirname, "../query-engine-rhel-openssl-3.0.x");
    j.default.join(__dirname, "../libquery_engine-darwin.dylib.node");
    j.default.join(__dirname, "../libquery_engine-darwin-arm64.dylib.node");
    j.default.join(__dirname, "../libquery_engine-debian-openssl-1.0.x.so.node");
    j.default.join(__dirname, "../libquery_engine-debian-openssl-1.1.x.so.node");
    j.default.join(__dirname, "../libquery_engine-debian-openssl-3.0.x.so.node");
    j.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.0.x.so.node");
    j.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-1.1.x.so.node");
    j.default.join(__dirname, "../libquery_engine-linux-arm64-openssl-3.0.x.so.node");
    j.default.join(__dirname, "../libquery_engine-linux-musl.so.node");
    j.default.join(__dirname, "../libquery_engine-linux-musl-openssl-3.0.x.so.node");
    j.default.join(__dirname, "../libquery_engine-rhel-openssl-1.0.x.so.node");
    j.default.join(__dirname, "../libquery_engine-rhel-openssl-1.1.x.so.node");
    j.default.join(__dirname, "../libquery_engine-rhel-openssl-3.0.x.so.node");
    j.default.join(__dirname, "../query_engine-windows.dll.node");
    var Oi = F(require("fs"));
    var Gs = $("chmodPlusX");
    function Di(e) {
      if (process.platform === "win32")
        return;
      let t = Oi.default.statSync(e), r = t.mode | 64 | 8 | 1;
      if (t.mode === r) {
        Gs(`Execution permissions of ${e} are fine`);
        return;
      }
      let n = r.toString(8).slice(-3);
      Gs(`Have to call chmodPlusX on ${e}`), Oi.default.chmodSync(e, n);
    }
    function Ni(e) {
      let t = e.e, r = (a) => `Prisma cannot find the required \`${a}\` system library in your system`, n = t.message.includes("cannot open shared object file"), i = `Please refer to the documentation about Prisma's system requirements: ${rr("https://pris.ly/d/system-requirements")}`, o = `Unable to require(\`${We(e.id)}\`).`, s = St({ message: t.message, code: t.code }).with({ code: "ENOENT" }, () => "File does not exist.").when(({ message: a }) => n && a.includes("libz"), () => `${r("libz")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libgcc_s"), () => `${r("libgcc_s")}. Please install it and try again.`).when(({ message: a }) => n && a.includes("libssl"), () => {
        let a = e.platformInfo.libssl ? `openssl-${e.platformInfo.libssl}` : "openssl";
        return `${r("libssl")}. Please install ${a} and try again.`;
      }).when(({ message: a }) => a.includes("GLIBC"), () => `Prisma has detected an incompatible version of the \`glibc\` C standard library installed in your system. This probably means your system may be too old to run Prisma. ${i}`).when(({ message: a }) => e.platformInfo.platform === "linux" && a.includes("symbol not found"), () => `The Prisma engines are not compatible with your system ${e.platformInfo.originalDistro} on (${e.platformInfo.archFromUname}) which uses the \`${e.platformInfo.binaryTarget}\` binaryTarget by default. ${i}`).otherwise(() => `The Prisma engines do not seem to be compatible with your system. ${i}`);
      return `${o}
${s}

Details: ${t.message}`;
    }
    var or = F(require("path"));
    function Li(e) {
      return or.default.sep === or.default.posix.sep ? e : e.split(or.default.sep).join(or.default.posix.sep);
    }
    var Hs = F($i());
    function ji(e) {
      return String(new qi(e));
    }
    var qi = class {
      constructor(t) {
        this.config = t;
      }
      toString() {
        let { config: t } = this, r = t.provider.fromEnvVar ? `env("${t.provider.fromEnvVar}")` : t.provider.value, n = JSON.parse(JSON.stringify({ provider: r, binaryTargets: qc(t.binaryTargets) }));
        return `generator ${t.name} {
${(0, Hs.default)(jc(n), 2)}
}`;
      }
    };
    function qc(e) {
      let t;
      if (e.length > 0) {
        let r = e.find((n) => n.fromEnvVar !== null);
        r ? t = `env("${r.fromEnvVar}")` : t = e.map((n) => n.native ? "native" : n.value);
      } else
        t = void 0;
      return t;
    }
    function jc(e) {
      let t = Object.keys(e).reduce((r, n) => Math.max(r, n.length), 0);
      return Object.entries(e).map(([r, n]) => `${r.padEnd(t)} = ${Vc(n)}`).join(`
`);
    }
    function Vc(e) {
      return JSON.parse(JSON.stringify(e, (t, r) => Array.isArray(r) ? `[${r.map((n) => JSON.stringify(n)).join(", ")}]` : JSON.stringify(r)));
    }
    var ar = {};
    Tt(ar, { error: () => Kc, info: () => Uc, log: () => Bc, query: () => Qc, should: () => Ws, tags: () => sr, warn: () => Vi });
    var sr = { error: ve("prisma:error"), warn: Re("prisma:warn"), info: ze("prisma:info"), query: Mt("prisma:query") };
    var Ws = { warn: () => !process.env.PRISMA_DISABLE_WARNINGS };
    function Bc(...e) {
      console.log(...e);
    }
    function Vi(e, ...t) {
      Ws.warn() && console.warn(`${sr.warn} ${e}`, ...t);
    }
    function Uc(e, ...t) {
      console.info(`${sr.info} ${e}`, ...t);
    }
    function Kc(e, ...t) {
      console.error(`${sr.error} ${e}`, ...t);
    }
    function Qc(e, ...t) {
      console.log(`${sr.query} ${e}`, ...t);
    }
    function pn(e, t) {
      if (!e)
        throw new Error(`${t}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`);
    }
    function yt(e, t) {
      throw new Error(t);
    }
    function Ui(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    var Ki = (e, t) => e.reduce((r, n) => (r[t(n)] = n, r), {});
    function Ot(e, t) {
      let r = {};
      for (let n of Object.keys(e))
        r[n] = t(e[n], n);
      return r;
    }
    function Qi(e, t) {
      if (e.length === 0)
        return;
      let r = e[0];
      for (let n = 1; n < e.length; n++)
        t(r, e[n]) < 0 && (r = e[n]);
      return r;
    }
    function v(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    var ea = /* @__PURE__ */ new Set();
    var lr = (e, t, ...r) => {
      ea.has(e) || (ea.add(e), Vi(t, ...r));
    };
    var H = class extends Error {
      constructor(r, { code: n, clientVersion: i, meta: o, batchRequestIdx: s }) {
        super(r);
        this.name = "PrismaClientKnownRequestError", this.code = n, this.clientVersion = i, this.meta = o, Object.defineProperty(this, "batchRequestIdx", { value: s, enumerable: false, writable: true });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    };
    v(H, "PrismaClientKnownRequestError");
    var Be = class extends H {
      constructor(t, r) {
        super(t, { code: "P2025", clientVersion: r }), this.name = "NotFoundError";
      }
    };
    v(Be, "NotFoundError");
    var k = class e extends Error {
      constructor(r, n, i) {
        super(r);
        this.name = "PrismaClientInitializationError", this.clientVersion = n, this.errorCode = i, Error.captureStackTrace(e);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    };
    v(k, "PrismaClientInitializationError");
    var be = class extends Error {
      constructor(r, n) {
        super(r);
        this.name = "PrismaClientRustPanicError", this.clientVersion = n;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    };
    v(be, "PrismaClientRustPanicError");
    var W = class extends Error {
      constructor(r, { clientVersion: n, batchRequestIdx: i }) {
        super(r);
        this.name = "PrismaClientUnknownRequestError", this.clientVersion = n, Object.defineProperty(this, "batchRequestIdx", { value: i, writable: true, enumerable: false });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    };
    v(W, "PrismaClientUnknownRequestError");
    var se = class extends Error {
      constructor(r, { clientVersion: n }) {
        super(r);
        this.name = "PrismaClientValidationError";
        this.clientVersion = n;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    };
    v(se, "PrismaClientValidationError");
    var Dt = class {
      constructor(t) {
        this._engine = t;
      }
      prometheus(t) {
        return this._engine.metrics({ format: "prometheus", ...t });
      }
      json(t) {
        return this._engine.metrics({ format: "json", ...t });
      }
    };
    function cr(e) {
      let t;
      return { get() {
        return t || (t = { value: e() }), t.value;
      } };
    }
    function ta(e, t) {
      let r = cr(() => Jc(t));
      Object.defineProperty(e, "dmmf", { get: () => r.get() });
    }
    function Jc(e) {
      return { datamodel: { models: Gi(e.models), enums: Gi(e.enums), types: Gi(e.types) } };
    }
    function Gi(e) {
      return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
    }
    var Hc = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
    var Ji = Hc;
    var Wc = ["JsonNullValueInput", "NullableJsonNullValueInput", "JsonNullValueFilter"];
    var mn = Symbol();
    var Hi = /* @__PURE__ */ new WeakMap();
    var ke = class {
      constructor(t) {
        t === mn ? Hi.set(this, `Prisma.${this._getName()}`) : Hi.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return Hi.get(this);
      }
    };
    var pr = class extends ke {
      _getNamespace() {
        return "NullTypes";
      }
    };
    var dr = class extends pr {
    };
    Wi(dr, "DbNull");
    var mr = class extends pr {
    };
    Wi(mr, "JsonNull");
    var fr = class extends pr {
    };
    Wi(fr, "AnyNull");
    var fn = { classes: { DbNull: dr, JsonNull: mr, AnyNull: fr }, instances: { DbNull: new dr(mn), JsonNull: new mr(mn), AnyNull: new fr(mn) } };
    function Wi(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    function gn(e) {
      return { ok: false, error: e, map() {
        return gn(e);
      }, flatMap() {
        return gn(e);
      } };
    }
    var zi = class {
      constructor() {
        this.registeredErrors = [];
      }
      consumeError(t) {
        return this.registeredErrors[t];
      }
      registerNewError(t) {
        let r = 0;
        for (; this.registeredErrors[r] !== void 0; )
          r++;
        return this.registeredErrors[r] = { error: t }, r;
      }
    };
    var Yi = (e) => {
      let t = new zi(), r = ht(t, e.startTransaction.bind(e));
      return { errorRegistry: t, queryRaw: ht(t, e.queryRaw.bind(e)), executeRaw: ht(t, e.executeRaw.bind(e)), provider: e.provider, startTransaction: async (...n) => (await r(...n)).map((o) => zc(t, o)) };
    };
    var zc = (e, t) => ({ provider: t.provider, options: t.options, queryRaw: ht(e, t.queryRaw.bind(t)), executeRaw: ht(e, t.executeRaw.bind(t)), commit: ht(e, t.commit.bind(t)), rollback: ht(e, t.rollback.bind(t)) });
    function ht(e, t) {
      return async (...r) => {
        try {
          return await t(...r);
        } catch (n) {
          let i = e.registerNewError(n);
          return gn({ kind: "GenericJs", id: i });
        }
      };
    }
    var Eu = require("async_hooks");
    var Pu = require("events");
    var vu = F(require("fs"));
    var Br = F(require("path"));
    var me = class e {
      constructor(t, r) {
        if (t.length - 1 !== r.length)
          throw t.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
        let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
        this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = t[0];
        let i = 0, o = 0;
        for (; i < r.length; ) {
          let s = r[i++], a = t[i];
          if (s instanceof e) {
            this.strings[o] += s.strings[0];
            let l = 0;
            for (; l < s.values.length; )
              this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
            this.strings[o] += a;
          } else
            this.values[o++] = s, this.strings[o] = a;
        }
      }
      get text() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; )
          n += `$${r}${this.strings[r++]}`;
        return n;
      }
      get sql() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; )
          n += `?${this.strings[r++]}`;
        return n;
      }
      get statement() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; )
          n += `:${r}${this.strings[r++]}`;
        return n;
      }
      inspect() {
        return { text: this.text, sql: this.sql, values: this.values };
      }
    };
    function ra(e, t = ",", r = "", n = "") {
      if (e.length === 0)
        throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      return new me([r, ...Array(e.length - 1).fill(t), n], e);
    }
    function Zi(e) {
      return new me([e], []);
    }
    var na = Zi("");
    function Xi(e, ...t) {
      return new me(e, t);
    }
    function gr(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(t) {
        return e[t];
      } };
    }
    function ce(e, t) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return t();
      } };
    }
    var Fe = class {
      constructor() {
        this._map = /* @__PURE__ */ new Map();
      }
      get(t) {
        return this._map.get(t)?.value;
      }
      set(t, r) {
        this._map.set(t, { value: r });
      }
      getOrCreate(t, r) {
        let n = this._map.get(t);
        if (n)
          return n.value;
        let i = r();
        return this.set(t, i), i;
      }
    };
    function bt(e) {
      let t = new Fe();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(r) {
        return t.getOrCreate(r, () => e.getPropertyValue(r));
      }, getPropertyDescriptor(r) {
        return e.getPropertyDescriptor?.(r);
      } };
    }
    var sa = require("util");
    var yn = { enumerable: true, configurable: true, writable: true };
    function hn(e) {
      let t = new Set(e);
      return { getOwnPropertyDescriptor: () => yn, has: (r, n) => t.has(n), set: (r, n, i) => t.add(n) && Reflect.set(r, n, i), ownKeys: () => [...t] };
    }
    var ia = Symbol.for("nodejs.util.inspect.custom");
    function Oe(e, t) {
      let r = Yc(t), n = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(o, s) {
        if (n.has(s))
          return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      }, has(o, s) {
        if (n.has(s))
          return true;
        let a = r.get(s);
        return a ? a.has?.(s) ?? true : Reflect.has(o, s);
      }, ownKeys(o) {
        let s = oa(Reflect.ownKeys(o), r), a = oa(Array.from(r.keys()), r);
        return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
      }, set(o, s, a) {
        return r.get(s)?.getPropertyDescriptor?.(s)?.writable === false ? false : (n.add(s), Reflect.set(o, s, a));
      }, getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable)
          return a;
        let l = r.get(s);
        return l ? l.getPropertyDescriptor ? { ...yn, ...l?.getPropertyDescriptor(s) } : yn : a;
      }, defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      } });
      return i[ia] = function(o, s, a = sa.inspect) {
        let l = { ...this };
        return delete l[ia], a(l, s);
      }, i;
    }
    function Yc(e) {
      let t = /* @__PURE__ */ new Map();
      for (let r of e) {
        let n = r.getKeys();
        for (let i of n)
          t.set(i, r);
      }
      return t;
    }
    function oa(e, t) {
      return e.filter((r) => t.get(r)?.has?.(r) ?? true);
    }
    function yr(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    var Nt = class {
      constructor(t = 0, r) {
        this.context = r;
        this.lines = [];
        this.currentLine = "";
        this.currentIndent = 0;
        this.currentIndent = t;
      }
      write(t) {
        return typeof t == "string" ? this.currentLine += t : t.write(this), this;
      }
      writeJoined(t, r) {
        let n = r.length - 1;
        for (let i = 0; i < r.length; i++)
          this.write(r[i]), i !== n && this.write(t);
        return this;
      }
      writeLine(t) {
        return this.write(t).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let t = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, t?.(), this;
      }
      withIndent(t) {
        return this.indent(), t(this), this.unindent(), this;
      }
      afterNextNewline(t) {
        return this.afterNextNewLineCallback = t, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(t) {
        return this.marginSymbol = t, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
      }
    };
    function Lt(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    function bn(e) {
      return e.toString() !== "Invalid Date";
    }
    var $t = 9e15;
    var nt = 1e9;
    var eo = "0123456789abcdef";
    var wn = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var En = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var to = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -$t, maxE: $t, crypto: false };
    var ca;
    var Ue;
    var _ = true;
    var vn = "[DecimalError] ";
    var rt = vn + "Invalid argument: ";
    var pa = vn + "Precision limit exceeded";
    var da = vn + "crypto unavailable";
    var ma = "[object Decimal]";
    var ae = Math.floor;
    var G = Math.pow;
    var Zc = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var Xc = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var ep = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var fa = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var Ce = 1e7;
    var P = 7;
    var tp = 9007199254740991;
    var rp = wn.length - 1;
    var ro = En.length - 1;
    var m = { toStringTag: ma };
    m.absoluteValue = m.abs = function() {
      var e = new this.constructor(this);
      return e.s < 0 && (e.s = 1), x(e);
    };
    m.ceil = function() {
      return x(new this.constructor(this), this.e + 1, 2);
    };
    m.clampedTo = m.clamp = function(e, t) {
      var r, n = this, i = n.constructor;
      if (e = new i(e), t = new i(t), !e.s || !t.s)
        return new i(NaN);
      if (e.gt(t))
        throw Error(rt + t);
      return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
    };
    m.comparedTo = m.cmp = function(e) {
      var t, r, n, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, l = o.s, u = e.s;
      if (!s || !a)
        return !l || !u ? NaN : l !== u ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1;
      if (!s[0] || !a[0])
        return s[0] ? l : a[0] ? -u : 0;
      if (l !== u)
        return l;
      if (o.e !== e.e)
        return o.e > e.e ^ l < 0 ? 1 : -1;
      for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t)
        if (s[t] !== a[t])
          return s[t] > a[t] ^ l < 0 ? 1 : -1;
      return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
    };
    m.cosine = m.cos = function() {
      var e, t, r = this, n = r.constructor;
      return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + P, n.rounding = 1, r = np(n, xa(n, r)), n.precision = e, n.rounding = t, x(Ue == 2 || Ue == 3 ? r.neg() : r, e, t, true)) : new n(1) : new n(NaN);
    };
    m.cubeRoot = m.cbrt = function() {
      var e, t, r, n, i, o, s, a, l, u, c = this, p = c.constructor;
      if (!c.isFinite() || c.isZero())
        return new p(c);
      for (_ = false, o = c.s * G(c.s * c, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = re(c.d), e = c.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = G(r, 1 / 3), e = ae((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new p(r), n.s = c.s) : n = new p(o.toString()), s = (e = p.precision) + 3; ; )
        if (a = n, l = a.times(a).times(a), u = l.plus(c), n = L(u.plus(c).times(a), u.plus(l), s + 2, 1), re(a.d).slice(0, s) === (r = re(n.d)).slice(0, s))
          if (r = r.slice(s - 3, s + 1), r == "9999" || !i && r == "4999") {
            if (!i && (x(a, e + 1, 0), a.times(a).times(a).eq(c))) {
              n = a;
              break;
            }
            s += 4, i = 1;
          } else {
            (!+r || !+r.slice(1) && r.charAt(0) == "5") && (x(n, e + 1, 1), t = !n.times(n).times(n).eq(c));
            break;
          }
      return _ = true, x(n, e, p.rounding, t);
    };
    m.decimalPlaces = m.dp = function() {
      var e, t = this.d, r = NaN;
      if (t) {
        if (e = t.length - 1, r = (e - ae(this.e / P)) * P, e = t[e], e)
          for (; e % 10 == 0; e /= 10)
            r--;
        r < 0 && (r = 0);
      }
      return r;
    };
    m.dividedBy = m.div = function(e) {
      return L(this, new this.constructor(e));
    };
    m.dividedToIntegerBy = m.divToInt = function(e) {
      var t = this, r = t.constructor;
      return x(L(t, new r(e), 0, 1, 1), r.precision, r.rounding);
    };
    m.equals = m.eq = function(e) {
      return this.cmp(e) === 0;
    };
    m.floor = function() {
      return x(new this.constructor(this), this.e + 1, 3);
    };
    m.greaterThan = m.gt = function(e) {
      return this.cmp(e) > 0;
    };
    m.greaterThanOrEqualTo = m.gte = function(e) {
      var t = this.cmp(e);
      return t == 1 || t === 0;
    };
    m.hyperbolicCosine = m.cosh = function() {
      var e, t, r, n, i, o = this, s = o.constructor, a = new s(1);
      if (!o.isFinite())
        return new s(o.s ? 1 / 0 : NaN);
      if (o.isZero())
        return a;
      r = s.precision, n = s.rounding, s.precision = r + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / Tn(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), o = qt(s, 1, o.times(t), new s(1), true);
      for (var l, u = e, c = new s(8); u--; )
        l = o.times(o), o = a.minus(l.times(c.minus(l.times(c))));
      return x(o, s.precision = r, s.rounding = n, true);
    };
    m.hyperbolicSine = m.sinh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      if (!i.isFinite() || i.isZero())
        return new o(i);
      if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3)
        i = qt(o, 2, i, i, true);
      else {
        e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / Tn(5, e)), i = qt(o, 2, i, i, true);
        for (var s, a = new o(5), l = new o(16), u = new o(20); e--; )
          s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(u))));
      }
      return o.precision = t, o.rounding = r, x(i, t, r, true);
    };
    m.hyperbolicTangent = m.tanh = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, L(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s);
    };
    m.inverseCosine = m.acos = function() {
      var e, t = this, r = t.constructor, n = t.abs().cmp(1), i = r.precision, o = r.rounding;
      return n !== -1 ? n === 0 ? t.isNeg() ? Te(r, i, o) : new r(0) : new r(NaN) : t.isZero() ? Te(r, i + 4, o).times(0.5) : (r.precision = i + 6, r.rounding = 1, t = t.asin(), e = Te(r, i + 4, o).times(0.5), r.precision = i, r.rounding = o, e.minus(t));
    };
    m.inverseHyperbolicCosine = m.acosh = function() {
      var e, t, r = this, n = r.constructor;
      return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, _ = false, r = r.times(r).minus(1).sqrt().plus(r), _ = true, n.precision = e, n.rounding = t, r.ln()) : new n(r);
    };
    m.inverseHyperbolicSine = m.asinh = function() {
      var e, t, r = this, n = r.constructor;
      return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, _ = false, r = r.times(r).plus(1).sqrt().plus(r), _ = true, n.precision = e, n.rounding = t, r.ln());
    };
    m.inverseHyperbolicTangent = m.atanh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? x(new o(i), e, t, true) : (o.precision = r = n - i.e, i = L(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(0.5))) : new o(NaN);
    };
    m.inverseSine = m.asin = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, t !== -1 ? t === 0 ? (e = Te(o, r + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2)));
    };
    m.inverseTangent = m.atan = function() {
      var e, t, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding;
      if (u.isFinite()) {
        if (u.isZero())
          return new c(u);
        if (u.abs().eq(1) && p + 4 <= ro)
          return s = Te(c, p + 4, d).times(0.25), s.s = u.s, s;
      } else {
        if (!u.s)
          return new c(NaN);
        if (p + 4 <= ro)
          return s = Te(c, p + 4, d).times(0.5), s.s = u.s, s;
      }
      for (c.precision = a = p + 10, c.rounding = 1, r = Math.min(28, a / P + 2 | 0), e = r; e; --e)
        u = u.div(u.times(u).plus(1).sqrt().plus(1));
      for (_ = false, t = Math.ceil(a / P), n = 1, l = u.times(u), s = new c(u), i = u; e !== -1; )
        if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[t] !== void 0)
          for (e = t; s.d[e] === o.d[e] && e--; )
            ;
      return r && (s = s.times(2 << r - 1)), _ = true, x(s, c.precision = p, c.rounding = d, true);
    };
    m.isFinite = function() {
      return !!this.d;
    };
    m.isInteger = m.isInt = function() {
      return !!this.d && ae(this.e / P) > this.d.length - 2;
    };
    m.isNaN = function() {
      return !this.s;
    };
    m.isNegative = m.isNeg = function() {
      return this.s < 0;
    };
    m.isPositive = m.isPos = function() {
      return this.s > 0;
    };
    m.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    m.lessThan = m.lt = function(e) {
      return this.cmp(e) < 0;
    };
    m.lessThanOrEqualTo = m.lte = function(e) {
      return this.cmp(e) < 1;
    };
    m.logarithm = m.log = function(e) {
      var t, r, n, i, o, s, a, l, u = this, c = u.constructor, p = c.precision, d = c.rounding, f = 5;
      if (e == null)
        e = new c(10), t = true;
      else {
        if (e = new c(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1))
          return new c(NaN);
        t = e.eq(10);
      }
      if (r = u.d, u.s < 0 || !r || !r[0] || u.eq(1))
        return new c(r && !r[0] ? -1 / 0 : u.s != 1 ? NaN : r ? 0 : 1 / 0);
      if (t)
        if (r.length > 1)
          o = true;
        else {
          for (i = r[0]; i % 10 === 0; )
            i /= 10;
          o = i !== 1;
        }
      if (_ = false, a = p + f, s = tt(u, a), n = t ? Pn(c, a + 10) : tt(e, a), l = L(s, n, a, 1), hr(l.d, i = p, d))
        do
          if (a += 10, s = tt(u, a), n = t ? Pn(c, a + 10) : tt(e, a), l = L(s, n, a, 1), !o) {
            +re(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = x(l, p + 1, 0));
            break;
          }
        while (hr(l.d, i += 10, d));
      return _ = true, x(l, p, d);
    };
    m.minus = m.sub = function(e) {
      var t, r, n, i, o, s, a, l, u, c, p, d, f = this, y = f.constructor;
      if (e = new y(e), !f.d || !e.d)
        return !f.s || !e.s ? e = new y(NaN) : f.d ? e.s = -e.s : e = new y(e.d || f.s !== e.s ? f : NaN), e;
      if (f.s != e.s)
        return e.s = -e.s, f.plus(e);
      if (u = f.d, d = e.d, a = y.precision, l = y.rounding, !u[0] || !d[0]) {
        if (d[0])
          e.s = -e.s;
        else if (u[0])
          e = new y(f);
        else
          return new y(l === 3 ? -0 : 0);
        return _ ? x(e, a, l) : e;
      }
      if (r = ae(e.e / P), c = ae(f.e / P), u = u.slice(), o = c - r, o) {
        for (p = o < 0, p ? (t = u, o = -o, s = d.length) : (t = d, r = c, s = u.length), n = Math.max(Math.ceil(a / P), s) + 2, o > n && (o = n, t.length = 1), t.reverse(), n = o; n--; )
          t.push(0);
        t.reverse();
      } else {
        for (n = u.length, s = d.length, p = n < s, p && (s = n), n = 0; n < s; n++)
          if (u[n] != d[n]) {
            p = u[n] < d[n];
            break;
          }
        o = 0;
      }
      for (p && (t = u, u = d, d = t, e.s = -e.s), s = u.length, n = d.length - s; n > 0; --n)
        u[s++] = 0;
      for (n = d.length; n > o; ) {
        if (u[--n] < d[n]) {
          for (i = n; i && u[--i] === 0; )
            u[i] = Ce - 1;
          --u[i], u[n] += Ce;
        }
        u[n] -= d[n];
      }
      for (; u[--s] === 0; )
        u.pop();
      for (; u[0] === 0; u.shift())
        --r;
      return u[0] ? (e.d = u, e.e = _n(u, r), _ ? x(e, a, l) : e) : new y(l === 3 ? -0 : 0);
    };
    m.modulo = m.mod = function(e) {
      var t, r = this, n = r.constructor;
      return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? x(new n(r), n.precision, n.rounding) : (_ = false, n.modulo == 9 ? (t = L(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = L(r, e, 0, n.modulo, 1), t = t.times(e), _ = true, r.minus(t));
    };
    m.naturalExponential = m.exp = function() {
      return no(this);
    };
    m.naturalLogarithm = m.ln = function() {
      return tt(this);
    };
    m.negated = m.neg = function() {
      var e = new this.constructor(this);
      return e.s = -e.s, x(e);
    };
    m.plus = m.add = function(e) {
      var t, r, n, i, o, s, a, l, u, c, p = this, d = p.constructor;
      if (e = new d(e), !p.d || !e.d)
        return !p.s || !e.s ? e = new d(NaN) : p.d || (e = new d(e.d || p.s === e.s ? p : NaN)), e;
      if (p.s != e.s)
        return e.s = -e.s, p.minus(e);
      if (u = p.d, c = e.d, a = d.precision, l = d.rounding, !u[0] || !c[0])
        return c[0] || (e = new d(p)), _ ? x(e, a, l) : e;
      if (o = ae(p.e / P), n = ae(e.e / P), u = u.slice(), i = o - n, i) {
        for (i < 0 ? (r = u, i = -i, s = c.length) : (r = c, n = o, s = u.length), o = Math.ceil(a / P), s = o > s ? o + 1 : s + 1, i > s && (i = s, r.length = 1), r.reverse(); i--; )
          r.push(0);
        r.reverse();
      }
      for (s = u.length, i = c.length, s - i < 0 && (i = s, r = c, c = u, u = r), t = 0; i; )
        t = (u[--i] = u[i] + c[i] + t) / Ce | 0, u[i] %= Ce;
      for (t && (u.unshift(t), ++n), s = u.length; u[--s] == 0; )
        u.pop();
      return e.d = u, e.e = _n(u, n), _ ? x(e, a, l) : e;
    };
    m.precision = m.sd = function(e) {
      var t, r = this;
      if (e !== void 0 && e !== !!e && e !== 1 && e !== 0)
        throw Error(rt + e);
      return r.d ? (t = ga(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
    };
    m.round = function() {
      var e = this, t = e.constructor;
      return x(new t(e), e.e + 1, t.rounding);
    };
    m.sine = m.sin = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + P, n.rounding = 1, r = op(n, xa(n, r)), n.precision = e, n.rounding = t, x(Ue > 2 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    m.squareRoot = m.sqrt = function() {
      var e, t, r, n, i, o, s = this, a = s.d, l = s.e, u = s.s, c = s.constructor;
      if (u !== 1 || !a || !a[0])
        return new c(!u || u < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
      for (_ = false, u = Math.sqrt(+s), u == 0 || u == 1 / 0 ? (t = re(a), (t.length + l) % 2 == 0 && (t += "0"), u = Math.sqrt(t), l = ae((l + 1) / 2) - (l < 0 || l % 2), u == 1 / 0 ? t = "5e" + l : (t = u.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + l), n = new c(t)) : n = new c(u.toString()), r = (l = c.precision) + 3; ; )
        if (o = n, n = o.plus(L(s, o, r + 2, 1)).times(0.5), re(o.d).slice(0, r) === (t = re(n.d)).slice(0, r))
          if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
            if (!i && (x(o, l + 1, 0), o.times(o).eq(s))) {
              n = o;
              break;
            }
            r += 4, i = 1;
          } else {
            (!+t || !+t.slice(1) && t.charAt(0) == "5") && (x(n, l + 1, 1), e = !n.times(n).eq(s));
            break;
          }
      return _ = true, x(n, l, c.rounding, e);
    };
    m.tangent = m.tan = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = L(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, x(Ue == 2 || Ue == 4 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    m.times = m.mul = function(e) {
      var t, r, n, i, o, s, a, l, u, c = this, p = c.constructor, d = c.d, f = (e = new p(e)).d;
      if (e.s *= c.s, !d || !d[0] || !f || !f[0])
        return new p(!e.s || d && !d[0] && !f || f && !f[0] && !d ? NaN : !d || !f ? e.s / 0 : e.s * 0);
      for (r = ae(c.e / P) + ae(e.e / P), l = d.length, u = f.length, l < u && (o = d, d = f, f = o, s = l, l = u, u = s), o = [], s = l + u, n = s; n--; )
        o.push(0);
      for (n = u; --n >= 0; ) {
        for (t = 0, i = l + n; i > n; )
          a = o[i] + f[n] * d[i - n - 1] + t, o[i--] = a % Ce | 0, t = a / Ce | 0;
        o[i] = (o[i] + t) % Ce | 0;
      }
      for (; !o[--s]; )
        o.pop();
      return t ? ++r : o.shift(), e.d = o, e.e = _n(o, r), _ ? x(e, p.precision, p.rounding) : e;
    };
    m.toBinary = function(e, t) {
      return oo(this, 2, e, t);
    };
    m.toDecimalPlaces = m.toDP = function(e, t) {
      var r = this, n = r.constructor;
      return r = new n(r), e === void 0 ? r : (fe(e, 0, nt), t === void 0 ? t = n.rounding : fe(t, 0, 8), x(r, e + r.e + 1, t));
    };
    m.toExponential = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = De(n, true) : (fe(e, 0, nt), t === void 0 ? t = i.rounding : fe(t, 0, 8), n = x(new i(n), e + 1, t), r = De(n, true, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    m.toFixed = function(e, t) {
      var r, n, i = this, o = i.constructor;
      return e === void 0 ? r = De(i) : (fe(e, 0, nt), t === void 0 ? t = o.rounding : fe(t, 0, 8), n = x(new o(i), e + i.e + 1, t), r = De(n, false, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
    };
    m.toFraction = function(e) {
      var t, r, n, i, o, s, a, l, u, c, p, d, f = this, y = f.d, g = f.constructor;
      if (!y)
        return new g(f);
      if (u = r = new g(1), n = l = new g(0), t = new g(n), o = t.e = ga(y) - f.e - 1, s = o % P, t.d[0] = G(10, s < 0 ? P + s : s), e == null)
        e = o > 0 ? t : u;
      else {
        if (a = new g(e), !a.isInt() || a.lt(u))
          throw Error(rt + a);
        e = a.gt(t) ? o > 0 ? t : u : a;
      }
      for (_ = false, a = new g(re(y)), c = g.precision, g.precision = o = y.length * P * 2; p = L(a, t, 0, 1, 1), i = r.plus(p.times(n)), i.cmp(e) != 1; )
        r = n, n = i, i = u, u = l.plus(p.times(i)), l = i, i = t, t = a.minus(p.times(i)), a = i;
      return i = L(e.minus(r), n, 0, 1, 1), l = l.plus(i.times(u)), r = r.plus(i.times(n)), l.s = u.s = f.s, d = L(u, n, o, 1).minus(f).abs().cmp(L(l, r, o, 1).minus(f).abs()) < 1 ? [u, n] : [l, r], g.precision = c, _ = true, d;
    };
    m.toHexadecimal = m.toHex = function(e, t) {
      return oo(this, 16, e, t);
    };
    m.toNearest = function(e, t) {
      var r = this, n = r.constructor;
      if (r = new n(r), e == null) {
        if (!r.d)
          return r;
        e = new n(1), t = n.rounding;
      } else {
        if (e = new n(e), t === void 0 ? t = n.rounding : fe(t, 0, 8), !r.d)
          return e.s ? r : e;
        if (!e.d)
          return e.s && (e.s = r.s), e;
      }
      return e.d[0] ? (_ = false, r = L(r, e, 0, t, 1).times(e), _ = true, x(r)) : (e.s = r.s, r = e), r;
    };
    m.toNumber = function() {
      return +this;
    };
    m.toOctal = function(e, t) {
      return oo(this, 8, e, t);
    };
    m.toPower = m.pow = function(e) {
      var t, r, n, i, o, s, a = this, l = a.constructor, u = +(e = new l(e));
      if (!a.d || !e.d || !a.d[0] || !e.d[0])
        return new l(G(+a, u));
      if (a = new l(a), a.eq(1))
        return a;
      if (n = l.precision, o = l.rounding, e.eq(1))
        return x(a, n, o);
      if (t = ae(e.e / P), t >= e.d.length - 1 && (r = u < 0 ? -u : u) <= tp)
        return i = ya(l, a, r, n), e.s < 0 ? new l(1).div(i) : x(i, n, o);
      if (s = a.s, s < 0) {
        if (t < e.d.length - 1)
          return new l(NaN);
        if (e.d[t] & 1 || (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1)
          return a.s = s, a;
      }
      return r = G(+a, u), t = r == 0 || !isFinite(r) ? ae(u * (Math.log("0." + re(a.d)) / Math.LN10 + a.e + 1)) : new l(r + "").e, t > l.maxE + 1 || t < l.minE - 1 ? new l(t > 0 ? s / 0 : 0) : (_ = false, l.rounding = a.s = 1, r = Math.min(12, (t + "").length), i = no(e.times(tt(a, n + r)), n), i.d && (i = x(i, n + 5, 1), hr(i.d, n, o) && (t = n + 10, i = x(no(e.times(tt(a, t + r)), t), t + 5, 1), +re(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = x(i, n + 1, 0)))), i.s = s, _ = true, l.rounding = o, x(i, n, o));
    };
    m.toPrecision = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = De(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (fe(e, 1, nt), t === void 0 ? t = i.rounding : fe(t, 0, 8), n = x(new i(n), e, t), r = De(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    m.toSignificantDigits = m.toSD = function(e, t) {
      var r = this, n = r.constructor;
      return e === void 0 ? (e = n.precision, t = n.rounding) : (fe(e, 1, nt), t === void 0 ? t = n.rounding : fe(t, 0, 8)), x(new n(r), e, t);
    };
    m.toString = function() {
      var e = this, t = e.constructor, r = De(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() && !e.isZero() ? "-" + r : r;
    };
    m.truncated = m.trunc = function() {
      return x(new this.constructor(this), this.e + 1, 1);
    };
    m.valueOf = m.toJSON = function() {
      var e = this, t = e.constructor, r = De(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() ? "-" + r : r;
    };
    function re(e) {
      var t, r, n, i = e.length - 1, o = "", s = e[0];
      if (i > 0) {
        for (o += s, t = 1; t < i; t++)
          n = e[t] + "", r = P - n.length, r && (o += et(r)), o += n;
        s = e[t], n = s + "", r = P - n.length, r && (o += et(r));
      } else if (s === 0)
        return "0";
      for (; s % 10 === 0; )
        s /= 10;
      return o + s;
    }
    function fe(e, t, r) {
      if (e !== ~~e || e < t || e > r)
        throw Error(rt + e);
    }
    function hr(e, t, r, n) {
      var i, o, s, a;
      for (o = e[0]; o >= 10; o /= 10)
        --t;
      return --t < 0 ? (t += P, i = 0) : (i = Math.ceil((t + 1) / P), t %= P), o = G(10, P - t), a = e[i] % o | 0, n == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 5e4 || a == 0) : s = (r < 4 && a + 1 == o || r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == G(10, t - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1e3 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999) : s = ((n || r < 4) && a + 1 == o || !n && r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == G(10, t - 3) - 1, s;
    }
    function xn(e, t, r) {
      for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
        for (o = i.length; o--; )
          i[o] *= t;
        for (i[0] += eo.indexOf(e.charAt(s++)), n = 0; n < i.length; n++)
          i[n] > r - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
      }
      return i.reverse();
    }
    function np(e, t) {
      var r, n, i;
      if (t.isZero())
        return t;
      n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / Tn(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = qt(e, 1, t.times(i), new e(1));
      for (var o = r; o--; ) {
        var s = t.times(t);
        t = s.times(s).minus(s).times(8).plus(1);
      }
      return e.precision -= r, t;
    }
    var L = function() {
      function e(n, i, o) {
        var s, a = 0, l = n.length;
        for (n = n.slice(); l--; )
          s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0;
        return a && n.unshift(a), n;
      }
      function t(n, i, o, s) {
        var a, l;
        if (o != s)
          l = o > s ? 1 : -1;
        else
          for (a = l = 0; a < o; a++)
            if (n[a] != i[a]) {
              l = n[a] > i[a] ? 1 : -1;
              break;
            }
        return l;
      }
      function r(n, i, o, s) {
        for (var a = 0; o--; )
          n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
        for (; !n[0] && n.length > 1; )
          n.shift();
      }
      return function(n, i, o, s, a, l) {
        var u, c, p, d, f, y, g, T, A, R, E, S, we, ee, ut, K, ne, je, ie, _t, Ur = n.constructor, ai = n.s == i.s ? 1 : -1, oe = n.d, N = i.d;
        if (!oe || !oe[0] || !N || !N[0])
          return new Ur(!n.s || !i.s || (oe ? N && oe[0] == N[0] : !N) ? NaN : oe && oe[0] == 0 || !N ? ai * 0 : ai / 0);
        for (l ? (f = 1, c = n.e - i.e) : (l = Ce, f = P, c = ae(n.e / f) - ae(i.e / f)), ie = N.length, ne = oe.length, A = new Ur(ai), R = A.d = [], p = 0; N[p] == (oe[p] || 0); p++)
          ;
        if (N[p] > (oe[p] || 0) && c--, o == null ? (ee = o = Ur.precision, s = Ur.rounding) : a ? ee = o + (n.e - i.e) + 1 : ee = o, ee < 0)
          R.push(1), y = true;
        else {
          if (ee = ee / f + 2 | 0, p = 0, ie == 1) {
            for (d = 0, N = N[0], ee++; (p < ne || d) && ee--; p++)
              ut = d * l + (oe[p] || 0), R[p] = ut / N | 0, d = ut % N | 0;
            y = d || p < ne;
          } else {
            for (d = l / (N[0] + 1) | 0, d > 1 && (N = e(N, d, l), oe = e(oe, d, l), ie = N.length, ne = oe.length), K = ie, E = oe.slice(0, ie), S = E.length; S < ie; )
              E[S++] = 0;
            _t = N.slice(), _t.unshift(0), je = N[0], N[1] >= l / 2 && ++je;
            do
              d = 0, u = t(N, E, ie, S), u < 0 ? (we = E[0], ie != S && (we = we * l + (E[1] || 0)), d = we / je | 0, d > 1 ? (d >= l && (d = l - 1), g = e(N, d, l), T = g.length, S = E.length, u = t(g, E, T, S), u == 1 && (d--, r(g, ie < T ? _t : N, T, l))) : (d == 0 && (u = d = 1), g = N.slice()), T = g.length, T < S && g.unshift(0), r(E, g, S, l), u == -1 && (S = E.length, u = t(N, E, ie, S), u < 1 && (d++, r(E, ie < S ? _t : N, S, l))), S = E.length) : u === 0 && (d++, E = [0]), R[p++] = d, u && E[0] ? E[S++] = oe[K] || 0 : (E = [oe[K]], S = 1);
            while ((K++ < ne || E[0] !== void 0) && ee--);
            y = E[0] !== void 0;
          }
          R[0] || R.shift();
        }
        if (f == 1)
          A.e = c, ca = y;
        else {
          for (p = 1, d = R[0]; d >= 10; d /= 10)
            p++;
          A.e = p + c * f - 1, x(A, a ? o + A.e + 1 : o, s, y);
        }
        return A;
      };
    }();
    function x(e, t, r, n) {
      var i, o, s, a, l, u, c, p, d, f = e.constructor;
      e:
        if (t != null) {
          if (p = e.d, !p)
            return e;
          for (i = 1, a = p[0]; a >= 10; a /= 10)
            i++;
          if (o = t - i, o < 0)
            o += P, s = t, c = p[d = 0], l = c / G(10, i - s - 1) % 10 | 0;
          else if (d = Math.ceil((o + 1) / P), a = p.length, d >= a)
            if (n) {
              for (; a++ <= d; )
                p.push(0);
              c = l = 0, i = 1, o %= P, s = o - P + 1;
            } else
              break e;
          else {
            for (c = a = p[d], i = 1; a >= 10; a /= 10)
              i++;
            o %= P, s = o - P + i, l = s < 0 ? 0 : c / G(10, i - s - 1) % 10 | 0;
          }
          if (n = n || t < 0 || p[d + 1] !== void 0 || (s < 0 ? c : c % G(10, i - s - 1)), u = r < 4 ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || n || r == 6 && (o > 0 ? s > 0 ? c / G(10, i - s) : 0 : p[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !p[0])
            return p.length = 0, u ? (t -= e.e + 1, p[0] = G(10, (P - t % P) % P), e.e = -t || 0) : p[0] = e.e = 0, e;
          if (o == 0 ? (p.length = d, a = 1, d--) : (p.length = d + 1, a = G(10, P - o), p[d] = s > 0 ? (c / G(10, i - s) % G(10, s) | 0) * a : 0), u)
            for (; ; )
              if (d == 0) {
                for (o = 1, s = p[0]; s >= 10; s /= 10)
                  o++;
                for (s = p[0] += a, a = 1; s >= 10; s /= 10)
                  a++;
                o != a && (e.e++, p[0] == Ce && (p[0] = 1));
                break;
              } else {
                if (p[d] += a, p[d] != Ce)
                  break;
                p[d--] = 0, a = 1;
              }
          for (o = p.length; p[--o] === 0; )
            p.pop();
        }
      return _ && (e.e > f.maxE ? (e.d = null, e.e = NaN) : e.e < f.minE && (e.e = 0, e.d = [0])), e;
    }
    function De(e, t, r) {
      if (!e.isFinite())
        return ba(e);
      var n, i = e.e, o = re(e.d), s = o.length;
      return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + et(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + et(-i - 1) + o, r && (n = r - s) > 0 && (o += et(n))) : i >= s ? (o += et(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + et(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += et(n))), o;
    }
    function _n(e, t) {
      var r = e[0];
      for (t *= P; r >= 10; r /= 10)
        t++;
      return t;
    }
    function Pn(e, t, r) {
      if (t > rp)
        throw _ = true, r && (e.precision = r), Error(pa);
      return x(new e(wn), t, 1, true);
    }
    function Te(e, t, r) {
      if (t > ro)
        throw Error(pa);
      return x(new e(En), t, r, true);
    }
    function ga(e) {
      var t = e.length - 1, r = t * P + 1;
      if (t = e[t], t) {
        for (; t % 10 == 0; t /= 10)
          r--;
        for (t = e[0]; t >= 10; t /= 10)
          r++;
      }
      return r;
    }
    function et(e) {
      for (var t = ""; e--; )
        t += "0";
      return t;
    }
    function ya(e, t, r, n) {
      var i, o = new e(1), s = Math.ceil(n / P + 4);
      for (_ = false; ; ) {
        if (r % 2 && (o = o.times(t), la(o.d, s) && (i = true)), r = ae(r / 2), r === 0) {
          r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r];
          break;
        }
        t = t.times(t), la(t.d, s);
      }
      return _ = true, o;
    }
    function aa(e) {
      return e.d[e.d.length - 1] & 1;
    }
    function ha(e, t, r) {
      for (var n, i = new e(t[0]), o = 0; ++o < t.length; )
        if (n = new e(t[o]), n.s)
          i[r](n) && (i = n);
        else {
          i = n;
          break;
        }
      return i;
    }
    function no(e, t) {
      var r, n, i, o, s, a, l, u = 0, c = 0, p = 0, d = e.constructor, f = d.rounding, y = d.precision;
      if (!e.d || !e.d[0] || e.e > 17)
        return new d(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
      for (t == null ? (_ = false, l = y) : l = t, a = new d(0.03125); e.e > -2; )
        e = e.times(a), p += 5;
      for (n = Math.log(G(2, p)) / Math.LN10 * 2 + 5 | 0, l += n, r = o = s = new d(1), d.precision = l; ; ) {
        if (o = x(o.times(e), l, 1), r = r.times(++c), a = s.plus(L(o, r, l, 1)), re(a.d).slice(0, l) === re(s.d).slice(0, l)) {
          for (i = p; i--; )
            s = x(s.times(s), l, 1);
          if (t == null)
            if (u < 3 && hr(s.d, l - n, f, u))
              d.precision = l += 10, r = o = a = new d(1), c = 0, u++;
            else
              return x(s, d.precision = y, f, _ = true);
          else
            return d.precision = y, s;
        }
        s = a;
      }
    }
    function tt(e, t) {
      var r, n, i, o, s, a, l, u, c, p, d, f = 1, y = 10, g = e, T = g.d, A = g.constructor, R = A.rounding, E = A.precision;
      if (g.s < 0 || !T || !T[0] || !g.e && T[0] == 1 && T.length == 1)
        return new A(T && !T[0] ? -1 / 0 : g.s != 1 ? NaN : T ? 0 : g);
      if (t == null ? (_ = false, c = E) : c = t, A.precision = c += y, r = re(T), n = r.charAt(0), Math.abs(o = g.e) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
          g = g.times(e), r = re(g.d), n = r.charAt(0), f++;
        o = g.e, n > 1 ? (g = new A("0." + r), o++) : g = new A(n + "." + r.slice(1));
      } else
        return u = Pn(A, c + 2, E).times(o + ""), g = tt(new A(n + "." + r.slice(1)), c - y).plus(u), A.precision = E, t == null ? x(g, E, R, _ = true) : g;
      for (p = g, l = s = g = L(g.minus(1), g.plus(1), c, 1), d = x(g.times(g), c, 1), i = 3; ; ) {
        if (s = x(s.times(d), c, 1), u = l.plus(L(s, new A(i), c, 1)), re(u.d).slice(0, c) === re(l.d).slice(0, c))
          if (l = l.times(2), o !== 0 && (l = l.plus(Pn(A, c + 2, E).times(o + ""))), l = L(l, new A(f), c, 1), t == null)
            if (hr(l.d, c - y, R, a))
              A.precision = c += y, u = s = g = L(p.minus(1), p.plus(1), c, 1), d = x(g.times(g), c, 1), i = a = 1;
            else
              return x(l, A.precision = E, R, _ = true);
          else
            return A.precision = E, l;
        l = u, i += 2;
      }
    }
    function ba(e) {
      return String(e.s * e.s / 0);
    }
    function io(e, t) {
      var r, n, i;
      for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; n++)
        ;
      for (i = t.length; t.charCodeAt(i - 1) === 48; --i)
        ;
      if (t = t.slice(n, i), t) {
        if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % P, r < 0 && (n += P), n < i) {
          for (n && e.d.push(+t.slice(0, n)), i -= P; n < i; )
            e.d.push(+t.slice(n, n += P));
          t = t.slice(n), n = P - t.length;
        } else
          n -= i;
        for (; n--; )
          t += "0";
        e.d.push(+t), _ && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
      } else
        e.e = 0, e.d = [0];
      return e;
    }
    function ip(e, t) {
      var r, n, i, o, s, a, l, u, c;
      if (t.indexOf("_") > -1) {
        if (t = t.replace(/(\d)_(?=\d)/g, "$1"), fa.test(t))
          return io(e, t);
      } else if (t === "Infinity" || t === "NaN")
        return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
      if (Xc.test(t))
        r = 16, t = t.toLowerCase();
      else if (Zc.test(t))
        r = 2;
      else if (ep.test(t))
        r = 8;
      else
        throw Error(rt + t);
      for (o = t.search(/p/i), o > 0 ? (l = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), s = o >= 0, n = e.constructor, s && (t = t.replace(".", ""), a = t.length, o = a - o, i = ya(n, new n(r), o, o * 2)), u = xn(t, r, Ce), c = u.length - 1, o = c; u[o] === 0; --o)
        u.pop();
      return o < 0 ? new n(e.s * 0) : (e.e = _n(u, c), e.d = u, _ = false, s && (e = L(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? G(2, l) : xt.pow(2, l))), _ = true, e);
    }
    function op(e, t) {
      var r, n = t.d.length;
      if (n < 3)
        return t.isZero() ? t : qt(e, 2, t, t);
      r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / Tn(5, r)), t = qt(e, 2, t, t);
      for (var i, o = new e(5), s = new e(16), a = new e(20); r--; )
        i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(a))));
      return t;
    }
    function qt(e, t, r, n, i) {
      var o, s, a, l, u = 1, c = e.precision, p = Math.ceil(c / P);
      for (_ = false, l = r.times(r), a = new e(n); ; ) {
        if (s = L(a.times(l), new e(t++ * t++), c, 1), a = i ? n.plus(s) : n.minus(s), n = L(s.times(l), new e(t++ * t++), c, 1), s = a.plus(n), s.d[p] !== void 0) {
          for (o = p; s.d[o] === a.d[o] && o--; )
            ;
          if (o == -1)
            break;
        }
        o = a, a = n, n = s, s = o, u++;
      }
      return _ = true, s.d.length = p + 1, s;
    }
    function Tn(e, t) {
      for (var r = e; --t; )
        r *= e;
      return r;
    }
    function xa(e, t) {
      var r, n = t.s < 0, i = Te(e, e.precision, 1), o = i.times(0.5);
      if (t = t.abs(), t.lte(o))
        return Ue = n ? 4 : 1, t;
      if (r = t.divToInt(i), r.isZero())
        Ue = n ? 3 : 2;
      else {
        if (t = t.minus(r.times(i)), t.lte(o))
          return Ue = aa(r) ? n ? 2 : 3 : n ? 4 : 1, t;
        Ue = aa(r) ? n ? 1 : 4 : n ? 3 : 2;
      }
      return t.minus(i).abs();
    }
    function oo(e, t, r, n) {
      var i, o, s, a, l, u, c, p, d, f = e.constructor, y = r !== void 0;
      if (y ? (fe(r, 1, nt), n === void 0 ? n = f.rounding : fe(n, 0, 8)) : (r = f.precision, n = f.rounding), !e.isFinite())
        c = ba(e);
      else {
        for (c = De(e), s = c.indexOf("."), y ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, s >= 0 && (c = c.replace(".", ""), d = new f(1), d.e = c.length - s, d.d = xn(De(d), 10, i), d.e = d.d.length), p = xn(c, 10, i), o = l = p.length; p[--l] == 0; )
          p.pop();
        if (!p[0])
          c = y ? "0p+0" : "0";
        else {
          if (s < 0 ? o-- : (e = new f(e), e.d = p, e.e = o, e = L(e, d, r, n, 0, i), p = e.d, o = e.e, u = ca), s = p[r], a = i / 2, u = u || p[r + 1] !== void 0, u = n < 4 ? (s !== void 0 || u) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || u || n === 6 && p[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), p.length = r, u)
            for (; ++p[--r] > i - 1; )
              p[r] = 0, r || (++o, p.unshift(1));
          for (l = p.length; !p[l - 1]; --l)
            ;
          for (s = 0, c = ""; s < l; s++)
            c += eo.charAt(p[s]);
          if (y) {
            if (l > 1)
              if (t == 16 || t == 8) {
                for (s = t == 16 ? 4 : 3, --l; l % s; l++)
                  c += "0";
                for (p = xn(c, i, t), l = p.length; !p[l - 1]; --l)
                  ;
                for (s = 1, c = "1."; s < l; s++)
                  c += eo.charAt(p[s]);
              } else
                c = c.charAt(0) + "." + c.slice(1);
            c = c + (o < 0 ? "p" : "p+") + o;
          } else if (o < 0) {
            for (; ++o; )
              c = "0" + c;
            c = "0." + c;
          } else if (++o > l)
            for (o -= l; o--; )
              c += "0";
          else
            o < l && (c = c.slice(0, o) + "." + c.slice(o));
        }
        c = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + c;
      }
      return e.s < 0 ? "-" + c : c;
    }
    function la(e, t) {
      if (e.length > t)
        return e.length = t, true;
    }
    function sp(e) {
      return new this(e).abs();
    }
    function ap(e) {
      return new this(e).acos();
    }
    function lp(e) {
      return new this(e).acosh();
    }
    function up(e, t) {
      return new this(e).plus(t);
    }
    function cp(e) {
      return new this(e).asin();
    }
    function pp(e) {
      return new this(e).asinh();
    }
    function dp(e) {
      return new this(e).atan();
    }
    function mp(e) {
      return new this(e).atanh();
    }
    function fp(e, t) {
      e = new this(e), t = new this(t);
      var r, n = this.precision, i = this.rounding, o = n + 4;
      return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = Te(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? Te(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = Te(this, o, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(L(e, t, o, 1)), t = Te(this, o, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(L(e, t, o, 1)), r;
    }
    function gp(e) {
      return new this(e).cbrt();
    }
    function yp(e) {
      return x(e = new this(e), e.e + 1, 2);
    }
    function hp(e, t, r) {
      return new this(e).clamp(t, r);
    }
    function bp(e) {
      if (!e || typeof e != "object")
        throw Error(vn + "Object expected");
      var t, r, n, i = e.defaults === true, o = ["precision", 1, nt, "rounding", 0, 8, "toExpNeg", -$t, 0, "toExpPos", 0, $t, "maxE", 0, $t, "minE", -$t, 0, "modulo", 0, 9];
      for (t = 0; t < o.length; t += 3)
        if (r = o[t], i && (this[r] = to[r]), (n = e[r]) !== void 0)
          if (ae(n) === n && n >= o[t + 1] && n <= o[t + 2])
            this[r] = n;
          else
            throw Error(rt + r + ": " + n);
      if (r = "crypto", i && (this[r] = to[r]), (n = e[r]) !== void 0)
        if (n === true || n === false || n === 0 || n === 1)
          if (n)
            if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes))
              this[r] = true;
            else
              throw Error(da);
          else
            this[r] = false;
        else
          throw Error(rt + r + ": " + n);
      return this;
    }
    function xp(e) {
      return new this(e).cos();
    }
    function wp(e) {
      return new this(e).cosh();
    }
    function wa(e) {
      var t, r, n;
      function i(o) {
        var s, a, l, u = this;
        if (!(u instanceof i))
          return new i(o);
        if (u.constructor = i, ua(o)) {
          u.s = o.s, _ ? !o.d || o.e > i.maxE ? (u.e = NaN, u.d = null) : o.e < i.minE ? (u.e = 0, u.d = [0]) : (u.e = o.e, u.d = o.d.slice()) : (u.e = o.e, u.d = o.d ? o.d.slice() : o.d);
          return;
        }
        if (l = typeof o, l === "number") {
          if (o === 0) {
            u.s = 1 / o < 0 ? -1 : 1, u.e = 0, u.d = [0];
            return;
          }
          if (o < 0 ? (o = -o, u.s = -1) : u.s = 1, o === ~~o && o < 1e7) {
            for (s = 0, a = o; a >= 10; a /= 10)
              s++;
            _ ? s > i.maxE ? (u.e = NaN, u.d = null) : s < i.minE ? (u.e = 0, u.d = [0]) : (u.e = s, u.d = [o]) : (u.e = s, u.d = [o]);
            return;
          } else if (o * 0 !== 0) {
            o || (u.s = NaN), u.e = NaN, u.d = null;
            return;
          }
          return io(u, o.toString());
        } else if (l !== "string")
          throw Error(rt + o);
        return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), u.s = -1) : (a === 43 && (o = o.slice(1)), u.s = 1), fa.test(o) ? io(u, o) : ip(u, o);
      }
      if (i.prototype = m, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = bp, i.clone = wa, i.isDecimal = ua, i.abs = sp, i.acos = ap, i.acosh = lp, i.add = up, i.asin = cp, i.asinh = pp, i.atan = dp, i.atanh = mp, i.atan2 = fp, i.cbrt = gp, i.ceil = yp, i.clamp = hp, i.cos = xp, i.cosh = wp, i.div = Ep, i.exp = Pp, i.floor = vp, i.hypot = _p, i.ln = Tp, i.log = Cp, i.log10 = Rp, i.log2 = Ap, i.max = Mp, i.min = Sp, i.mod = Ip, i.mul = kp, i.pow = Fp, i.random = Op, i.round = Dp, i.sign = Np, i.sin = Lp, i.sinh = $p, i.sqrt = qp, i.sub = jp, i.sum = Vp, i.tan = Bp, i.tanh = Up, i.trunc = Kp, e === void 0 && (e = {}), e && e.defaults !== true)
        for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < n.length; )
          e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
      return i.config(e), i;
    }
    function Ep(e, t) {
      return new this(e).div(t);
    }
    function Pp(e) {
      return new this(e).exp();
    }
    function vp(e) {
      return x(e = new this(e), e.e + 1, 3);
    }
    function _p() {
      var e, t, r = new this(0);
      for (_ = false, e = 0; e < arguments.length; )
        if (t = new this(arguments[e++]), t.d)
          r.d && (r = r.plus(t.times(t)));
        else {
          if (t.s)
            return _ = true, new this(1 / 0);
          r = t;
        }
      return _ = true, r.sqrt();
    }
    function ua(e) {
      return e instanceof xt || e && e.toStringTag === ma || false;
    }
    function Tp(e) {
      return new this(e).ln();
    }
    function Cp(e, t) {
      return new this(e).log(t);
    }
    function Ap(e) {
      return new this(e).log(2);
    }
    function Rp(e) {
      return new this(e).log(10);
    }
    function Mp() {
      return ha(this, arguments, "lt");
    }
    function Sp() {
      return ha(this, arguments, "gt");
    }
    function Ip(e, t) {
      return new this(e).mod(t);
    }
    function kp(e, t) {
      return new this(e).mul(t);
    }
    function Fp(e, t) {
      return new this(e).pow(t);
    }
    function Op(e) {
      var t, r, n, i, o = 0, s = new this(1), a = [];
      if (e === void 0 ? e = this.precision : fe(e, 1, nt), n = Math.ceil(e / P), this.crypto)
        if (crypto.getRandomValues)
          for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; )
            i = t[o], i >= 429e7 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
        else if (crypto.randomBytes) {
          for (t = crypto.randomBytes(n *= 4); o < n; )
            i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, o) : (a.push(i % 1e7), o += 4);
          o = n / 4;
        } else
          throw Error(da);
      else
        for (; o < n; )
          a[o++] = Math.random() * 1e7 | 0;
      for (n = a[--o], e %= P, n && e && (i = G(10, P - e), a[o] = (n / i | 0) * i); a[o] === 0; o--)
        a.pop();
      if (o < 0)
        r = 0, a = [0];
      else {
        for (r = -1; a[0] === 0; r -= P)
          a.shift();
        for (n = 1, i = a[0]; i >= 10; i /= 10)
          n++;
        n < P && (r -= P - n);
      }
      return s.e = r, s.d = a, s;
    }
    function Dp(e) {
      return x(e = new this(e), e.e + 1, this.rounding);
    }
    function Np(e) {
      return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
    }
    function Lp(e) {
      return new this(e).sin();
    }
    function $p(e) {
      return new this(e).sinh();
    }
    function qp(e) {
      return new this(e).sqrt();
    }
    function jp(e, t) {
      return new this(e).sub(t);
    }
    function Vp() {
      var e = 0, t = arguments, r = new this(t[e]);
      for (_ = false; r.s && ++e < t.length; )
        r = r.plus(t[e]);
      return _ = true, x(r, this.precision, this.rounding);
    }
    function Bp(e) {
      return new this(e).tan();
    }
    function Up(e) {
      return new this(e).tanh();
    }
    function Kp(e) {
      return x(e = new this(e), e.e + 1, 1);
    }
    m[Symbol.for("nodejs.util.inspect.custom")] = m.toString;
    m[Symbol.toStringTag] = "Decimal";
    var xt = m.constructor = wa(to);
    wn = new xt(wn);
    En = new xt(En);
    var Ne = xt;
    function jt(e) {
      return xt.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    var br = class {
      constructor(t, r, n, i, o) {
        this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
      }
      _toGraphQLInputType() {
        let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
        return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    };
    function Vt(e) {
      return e instanceof br;
    }
    var Cn = class {
      constructor(t) {
        this.value = t;
      }
      write(t) {
        t.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    };
    var An = (e) => e;
    var Rn = { bold: An, red: An, green: An, dim: An, enabled: false };
    var Ea = { bold: pe, red: ve, green: pt, dim: We, enabled: true };
    var Bt = { write(e) {
      e.writeLine(",");
    } };
    var Le = class {
      constructor(t) {
        this.contents = t;
        this.isUnderlined = false;
        this.color = (t2) => t2;
      }
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(t) {
        return this.color = t, this;
      }
      write(t) {
        let r = t.getCurrentLineLength();
        t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    };
    var it = class {
      constructor() {
        this.hasError = false;
      }
      markAsError() {
        return this.hasError = true, this;
      }
    };
    var Ut = class extends it {
      constructor() {
        super(...arguments);
        this.items = [];
      }
      addItem(r) {
        return this.items.push(new Cn(r)), this;
      }
      getField(r) {
        return this.items[r];
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((n) => n.value.getPrintWidth())) + 2;
      }
      write(r) {
        if (this.items.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithItems(r);
      }
      writeEmpty(r) {
        let n = new Le("[]");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithItems(r) {
        let { colors: n } = r.context;
        r.writeLine("[").withIndent(() => r.writeJoined(Bt, this.items).newLine()).write("]"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(n.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    var Pa = ": ";
    var Mn = class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.hasError = false;
      }
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + Pa.length;
      }
      write(t) {
        let r = new Le(this.name);
        this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(Pa).write(this.value);
      }
    };
    var z = class e extends it {
      constructor() {
        super(...arguments);
        this.fields = {};
        this.suggestions = [];
      }
      addField(r) {
        this.fields[r.name] = r;
      }
      addSuggestion(r) {
        this.suggestions.push(r);
      }
      getField(r) {
        return this.fields[r];
      }
      getDeepField(r) {
        let [n, ...i] = r, o = this.getField(n);
        if (!o)
          return;
        let s = o;
        for (let a of i) {
          let l;
          if (s.value instanceof e ? l = s.value.getField(a) : s.value instanceof Ut && (l = s.value.getField(Number(a))), !l)
            return;
          s = l;
        }
        return s;
      }
      getDeepFieldValue(r) {
        return r.length === 0 ? this : this.getDeepField(r)?.value;
      }
      hasField(r) {
        return !!this.getField(r);
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(r) {
        delete this.fields[r];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(r) {
        return this.getField(r)?.value;
      }
      getDeepSubSelectionValue(r) {
        let n = this;
        for (let i of r) {
          if (!(n instanceof e))
            return;
          let o = n.getSubSelectionValue(i);
          if (!o)
            return;
          n = o;
        }
        return n;
      }
      getDeepSelectionParent(r) {
        let n = this.getSelectionParent();
        if (!n)
          return;
        let i = n;
        for (let o of r) {
          let s = i.value.getFieldValue(o);
          if (!s || !(s instanceof e))
            return;
          let a = s.getSelectionParent();
          if (!a)
            return;
          i = a;
        }
        return i;
      }
      getSelectionParent() {
        let r = this.getField("select");
        if (r?.value instanceof e)
          return { kind: "select", value: r.value };
        let n = this.getField("include");
        if (n?.value instanceof e)
          return { kind: "include", value: n.value };
      }
      getSubSelectionValue(r) {
        return this.getSelectionParent()?.value.fields[r].value;
      }
      getPrintWidth() {
        let r = Object.values(this.fields);
        return r.length == 0 ? 2 : Math.max(...r.map((i) => i.getPrintWidth())) + 2;
      }
      write(r) {
        let n = Object.values(this.fields);
        if (n.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(r);
          return;
        }
        this.writeWithContents(r, n);
      }
      writeEmpty(r) {
        let n = new Le("{}");
        this.hasError && n.setColor(r.context.colors.red).underline(), r.write(n);
      }
      writeWithContents(r, n) {
        r.writeLine("{").withIndent(() => {
          r.writeJoined(Bt, [...n, ...this.suggestions]).newLine();
        }), r.write("}"), this.hasError && r.afterNextNewline(() => {
          r.writeLine(r.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    var Y = class extends it {
      constructor(r) {
        super();
        this.text = r;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(r) {
        let n = new Le(this.text);
        this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
      }
    };
    var so = class {
      constructor(t) {
        this.errorMessages = [];
        this.arguments = t;
      }
      write(t) {
        t.write(this.arguments);
      }
      addErrorMessage(t) {
        this.errorMessages.push(t);
      }
      renderAllMessages(t) {
        return this.errorMessages.map((r) => r(t)).join(`
`);
      }
    };
    function Sn(e) {
      return new so(va(e));
    }
    function va(e) {
      let t = new z();
      for (let [r, n] of Object.entries(e)) {
        let i = new Mn(r, _a(n));
        t.addField(i);
      }
      return t;
    }
    function _a(e) {
      if (typeof e == "string")
        return new Y(JSON.stringify(e));
      if (typeof e == "number" || typeof e == "boolean")
        return new Y(String(e));
      if (typeof e == "bigint")
        return new Y(`${e}n`);
      if (e === null)
        return new Y("null");
      if (e === void 0)
        return new Y("undefined");
      if (jt(e))
        return new Y(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array)
        return Buffer.isBuffer(e) ? new Y(`Buffer.alloc(${e.byteLength})`) : new Y(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date) {
        let t = bn(e) ? e.toISOString() : "Invalid Date";
        return new Y(`new Date("${t}")`);
      }
      return e instanceof ke ? new Y(`Prisma.${e._getName()}`) : Vt(e) ? new Y(`prisma.${Zo(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? Gp(e) : typeof e == "object" ? va(e) : new Y(Object.prototype.toString.call(e));
    }
    function Gp(e) {
      let t = new Ut();
      for (let r of e)
        t.addItem(_a(r));
      return t;
    }
    function Ta(e) {
      if (e === void 0)
        return "";
      let t = Sn(e);
      return new Nt(0, { colors: Rn }).write(t).toString();
    }
    var xr = "<unknown>";
    function Ca(e) {
      var t = e.split(`
`);
      return t.reduce(function(r, n) {
        var i = Wp(n) || Yp(n) || ed(n) || id(n) || rd(n);
        return i && r.push(i), r;
      }, []);
    }
    var Jp = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
    var Hp = /\((\S*)(?::(\d+))(?::(\d+))\)/;
    function Wp(e) {
      var t = Jp.exec(e);
      if (!t)
        return null;
      var r = t[2] && t[2].indexOf("native") === 0, n = t[2] && t[2].indexOf("eval") === 0, i = Hp.exec(t[2]);
      return n && i != null && (t[2] = i[1], t[3] = i[2], t[4] = i[3]), { file: r ? null : t[2], methodName: t[1] || xr, arguments: r ? [t[2]] : [], lineNumber: t[3] ? +t[3] : null, column: t[4] ? +t[4] : null };
    }
    var zp = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function Yp(e) {
      var t = zp.exec(e);
      return t ? { file: t[2], methodName: t[1] || xr, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
    }
    var Zp = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
    var Xp = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
    function ed(e) {
      var t = Zp.exec(e);
      if (!t)
        return null;
      var r = t[3] && t[3].indexOf(" > eval") > -1, n = Xp.exec(t[3]);
      return r && n != null && (t[3] = n[1], t[4] = n[2], t[5] = null), { file: t[3], methodName: t[1] || xr, arguments: t[2] ? t[2].split(",") : [], lineNumber: t[4] ? +t[4] : null, column: t[5] ? +t[5] : null };
    }
    var td = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
    function rd(e) {
      var t = td.exec(e);
      return t ? { file: t[3], methodName: t[1] || xr, arguments: [], lineNumber: +t[4], column: t[5] ? +t[5] : null } : null;
    }
    var nd = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    function id(e) {
      var t = nd.exec(e);
      return t ? { file: t[2], methodName: t[1] || xr, arguments: [], lineNumber: +t[3], column: t[4] ? +t[4] : null } : null;
    }
    var ao = class {
      getLocation() {
        return null;
      }
    };
    var lo = class {
      constructor() {
        this._error = new Error();
      }
      getLocation() {
        let t = this._error.stack;
        if (!t)
          return null;
        let n = Ca(t).find((i) => {
          if (!i.file)
            return false;
          let o = Li(i.file);
          return o !== "<anonymous>" && !o.includes("@prisma") && !o.includes("/packages/client/src/runtime/") && !o.endsWith("/runtime/binary.js") && !o.endsWith("/runtime/library.js") && !o.endsWith("/runtime/edge.js") && !o.endsWith("/runtime/edge-esm.js") && !o.startsWith("internal/") && !i.methodName.includes("new ") && !i.methodName.includes("getCallSite") && !i.methodName.includes("Proxy.") && i.methodName.split(".").length < 4;
        });
        return !n || !n.file ? null : { fileName: n.file, lineNumber: n.lineNumber, columnNumber: n.column };
      }
    };
    function ot(e) {
      return e === "minimal" ? new ao() : new lo();
    }
    var Aa = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function Kt(e = {}) {
      let t = sd(e);
      return Object.entries(t).reduce((n, [i, o]) => (Aa[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    function sd(e = {}) {
      return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
    }
    function In(e = {}) {
      return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
    }
    function Ra(e, t) {
      let r = In(e);
      return t({ action: "aggregate", unpacker: r, argsMapper: Kt })(e);
    }
    function ad(e = {}) {
      let { select: t, ...r } = e;
      return typeof t == "object" ? Kt({ ...r, _count: t }) : Kt({ ...r, _count: { _all: true } });
    }
    function ld(e = {}) {
      return typeof e.select == "object" ? (t) => In(e)(t)._count : (t) => In(e)(t)._count._all;
    }
    function Ma(e, t) {
      return t({ action: "count", unpacker: ld(e), argsMapper: ad })(e);
    }
    function ud(e = {}) {
      let t = Kt(e);
      if (Array.isArray(t.by))
        for (let r of t.by)
          typeof r == "string" && (t.select[r] = true);
      else
        typeof t.by == "string" && (t.select[t.by] = true);
      return t;
    }
    function cd(e = {}) {
      return (t) => (typeof e?._count == "boolean" && t.forEach((r) => {
        r._count = r._count._all;
      }), t);
    }
    function Sa(e, t) {
      return t({ action: "groupBy", unpacker: cd(e), argsMapper: ud })(e);
    }
    function Ia(e, t, r) {
      if (t === "aggregate")
        return (n) => Ra(n, r);
      if (t === "count")
        return (n) => Ma(n, r);
      if (t === "groupBy")
        return (n) => Sa(n, r);
    }
    function ka(e, t) {
      let r = t.fields.filter((i) => !i.relationName), n = Ki(r, (i) => i.name);
      return new Proxy({}, { get(i, o) {
        if (o in i || typeof o == "symbol")
          return i[o];
        let s = n[o];
        if (s)
          return new br(e, o, s.type, s.isList, s.kind === "enum");
      }, ...hn(Object.keys(n)) });
    }
    var Fa = (e) => Array.isArray(e) ? e : e.split(".");
    var uo = (e, t) => Fa(t).reduce((r, n) => r && r[n], e);
    var Oa = (e, t, r) => Fa(t).reduceRight((n, i, o, s) => Object.assign({}, uo(e, s.slice(0, o)), { [i]: n }), r);
    function pd(e, t) {
      return e === void 0 || t === void 0 ? [] : [...t, "select", e];
    }
    function dd(e, t, r) {
      return t === void 0 ? e ?? {} : Oa(t, r, e || true);
    }
    function co(e, t, r, n, i, o) {
      let a = e._runtimeDataModel.models[t].fields.reduce((l, u) => ({ ...l, [u.name]: u }), {});
      return (l) => {
        let u = ot(e._errorFormat), c = pd(n, i), p = dd(l, o, c), d = r({ dataPath: c, callsite: u })(p), f = md(e, t);
        return new Proxy(d, { get(y, g) {
          if (!f.includes(g))
            return y[g];
          let A = [a[g].type, r, g], R = [c, p];
          return co(e, ...A, ...R);
        }, ...hn([...f, ...Object.getOwnPropertyNames(d)]) });
      };
    }
    function md(e, t) {
      return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
    }
    var ja = F($i());
    var qa = F(require("fs"));
    var Da = { keyword: ze, entity: ze, value: (e) => pe(Mt(e)), punctuation: Mt, directive: ze, function: ze, variable: (e) => pe(Mt(e)), string: (e) => pe(pt(e)), boolean: Re, number: ze, comment: Yr };
    var fd = (e) => e;
    var kn = {};
    var gd = 0;
    var C = { manual: kn.Prism && kn.Prism.manual, disableWorkerMessageHandler: kn.Prism && kn.Prism.disableWorkerMessageHandler, util: { encode: function(e) {
      if (e instanceof Ae) {
        let t = e;
        return new Ae(t.type, C.util.encode(t.content), t.alias);
      } else
        return Array.isArray(e) ? e.map(C.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
    }, type: function(e) {
      return Object.prototype.toString.call(e).slice(8, -1);
    }, objId: function(e) {
      return e.__id || Object.defineProperty(e, "__id", { value: ++gd }), e.__id;
    }, clone: function e(t, r) {
      let n, i, o = C.util.type(t);
      switch (r = r || {}, o) {
        case "Object":
          if (i = C.util.objId(t), r[i])
            return r[i];
          n = {}, r[i] = n;
          for (let s in t)
            t.hasOwnProperty(s) && (n[s] = e(t[s], r));
          return n;
        case "Array":
          return i = C.util.objId(t), r[i] ? r[i] : (n = [], r[i] = n, t.forEach(function(s, a) {
            n[a] = e(s, r);
          }), n);
        default:
          return t;
      }
    } }, languages: { extend: function(e, t) {
      let r = C.util.clone(C.languages[e]);
      for (let n in t)
        r[n] = t[n];
      return r;
    }, insertBefore: function(e, t, r, n) {
      n = n || C.languages;
      let i = n[e], o = {};
      for (let a in i)
        if (i.hasOwnProperty(a)) {
          if (a == t)
            for (let l in r)
              r.hasOwnProperty(l) && (o[l] = r[l]);
          r.hasOwnProperty(a) || (o[a] = i[a]);
        }
      let s = n[e];
      return n[e] = o, C.languages.DFS(C.languages, function(a, l) {
        l === s && a != e && (this[a] = o);
      }), o;
    }, DFS: function e(t, r, n, i) {
      i = i || {};
      let o = C.util.objId;
      for (let s in t)
        if (t.hasOwnProperty(s)) {
          r.call(t, s, t[s], n || s);
          let a = t[s], l = C.util.type(a);
          l === "Object" && !i[o(a)] ? (i[o(a)] = true, e(a, r, null, i)) : l === "Array" && !i[o(a)] && (i[o(a)] = true, e(a, r, s, i));
        }
    } }, plugins: {}, highlight: function(e, t, r) {
      let n = { code: e, grammar: t, language: r };
      return C.hooks.run("before-tokenize", n), n.tokens = C.tokenize(n.code, n.grammar), C.hooks.run("after-tokenize", n), Ae.stringify(C.util.encode(n.tokens), n.language);
    }, matchGrammar: function(e, t, r, n, i, o, s) {
      for (let g in r) {
        if (!r.hasOwnProperty(g) || !r[g])
          continue;
        if (g == s)
          return;
        let T = r[g];
        T = C.util.type(T) === "Array" ? T : [T];
        for (let A = 0; A < T.length; ++A) {
          let R = T[A], E = R.inside, S = !!R.lookbehind, we = !!R.greedy, ee = 0, ut = R.alias;
          if (we && !R.pattern.global) {
            let K = R.pattern.toString().match(/[imuy]*$/)[0];
            R.pattern = RegExp(R.pattern.source, K + "g");
          }
          R = R.pattern || R;
          for (let K = n, ne = i; K < t.length; ne += t[K].length, ++K) {
            let je = t[K];
            if (t.length > e.length)
              return;
            if (je instanceof Ae)
              continue;
            if (we && K != t.length - 1) {
              R.lastIndex = ne;
              var p = R.exec(e);
              if (!p)
                break;
              var c = p.index + (S ? p[1].length : 0), d = p.index + p[0].length, a = K, l = ne;
              for (let N = t.length; a < N && (l < d || !t[a].type && !t[a - 1].greedy); ++a)
                l += t[a].length, c >= l && (++K, ne = l);
              if (t[K] instanceof Ae)
                continue;
              u = a - K, je = e.slice(ne, l), p.index -= ne;
            } else {
              R.lastIndex = 0;
              var p = R.exec(je), u = 1;
            }
            if (!p) {
              if (o)
                break;
              continue;
            }
            S && (ee = p[1] ? p[1].length : 0);
            var c = p.index + ee, p = p[0].slice(ee), d = c + p.length, f = je.slice(0, c), y = je.slice(d);
            let ie = [K, u];
            f && (++K, ne += f.length, ie.push(f));
            let _t = new Ae(g, E ? C.tokenize(p, E) : p, ut, p, we);
            if (ie.push(_t), y && ie.push(y), Array.prototype.splice.apply(t, ie), u != 1 && C.matchGrammar(e, t, r, K, ne, true, g), o)
              break;
          }
        }
      }
    }, tokenize: function(e, t) {
      let r = [e], n = t.rest;
      if (n) {
        for (let i in n)
          t[i] = n[i];
        delete t.rest;
      }
      return C.matchGrammar(e, r, t, 0, 0, false), r;
    }, hooks: { all: {}, add: function(e, t) {
      let r = C.hooks.all;
      r[e] = r[e] || [], r[e].push(t);
    }, run: function(e, t) {
      let r = C.hooks.all[e];
      if (!(!r || !r.length))
        for (var n = 0, i; i = r[n++]; )
          i(t);
    } }, Token: Ae };
    C.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: true }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: true, greedy: true }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: true }, "class-name": { pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i, lookbehind: true, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/, punctuation: /[{}[\];(),.:]/ };
    C.languages.javascript = C.languages.extend("clike", { "class-name": [C.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: true }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: true }, { pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: true }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/ });
    C.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
    C.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/, lookbehind: true, greedy: true }, "function-variable": { pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: true, inside: C.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: C.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: true, inside: C.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: true, inside: C.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ });
    C.languages.markup && C.languages.markup.tag.addInlined("script", "javascript");
    C.languages.js = C.languages.javascript;
    C.languages.typescript = C.languages.extend("javascript", { keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/, builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/ });
    C.languages.ts = C.languages.typescript;
    function Ae(e, t, r, n, i) {
      this.type = e, this.content = t, this.alias = r, this.length = (n || "").length | 0, this.greedy = !!i;
    }
    Ae.stringify = function(e, t) {
      return typeof e == "string" ? e : Array.isArray(e) ? e.map(function(r) {
        return Ae.stringify(r, t);
      }).join("") : yd(e.type)(e.content);
    };
    function yd(e) {
      return Da[e] || fd;
    }
    function Na(e) {
      return hd(e, C.languages.javascript);
    }
    function hd(e, t) {
      return C.tokenize(e, t).map((n) => Ae.stringify(n)).join("");
    }
    var La = F(Us());
    function $a(e) {
      return (0, La.default)(e);
    }
    var Fn = class e {
      static read(t) {
        let r;
        try {
          r = qa.default.readFileSync(t, "utf-8");
        } catch {
          return null;
        }
        return e.fromContent(r);
      }
      static fromContent(t) {
        let r = t.split(/\r?\n/);
        return new e(1, r);
      }
      constructor(t, r) {
        this.firstLineNumber = t, this.lines = r;
      }
      get lastLineNumber() {
        return this.firstLineNumber + this.lines.length - 1;
      }
      mapLineAt(t, r) {
        if (t < this.firstLineNumber || t > this.lines.length + this.firstLineNumber)
          return this;
        let n = t - this.firstLineNumber, i = [...this.lines];
        return i[n] = r(i[n]), new e(this.firstLineNumber, i);
      }
      mapLines(t) {
        return new e(this.firstLineNumber, this.lines.map((r, n) => t(r, this.firstLineNumber + n)));
      }
      lineAt(t) {
        return this.lines[t - this.firstLineNumber];
      }
      prependSymbolAt(t, r) {
        return this.mapLines((n, i) => i === t ? `${r} ${n}` : `  ${n}`);
      }
      slice(t, r) {
        let n = this.lines.slice(t - 1, r).join(`
`);
        return new e(t, $a(n).split(`
`));
      }
      highlight() {
        let t = Na(this.toString());
        return new e(this.firstLineNumber, t.split(`
`));
      }
      toString() {
        return this.lines.join(`
`);
      }
    };
    var bd = { red: ve, gray: Yr, dim: We, bold: pe, underline: ue, highlightSource: (e) => e.highlight() };
    var xd = { red: (e) => e, gray: (e) => e, dim: (e) => e, bold: (e) => e, underline: (e) => e, highlightSource: (e) => e };
    function wd({ callsite: e, message: t, originalMethod: r, isPanic: n, callArguments: i }, o) {
      let s = { functionName: `prisma.${r}()`, message: t, isPanic: n ?? false, callArguments: i };
      if (!e || typeof window < "u" || process.env.NODE_ENV === "production")
        return s;
      let a = e.getLocation();
      if (!a || !a.lineNumber || !a.columnNumber)
        return s;
      let l = Math.max(1, a.lineNumber - 3), u = Fn.read(a.fileName)?.slice(l, a.lineNumber), c = u?.lineAt(a.lineNumber);
      if (u && c) {
        let p = Pd(c), d = Ed(c);
        if (!d)
          return s;
        s.functionName = `${d.code})`, s.location = a, n || (u = u.mapLineAt(a.lineNumber, (y) => y.slice(0, d.openingBraceIndex))), u = o.highlightSource(u);
        let f = String(u.lastLineNumber).length;
        if (s.contextLines = u.mapLines((y, g) => o.gray(String(g).padStart(f)) + " " + y).mapLines((y) => o.dim(y)).prependSymbolAt(a.lineNumber, o.bold(o.red("\u2192"))), i) {
          let y = p + f + 1;
          y += 2, s.callArguments = (0, ja.default)(i, y).slice(y);
        }
      }
      return s;
    }
    function Ed(e) {
      let t = Object.keys(Ee.ModelAction).join("|"), n = new RegExp(String.raw`\.(${t})\(`).exec(e);
      if (n) {
        let i = n.index + n[0].length, o = e.lastIndexOf(" ", n.index) + 1;
        return { code: e.slice(o, i), openingBraceIndex: i };
      }
      return null;
    }
    function Pd(e) {
      let t = 0;
      for (let r = 0; r < e.length; r++) {
        if (e.charAt(r) !== " ")
          return t;
        t++;
      }
      return t;
    }
    function vd({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
      let a = [""], l = t ? " in" : ":";
      if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), t && a.push(s.underline(_d(t))), i) {
        a.push("");
        let u = [i.toString()];
        o && (u.push(o), u.push(s.dim(")"))), a.push(u.join("")), o && a.push("");
      } else
        a.push(""), o && a.push(o), a.push("");
      return a.push(r), a.join(`
`);
    }
    function _d(e) {
      let t = [e.fileName];
      return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
    }
    function Qt(e) {
      let t = e.showColors ? bd : xd, r = wd(e, t);
      return vd(r, t);
    }
    function Va(e, t, r, n) {
      return e === Ee.ModelAction.findFirstOrThrow || e === Ee.ModelAction.findUniqueOrThrow ? Td(t, r, n) : n;
    }
    function Td(e, t, r) {
      return async (n) => {
        if ("rejectOnNotFound" in n.args) {
          let o = Qt({ originalMethod: n.clientMethod, callsite: n.callsite, message: "'rejectOnNotFound' option is not supported" });
          throw new se(o, { clientVersion: t });
        }
        return await r(n).catch((o) => {
          throw o instanceof H && o.code === "P2025" ? new Be(`No ${e} found`, t) : o;
        });
      };
    }
    function $e(e) {
      return e.replace(/^./, (t) => t.toLowerCase());
    }
    var Cd = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var Ad = ["aggregate", "count", "groupBy"];
    function po(e, t) {
      let r = e._extensions.getAllModelExtensions(t) ?? {}, n = [Rd(e, t), Sd(e, t), gr(r), ce("name", () => t), ce("$name", () => t), ce("$parent", () => e._appliedParent)];
      return Oe({}, n);
    }
    function Rd(e, t) {
      let r = $e(t), n = Object.keys(Ee.ModelAction).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = (l) => e._request(l);
        s = Va(o, t, e._clientVersion, s);
        let a = (l) => (u) => {
          let c = ot(e._errorFormat);
          return e._createPrismaPromise((p) => {
            let d = { args: u, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: p, callsite: c };
            return s({ ...d, ...l });
          });
        };
        return Cd.includes(o) ? co(e, t, a) : Md(i) ? Ia(e, i, a) : a({});
      } };
    }
    function Md(e) {
      return Ad.includes(e);
    }
    function Sd(e, t) {
      return bt(ce("fields", () => {
        let r = e._runtimeDataModel.models[t];
        return ka(t, r);
      }));
    }
    function Ba(e) {
      return e.replace(/^./, (t) => t.toUpperCase());
    }
    var mo = Symbol();
    function wr(e) {
      let t = [Id(e), ce(mo, () => e), ce("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
      return r && t.push(gr(r)), Oe(e, t);
    }
    function Id(e) {
      let t = Object.keys(e._runtimeDataModel.models), r = t.map($e), n = [...new Set(t.concat(r))];
      return bt({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = Ba(i);
        if (e._runtimeDataModel.models[o] !== void 0)
          return po(e, o);
        if (e._runtimeDataModel.models[i] !== void 0)
          return po(e, i);
      }, getPropertyDescriptor(i) {
        if (!r.includes(i))
          return { enumerable: false };
      } });
    }
    function On(e) {
      return e[mo] ? e[mo] : e;
    }
    function Ua(e) {
      if (typeof e == "function")
        return e(this);
      let t = On(this), r = Object.create(t, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: void 0 }, $on: { value: void 0 } });
      return wr(r);
    }
    function Ka({ result: e, modelName: t, select: r, extensions: n }) {
      let i = n.getAllComputedFields(t);
      if (!i)
        return e;
      let o = [], s = [];
      for (let a of Object.values(i)) {
        if (r) {
          if (!r[a.name])
            continue;
          let l = a.needs.filter((u) => !r[u]);
          l.length > 0 && s.push(yr(l));
        }
        kd(e, a.needs) && o.push(Fd(a, Oe(e, o)));
      }
      return o.length > 0 || s.length > 0 ? Oe(e, [...o, ...s]) : e;
    }
    function kd(e, t) {
      return t.every((r) => Ui(e, r));
    }
    function Fd(e, t) {
      return bt(ce(e.name, () => e.compute(t)));
    }
    function Dn({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
      if (Array.isArray(t)) {
        for (let s = 0; s < t.length; s++)
          t[s] = Dn({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
        return t;
      }
      let o = e(t, i, r) ?? t;
      return r.include && Qa({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && Qa({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
    }
    function Qa({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
      for (let [o, s] of Object.entries(e)) {
        if (!s || t[o] == null)
          continue;
        let l = n.models[r].fields.find((c) => c.name === o);
        if (!l || l.kind !== "object" || !l.relationName)
          continue;
        let u = typeof s == "object" ? s : {};
        t[o] = Dn({ visitor: i, result: t[o], args: u, modelName: l.type, runtimeDataModel: n });
      }
    }
    function Ga({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i }) {
      return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : Dn({ result: e, args: r ?? {}, modelName: t, runtimeDataModel: i, visitor: (s, a, l) => Ka({ result: s, modelName: $e(a), select: l.select, extensions: n }) });
    }
    function Ja(e) {
      if (e instanceof me)
        return Od(e);
      if (Array.isArray(e)) {
        let r = [e[0]];
        for (let n = 1; n < e.length; n++)
          r[n] = Er(e[n]);
        return r;
      }
      let t = {};
      for (let r in e)
        t[r] = Er(e[r]);
      return t;
    }
    function Od(e) {
      return new me(e.strings, e.values);
    }
    function Er(e) {
      if (typeof e != "object" || e == null || e instanceof ke || Vt(e))
        return e;
      if (jt(e))
        return new Ne(e.toFixed());
      if (Lt(e))
        return /* @__PURE__ */ new Date(+e);
      if (ArrayBuffer.isView(e))
        return e.slice(0);
      if (Array.isArray(e)) {
        let t = e.length, r;
        for (r = Array(t); t--; )
          r[t] = Er(e[t]);
        return r;
      }
      if (typeof e == "object") {
        let t = {};
        for (let r in e)
          r === "__proto__" ? Object.defineProperty(t, r, { value: Er(e[r]), configurable: true, enumerable: true, writable: true }) : t[r] = Er(e[r]);
        return t;
      }
      yt(e, "Unknown value");
    }
    function Wa(e, t, r, n = 0) {
      return e._createPrismaPromise((i) => {
        let o = t.customDataProxyFetch;
        return "transaction" in t && i !== void 0 && (t.transaction?.kind === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: Ja(t.args ?? {}), __internalParams: t, query: (s, a = t) => {
          let l = a.customDataProxyFetch;
          return a.customDataProxyFetch = Xa(o, l), a.args = s, Wa(e, a, r, n + 1);
        } });
      });
    }
    function za(e, t) {
      let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
      if (e._extensions.isEmpty())
        return e._executeRequest(t);
      let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o);
      return Wa(e, t, s);
    }
    function Ya(e) {
      return (t) => {
        let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? Za(r, n, 0, e) : e(r);
      };
    }
    function Za(e, t, r, n) {
      if (r === t.length)
        return n(e);
      let i = e.customDataProxyFetch, o = e.requests[0].transaction;
      return t[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) {
        let l = a.customDataProxyFetch;
        return a.customDataProxyFetch = Xa(i, l), Za(a, t, r + 1, n);
      } });
    }
    var Ha = (e) => e;
    function Xa(e = Ha, t = Ha) {
      return (r) => e(t(r));
    }
    function tl(e, t, r) {
      let n = $e(r);
      return !t.result || !(t.result.$allModels || t.result[n]) ? e : Dd({ ...e, ...el(t.name, e, t.result.$allModels), ...el(t.name, e, t.result[n]) });
    }
    function Dd(e) {
      let t = new Fe(), r = (n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n]));
      return Ot(e, (n) => ({ ...n, needs: r(n.name, /* @__PURE__ */ new Set()) }));
    }
    function el(e, t, r) {
      return r ? Ot(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: Nd(t, o, i) })) : {};
    }
    function Nd(e, t, r) {
      let n = e?.[t]?.compute;
      return n ? (i) => r({ ...i, [t]: n(i) }) : r;
    }
    function rl(e, t) {
      if (!t)
        return e;
      let r = { ...e };
      for (let n of Object.values(t))
        if (e[n.name])
          for (let i of n.needs)
            r[i] = true;
      return r;
    }
    var Nn = class {
      constructor(t, r) {
        this.extension = t;
        this.previous = r;
        this.computedFieldsCache = new Fe();
        this.modelExtensionsCache = new Fe();
        this.queryCallbacksCache = new Fe();
        this.clientExtensions = cr(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
        this.batchCallbacks = cr(() => {
          let t2 = this.previous?.getAllBatchQueryCallbacks() ?? [], r2 = this.extension.query?.$__internalBatch;
          return r2 ? t2.concat(r2) : t2;
        });
      }
      getAllComputedFields(t) {
        return this.computedFieldsCache.getOrCreate(t, () => tl(this.previous?.getAllComputedFields(t), this.extension, t));
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(t) {
        return this.modelExtensionsCache.getOrCreate(t, () => {
          let r = $e(t);
          return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(t) : { ...this.previous?.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] };
        });
      }
      getAllQueryCallbacks(t, r) {
        return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
          let n = this.previous?.getAllQueryCallbacks(t, r) ?? [], i = [], o = this.extension.query;
          return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== void 0 && (o[t][r] !== void 0 && i.push(o[t][r]), o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    };
    var Ln = class e {
      constructor(t) {
        this.head = t;
      }
      static empty() {
        return new e();
      }
      static single(t) {
        return new e(new Nn(t));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(t) {
        return new e(new Nn(t, this.head));
      }
      getAllComputedFields(t) {
        return this.head?.getAllComputedFields(t);
      }
      getAllClientExtensions() {
        return this.head?.getAllClientExtensions();
      }
      getAllModelExtensions(t) {
        return this.head?.getAllModelExtensions(t);
      }
      getAllQueryCallbacks(t, r) {
        return this.head?.getAllQueryCallbacks(t, r) ?? [];
      }
      getAllBatchQueryCallbacks() {
        return this.head?.getAllBatchQueryCallbacks() ?? [];
      }
    };
    var nl = $("prisma:client");
    var il = { Vercel: "vercel", "Netlify CI": "netlify" };
    function ol({ postinstall: e, ciName: t, clientVersion: r }) {
      if (nl("checkPlatformCaching:postinstall", e), nl("checkPlatformCaching:ciName", t), e === true && t && t in il) {
        let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${il[t]}-build`;
        throw console.error(n), new k(n, r);
      }
    }
    function sl(e, t) {
      return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t[0]]: { url: e.datasourceUrl } } : {} : {};
    }
    function Pr({ error: e, user_facing_error: t }, r) {
      return t.error_code ? new H(t.message, { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new W(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
    }
    var Gt = class {
    };
    var pl = F(require("fs"));
    var vr = F(require("path"));
    function $n(e) {
      let { runtimeBinaryTarget: t } = e;
      return `Add "${t}" to \`binaryTargets\` in the "schema.prisma" file and run \`prisma generate\` after saving it:

${Ld(e)}`;
    }
    function Ld(e) {
      let { generator: t, generatorBinaryTargets: r, runtimeBinaryTarget: n } = e, i = { fromEnvVar: null, value: n }, o = [...r, i];
      return ji({ ...t, binaryTargets: o });
    }
    function st(e) {
      let { runtimeBinaryTarget: t } = e;
      return `Prisma Client could not locate the Query Engine for runtime "${t}".`;
    }
    function at(e) {
      let { searchedLocations: t } = e;
      return `The following locations have been searched:
${[...new Set(t)].map((i) => `  ${i}`).join(`
`)}`;
    }
    function al(e) {
      let { runtimeBinaryTarget: t } = e;
      return `${st(e)}

This happened because \`binaryTargets\` have been pinned, but the actual deployment also required "${t}".
${$n(e)}

${at(e)}`;
    }
    function qn(e) {
      return `We would appreciate if you could take the time to share some information with us.
Please help us by answering a few questions: https://pris.ly/${e}`;
    }
    function jn(e) {
      let { errorStack: t } = e;
      return t?.match(/\/\.next|\/next@|\/next\//) ? `

We detected that you are using Next.js, learn how to fix this: https://pris.ly/d/engine-not-found-nextjs.` : "";
    }
    function ll(e) {
      let { queryEngineName: t } = e;
      return `${st(e)}${jn(e)}

This is likely caused by a bundler that has not copied "${t}" next to the resulting bundle.
Ensure that "${t}" has been copied next to the bundle or in "${e.expectedLocation}".

${qn("engine-not-found-bundler-investigation")}

${at(e)}`;
    }
    function ul(e) {
      let { runtimeBinaryTarget: t, generatorBinaryTargets: r } = e, n = r.find((i) => i.native);
      return `${st(e)}

This happened because Prisma Client was generated for "${n?.value ?? "unknown"}", but the actual deployment required "${t}".
${$n(e)}

${at(e)}`;
    }
    function cl(e) {
      let { queryEngineName: t } = e;
      return `${st(e)}${jn(e)}

This is likely caused by tooling that has not copied "${t}" to the deployment folder.
Ensure that you ran \`prisma generate\` and that "${t}" has been copied to "${e.expectedLocation}".

${qn("engine-not-found-tooling-investigation")}

${at(e)}`;
    }
    var $d = $("prisma:client:engines:resolveEnginePath");
    var qd = () => new RegExp("runtime[\\\\/]library\\.m?js$");
    async function dl(e, t) {
      let r = { binary: process.env.PRISMA_QUERY_ENGINE_BINARY, library: process.env.PRISMA_QUERY_ENGINE_LIBRARY }[e] ?? t.prismaPath;
      if (r !== void 0)
        return r;
      let { enginePath: n, searchedLocations: i } = await jd(e, t);
      if ($d("enginePath", n), n !== void 0 && e === "binary" && Di(n), n !== void 0)
        return t.prismaPath = n;
      let o = await ft(), s = t.generator?.binaryTargets ?? [], a = s.some((d) => d.native), l = !s.some((d) => d.value === o), u = __filename.match(qd()) === null, c = { searchedLocations: i, generatorBinaryTargets: s, generator: t.generator, runtimeBinaryTarget: o, queryEngineName: ml(e, o), expectedLocation: vr.default.relative(process.cwd(), t.dirname), errorStack: new Error().stack }, p;
      throw a && l ? p = ul(c) : l ? p = al(c) : u ? p = ll(c) : p = cl(c), new k(p, t.clientVersion);
    }
    async function jd(engineType, config) {
      let binaryTarget = await ft(), searchedLocations = [], dirname = eval("__dirname"), searchLocations = [config.dirname, vr.default.resolve(dirname, ".."), config.generator?.output?.value ?? dirname, vr.default.resolve(dirname, "../../../.prisma/client"), "/tmp/prisma-engines", config.cwd];
      __filename.includes("resolveEnginePath") && searchLocations.push(Qs());
      for (let e of searchLocations) {
        let t = ml(engineType, binaryTarget), r = vr.default.join(e, t);
        if (searchedLocations.push(e), pl.default.existsSync(r))
          return { enginePath: r, searchedLocations };
      }
      return { enginePath: void 0, searchedLocations };
    }
    function ml(e, t) {
      return e === "library" ? Xr(t, "fs") : `query-engine-${t}${t === "windows" ? ".exe" : ""}`;
    }
    function Vn(e, t) {
      return { batch: e, transaction: t?.kind === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 };
    }
    var fo = F(Bi());
    function fl(e) {
      return e ? e.replace(/".*"/g, '"X"').replace(/[\s:\[]([+-]?([0-9]*[.])?[0-9]+)/g, (t) => `${t[0]}5`) : "";
    }
    function gl(e) {
      return e.split(`
`).map((t) => t.replace(/^\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)\s*/, "").replace(/\+\d+\s*ms$/, "")).join(`
`);
    }
    var yl = F(Xs());
    function hl({ title: e, user: t = "prisma", repo: r = "prisma", template: n = "bug_report.yml", body: i }) {
      return (0, yl.default)({ user: t, repo: r, template: n, title: e, body: i });
    }
    function bl({ version: e, platform: t, title: r, description: n, engineVersion: i, database: o, query: s }) {
      let a = us(6e3 - (s?.length ?? 0)), l = gl((0, fo.default)(a)), u = n ? `# Description
\`\`\`
${n}
\`\`\`` : "", c = (0, fo.default)(`Hi Prisma Team! My Prisma Client just crashed. This is the report:
## Versions

| Name            | Version            |
|-----------------|--------------------|
| Node            | ${process.version?.padEnd(19)}| 
| OS              | ${t?.padEnd(19)}|
| Prisma Client   | ${e?.padEnd(19)}|
| Query Engine    | ${i?.padEnd(19)}|
| Database        | ${o?.padEnd(19)}|

${u}

## Logs
\`\`\`
${l}
\`\`\`

## Client Snippet
\`\`\`ts
// PLEASE FILL YOUR CODE SNIPPET HERE
\`\`\`

## Schema
\`\`\`prisma
// PLEASE ADD YOUR SCHEMA HERE IF POSSIBLE
\`\`\`

## Prisma Engine Query
\`\`\`
${s ? fl(s) : ""}
\`\`\`
`), p = hl({ title: r, body: c });
      return `${r}

This is a non-recoverable error which probably happens when the Prisma Query Engine has a panic.

${ue(p)}

If you want the Prisma team to look into it, please open the link above \u{1F64F}
To increase the chance of success, please post your schema and a snippet of
how you used Prisma Client in the issue. 
`;
    }
    var Vd = "Cloudflare-Workers";
    var Bd = "node";
    function xl() {
      return typeof Netlify == "object" ? "netlify" : typeof EdgeRuntime == "string" ? "edge-light" : globalThis.navigator?.userAgent === Vd ? "workerd" : globalThis.Deno ? "deno" : globalThis.__lagon__ ? "lagon" : globalThis.process?.release?.name === Bd ? "node" : globalThis.Bun ? "bun" : globalThis.fastly ? "fastly" : "unknown";
    }
    function Bn({ inlineDatasources: e, overrideDatasources: t, env: r, clientVersion: n }) {
      let i, o = Object.keys(e)[0], s = e[o]?.url, a = t[o]?.url;
      if (o === void 0 ? i = void 0 : a ? i = a : s?.value ? i = s.value : s?.fromEnvVar && (i = r[s.fromEnvVar]), s?.fromEnvVar !== void 0 && i === void 0)
        throw new k(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
      if (i === void 0)
        throw new k("error: Missing URL environment variable, value, or override.", n);
      return i;
    }
    var Un = class extends Error {
      constructor(r, n) {
        super(r);
        this.clientVersion = n.clientVersion, this.cause = n.cause;
      }
      get [Symbol.toStringTag]() {
        return this.name;
      }
    };
    var ge = class extends Un {
      constructor(r, n) {
        super(r, n);
        this.isRetryable = n.isRetryable ?? true;
      }
    };
    function I(e, t) {
      return { ...e, isRetryable: t };
    }
    var Jt = class extends ge {
      constructor(r) {
        super("This request must be retried", I(r, true));
        this.name = "ForcedRetryError";
        this.code = "P5001";
      }
    };
    v(Jt, "ForcedRetryError");
    var wt = class extends ge {
      constructor(r, n) {
        super(r, I(n, false));
        this.name = "InvalidDatasourceError";
        this.code = "P6001";
      }
    };
    v(wt, "InvalidDatasourceError");
    var Et = class extends ge {
      constructor(r, n) {
        super(r, I(n, false));
        this.name = "NotImplementedYetError";
        this.code = "P5004";
      }
    };
    v(Et, "NotImplementedYetError");
    var V = class extends ge {
      constructor(r, n) {
        super(r, n);
        this.response = n.response;
        let i = this.response.headers.get("prisma-request-id");
        if (i) {
          let o = `(The request id was: ${i})`;
          this.message = this.message + " " + o;
        }
      }
    };
    var Pt = class extends V {
      constructor(r) {
        super("Schema needs to be uploaded", I(r, true));
        this.name = "SchemaMissingError";
        this.code = "P5005";
      }
    };
    v(Pt, "SchemaMissingError");
    var go = "This request could not be understood by the server";
    var _r = class extends V {
      constructor(r, n, i) {
        super(n || go, I(r, false));
        this.name = "BadRequestError";
        this.code = "P5000";
        i && (this.code = i);
      }
    };
    v(_r, "BadRequestError");
    var Tr = class extends V {
      constructor(r, n) {
        super("Engine not started: healthcheck timeout", I(r, true));
        this.name = "HealthcheckTimeoutError";
        this.code = "P5013";
        this.logs = n;
      }
    };
    v(Tr, "HealthcheckTimeoutError");
    var Cr = class extends V {
      constructor(r, n, i) {
        super(n, I(r, true));
        this.name = "EngineStartupError";
        this.code = "P5014";
        this.logs = i;
      }
    };
    v(Cr, "EngineStartupError");
    var Ar = class extends V {
      constructor(r) {
        super("Engine version is not supported", I(r, false));
        this.name = "EngineVersionNotSupportedError";
        this.code = "P5012";
      }
    };
    v(Ar, "EngineVersionNotSupportedError");
    var yo = "Request timed out";
    var Rr = class extends V {
      constructor(r, n = yo) {
        super(n, I(r, false));
        this.name = "GatewayTimeoutError";
        this.code = "P5009";
      }
    };
    v(Rr, "GatewayTimeoutError");
    var Ud = "Interactive transaction error";
    var Mr = class extends V {
      constructor(r, n = Ud) {
        super(n, I(r, false));
        this.name = "InteractiveTransactionError";
        this.code = "P5015";
      }
    };
    v(Mr, "InteractiveTransactionError");
    var Kd = "Request parameters are invalid";
    var Sr = class extends V {
      constructor(r, n = Kd) {
        super(n, I(r, false));
        this.name = "InvalidRequestError";
        this.code = "P5011";
      }
    };
    v(Sr, "InvalidRequestError");
    var ho = "Requested resource does not exist";
    var Ir = class extends V {
      constructor(r, n = ho) {
        super(n, I(r, false));
        this.name = "NotFoundError";
        this.code = "P5003";
      }
    };
    v(Ir, "NotFoundError");
    var bo = "Unknown server error";
    var Ht = class extends V {
      constructor(r, n, i) {
        super(n || bo, I(r, true));
        this.name = "ServerError";
        this.code = "P5006";
        this.logs = i;
      }
    };
    v(Ht, "ServerError");
    var xo = "Unauthorized, check your connection string";
    var kr = class extends V {
      constructor(r, n = xo) {
        super(n, I(r, false));
        this.name = "UnauthorizedError";
        this.code = "P5007";
      }
    };
    v(kr, "UnauthorizedError");
    var wo = "Usage exceeded, retry again later";
    var Fr = class extends V {
      constructor(r, n = wo) {
        super(n, I(r, true));
        this.name = "UsageExceededError";
        this.code = "P5008";
      }
    };
    v(Fr, "UsageExceededError");
    async function Qd(e) {
      let t;
      try {
        t = await e.text();
      } catch {
        return { type: "EmptyError" };
      }
      try {
        let r = JSON.parse(t);
        if (typeof r == "string")
          switch (r) {
            case "InternalDataProxyError":
              return { type: "DataProxyError", body: r };
            default:
              return { type: "UnknownTextError", body: r };
          }
        if (typeof r == "object" && r !== null) {
          if ("is_panic" in r && "message" in r && "error_code" in r)
            return { type: "QueryEngineError", body: r };
          if ("EngineNotStarted" in r || "InteractiveTransactionMisrouted" in r || "InvalidRequestError" in r) {
            let n = Object.values(r)[0].reason;
            return typeof n == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n) ? { type: "UnknownJsonError", body: r } : { type: "DataProxyError", body: r };
          }
        }
        return { type: "UnknownJsonError", body: r };
      } catch {
        return t === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: t };
      }
    }
    async function Or(e, t) {
      if (e.ok)
        return;
      let r = { clientVersion: t, response: e }, n = await Qd(e);
      if (n.type === "QueryEngineError")
        throw new H(n.body.message, { code: n.body.error_code, clientVersion: t });
      if (n.type === "DataProxyError") {
        if (n.body === "InternalDataProxyError")
          throw new Ht(r, "Internal Data Proxy error");
        if ("EngineNotStarted" in n.body) {
          if (n.body.EngineNotStarted.reason === "SchemaMissing")
            return new Pt(r);
          if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported")
            throw new Ar(r);
          if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
            throw new Cr(r, i, o);
          }
          if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
            throw new k(i, t, o);
          }
          if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
            let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
            throw new Tr(r, i);
          }
        }
        if ("InteractiveTransactionMisrouted" in n.body) {
          let i = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
          throw new Mr(r, i[n.body.InteractiveTransactionMisrouted.reason]);
        }
        if ("InvalidRequestError" in n.body)
          throw new Sr(r, n.body.InvalidRequestError.reason);
      }
      if (e.status === 401 || e.status === 403)
        throw new kr(r, Wt(xo, n));
      if (e.status === 404)
        return new Ir(r, Wt(ho, n));
      if (e.status === 429)
        throw new Fr(r, Wt(wo, n));
      if (e.status === 504)
        throw new Rr(r, Wt(yo, n));
      if (e.status >= 500)
        throw new Ht(r, Wt(bo, n));
      if (e.status >= 400)
        throw new _r(r, Wt(go, n));
    }
    function Wt(e, t) {
      return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
    }
    function wl(e) {
      let t = Math.pow(2, e) * 50, r = Math.ceil(Math.random() * t) - Math.ceil(t / 2), n = t + r;
      return new Promise((i) => setTimeout(() => i(n), n));
    }
    function El(e) {
      if (!!e.generator?.previewFeatures.some((r) => r.toLowerCase().includes("metrics")))
        throw new k("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
    }
    var Pl = { "@prisma/debug": "workspace:*", "@prisma/engines-version": "5.7.1-1.0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5", "@prisma/fetch-engine": "workspace:*", "@prisma/get-platform": "workspace:*" };
    var Dr = class extends ge {
      constructor(r, n) {
        super(`Cannot fetch data from service:
${r}`, I(n, true));
        this.name = "RequestError";
        this.code = "P5010";
      }
    };
    v(Dr, "RequestError");
    async function vt(e, t, r = (n) => n) {
      let n = t.clientVersion;
      try {
        return typeof fetch == "function" ? await r(fetch)(e, t) : await r(Eo)(e, t);
      } catch (i) {
        let o = i.message ?? "Unknown error";
        throw new Dr(o, { clientVersion: n });
      }
    }
    function Jd(e) {
      return { ...e.headers, "Content-Type": "application/json" };
    }
    function Hd(e) {
      return { method: e.method, headers: Jd(e) };
    }
    function Wd(e, t) {
      return { text: () => Promise.resolve(Buffer.concat(e).toString()), json: () => Promise.resolve().then(() => JSON.parse(Buffer.concat(e).toString())), ok: t.statusCode >= 200 && t.statusCode <= 299, status: t.statusCode, url: t.url, headers: new Po(t.headers) };
    }
    async function Eo(e, t = {}) {
      let r = zd("https"), n = Hd(t), i = [], { origin: o } = new URL(e);
      return new Promise((s, a) => {
        let l = r.request(e, n, (u) => {
          let { statusCode: c, headers: { location: p } } = u;
          c >= 301 && c <= 399 && p && (p.startsWith("http") === false ? s(Eo(`${o}${p}`, t)) : s(Eo(p, t))), u.on("data", (d) => i.push(d)), u.on("end", () => s(Wd(i, u))), u.on("error", a);
        });
        l.on("error", a), l.end(t.body ?? "");
      });
    }
    var zd = typeof require < "u" ? require : () => {
    };
    var Po = class {
      constructor(t = {}) {
        this.headers = /* @__PURE__ */ new Map();
        for (let [r, n] of Object.entries(t))
          if (typeof n == "string")
            this.headers.set(r, n);
          else if (Array.isArray(n))
            for (let i of n)
              this.headers.set(r, i);
      }
      append(t, r) {
        this.headers.set(t, r);
      }
      delete(t) {
        this.headers.delete(t);
      }
      get(t) {
        return this.headers.get(t) ?? null;
      }
      has(t) {
        return this.headers.has(t);
      }
      set(t, r) {
        this.headers.set(t, r);
      }
      forEach(t, r) {
        for (let [n, i] of this.headers)
          t.call(r, i, n, this);
      }
    };
    var Yd = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/;
    var vl = $("prisma:client:dataproxyEngine");
    async function Zd(e, t) {
      let r = Pl["@prisma/engines-version"], n = t.clientVersion ?? "unknown";
      if (process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION)
        return process.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
      if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory")
        return n;
      let [i, o] = n?.split("-") ?? [];
      if (o === void 0 && Yd.test(i))
        return i;
      if (o !== void 0 || n === "0.0.0" || n === "in-memory") {
        if (e.startsWith("localhost") || e.startsWith("127.0.0.1"))
          return "0.0.0";
        let [s] = r.split("-") ?? [], [a, l, u] = s.split("."), c = Xd(`<=${a}.${l}.${u}`), p = await vt(c, { clientVersion: n });
        if (!p.ok)
          throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${p.status} ${p.statusText}, response body: ${await p.text() || "<empty body>"}`);
        let d = await p.text();
        vl("length of body fetched from unpkg.com", d.length);
        let f;
        try {
          f = JSON.parse(d);
        } catch (y) {
          throw console.error("JSON.parse error: body fetched from unpkg.com: ", d), y;
        }
        return f.version;
      }
      throw new Et("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n });
    }
    async function _l(e, t) {
      let r = await Zd(e, t);
      return vl("version", r), r;
    }
    function Xd(e) {
      return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
    }
    var Tl = 3;
    var vo = $("prisma:client:dataproxyEngine");
    var _o = class {
      constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i, engineHash: o }) {
        this.apiKey = t, this.tracingHelper = r, this.logLevel = n, this.logQueries = i, this.engineHash = o;
      }
      build({ traceparent: t, interactiveTransaction: r } = {}) {
        let n = { Authorization: `Bearer ${this.apiKey}`, "Prisma-Engine-Hash": this.engineHash };
        this.tracingHelper.isEnabled() && (n.traceparent = t ?? this.tracingHelper.getTraceParent()), r && (n["X-transaction-id"] = r.id);
        let i = this.buildCaptureSettings();
        return i.length > 0 && (n["X-capture-telemetry"] = i.join(", ")), n;
      }
      buildCaptureSettings() {
        let t = [];
        return this.tracingHelper.isEnabled() && t.push("tracing"), this.logLevel && t.push(this.logLevel), this.logQueries && t.push("query"), t;
      }
    };
    var Nr = class extends Gt {
      constructor(r) {
        super();
        El(r), this.config = r, this.env = { ...this.config.env, ...process.env }, this.inlineSchema = r.inlineSchema, this.inlineDatasources = r.inlineDatasources, this.inlineSchemaHash = r.inlineSchemaHash, this.clientVersion = r.clientVersion, this.engineHash = r.engineVersion, this.logEmitter = r.logEmitter, this.tracingHelper = this.config.tracingHelper;
      }
      apiKey() {
        return this.headerBuilder.apiKey;
      }
      version() {
        return this.engineHash;
      }
      async start() {
        this.startPromise !== void 0 && await this.startPromise, this.startPromise = (async () => {
          let [r, n] = this.extractHostAndApiKey();
          this.host = r, this.headerBuilder = new _o({ apiKey: n, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel, logQueries: this.config.logQueries, engineHash: this.engineHash }), this.remoteClientVersion = await _l(r, this.config), vo("host", this.host);
        })(), await this.startPromise;
      }
      async stop() {
      }
      propagateResponseExtensions(r) {
        r?.logs?.length && r.logs.forEach((n) => {
          switch (n.level) {
            case "debug":
            case "error":
            case "trace":
            case "warn":
            case "info":
              break;
            case "query": {
              let i = typeof n.attributes.query == "string" ? n.attributes.query : "";
              if (!this.tracingHelper.isEnabled()) {
                let [o] = i.split("/* traceparent");
                i = o;
              }
              this.logEmitter.emit("query", { query: i, timestamp: n.timestamp, duration: n.attributes.duration_ms, params: n.attributes.params, target: n.attributes.target });
            }
          }
        }), r?.traces?.length && this.tracingHelper.createEngineSpan({ span: true, spans: r.traces });
      }
      on(r, n) {
        if (r === "beforeExit")
          throw new Error('"beforeExit" hook is not applicable to the remote query engine');
        this.logEmitter.on(r, n);
      }
      async url(r) {
        return await this.start(), `https://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${r}`;
      }
      async uploadSchema() {
        let r = { name: "schemaUpload", internal: true };
        return this.tracingHelper.runInChildSpan(r, async () => {
          let n = await vt(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
          n.ok || vo("schema response status", n.status);
          let i = await Or(n, this.clientVersion);
          if (i)
            throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${i.message}` }), i;
          this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})` });
        });
      }
      request(r, { traceparent: n, interactiveTransaction: i, customDataProxyFetch: o }) {
        return this.requestInternal({ body: r, traceparent: n, interactiveTransaction: i, customDataProxyFetch: o });
      }
      async requestBatch(r, { traceparent: n, transaction: i, customDataProxyFetch: o }) {
        let s = i?.kind === "itx" ? i.options : void 0, a = Vn(r, i), { batchResult: l, elapsed: u } = await this.requestInternal({ body: a, customDataProxyFetch: o, interactiveTransaction: s, traceparent: n });
        return l.map((c) => "errors" in c && c.errors.length > 0 ? Pr(c.errors[0], this.clientVersion) : { data: c, elapsed: u });
      }
      requestInternal({ body: r, traceparent: n, customDataProxyFetch: i, interactiveTransaction: o }) {
        return this.withRetry({ actionGerund: "querying", callback: async ({ logHttpCall: s }) => {
          let a = o ? `${o.payload.endpoint}/graphql` : await this.url("graphql");
          s(a);
          let l = await vt(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: n, interactiveTransaction: o }), body: JSON.stringify(r), clientVersion: this.clientVersion }, i);
          l.ok || vo("graphql response status", l.status), await this.handleError(await Or(l, this.clientVersion));
          let u = await l.json(), c = u.extensions;
          if (c && this.propagateResponseExtensions(c), u.errors)
            throw u.errors.length === 1 ? Pr(u.errors[0], this.config.clientVersion) : new W(u.errors, { clientVersion: this.config.clientVersion });
          return u;
        } });
      }
      async transaction(r, n, i) {
        let o = { start: "starting", commit: "committing", rollback: "rolling back" };
        return this.withRetry({ actionGerund: `${o[r]} transaction`, callback: async ({ logHttpCall: s }) => {
          if (r === "start") {
            let a = JSON.stringify({ max_wait: i?.maxWait ?? 2e3, timeout: i?.timeout ?? 5e3, isolation_level: i?.isolationLevel }), l = await this.url("transaction/start");
            s(l);
            let u = await vt(l, { method: "POST", headers: this.headerBuilder.build({ traceparent: n.traceparent }), body: a, clientVersion: this.clientVersion });
            await this.handleError(await Or(u, this.clientVersion));
            let c = await u.json(), p = c.extensions;
            p && this.propagateResponseExtensions(p);
            let d = c.id, f = c["data-proxy"].endpoint;
            return { id: d, payload: { endpoint: f } };
          } else {
            let a = `${i.payload.endpoint}/${r}`;
            s(a);
            let l = await vt(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: n.traceparent }), clientVersion: this.clientVersion });
            await this.handleError(await Or(l, this.clientVersion));
            let c = (await l.json()).extensions;
            c && this.propagateResponseExtensions(c);
            return;
          }
        } });
      }
      extractHostAndApiKey() {
        let r = { clientVersion: this.clientVersion }, n = Object.keys(this.inlineDatasources)[0], i = Bn({ inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources, clientVersion: this.clientVersion, env: this.env }), o;
        try {
          o = new URL(i);
        } catch {
          throw new wt(`Error validating datasource \`${n}\`: the URL must start with the protocol \`prisma://\``, r);
        }
        let { protocol: s, host: a, searchParams: l } = o;
        if (s !== "prisma:")
          throw new wt(`Error validating datasource \`${n}\`: the URL must start with the protocol \`prisma://\``, r);
        let u = l.get("api_key");
        if (u === null || u.length < 1)
          throw new wt(`Error validating datasource \`${n}\`: the URL must contain a valid API key`, r);
        return [a, u];
      }
      metrics() {
        throw new Et("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
      }
      async withRetry(r) {
        for (let n = 0; ; n++) {
          let i = (o) => {
            this.logEmitter.emit("info", { message: `Calling ${o} (n=${n})` });
          };
          try {
            return await r.callback({ logHttpCall: i });
          } catch (o) {
            if (!(o instanceof ge) || !o.isRetryable)
              throw o;
            if (n >= Tl)
              throw o instanceof Jt ? o.cause : o;
            this.logEmitter.emit("warn", { message: `Attempt ${n + 1}/${Tl} failed for ${r.actionGerund}: ${o.message ?? "(unknown)"}` });
            let s = await wl(n);
            this.logEmitter.emit("warn", { message: `Retrying after ${s}ms` });
          }
        }
      }
      async handleError(r) {
        if (r instanceof Pt)
          throw await this.uploadSchema(), new Jt({ clientVersion: this.clientVersion, cause: r });
        if (r)
          throw r;
      }
    };
    function Cl(e) {
      if (e?.kind === "itx")
        return e.options.id;
    }
    var Co = F(require("os"));
    var Al = F(require("path"));
    var To = Symbol("PrismaLibraryEngineCache");
    function em() {
      let e = globalThis;
      return e[To] === void 0 && (e[To] = {}), e[To];
    }
    function tm(e) {
      let t = em();
      if (t[e] !== void 0)
        return t[e];
      let r = Al.default.toNamespacedPath(e), n = { exports: {} }, i = 0;
      return process.platform !== "win32" && (i = Co.default.constants.dlopen.RTLD_LAZY | Co.default.constants.dlopen.RTLD_DEEPBIND), process.dlopen(n, r, i), t[e] = n.exports, n.exports;
    }
    var Rl = { async loadLibrary(e) {
      let t = await Ri(), r = await dl("library", e);
      try {
        return e.tracingHelper.runInChildSpan({ name: "loadLibrary", internal: true }, () => tm(r));
      } catch (n) {
        let i = Ni({ e: n, platformInfo: t, id: r });
        throw new k(i, e.clientVersion);
      }
    } };
    var Fo = {};
    Tt(Fo, { CommonProxy: () => Ro, DriverProxy: () => Mo, JsBaseQueryable: () => So, QueryEngine: () => $r, TransactionProxy: () => Io, __wbg_String_88810dfeb4021902: () => tf, __wbg_buffer_344d9b41efe96da7: () => lf, __wbg_call_53fc3abd42e24ec8: () => hm, __wbg_call_669127b9d730c650: () => Pf, __wbg_crypto_58f13aa23ffcb166: () => pf, __wbg_done_bc26bf4ada718266: () => wf, __wbg_entries_6d727b73ee02b7ce: () => Of, __wbg_getRandomValues_504510b5564925af: () => sf, __wbg_getTime_ed6ee333b702f8fc: () => Cm, __wbg_get_2aff440840bb6202: () => rf, __wbg_get_4a9aa5157afeb382: () => Um, __wbg_get_94990005bd6ca07c: () => nf, __wbg_getwithrefkey_5e6d9547403deab8: () => ef, __wbg_globalThis_17eff828815f7d84: () => Cf, __wbg_global_46f939f6541643c5: () => Af, __wbg_instanceof_ArrayBuffer_c7cc317e5c29cc0d: () => Ff, __wbg_instanceof_Promise_cfbcc42300367513: () => Zm, __wbg_instanceof_Uint8Array_19e6f142a5e7e1e1: () => kf, __wbg_isArray_38525be7442aa21e: () => Lm, __wbg_isSafeInteger_c38b0a16d0c7cef7: () => Fm, __wbg_iterator_7ee1a391d310f8e4: () => qm, __wbg_length_a5587d6cd79ab197: () => If, __wbg_length_cace2e0b3ddc0502: () => Bm, __wbg_msCrypto_abcb1295e768d1f2: () => hf, __wbg_new0_ad75dd38f92424e2: () => Tm, __wbg_new_08236689f0afb357: () => Km, __wbg_new_1b94180eeb48f2a2: () => Jm, __wbg_new_c728d68b8b34487e: () => Hm, __wbg_new_d8a000788389a31e: () => Mf, __wbg_new_feb65b865d980ae2: () => mm, __wbg_newnoargs_ccdcae30fd002262: () => Rf, __wbg_newwithbyteoffsetandlength_2dc04d99088b15e3: () => uf, __wbg_newwithlength_13b5319ab422dcf6: () => bf, __wbg_next_15da6a3df9290720: () => vf, __wbg_next_1989a20442400aaa: () => xf, __wbg_node_523d7bd03ef69fba: () => ff, __wbg_now_4579335d3581594c: () => gm, __wbg_now_8ed1a4454e40ecd1: () => Rm, __wbg_parse_3f0cb48976ca4123: () => _m, __wbg_process_5b786e71d465a513: () => df, __wbg_randomFillSync_a0d98aa11c81fe89: () => cf, __wbg_require_2784e593a4674877: () => gf, __wbg_resolve_a3252b2860f0a09e: () => jf, __wbg_self_3fad056edded10bd: () => _f, __wbg_setTimeout_631fe61f31fa2fad: () => ym, __wbg_set_0ac78a2bc07da03c: () => Gm, __wbg_set_3355b9f2d3092e3b: () => Wm, __wbg_set_841ac57cff3d672b: () => Ym, __wbg_set_dcfd613a3420f908: () => Sf, __wbg_set_wasm: () => ko, __wbg_static_accessor_PERFORMANCE_1a325848eb3ce65a: () => Am, __wbg_stringify_4039297315a25b00: () => vm, __wbg_subarray_6ca5cfa7fbb9abbe: () => of, __wbg_then_1bbc9edafd859b06: () => qf, __wbg_then_89e1c559530b85cf: () => $f, __wbg_valueOf_ff4b62641803432a: () => Xm, __wbg_value_0570714ff7d75f35: () => Ef, __wbg_versions_c2ab80650590b6a2: () => mf, __wbg_window_a4f46c98a61d4089: () => Tf, __wbindgen_bigint_from_i64: () => Dm, __wbindgen_bigint_from_u64: () => Vm, __wbindgen_bigint_get_as_i64: () => Om, __wbindgen_boolean_get: () => Sm, __wbindgen_cb_drop: () => Lf, __wbindgen_closure_wrapper7083: () => Vf, __wbindgen_debug_string: () => Df, __wbindgen_error_new: () => bm, __wbindgen_in: () => jm, __wbindgen_is_bigint: () => Im, __wbindgen_is_function: () => yf, __wbindgen_is_object: () => $m, __wbindgen_is_string: () => zm, __wbindgen_is_undefined: () => Pm, __wbindgen_jsval_eq: () => Nm, __wbindgen_jsval_loose_eq: () => Mm, __wbindgen_memory: () => af, __wbindgen_number_get: () => km, __wbindgen_number_new: () => Qm, __wbindgen_object_clone_ref: () => Em, __wbindgen_object_drop_ref: () => fm, __wbindgen_string_get: () => wm, __wbindgen_string_new: () => xm, __wbindgen_throw: () => Nf, debug_panic: () => pm, getBuildTimeInfo: () => cm });
    var b;
    function ko(e) {
      b = e;
    }
    var Ke = new Array(128).fill(void 0);
    Ke.push(void 0, null, true, false);
    function h(e) {
      return Ke[e];
    }
    var Lr = Ke.length;
    function rm(e) {
      e < 132 || (Ke[e] = Lr, Lr = e);
    }
    function X(e) {
      let t = h(e);
      return rm(e), t;
    }
    var nm = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
    var Ml = new nm("utf-8", { ignoreBOM: true, fatal: true });
    Ml.decode();
    var Kn = null;
    function Hn() {
      return (Kn === null || Kn.byteLength === 0) && (Kn = new Uint8Array(b.memory.buffer)), Kn;
    }
    function qr(e, t) {
      return e = e >>> 0, Ml.decode(Hn().subarray(e, e + t));
    }
    function w(e) {
      Lr === Ke.length && Ke.push(Ke.length + 1);
      let t = Lr;
      return Lr = Ke[t], Ke[t] = e, t;
    }
    var Z = 0;
    var im = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
    var Wn = new im("utf-8");
    var om = typeof Wn.encodeInto == "function" ? function(e, t) {
      return Wn.encodeInto(e, t);
    } : function(e, t) {
      let r = Wn.encode(e);
      return t.set(r), { read: e.length, written: r.length };
    };
    function le(e, t, r) {
      if (r === void 0) {
        let a = Wn.encode(e), l = t(a.length, 1) >>> 0;
        return Hn().subarray(l, l + a.length).set(a), Z = a.length, l;
      }
      let n = e.length, i = t(n, 1) >>> 0, o = Hn(), s = 0;
      for (; s < n; s++) {
        let a = e.charCodeAt(s);
        if (a > 127)
          break;
        o[i + s] = a;
      }
      if (s !== n) {
        s !== 0 && (e = e.slice(s)), i = r(i, n, n = s + e.length * 3, 1) >>> 0;
        let a = Hn().subarray(i + s, i + n), l = om(e, a);
        s += l.written;
      }
      return Z = s, i;
    }
    function Qe(e) {
      return e == null;
    }
    var Qn = null;
    function xe() {
      return (Qn === null || Qn.byteLength === 0) && (Qn = new Int32Array(b.memory.buffer)), Qn;
    }
    var Gn = null;
    function sm() {
      return (Gn === null || Gn.byteLength === 0) && (Gn = new Float64Array(b.memory.buffer)), Gn;
    }
    var Jn = null;
    function am() {
      return (Jn === null || Jn.byteLength === 0) && (Jn = new BigInt64Array(b.memory.buffer)), Jn;
    }
    function Ao(e) {
      let t = typeof e;
      if (t == "number" || t == "boolean" || e == null)
        return `${e}`;
      if (t == "string")
        return `"${e}"`;
      if (t == "symbol") {
        let i = e.description;
        return i == null ? "Symbol" : `Symbol(${i})`;
      }
      if (t == "function") {
        let i = e.name;
        return typeof i == "string" && i.length > 0 ? `Function(${i})` : "Function";
      }
      if (Array.isArray(e)) {
        let i = e.length, o = "[";
        i > 0 && (o += Ao(e[0]));
        for (let s = 1; s < i; s++)
          o += ", " + Ao(e[s]);
        return o += "]", o;
      }
      let r = /\[object ([^\]]+)\]/.exec(toString.call(e)), n;
      if (r.length > 1)
        n = r[1];
      else
        return toString.call(e);
      if (n == "Object")
        try {
          return "Object(" + JSON.stringify(e) + ")";
        } catch {
          return "Object";
        }
      return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : n;
    }
    function lm(e, t, r, n) {
      let i = { a: e, b: t, cnt: 1, dtor: r }, o = (...s) => {
        i.cnt++;
        let a = i.a;
        i.a = 0;
        try {
          return n(a, i.b, ...s);
        } finally {
          --i.cnt === 0 ? b.__wbindgen_export_2.get(i.dtor)(a, i.b) : i.a = a;
        }
      };
      return o.original = i, o;
    }
    function um(e, t, r) {
      b.wasm_bindgen__convert__closures__invoke1_mut__hfbda64e850f62b9b(e, t, w(r));
    }
    function cm() {
      let e = b.getBuildTimeInfo();
      return X(e);
    }
    function pm(e) {
      try {
        let o = b.__wbindgen_add_to_stack_pointer(-16);
        var t = Qe(e) ? 0 : le(e, b.__wbindgen_malloc, b.__wbindgen_realloc), r = Z;
        b.debug_panic(o, t, r);
        var n = xe()[o / 4 + 0], i = xe()[o / 4 + 1];
        if (i)
          throw X(n);
      } finally {
        b.__wbindgen_add_to_stack_pointer(16);
      }
    }
    function ye(e, t) {
      try {
        return e.apply(this, t);
      } catch (r) {
        b.__wbindgen_exn_store(w(r));
      }
    }
    function dm(e, t, r, n) {
      b.wasm_bindgen__convert__closures__invoke2_mut__h2f8c2214595cd992(e, t, w(r), w(n));
    }
    var Ro = class {
      __destroy_into_raw() {
        let t = this.__wbg_ptr;
        return this.__wbg_ptr = 0, t;
      }
      free() {
        let t = this.__destroy_into_raw();
        b.__wbg_commonproxy_free(t);
      }
    };
    var Mo = class {
      __destroy_into_raw() {
        let t = this.__wbg_ptr;
        return this.__wbg_ptr = 0, t;
      }
      free() {
        let t = this.__destroy_into_raw();
        b.__wbg_driverproxy_free(t);
      }
    };
    var So = class {
      __destroy_into_raw() {
        let t = this.__wbg_ptr;
        return this.__wbg_ptr = 0, t;
      }
      free() {
        let t = this.__destroy_into_raw();
        b.__wbg_jsbasequeryable_free(t);
      }
      get provider() {
        let t = b.__wbg_get_jsbasequeryable_provider(this.__wbg_ptr);
        return X(t);
      }
      set provider(t) {
        b.__wbg_set_jsbasequeryable_provider(this.__wbg_ptr, w(t));
      }
    };
    var $r = class {
      __destroy_into_raw() {
        let t = this.__wbg_ptr;
        return this.__wbg_ptr = 0, t;
      }
      free() {
        let t = this.__destroy_into_raw();
        b.__wbg_queryengine_free(t);
      }
      constructor(t, r, n) {
        try {
          let a = b.__wbindgen_add_to_stack_pointer(-16);
          b.queryengine_new(a, w(t), w(r), Qe(n) ? 0 : w(n));
          var i = xe()[a / 4 + 0], o = xe()[a / 4 + 1], s = xe()[a / 4 + 2];
          if (s)
            throw X(o);
          return this.__wbg_ptr = i >>> 0, this;
        } finally {
          b.__wbindgen_add_to_stack_pointer(16);
        }
      }
      connect(t) {
        let r = le(t, b.__wbindgen_malloc, b.__wbindgen_realloc), n = Z, i = b.queryengine_connect(this.__wbg_ptr, r, n);
        return X(i);
      }
      disconnect(t) {
        let r = le(t, b.__wbindgen_malloc, b.__wbindgen_realloc), n = Z, i = b.queryengine_disconnect(this.__wbg_ptr, r, n);
        return X(i);
      }
      query(t, r, n) {
        let i = le(t, b.__wbindgen_malloc, b.__wbindgen_realloc), o = Z, s = le(r, b.__wbindgen_malloc, b.__wbindgen_realloc), a = Z;
        var l = Qe(n) ? 0 : le(n, b.__wbindgen_malloc, b.__wbindgen_realloc), u = Z;
        let c = b.queryengine_query(this.__wbg_ptr, i, o, s, a, l, u);
        return X(c);
      }
      startTransaction(t, r) {
        let n = le(t, b.__wbindgen_malloc, b.__wbindgen_realloc), i = Z, o = le(r, b.__wbindgen_malloc, b.__wbindgen_realloc), s = Z, a = b.queryengine_startTransaction(this.__wbg_ptr, n, i, o, s);
        return X(a);
      }
      commitTransaction(t, r) {
        let n = le(t, b.__wbindgen_malloc, b.__wbindgen_realloc), i = Z, o = le(r, b.__wbindgen_malloc, b.__wbindgen_realloc), s = Z, a = b.queryengine_commitTransaction(this.__wbg_ptr, n, i, o, s);
        return X(a);
      }
      rollbackTransaction(t, r) {
        let n = le(t, b.__wbindgen_malloc, b.__wbindgen_realloc), i = Z, o = le(r, b.__wbindgen_malloc, b.__wbindgen_realloc), s = Z, a = b.queryengine_rollbackTransaction(this.__wbg_ptr, n, i, o, s);
        return X(a);
      }
      metrics(t) {
        let r = le(t, b.__wbindgen_malloc, b.__wbindgen_realloc), n = Z, i = b.queryengine_metrics(this.__wbg_ptr, r, n);
        return X(i);
      }
    };
    var Io = class {
      __destroy_into_raw() {
        let t = this.__wbg_ptr;
        return this.__wbg_ptr = 0, t;
      }
      free() {
        let t = this.__destroy_into_raw();
        b.__wbg_transactionproxy_free(t);
      }
    };
    function mm(e, t) {
      try {
        var r = { a: e, b: t }, n = (o, s) => {
          let a = r.a;
          r.a = 0;
          try {
            return dm(a, r.b, o, s);
          } finally {
            r.a = a;
          }
        };
        let i = new Promise(n);
        return w(i);
      } finally {
        r.a = r.b = 0;
      }
    }
    function fm(e) {
      X(e);
    }
    function gm() {
      return Date.now();
    }
    function ym(e, t) {
      return setTimeout(h(e), t >>> 0);
    }
    function hm() {
      return ye(function(e, t, r) {
        let n = h(e).call(h(t), h(r));
        return w(n);
      }, arguments);
    }
    function bm(e, t) {
      let r = new Error(qr(e, t));
      return w(r);
    }
    function xm(e, t) {
      let r = qr(e, t);
      return w(r);
    }
    function wm(e, t) {
      let r = h(t), n = typeof r == "string" ? r : void 0;
      var i = Qe(n) ? 0 : le(n, b.__wbindgen_malloc, b.__wbindgen_realloc), o = Z;
      xe()[e / 4 + 1] = o, xe()[e / 4 + 0] = i;
    }
    function Em(e) {
      let t = h(e);
      return w(t);
    }
    function Pm(e) {
      return h(e) === void 0;
    }
    function vm() {
      return ye(function(e) {
        let t = JSON.stringify(h(e));
        return w(t);
      }, arguments);
    }
    function _m() {
      return ye(function(e, t) {
        let r = JSON.parse(qr(e, t));
        return w(r);
      }, arguments);
    }
    function Tm() {
      return w(/* @__PURE__ */ new Date());
    }
    function Cm(e) {
      return h(e).getTime();
    }
    function Am() {
      let e = performance;
      return Qe(e) ? 0 : w(e);
    }
    function Rm(e) {
      return h(e).now();
    }
    function Mm(e, t) {
      return h(e) == h(t);
    }
    function Sm(e) {
      let t = h(e);
      return typeof t == "boolean" ? t ? 1 : 0 : 2;
    }
    function Im(e) {
      return typeof h(e) == "bigint";
    }
    function km(e, t) {
      let r = h(t), n = typeof r == "number" ? r : void 0;
      sm()[e / 8 + 1] = Qe(n) ? 0 : n, xe()[e / 4 + 0] = !Qe(n);
    }
    function Fm(e) {
      return Number.isSafeInteger(h(e));
    }
    function Om(e, t) {
      let r = h(t), n = typeof r == "bigint" ? r : void 0;
      am()[e / 8 + 1] = Qe(n) ? BigInt(0) : n, xe()[e / 4 + 0] = !Qe(n);
    }
    function Dm(e) {
      return w(e);
    }
    function Nm(e, t) {
      return h(e) === h(t);
    }
    function Lm(e) {
      return Array.isArray(h(e));
    }
    function $m(e) {
      let t = h(e);
      return typeof t == "object" && t !== null;
    }
    function qm() {
      return w(Symbol.iterator);
    }
    function jm(e, t) {
      return h(e) in h(t);
    }
    function Vm(e) {
      let t = BigInt.asUintN(64, e);
      return w(t);
    }
    function Bm(e) {
      return h(e).length;
    }
    function Um(e, t) {
      let r = h(e)[t >>> 0];
      return w(r);
    }
    function Km() {
      let e = new Array();
      return w(e);
    }
    function Qm(e) {
      return w(e);
    }
    function Gm(e, t, r) {
      h(e)[t >>> 0] = X(r);
    }
    function Jm() {
      return w(/* @__PURE__ */ new Map());
    }
    function Hm() {
      let e = new Object();
      return w(e);
    }
    function Wm(e, t, r) {
      let n = h(e).set(h(t), h(r));
      return w(n);
    }
    function zm(e) {
      return typeof h(e) == "string";
    }
    function Ym(e, t, r) {
      h(e)[X(t)] = X(r);
    }
    function Zm(e) {
      let t;
      try {
        t = h(e) instanceof Promise;
      } catch {
        t = false;
      }
      return t;
    }
    function Xm(e) {
      return h(e).valueOf();
    }
    function ef(e, t) {
      let r = h(e)[h(t)];
      return w(r);
    }
    function tf(e, t) {
      let r = String(h(t)), n = le(r, b.__wbindgen_malloc, b.__wbindgen_realloc), i = Z;
      xe()[e / 4 + 1] = i, xe()[e / 4 + 0] = n;
    }
    function rf() {
      return ye(function(e, t) {
        let r = Reflect.get(h(e), h(t));
        return w(r);
      }, arguments);
    }
    function nf() {
      return ye(function(e, t) {
        let r = h(e)[X(t)];
        return w(r);
      }, arguments);
    }
    function of(e, t, r) {
      let n = h(e).subarray(t >>> 0, r >>> 0);
      return w(n);
    }
    function sf() {
      return ye(function(e, t) {
        h(e).getRandomValues(h(t));
      }, arguments);
    }
    function af() {
      let e = b.memory;
      return w(e);
    }
    function lf(e) {
      let t = h(e).buffer;
      return w(t);
    }
    function uf(e, t, r) {
      let n = new Uint8Array(h(e), t >>> 0, r >>> 0);
      return w(n);
    }
    function cf() {
      return ye(function(e, t) {
        h(e).randomFillSync(X(t));
      }, arguments);
    }
    function pf(e) {
      let t = h(e).crypto;
      return w(t);
    }
    function df(e) {
      let t = h(e).process;
      return w(t);
    }
    function mf(e) {
      let t = h(e).versions;
      return w(t);
    }
    function ff(e) {
      let t = h(e).node;
      return w(t);
    }
    function gf() {
      return ye(function() {
        let e = module.require;
        return w(e);
      }, arguments);
    }
    function yf(e) {
      return typeof h(e) == "function";
    }
    function hf(e) {
      let t = h(e).msCrypto;
      return w(t);
    }
    function bf(e) {
      let t = new Uint8Array(e >>> 0);
      return w(t);
    }
    function xf() {
      return ye(function(e) {
        let t = h(e).next();
        return w(t);
      }, arguments);
    }
    function wf(e) {
      return h(e).done;
    }
    function Ef(e) {
      let t = h(e).value;
      return w(t);
    }
    function Pf() {
      return ye(function(e, t) {
        let r = h(e).call(h(t));
        return w(r);
      }, arguments);
    }
    function vf(e) {
      let t = h(e).next;
      return w(t);
    }
    function _f() {
      return ye(function() {
        let e = self.self;
        return w(e);
      }, arguments);
    }
    function Tf() {
      return ye(function() {
        let e = window.window;
        return w(e);
      }, arguments);
    }
    function Cf() {
      return ye(function() {
        let e = globalThis.globalThis;
        return w(e);
      }, arguments);
    }
    function Af() {
      return ye(function() {
        let e = global.global;
        return w(e);
      }, arguments);
    }
    function Rf(e, t) {
      let r = new Function(qr(e, t));
      return w(r);
    }
    function Mf(e) {
      let t = new Uint8Array(h(e));
      return w(t);
    }
    function Sf(e, t, r) {
      h(e).set(h(t), r >>> 0);
    }
    function If(e) {
      return h(e).length;
    }
    function kf(e) {
      let t;
      try {
        t = h(e) instanceof Uint8Array;
      } catch {
        t = false;
      }
      return t;
    }
    function Ff(e) {
      let t;
      try {
        t = h(e) instanceof ArrayBuffer;
      } catch {
        t = false;
      }
      return t;
    }
    function Of(e) {
      let t = Object.entries(h(e));
      return w(t);
    }
    function Df(e, t) {
      let r = Ao(h(t)), n = le(r, b.__wbindgen_malloc, b.__wbindgen_realloc), i = Z;
      xe()[e / 4 + 1] = i, xe()[e / 4 + 0] = n;
    }
    function Nf(e, t) {
      throw new Error(qr(e, t));
    }
    function Lf(e) {
      let t = X(e).original;
      return t.cnt-- == 1 ? (t.a = 0, true) : false;
    }
    function $f(e, t) {
      let r = h(e).then(h(t));
      return w(r);
    }
    function qf(e, t, r) {
      let n = h(e).then(h(t), h(r));
      return w(n);
    }
    function jf(e) {
      let t = Promise.resolve(h(e));
      return w(t);
    }
    function Vf(e, t, r) {
      let n = lm(e, t, 342, um);
      return w(n);
    }
    var Oo;
    var Sl = { async loadLibrary(e) {
      let { generator: t, clientVersion: r, adapter: n } = e;
      if (t?.previewFeatures.includes("driverAdapters") === void 0)
        throw new k('The `driverAdapters` preview feature is required with `engineType="wasm"`', r);
      if (n === void 0)
        throw new k('The `adapter` option for `PrismaClient` is required with `engineType="wasm"`', r);
      if (Oo === void 0) {
        let i = await e.getQueryEngineWasmModule?.();
        if (i == null)
          throw new k("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", r);
        Oo = new WebAssembly.Instance(i, { "./query_engine_bg.js": Fo }).exports, ko(Oo);
      }
      return { debugPanic() {
        return Promise.reject("{}");
      }, dmmf() {
        return Promise.resolve("{}");
      }, version() {
        return { commit: "unknown", version: "unknown" };
      }, QueryEngine: $r };
    } };
    var Bf = "P2036";
    var qe = $("prisma:client:libraryEngine");
    function Uf(e) {
      return e.item_type === "query" && "query" in e;
    }
    function Kf(e) {
      return "level" in e ? e.level === "error" && e.message === "PANIC" : false;
    }
    var Il = [...Mi, "native"];
    var kl = 0;
    var zt = class extends Gt {
      constructor(r, n) {
        super();
        gt(r.generator) === "wasm" ? this.libraryLoader = n ?? Sl : this.libraryLoader = n ?? Rl, this.config = r, this.libraryStarted = false, this.logQueries = r.logQueries ?? false, this.logLevel = r.logLevel ?? "error", this.logEmitter = r.logEmitter, this.datamodel = atob(r.inlineSchema), r.enableDebugLogs && (this.logLevel = "debug");
        let o = Object.keys(r.overrideDatasources)[0], s = r.overrideDatasources[o]?.url;
        o !== void 0 && s !== void 0 && (this.datasourceOverrides = { [o]: s }), this.libraryInstantiationPromise = this.instantiateLibrary(), this.checkForTooManyEngines();
      }
      checkForTooManyEngines() {
        kl === 10 && console.warn(`${Re("warn(prisma-client)")} This is the 10th instance of Prisma Client being started. Make sure this is intentional.`);
      }
      async transaction(r, n, i) {
        await this.start();
        let o = JSON.stringify(n), s;
        if (r === "start") {
          let l = JSON.stringify({ max_wait: i?.maxWait ?? 2e3, timeout: i?.timeout ?? 5e3, isolation_level: i?.isolationLevel });
          s = await this.engine?.startTransaction(l, o);
        } else
          r === "commit" ? s = await this.engine?.commitTransaction(i.id, o) : r === "rollback" && (s = await this.engine?.rollbackTransaction(i.id, o));
        let a = this.parseEngineResponse(s);
        if (Qf(a)) {
          let l = this.getExternalAdapterError(a);
          throw l ? l.error : new H(a.message, { code: a.error_code, clientVersion: this.config.clientVersion, meta: a.meta });
        }
        return a;
      }
      async instantiateLibrary() {
        if (qe("internalSetup"), this.libraryInstantiationPromise)
          return this.libraryInstantiationPromise;
        wi(), this.platform = await this.getPlatform(), await this.loadEngine(), this.version();
      }
      async getPlatform() {
        {
          if (this.platform)
            return this.platform;
          let r = await ft();
          if (!Il.includes(r))
            throw new k(`Unknown ${ve("PRISMA_QUERY_ENGINE_LIBRARY")} ${ve(pe(r))}. Possible binaryTargets: ${pt(Il.join(", "))} or a path to the query engine library.
You may have to run ${pt("prisma generate")} for your changes to take effect.`, this.config.clientVersion);
          return r;
        }
      }
      parseEngineResponse(r) {
        if (!r)
          throw new W("Response from the Engine was empty", { clientVersion: this.config.clientVersion });
        try {
          return JSON.parse(r);
        } catch {
          throw new W("Unable to JSON.parse response from engine", { clientVersion: this.config.clientVersion });
        }
      }
      async loadEngine() {
        if (!this.engine) {
          this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(this.config), this.QueryEngineConstructor = this.library.QueryEngine);
          try {
            let r = new WeakRef(this), { adapter: n } = this.config;
            n && qe("Using driver adapter: %O", n), this.engine = new this.QueryEngineConstructor({ datamodel: this.datamodel, env: process.env, logQueries: this.config.logQueries ?? false, ignoreEnvVarErrors: true, datasourceOverrides: this.datasourceOverrides ?? {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: "json" }, (i) => {
              r.deref()?.logger(i);
            }, n), kl++;
          } catch (r) {
            let n = r, i = this.parseInitError(n.message);
            throw typeof i == "string" ? n : new k(i.message, this.config.clientVersion, i.error_code);
          }
        }
      }
      logger(r) {
        let n = this.parseEngineResponse(r);
        if (n) {
          if ("span" in n) {
            this.config.tracingHelper.createEngineSpan(n);
            return;
          }
          n.level = n?.level.toLowerCase() ?? "unknown", Uf(n) ? this.logEmitter.emit("query", { timestamp: /* @__PURE__ */ new Date(), query: n.query, params: n.params, duration: Number(n.duration_ms), target: n.module_path }) : Kf(n) ? this.loggerRustPanic = new be(this.getErrorMessageWithLink(`${n.message}: ${n.reason} in ${n.file}:${n.line}:${n.column}`), this.config.clientVersion) : this.logEmitter.emit(n.level, { timestamp: /* @__PURE__ */ new Date(), message: n.message, target: n.module_path });
        }
      }
      getErrorMessageWithLink(r) {
        return bl({ platform: this.platform, title: r, version: this.config.clientVersion, engineVersion: this.versionInfo?.commit, database: this.config.activeProvider, query: this.lastQuery });
      }
      parseInitError(r) {
        try {
          return JSON.parse(r);
        } catch {
        }
        return r;
      }
      parseRequestError(r) {
        try {
          return JSON.parse(r);
        } catch {
        }
        return r;
      }
      on(r, n) {
        if (r === "beforeExit")
          throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
        this.logEmitter.on(r, n);
      }
      async start() {
        if (await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise)
          return qe(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
        if (this.libraryStarted)
          return;
        let r = async () => {
          qe("library starting");
          try {
            let n = { traceparent: this.config.tracingHelper.getTraceParent() };
            await this.engine?.connect(JSON.stringify(n)), this.libraryStarted = true, qe("library started");
          } catch (n) {
            let i = this.parseInitError(n.message);
            throw typeof i == "string" ? n : new k(i.message, this.config.clientVersion, i.error_code);
          } finally {
            this.libraryStartingPromise = void 0;
          }
        };
        return this.libraryStartingPromise = this.config.tracingHelper.runInChildSpan("connect", r), this.libraryStartingPromise;
      }
      async stop() {
        if (await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise)
          return qe("library is already stopping"), this.libraryStoppingPromise;
        if (!this.libraryStarted)
          return;
        let r = async () => {
          await new Promise((i) => setTimeout(i, 5)), qe("library stopping");
          let n = { traceparent: this.config.tracingHelper.getTraceParent() };
          await this.engine?.disconnect(JSON.stringify(n)), this.libraryStarted = false, this.libraryStoppingPromise = void 0, qe("library stopped");
        };
        return this.libraryStoppingPromise = this.config.tracingHelper.runInChildSpan("disconnect", r), this.libraryStoppingPromise;
      }
      version() {
        return this.versionInfo = this.library?.version(), this.versionInfo?.version ?? "unknown";
      }
      debugPanic(r) {
        return this.library?.debugPanic(r);
      }
      async request(r, { traceparent: n, interactiveTransaction: i }) {
        qe(`sending request, this.libraryStarted: ${this.libraryStarted}`);
        let o = JSON.stringify({ traceparent: n }), s = JSON.stringify(r);
        try {
          await this.start(), this.executingQueryPromise = this.engine?.query(s, o, i?.id), this.lastQuery = s;
          let a = this.parseEngineResponse(await this.executingQueryPromise);
          if (a.errors)
            throw a.errors.length === 1 ? this.buildQueryError(a.errors[0]) : new W(JSON.stringify(a.errors), { clientVersion: this.config.clientVersion });
          if (this.loggerRustPanic)
            throw this.loggerRustPanic;
          return { data: a, elapsed: 0 };
        } catch (a) {
          if (a instanceof k)
            throw a;
          if (a.code === "GenericFailure" && a.message?.startsWith("PANIC:"))
            throw new be(this.getErrorMessageWithLink(a.message), this.config.clientVersion);
          let l = this.parseRequestError(a.message);
          throw typeof l == "string" ? a : new W(`${l.message}
${l.backtrace}`, { clientVersion: this.config.clientVersion });
        }
      }
      async requestBatch(r, { transaction: n, traceparent: i }) {
        qe("requestBatch");
        let o = Vn(r, n);
        await this.start(), this.lastQuery = JSON.stringify(o), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({ traceparent: i }), Cl(n));
        let s = await this.executingQueryPromise, a = this.parseEngineResponse(s);
        if (a.errors)
          throw a.errors.length === 1 ? this.buildQueryError(a.errors[0]) : new W(JSON.stringify(a.errors), { clientVersion: this.config.clientVersion });
        let { batchResult: l, errors: u } = a;
        if (Array.isArray(l))
          return l.map((c) => c.errors && c.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(c.errors[0]) : { data: c, elapsed: 0 });
        throw u && u.length === 1 ? new Error(u[0].error) : new Error(JSON.stringify(a));
      }
      buildQueryError(r) {
        if (r.user_facing_error.is_panic)
          return new be(this.getErrorMessageWithLink(r.user_facing_error.message), this.config.clientVersion);
        let n = this.getExternalAdapterError(r.user_facing_error);
        return n ? n.error : Pr(r, this.config.clientVersion);
      }
      getExternalAdapterError(r) {
        if (r.error_code === Bf && this.config.adapter) {
          let n = r.meta?.id;
          pn(typeof n == "number", "Malformed external JS error received from the engine");
          let i = this.config.adapter.errorRegistry.consumeError(n);
          return pn(i, "External error with reported id was not registered"), i;
        }
      }
      async metrics(r) {
        await this.start();
        let n = await this.engine.metrics(JSON.stringify(r));
        return r.format === "prometheus" ? n : this.parseEngineResponse(n);
      }
    };
    function Qf(e) {
      return typeof e == "object" && e !== null && e.error_code !== void 0;
    }
    function Fl(e, t) {
      let r;
      try {
        r = Bn({ inlineDatasources: t.inlineDatasources, overrideDatasources: t.overrideDatasources, env: { ...t.env, ...process.env }, clientVersion: t.clientVersion });
      } catch {
      }
      e.noEngine !== true && r?.startsWith("prisma://") && lr("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
      let n = gt(t.generator);
      if (n === "wasm" && t.adapter !== void 0)
        return new zt(t);
      if (r?.startsWith("prisma://") || e.noEngine)
        return new Nr(t);
      if (n === "library")
        return new zt(t);
      throw "binary", new se("Invalid client engine type, please use `library` or `binary`", { clientVersion: t.clientVersion });
    }
    function zn({ generator: e }) {
      return e?.previewFeatures ?? [];
    }
    var ql = F(Do());
    function Ll(e, t) {
      let r = $l(e), n = Gf(r), i = Hf(n);
      i ? Yn(i, t) : t.addErrorMessage(() => "Unknown error");
    }
    function $l(e) {
      return e.errors.flatMap((t) => t.kind === "Union" ? $l(t) : [t]);
    }
    function Gf(e) {
      let t = /* @__PURE__ */ new Map(), r = [];
      for (let n of e) {
        if (n.kind !== "InvalidArgumentType") {
          r.push(n);
          continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
        o ? t.set(i, { ...n, argument: { ...n.argument, typeNames: Jf(o.argument.typeNames, n.argument.typeNames) } }) : t.set(i, n);
      }
      return r.push(...t.values()), r;
    }
    function Jf(e, t) {
      return [...new Set(e.concat(t))];
    }
    function Hf(e) {
      return Qi(e, (t, r) => {
        let n = Dl(t), i = Dl(r);
        return n !== i ? n - i : Nl(t) - Nl(r);
      });
    }
    function Dl(e) {
      let t = 0;
      return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
    }
    function Nl(e) {
      switch (e.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    var Ge = class {
      constructor(t, r) {
        this.name = t;
        this.value = r;
        this.isRequired = false;
      }
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
      }
    };
    var Zn = class {
      constructor() {
        this.fields = [];
      }
      addField(t, r) {
        return this.fields.push({ write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
        } }), this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.writeLine(r("{")).withIndent(() => {
          t.writeJoined(Bt, this.fields).newLine();
        }).write(r("}")).addMarginSymbol(r("+"));
      }
    };
    function Yn(e, t) {
      switch (e.kind) {
        case "IncludeAndSelect":
          Wf(e, t);
          break;
        case "IncludeOnScalar":
          zf(e, t);
          break;
        case "EmptySelection":
          Yf(e, t);
          break;
        case "UnknownSelectionField":
          Zf(e, t);
          break;
        case "UnknownArgument":
          Xf(e, t);
          break;
        case "UnknownInputField":
          eg(e, t);
          break;
        case "RequiredArgumentMissing":
          tg(e, t);
          break;
        case "InvalidArgumentType":
          rg(e, t);
          break;
        case "InvalidArgumentValue":
          ng(e, t);
          break;
        case "ValueTooLarge":
          ig(e, t);
          break;
        case "SomeFieldsMissing":
          og(e, t);
          break;
        case "TooManyFieldsGiven":
          sg(e, t);
          break;
        case "Union":
          Ll(e, t);
          break;
        default:
          throw new Error("not implemented: " + e.kind);
      }
    }
    function Wf(e, t) {
      let r = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      r && r instanceof z && (r.getField("include")?.markAsError(), r.getField("select")?.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green("`include`")} or ${n.green("`select`")}, but ${n.red("not both")} at the same time.`);
    }
    function zf(e, t) {
      let [r, n] = Xn(e.selectionPath), i = e.outputType, o = t.arguments.getDeepSelectionParent(r)?.value;
      if (o && (o.getField(n)?.markAsError(), i))
        for (let s of i.fields)
          s.isRelation && o.addSuggestion(new Ge(s.name, "true"));
      t.addErrorMessage((s) => {
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${jr(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
      });
    }
    function Yf(e, t) {
      let r = e.outputType, n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? false;
      n && (n.removeAllFields(), Bl(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${jr(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
    }
    function Zf(e, t) {
      let [r, n] = Xn(e.selectionPath), i = t.arguments.getDeepSelectionParent(r);
      i && (i.value.getField(n)?.markAsError(), Bl(i.value, e.outputType)), t.addErrorMessage((o) => {
        let s = [`Unknown field ${o.red(`\`${n}\``)}`];
        return i && s.push(`for ${o.bold(i.kind)} statement`), s.push(`on model ${o.bold(`\`${e.outputType.name}\``)}.`), s.push(jr(o)), s.join(" ");
      });
    }
    function Xf(e, t) {
      let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof z && (n.getField(r)?.markAsError(), ag(n, e.arguments)), t.addErrorMessage((i) => jl(i, r, e.arguments.map((o) => o.name)));
    }
    function eg(e, t) {
      let [r, n] = Xn(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (i instanceof z) {
        i.getDeepField(e.argumentPath)?.markAsError();
        let o = i.getDeepFieldValue(r);
        o instanceof z && Ul(o, e.inputType);
      }
      t.addErrorMessage((o) => jl(o, n, e.inputType.fields.map((s) => s.name)));
    }
    function jl(e, t, r) {
      let n = [`Unknown argument \`${e.red(t)}\`.`], i = ug(t, r);
      return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(jr(e)), n.join(" ");
    }
    function tg(e, t) {
      let r;
      t.addErrorMessage((l) => r?.value instanceof Y && r.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (!(n instanceof z))
        return;
      let [i, o] = Xn(e.argumentPath), s = new Zn(), a = n.getDeepFieldValue(i);
      if (a instanceof z)
        if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
          for (let l of e.inputTypes[0].fields)
            s.addField(l.name, l.typeNames.join(" | "));
          a.addSuggestion(new Ge(o, s).makeRequired());
        } else {
          let l = e.inputTypes.map(Vl).join(" | ");
          a.addSuggestion(new Ge(o, l).makeRequired());
        }
    }
    function Vl(e) {
      return e.kind === "list" ? `${Vl(e.elementType)}[]` : e.name;
    }
    function rg(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof z && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = ei("or", e.argument.typeNames.map((s) => i.green(s)));
        return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
      });
    }
    function ng(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      n instanceof z && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = [`Invalid value for argument \`${i.bold(r)}\``];
        if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
          let s = ei("or", e.argument.typeNames.map((a) => i.green(a)));
          o.push(` Expected ${s}.`);
        }
        return o.join("");
      });
    }
    function ig(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath), i;
      if (n instanceof z) {
        let s = n.getDeepField(e.argumentPath)?.value;
        s?.markAsError(), s instanceof Y && (i = s.text);
      }
      t.addErrorMessage((o) => {
        let s = ["Unable to fit value"];
        return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
      });
    }
    function og(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath);
      if (n instanceof z) {
        let i = n.getDeepFieldValue(e.argumentPath);
        i instanceof z && Ul(i, e.inputType);
      }
      t.addErrorMessage((i) => {
        let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${ei("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(jr(i)), o.join(" ");
      });
    }
    function sg(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath), i = [];
      if (n instanceof z) {
        let o = n.getDeepFieldValue(e.argumentPath);
        o instanceof z && (o.markAsError(), i = Object.keys(o.getFields()));
      }
      t.addErrorMessage((o) => {
        let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${ei("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    function Bl(e, t) {
      for (let r of t.fields)
        e.hasField(r.name) || e.addSuggestion(new Ge(r.name, "true"));
    }
    function ag(e, t) {
      for (let r of t)
        e.hasField(r.name) || e.addSuggestion(new Ge(r.name, r.typeNames.join(" | ")));
    }
    function Ul(e, t) {
      if (t.kind === "object")
        for (let r of t.fields)
          e.hasField(r.name) || e.addSuggestion(new Ge(r.name, r.typeNames.join(" | ")));
    }
    function Xn(e) {
      let t = [...e], r = t.pop();
      if (!r)
        throw new Error("unexpected empty path");
      return [t, r];
    }
    function jr({ green: e, enabled: t }) {
      return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
    }
    function ei(e, t) {
      if (t.length === 1)
        return t[0];
      let r = [...t], n = r.pop();
      return `${r.join(", ")} ${e} ${n}`;
    }
    var lg = 3;
    function ug(e, t) {
      let r = 1 / 0, n;
      for (let i of t) {
        let o = (0, ql.default)(e, i);
        o > lg || o < r && (r = o, n = i);
      }
      return n;
    }
    function ti({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o }) {
      let s = Sn(e);
      for (let p of t)
        Yn(p, s);
      let a = r === "pretty" ? Ea : Rn, l = s.renderAllMessages(a), u = new Nt(0, { colors: a }).write(s).toString(), c = Qt({ message: l, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: u });
      throw new se(c, { clientVersion: o });
    }
    var cg = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", update: "updateOne", updateMany: "updateMany", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    function Kl({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i, callsite: o, clientMethod: s, errorFormat: a, clientVersion: l }) {
      let u = new No({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l });
      return { modelName: e, action: cg[t], query: Lo(r, u) };
    }
    function Lo({ select: e, include: t, ...r } = {}, n) {
      return { arguments: Gl(r, n), selection: pg(e, t, n) };
    }
    function pg(e, t, r) {
      return e && t && r.throwValidationError({ kind: "IncludeAndSelect", selectionPath: r.getSelectionPath() }), e ? fg(e, r) : dg(r, t);
    }
    function dg(e, t) {
      let r = {};
      return e.model && !e.isRawAction() && (r.$composites = true, r.$scalars = true), t && mg(r, t, e), r;
    }
    function mg(e, t, r) {
      for (let [n, i] of Object.entries(t)) {
        let o = r.findField(n);
        o && o?.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), i === true ? e[n] = true : typeof i == "object" && (e[n] = Lo(i, r.nestSelection(n)));
      }
    }
    function fg(e, t) {
      let r = {}, n = t.getComputedFields(), i = rl(e, n);
      for (let [o, s] of Object.entries(i)) {
        let a = t.findField(o);
        n?.[o] && !a || (s === true ? r[o] = true : typeof s == "object" && (r[o] = Lo(s, t.nestSelection(o))));
      }
      return r;
    }
    function Ql(e, t) {
      if (e === null)
        return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean")
        return e;
      if (typeof e == "bigint")
        return { $type: "BigInt", value: String(e) };
      if (Lt(e)) {
        if (bn(e))
          return { $type: "DateTime", value: e.toISOString() };
        t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (Vt(e))
        return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
      if (Array.isArray(e))
        return gg(e, t);
      if (ArrayBuffer.isView(e))
        return { $type: "Bytes", value: Buffer.from(e).toString("base64") };
      if (yg(e))
        return e.values;
      if (jt(e))
        return { $type: "Decimal", value: e.toFixed() };
      if (e instanceof ke) {
        if (e !== fn.instances[e._getName()])
          throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: e._getName() };
      }
      if (hg(e))
        return e.toJSON();
      if (typeof e == "object")
        return Gl(e, t);
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    function Gl(e, t) {
      if (e.$type)
        return { $type: "Json", value: JSON.stringify(e) };
      let r = {};
      for (let n in e) {
        let i = e[n];
        i !== void 0 && (r[n] = Ql(i, t.nestArgument(n)));
      }
      return r;
    }
    function gg(e, t) {
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let i = t.nestArgument(String(n)), o = e[n];
        o === void 0 && t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: "Can not use `undefined` value within array. Use `null` or filter out `undefined` values" }), r.push(Ql(o, i));
      }
      return r;
    }
    function yg(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    function hg(e) {
      return typeof e == "object" && e !== null && typeof e.toJSON == "function";
    }
    var No = class e {
      constructor(t) {
        this.params = t;
        this.params.modelName && (this.model = this.params.runtimeDataModel.models[this.params.modelName]);
      }
      throwValidationError(t) {
        ti({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.model))
          return { name: this.params.modelName, fields: this.model.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      getComputedFields() {
        if (this.params.modelName)
          return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(t) {
        return this.model?.fields.find((r) => r.name === t);
      }
      nestSelection(t) {
        let r = this.findField(t), n = r?.kind === "object" ? r.type : void 0;
        return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t) });
      }
      nestArgument(t) {
        return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
      }
    };
    var Jl = (e) => ({ command: e });
    var Hl = (e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`);
    function Vr(e) {
      try {
        return Wl(e, "fast");
      } catch {
        return Wl(e, "slow");
      }
    }
    function Wl(e, t) {
      return JSON.stringify(e.map((r) => bg(r, t)));
    }
    function bg(e, t) {
      return typeof e == "bigint" ? { prisma__type: "bigint", prisma__value: e.toString() } : Lt(e) ? { prisma__type: "date", prisma__value: e.toJSON() } : Ne.isDecimal(e) ? { prisma__type: "decimal", prisma__value: e.toJSON() } : Buffer.isBuffer(e) ? { prisma__type: "bytes", prisma__value: e.toString("base64") } : xg(e) || ArrayBuffer.isView(e) ? { prisma__type: "bytes", prisma__value: Buffer.from(e).toString("base64") } : typeof e == "object" && t === "slow" ? Yl(e) : e;
    }
    function xg(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    function Yl(e) {
      if (typeof e != "object" || e === null)
        return e;
      if (typeof e.toJSON == "function")
        return e.toJSON();
      if (Array.isArray(e))
        return e.map(zl);
      let t = {};
      for (let r of Object.keys(e))
        t[r] = zl(e[r]);
      return t;
    }
    function zl(e) {
      return typeof e == "bigint" ? e.toString() : Yl(e);
    }
    var wg = /^(\s*alter\s)/i;
    var Zl = $("prisma:client");
    function $o(e, t, r, n) {
      if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && wg.exec(t))
        throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    var qo = ({ clientMethod: e, activeProvider: t, driverAdapterProvider: r }) => (n) => {
      r !== void 0 && (t = r);
      let i = "", o;
      if (Array.isArray(n)) {
        let [s, ...a] = n;
        i = s, o = { values: Vr(a || []), __prismaRawParameters__: true };
      } else
        switch (t) {
          case "sqlite":
          case "mysql": {
            i = n.sql, o = { values: Vr(n.values), __prismaRawParameters__: true };
            break;
          }
          case "cockroachdb":
          case "postgresql":
          case "postgres": {
            i = n.text, o = { values: Vr(n.values), __prismaRawParameters__: true };
            break;
          }
          case "sqlserver": {
            i = Hl(n), o = { values: Vr(n.values), __prismaRawParameters__: true };
            break;
          }
          default:
            throw new Error(`The ${t} provider does not support ${e}`);
        }
      return o?.values ? Zl(`prisma.${e}(${i}, ${o.values})`) : Zl(`prisma.${e}(${i})`), { query: i, parameters: o };
    };
    var Xl = { requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    }, middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new me(t, r);
    } };
    var eu = { requestArgsToMiddlewareArgs(e) {
      return [e];
    }, middlewareArgsToRequestArgs(e) {
      return e[0];
    } };
    function jo(e) {
      return function(r) {
        let n, i = (o = e) => {
          try {
            return o === void 0 || o?.kind === "itx" ? n ?? (n = tu(r(o))) : tu(r(o));
          } catch (s) {
            return Promise.reject(s);
          }
        };
        return { then(o, s) {
          return i().then(o, s);
        }, catch(o) {
          return i().catch(o);
        }, finally(o) {
          return i().finally(o);
        }, requestTransaction(o) {
          let s = i(o);
          return s.requestTransaction ? s.requestTransaction(o) : s;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    function tu(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    var ru = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, async createEngineSpan() {
    }, getActiveContext() {
    }, runInChildSpan(e, t) {
      return t();
    } };
    var Vo = class {
      isEnabled() {
        return this.getGlobalTracingHelper().isEnabled();
      }
      getTraceParent(t) {
        return this.getGlobalTracingHelper().getTraceParent(t);
      }
      createEngineSpan(t) {
        return this.getGlobalTracingHelper().createEngineSpan(t);
      }
      getActiveContext() {
        return this.getGlobalTracingHelper().getActiveContext();
      }
      runInChildSpan(t, r) {
        return this.getGlobalTracingHelper().runInChildSpan(t, r);
      }
      getGlobalTracingHelper() {
        return globalThis.PRISMA_INSTRUMENTATION?.helper ?? ru;
      }
    };
    function nu(e) {
      return e.includes("tracing") ? new Vo() : ru;
    }
    function iu(e, t = () => {
    }) {
      let r, n = new Promise((i) => r = i);
      return { then(i) {
        return --e === 0 && r(t()), i?.(n);
      } };
    }
    function ou(e) {
      return typeof e == "string" ? e : e.reduce((t, r) => {
        let n = typeof r == "string" ? r : r.level;
        return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
      }, void 0);
    }
    var ri = class {
      constructor() {
        this._middlewares = [];
      }
      use(t) {
        this._middlewares.push(t);
      }
      get(t) {
        return this._middlewares[t];
      }
      has(t) {
        return !!this._middlewares[t];
      }
      length() {
        return this._middlewares.length;
      }
    };
    var au = F(Bi());
    function ni(e) {
      return typeof e.batchRequestIdx == "number";
    }
    function ii(e) {
      return e === null ? e : Array.isArray(e) ? e.map(ii) : typeof e == "object" ? Eg(e) ? Pg(e) : Ot(e, ii) : e;
    }
    function Eg(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    function Pg({ $type: e, value: t }) {
      switch (e) {
        case "BigInt":
          return BigInt(t);
        case "Bytes":
          return Buffer.from(t, "base64");
        case "DateTime":
          return new Date(t);
        case "Decimal":
          return new Ne(t);
        case "Json":
          return JSON.parse(t);
        default:
          yt(t, "Unknown tagged value");
      }
    }
    function su(e) {
      if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow")
        return;
      let t = [];
      return e.modelName && t.push(e.modelName), e.query.arguments && t.push(Bo(e.query.arguments)), t.push(Bo(e.query.selection)), t.join("");
    }
    function Bo(e) {
      return `(${Object.keys(e).sort().map((r) => {
        let n = e[r];
        return typeof n == "object" && n !== null ? `(${r} ${Bo(n)})` : r;
      }).join(" ")})`;
    }
    var vg = { aggregate: false, aggregateRaw: false, createMany: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateOne: true, upsertOne: true };
    function Uo(e) {
      return vg[e];
    }
    var oi = class {
      constructor(t) {
        this.options = t;
        this.tickActive = false;
        this.batches = {};
      }
      request(t) {
        let r = this.options.batchBy(t);
        return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, process.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        })) : this.options.singleLoader(t);
      }
      dispatchBatches() {
        for (let t in this.batches) {
          let r = this.batches[t];
          delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
            n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
          }).catch((n) => {
            r[0].reject(n);
          }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
            if (n instanceof Error)
              for (let i = 0; i < r.length; i++)
                r[i].reject(n);
            else
              for (let i = 0; i < r.length; i++) {
                let o = n[i];
                o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
              }
          }).catch((n) => {
            for (let i = 0; i < r.length; i++)
              r[i].reject(n);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    };
    var _g = $("prisma:client:request_handler");
    var si = class {
      constructor(t, r) {
        this.logEmitter = r, this.client = t, this.dataloader = new oi({ batchLoader: Ya(async ({ requests: n, customDataProxyFetch: i }) => {
          let { transaction: o, otelParentCtx: s } = n[0], a = n.map((p) => p.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), u = n.some((p) => Uo(p.protocolQuery.action));
          return (await this.client._engine.requestBatch(a, { traceparent: l, transaction: Tg(o), containsWrite: u, customDataProxyFetch: i })).map((p, d) => {
            if (p instanceof Error)
              return p;
            try {
              return this.mapQueryEngineResult(n[d], p);
            } catch (f) {
              return f;
            }
          });
        }), singleLoader: async (n) => {
          let i = n.transaction?.kind === "itx" ? lu(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: Uo(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, o);
        }, batchBy: (n) => n.transaction?.id ? `transaction-${n.transaction.id}` : su(n.protocolQuery), batchOrder(n, i) {
          return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0;
        } });
      }
      async request(t) {
        try {
          return await this.dataloader.request(t);
        } catch (r) {
          let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = t;
          this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a });
        }
      }
      mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
        let i = n?.data, o = n?.elapsed, s = this.unpack(i, t, r);
        return process.env.PRISMA_CLIENT_GET_TIME ? { data: s, elapsed: o } : s;
      }
      handleAndLogRequestError(t) {
        try {
          this.handleRequestError(t);
        } catch (r) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: /* @__PURE__ */ new Date() }), r;
        }
      }
      handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s }) {
        if (_g(t), Cg(t, i) || t instanceof Be)
          throw t;
        if (t instanceof H && Ag(t)) {
          let l = uu(t.meta);
          ti({ args: o, errors: [l], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion });
        }
        let a = t.message;
        if (n && (a = Qt({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: a })), a = this.sanitizeMessage(a), t.code) {
          let l = s ? { modelName: s, ...t.meta } : t.meta;
          throw new H(a, { code: t.code, clientVersion: this.client._clientVersion, meta: l, batchRequestIdx: t.batchRequestIdx });
        } else {
          if (t.isPanic)
            throw new be(a, this.client._clientVersion);
          if (t instanceof W)
            throw new W(a, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx });
          if (t instanceof k)
            throw new k(a, this.client._clientVersion);
          if (t instanceof be)
            throw new be(a, this.client._clientVersion);
        }
        throw t.clientVersion = this.client._clientVersion, t;
      }
      sanitizeMessage(t) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, au.default)(t) : t;
      }
      unpack(t, r, n) {
        if (!t || (t.data && (t = t.data), !t))
          return t;
        let i = Object.values(t)[0], o = r.filter((a) => a !== "select" && a !== "include"), s = ii(uo(i, o));
        return n ? n(s) : s;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    };
    function Tg(e) {
      if (e) {
        if (e.kind === "batch")
          return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
        if (e.kind === "itx")
          return { kind: "itx", options: lu(e) };
        yt(e, "Unknown transaction kind");
      }
    }
    function lu(e) {
      return { id: e.id, payload: e.payload };
    }
    function Cg(e, t) {
      return ni(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
    }
    function Ag(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    function uu(e) {
      if (e.kind === "Union")
        return { kind: "Union", errors: e.errors.map(uu) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...t] = e.selectionPath;
        return { ...e, selectionPath: t };
      }
      return e;
    }
    var cu = "5.7.1";
    var pu = cu;
    function du(e) {
      return e.map((t) => {
        let r = {};
        for (let n of Object.keys(t))
          r[n] = mu(t[n]);
        return r;
      });
    }
    function mu({ prisma__type: e, prisma__value: t }) {
      switch (e) {
        case "bigint":
          return BigInt(t);
        case "bytes":
          return Buffer.from(t, "base64");
        case "decimal":
          return new Ne(t);
        case "datetime":
        case "date":
          return new Date(t);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
        case "array":
          return t.map(mu);
        default:
          return t;
      }
    }
    var hu = F(Do());
    var U = class extends Error {
      constructor(t) {
        super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    };
    v(U, "PrismaClientConstructorValidationError");
    var fu = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "__internal"];
    var gu = ["pretty", "colorless", "minimal"];
    var yu = ["info", "query", "warn", "error"];
    var Mg = { datasources: (e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e))
          throw new U(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = Yt(r, t) || ` Available datasources: ${t.join(", ")}`;
            throw new U(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`);
          }
          if (typeof n != "object" || Array.isArray(n))
            throw new U(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object")
            for (let [i, o] of Object.entries(n)) {
              if (i !== "url")
                throw new U(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
              if (typeof o != "string")
                throw new U(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            }
        }
      }
    }, adapter: (e, t) => {
      if (e === null)
        return;
      if (e === void 0)
        throw new U('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
      if (!zn(t).includes("driverAdapters"))
        throw new U('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
      if (gt() === "binary")
        throw new U('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
    }, datasourceUrl: (e) => {
      if (typeof e < "u" && typeof e != "string")
        throw new U(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    }, errorFormat: (e) => {
      if (e) {
        if (typeof e != "string")
          throw new U(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!gu.includes(e)) {
          let t = Yt(e, gu);
          throw new U(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
        }
      }
    }, log: (e) => {
      if (!e)
        return;
      if (!Array.isArray(e))
        throw new U(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function t(r) {
        if (typeof r == "string" && !yu.includes(r)) {
          let n = Yt(r, yu);
          throw new U(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
        }
      }
      for (let r of e) {
        t(r);
        let n = { level: t, emit: (i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = Yt(i, o);
            throw new U(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        } };
        if (r && typeof r == "object")
          for (let [i, o] of Object.entries(r))
            if (n[i])
              n[i](o);
            else
              throw new U(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    }, __internal: (e) => {
      if (!e)
        return;
      let t = ["debug", "hooks", "engine", "measurePerformance"];
      if (typeof e != "object")
        throw new U(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [r] of Object.entries(e))
        if (!t.includes(r)) {
          let n = Yt(r, t);
          throw new U(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
        }
    } };
    function bu(e, t) {
      for (let [r, n] of Object.entries(e)) {
        if (!fu.includes(r)) {
          let i = Yt(r, fu);
          throw new U(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
        }
        Mg[r](n, t);
      }
      if (e.datasourceUrl && e.datasources)
        throw new U('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
    }
    function Yt(e, t) {
      if (t.length === 0 || typeof e != "string")
        return "";
      let r = Sg(e, t);
      return r ? ` Did you mean "${r}"?` : "";
    }
    function Sg(e, t) {
      if (t.length === 0)
        return null;
      let r = t.map((i) => ({ value: i, distance: (0, hu.default)(e, i) }));
      r.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = r[0];
      return n.distance < 3 ? n.value : null;
    }
    function xu(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
        let n = new Array(e.length), i = null, o = false, s = 0, a = () => {
          o || (s++, s === e.length && (o = true, i ? r(i) : t(n)));
        }, l = (u) => {
          o || (o = true, r(u));
        };
        for (let u = 0; u < e.length; u++)
          e[u].then((c) => {
            n[u] = c, a();
          }, (c) => {
            if (!ni(c)) {
              l(c);
              return;
            }
            c.batchRequestIdx === u ? l(c) : (i || (i = c), a());
          });
      });
    }
    var lt = $("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var Ig = { requestArgsToMiddlewareArgs: (e) => e, middlewareArgsToRequestArgs: (e) => e };
    var kg = Symbol.for("prisma.client.transaction.id");
    var Fg = { id: 0, nextId() {
      return ++this.id;
    } };
    function _u(e) {
      class t {
        constructor(n) {
          this._middlewares = new ri();
          this._createPrismaPromise = jo();
          this.$extends = Ua;
          ol(e), n && bu(n, e);
          let i = n?.adapter ? Yi(n.adapter) : void 0, o = new Pu.EventEmitter().on("error", () => {
          });
          this._extensions = Ln.empty(), this._previewFeatures = zn(e), this._clientVersion = e.clientVersion ?? pu, this._activeProvider = e.activeProvider, this._tracingHelper = nu(this._previewFeatures);
          let s = { rootEnvPath: e.relativeEnvPaths.rootEnvPath && Br.default.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && Br.default.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, a = !i && ir(s, { conflictCheck: "none" }) || e.injectableEdgeEnv?.();
          try {
            let l = n ?? {}, u = l.__internal ?? {}, c = u.debug === true;
            c && $.enable("prisma:client");
            let p = Br.default.resolve(e.dirname, e.relativePath);
            vu.default.existsSync(p) || (p = e.dirname), lt("dirname", e.dirname), lt("relativePath", e.relativePath), lt("cwd", p);
            let d = u.engine || {};
            if (l.errorFormat ? this._errorFormat = l.errorFormat : process.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : process.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: p, dirname: e.dirname, enableDebugLogs: c, allowTriggerPanic: d.allowTriggerPanic, datamodelPath: Br.default.join(e.dirname, e.filename ?? "schema.prisma"), prismaPath: d.binaryPath ?? void 0, engineEndpoint: d.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: l.log && ou(l.log), logQueries: l.log && !!(typeof l.log == "string" ? l.log === "query" : l.log.find((f) => typeof f == "string" ? f === "query" : f.level === "query")), env: a?.parsed ?? {}, flags: [], getQueryEngineWasmModule: e.getQueryEngineWasmModule, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: sl(l, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, logEmitter: o, isBundled: e.isBundled, adapter: i }, lt("clientVersion", e.clientVersion), this._engine = Fl(e, this._engineConfig), this._requestHandler = new si(this, o), l.log)
              for (let f of l.log) {
                let y = typeof f == "string" ? f : f.emit === "stdout" ? f.level : null;
                y && this.$on(y, (g) => {
                  ar.log(`${ar.tags[y] ?? ""}`, g.message || g.query);
                });
              }
            this._metrics = new Dt(this._engine);
          } catch (l) {
            throw l.clientVersion = this._clientVersion, l;
          }
          return this._appliedParent = wr(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        $use(n) {
          this._middlewares.use(n);
        }
        $on(n, i) {
          n === "beforeExit" ? this._engine.on("beforeExit", i) : this._engine.on(n, (o) => {
            let s = o.fields;
            return i(n === "query" ? { timestamp: o.timestamp, query: s?.query ?? o.query, params: s?.params ?? o.params, duration: s?.duration_ms ?? o.duration, target: o.target } : { timestamp: o.timestamp, message: s?.message ?? o.message, target: o.target });
          });
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        async $disconnect() {
          try {
            await this._engine.stop();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          } finally {
            cs();
          }
        }
        $executeRawInternal(n, i, o, s) {
          let a = this._activeProvider, l = this._engineConfig.adapter?.provider;
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: qo({ clientMethod: i, activeProvider: a, driverAdapterProvider: l }), callsite: ot(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a] = wu(n, i);
              return $o(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
            }
            throw new se("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => ($o(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb")
            throw new se(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: Jl, callsite: ot(this._errorFormat), transaction: i }));
        }
        async $queryRawInternal(n, i, o, s) {
          let a = this._activeProvider, l = this._engineConfig.adapter?.provider;
          return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: qo({ clientMethod: i, activeProvider: a, driverAdapterProvider: l }), callsite: ot(this._errorFormat), dataPath: [], middlewareArgsMapper: s }).then(du);
        }
        $queryRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0)
              return this.$queryRawInternal(o, "$queryRaw", ...wu(n, i));
            throw new se("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
        }
        _transactionWithArray({ promises: n, options: i }) {
          let o = Fg.nextId(), s = iu(n.length), a = n.map((l, u) => {
            if (l?.[Symbol.toStringTag] !== "PrismaPromise")
              throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let c = i?.isolationLevel, p = { kind: "batch", id: o, index: u, isolationLevel: c, lock: s };
            return l.requestTransaction?.(p) ?? l;
          });
          return xu(a);
        }
        async _transactionWithCallback({ callback: n, options: i }) {
          let o = { traceparent: this._tracingHelper.getTraceParent() }, s = await this._engine.transaction("start", o, i), a;
          try {
            let l = { kind: "itx", ...s };
            a = await n(this._createItxClient(l)), await this._engine.transaction("commit", o, s);
          } catch (l) {
            throw await this._engine.transaction("rollback", o, s).catch(() => {
            }), l;
          }
          return a;
        }
        _createItxClient(n) {
          return wr(Oe(On(this), [ce("_appliedParent", () => this._appliedParent._createItxClient(n)), ce("_createPrismaPromise", () => jo(n)), ce(kg, () => n.id), yr(Ji)]));
        }
        $transaction(n, i) {
          let o;
          typeof n == "function" ? o = () => this._transactionWithCallback({ callback: n, options: i }) : o = () => this._transactionWithArray({ promises: n, options: i });
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let i = n.middlewareArgsMapper ?? Ig, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = -1, l = async (u) => {
            let c = this._middlewares.get(++a);
            if (c)
              return this._tracingHelper.runInChildSpan(s.middleware, (T) => c(u, (A) => (T?.end(), l(A))));
            let { runInTransaction: p, args: d, ...f } = u, y = { ...n, ...f };
            d && (y.args = i.middlewareArgsToRequestArgs(d)), n.transaction !== void 0 && p === false && delete y.transaction;
            let g = await za(this, y);
            return y.model ? Ga({ result: g, modelName: y.model, args: y.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel }) : g;
          };
          return this._tracingHelper.runInChildSpan(s.operation, () => new Eu.AsyncResource("prisma-client-request").runInAsyncScope(() => l(o)));
        }
        async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: u, transaction: c, unpacker: p, otelParentCtx: d, customDataProxyFetch: f }) {
          try {
            n = u ? u(n) : n;
            let y = { name: "serialize" }, g = this._tracingHelper.runInChildSpan(y, () => Kl({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion }));
            return $.enabled("prisma:client") && (lt("Prisma Client call:"), lt(`prisma.${i}(${Ta(n)})`), lt("Generated request:"), lt(JSON.stringify(g, null, 2) + `
`)), c?.kind === "batch" && await c.lock, this._requestHandler.request({ protocolQuery: g, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: c, unpacker: p, otelParentCtx: d, otelChildCtx: this._tracingHelper.getActiveContext(), customDataProxyFetch: f });
          } catch (y) {
            throw y.clientVersion = this._clientVersion, y;
          }
        }
        get $metrics() {
          if (!this._hasPreviewFlag("metrics"))
            throw new se("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: this._clientVersion });
          return this._metrics;
        }
        _hasPreviewFlag(n) {
          return !!this._engineConfig.previewFeatures?.includes(n);
        }
      }
      return t;
    }
    function wu(e, t) {
      return Og(e) ? [new me(e, t), Xl] : [e, eu];
    }
    function Og(e) {
      return Array.isArray(e) && Array.isArray(e.raw);
    }
    var Dg = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function Tu(e) {
      return new Proxy(e, { get(t, r) {
        if (r in t)
          return t[r];
        if (!Dg.has(r))
          throw new TypeError(`Invalid enum value: ${String(r)}`);
      } });
    }
    function Cu(e) {
      ir(e, { conflictCheck: "warn" });
    }
  }
});

// node_modules/.pnpm/@prisma+client@5.7.1_prisma@5.7.1/node_modules/.prisma/client/index.js
var require_client = __commonJS({
  "node_modules/.pnpm/@prisma+client@5.7.1_prisma@5.7.1/node_modules/.prisma/client/index.js"(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
      PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
      PrismaClientRustPanicError: PrismaClientRustPanicError2,
      PrismaClientInitializationError: PrismaClientInitializationError2,
      PrismaClientValidationError: PrismaClientValidationError2,
      NotFoundError: NotFoundError2,
      getPrismaClient: getPrismaClient2,
      sqltag: sqltag2,
      empty: empty2,
      join: join2,
      raw: raw2,
      Decimal: Decimal2,
      Debug: Debug2,
      objectEnumValues: objectEnumValues2,
      makeStrictEnum: makeStrictEnum2,
      Extensions: Extensions2,
      warnOnce: warnOnce2,
      defineDmmfProperty: defineDmmfProperty2,
      Public: Public2,
      detectRuntime: detectRuntime2
    } = require_library();
    var Prisma = {};
    exports2.Prisma = Prisma;
    exports2.$Enums = {};
    Prisma.prismaVersion = {
      client: "5.7.1",
      engine: "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
    Prisma.PrismaClientValidationError = PrismaClientValidationError2;
    Prisma.NotFoundError = NotFoundError2;
    Prisma.Decimal = Decimal2;
    Prisma.sql = sqltag2;
    Prisma.empty = empty2;
    Prisma.join = join2;
    Prisma.raw = raw2;
    Prisma.validator = Public2.validator;
    Prisma.getExtensionContext = Extensions2.getExtensionContext;
    Prisma.defineExtension = Extensions2.defineExtension;
    Prisma.DbNull = objectEnumValues2.instances.DbNull;
    Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues2.classes.DbNull,
      JsonNull: objectEnumValues2.classes.JsonNull,
      AnyNull: objectEnumValues2.classes.AnyNull
    };
    var path = require("path");
    exports2.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports2.Prisma.PostScalarFieldEnum = {
      id: "id",
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      title: "title",
      content: "content",
      authorId: "authorId",
      imageUrl: "imageUrl",
      tags: "tags"
    };
    exports2.Prisma.UserScalarFieldEnum = {
      id: "id",
      email: "email",
      passwordHash: "passwordHash",
      name: "name",
      avatarUrl: "avatarUrl"
    };
    exports2.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports2.Prisma.NullsOrder = {
      first: "first",
      last: "last"
    };
    exports2.Prisma.ModelName = {
      Post: "Post",
      User: "User"
    };
    var config2 = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "E:\\study\\laobu\\familar-React-column\\umi4-my\\node_modules\\.pnpm\\@prisma+client@5.7.1_prisma@5.7.1\\node_modules\\@prisma\\client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [
          {
            "fromEnvVar": null,
            "value": "windows",
            "native": true
          }
        ],
        "previewFeatures": [
          "referentialIntegrity"
        ]
      },
      "relativeEnvPaths": {
        "rootEnvPath": "../../../../../../.env",
        "schemaEnvPath": "../../../../../../.env"
      },
      "relativePath": "../../../../../../prisma",
      "clientVersion": "5.7.1",
      "engineVersion": "0ca5ccbcfa6bdc81c003cf549abe4269f59c41e5",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "mysql",
      "postinstall": false,
      "inlineDatasources": {
        "db": {
          "url": {
            "fromEnvVar": "DATABASE_URL",
            "value": null
          }
        }
      },
      "inlineSchema": "Z2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyID0gInByaXNtYS1jbGllbnQtanMiDQogIHByZXZpZXdGZWF0dXJlcyA9IFsicmVmZXJlbnRpYWxJbnRlZ3JpdHkiXQ0KfQ0KDQpkYXRhc291cmNlIGRiIHsNCiAgcHJvdmlkZXIgPSAibXlzcWwiDQogIHJlZmVyZW50aWFsSW50ZWdyaXR5ID0gInByaXNtYSINCiAgdXJsICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpDQp9DQoNCm1vZGVsIFBvc3Qgew0KICBpZCAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgY3JlYXRlZEF0IERhdGVUaW1lIEBkZWZhdWx0KG5vdygpKQ0KICB1cGRhdGVkQXQgRGF0ZVRpbWUgQHVwZGF0ZWRBdA0KICB0aXRsZSAgICAgU3RyaW5nICAgQGRiLlZhckNoYXIoMjU1KQ0KICBjb250ZW50ICAgU3RyaW5nPw0KICBhdXRob3IgICAgVXNlciAgICAgQHJlbGF0aW9uKGZpZWxkczogW2F1dGhvcklkXSwgcmVmZXJlbmNlczogW2lkXSkNCiAgYXV0aG9ySWQgIEludA0KICBpbWFnZVVybCAgU3RyaW5nPw0KICB0YWdzICAgICAgU3RyaW5nDQoNCiAgQEBpbmRleChhdXRob3JJZCkNCn0NCg0KbW9kZWwgVXNlciB7DQogIGlkICAgICAgICAgICAgSW50ICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgZW1haWwgICAgICAgICBTdHJpbmcgICBAdW5pcXVlDQogIHBhc3N3b3JkSGFzaCAgU3RyaW5nDQogIG5hbWUgICAgICAgICAgU3RyaW5nPw0KICBwb3N0cyAgICAgICAgIFBvc3RbXQ0KICBhdmF0YXJVcmwgICAgIFN0cmluZz8NCn0=",
      "inlineSchemaHash": "f4f237ee2123adefb641c9992aee22896c2cde379eaa042a145c9fac847733e1",
      "noEngine": false
    };
    var fs2 = require("fs");
    config2.dirname = __dirname;
    if (!fs2.existsSync(path.join(__dirname, "schema.prisma"))) {
      const alternativePaths = [
        "node_modules/.pnpm/@prisma+client@5.7.1_prisma@5.7.1/node_modules/.prisma/client",
        ".pnpm/@prisma+client@5.7.1_prisma@5.7.1/node_modules/.prisma/client"
      ];
      const alternativePath = alternativePaths.find((altPath) => {
        return fs2.existsSync(path.join(process.cwd(), altPath, "schema.prisma"));
      }) ?? alternativePaths[0];
      config2.dirname = path.join(process.cwd(), alternativePath);
      config2.isBundled = true;
    }
    config2.runtimeDataModel = JSON.parse('{"models":{"Post":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"createdAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"updatedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","isGenerated":false,"isUpdatedAt":true},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"content","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"author","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","relationName":"PostToUser","relationFromFields":["authorId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"authorId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","isGenerated":false,"isUpdatedAt":false},{"name":"imageUrl","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"tags","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"User":{"dbName":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"passwordHash","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false},{"name":"posts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","relationName":"PostToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"avatarUrl","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}');
    defineDmmfProperty2(exports2.Prisma, config2.runtimeDataModel);
    config2.getQueryEngineWasmModule = void 0;
    var { warnEnvConflicts: warnEnvConflicts2 } = require_library();
    warnEnvConflicts2({
      rootEnvPath: config2.relativeEnvPaths.rootEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.rootEnvPath),
      schemaEnvPath: config2.relativeEnvPaths.schemaEnvPath && path.resolve(config2.dirname, config2.relativeEnvPaths.schemaEnvPath)
    });
    var PrismaClient2 = getPrismaClient2(config2);
    exports2.PrismaClient = PrismaClient2;
    Object.assign(exports2, Prisma);
    path.join(__dirname, "query_engine-windows.dll.node");
    path.join(process.cwd(), "node_modules/.pnpm/@prisma+client@5.7.1_prisma@5.7.1/node_modules/.prisma/client/query_engine-windows.dll.node");
    path.join(__dirname, "schema.prisma");
    path.join(process.cwd(), "node_modules/.pnpm/@prisma+client@5.7.1_prisma@5.7.1/node_modules/.prisma/client/schema.prisma");
  }
});

// node_modules/.pnpm/@prisma+client@5.7.1_prisma@5.7.1/node_modules/@prisma/client/index.js
var require_client2 = __commonJS({
  "node_modules/.pnpm/@prisma+client@5.7.1_prisma@5.7.1/node_modules/@prisma/client/index.js"(exports2, module2) {
    module2.exports = {
      ...require_client()
    };
  }
});

// node_modules/.pnpm/@umijs+preset-umi@4.0.89_@types+react@18.2.45_typescript@5.3.3_webpack@5.89.0/node_modules/@umijs/preset-umi/dist/features/apiRoute/utils.js
var require_utils = __commonJS({
  "node_modules/.pnpm/@umijs+preset-umi@4.0.89_@types+react@18.2.45_typescript@5.3.3_webpack@5.89.0/node_modules/@umijs/preset-umi/dist/features/apiRoute/utils.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to2, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to2, key) && key !== except)
            __defProp2(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to2;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var utils_exports = {};
    __export2(utils_exports, {
      esbuildIgnorePathPrefixPlugin: () => esbuildIgnorePathPrefixPlugin,
      matchApiRoute: () => matchApiRoute2
    });
    module2.exports = __toCommonJS2(utils_exports);
    function esbuildIgnorePathPrefixPlugin() {
      return {
        name: "ignore-path-prefix",
        setup(build) {
          build.onResolve({ filter: /^@fs/ }, (args) => ({
            path: args.path.replace(/^@fs/, "")
          }));
        }
      };
    }
    function matchApiRoute2(apiRoutes2, path) {
      if (path.startsWith("/"))
        path = path.substring(1);
      if (path.startsWith("api/"))
        path = path.substring(4);
      const pathSegments = path.split("/").filter((p) => p !== "");
      if (pathSegments.length === 0 || pathSegments.length === 1 && pathSegments[0] === "api") {
        const route2 = apiRoutes2.find((r) => r.path === "/");
        if (route2)
          return { route: route2, params: {} };
        else
          return void 0;
      }
      const params = {};
      const route = apiRoutes2.find((route2) => {
        const routePathSegments = route2.path.split("/").filter((p) => p !== "");
        if (routePathSegments.length !== pathSegments.length)
          return false;
        for (let i = 0; i < routePathSegments.length; i++) {
          const routePathSegment = routePathSegments[i];
          if (routePathSegment.match(/^\[.*]$/)) {
            params[routePathSegment.substring(1, routePathSegment.length - 1)] = pathSegments[i];
            if (i == routePathSegments.length - 1)
              return true;
            continue;
          }
          if (routePathSegment !== pathSegments[i])
            return false;
          if (i == routePathSegments.length - 1)
            return true;
        }
      });
      if (route)
        return { route, params };
    }
  }
});

// node_modules/.pnpm/@umijs+preset-umi@4.0.89_@types+react@18.2.45_typescript@5.3.3_webpack@5.89.0/node_modules/@umijs/preset-umi/dist/features/apiRoute/request.js
var require_request = __commonJS({
  "node_modules/.pnpm/@umijs+preset-umi@4.0.89_@types+react@18.2.45_typescript@5.3.3_webpack@5.89.0/node_modules/@umijs/preset-umi/dist/features/apiRoute/request.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to2, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to2, key) && key !== except)
            __defProp2(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to2;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var request_exports = {};
    __export2(request_exports, {
      default: () => request_default,
      parseMultipart: () => parseMultipart,
      parseUrlEncoded: () => parseUrlEncoded
    });
    module2.exports = __toCommonJS2(request_exports);
    var import_utils = require_utils();
    var UmiApiRequest3 = class {
      constructor(req, apiRoutes2) {
        this._params = {};
        this._body = null;
        this._req = req;
        const m2 = (0, import_utils.matchApiRoute)(apiRoutes2, this.pathName || "");
        if (m2)
          this._params = m2.params;
      }
      get params() {
        return this._params;
      }
      get body() {
        return this._body;
      }
      get headers() {
        return this._req.headers;
      }
      get method() {
        return this._req.method;
      }
      get query() {
        var _a2, _b;
        return ((_b = (_a2 = this._req.url) == null ? void 0 : _a2.split("?")[1]) == null ? void 0 : _b.split("&").reduce((acc, cur) => {
          const [key, value] = cur.split("=");
          const k2 = acc[key];
          if (k2) {
            if (k2 instanceof Array) {
              k2.push(value);
            } else {
              acc[key] = [k2, value];
            }
          } else {
            acc[key] = value;
          }
          return acc;
        }, {})) || {};
      }
      get cookies() {
        var _a2;
        return (_a2 = this._req.headers.cookie) == null ? void 0 : _a2.split(";").reduce((acc, cur) => {
          const [key, value] = cur.split("=");
          acc[key.trim()] = value;
          return acc;
        }, {});
      }
      get url() {
        return this._req.url;
      }
      get pathName() {
        var _a2;
        return (_a2 = this._req.url) == null ? void 0 : _a2.split("?")[0];
      }
      readBody() {
        if (this._req.headers["content-length"] === "0") {
          return Promise.resolve();
        }
        return new Promise((resolve, reject) => {
          let body = [];
          this._req.on("data", (chunk) => {
            body.push(chunk);
          });
          this._req.on("end", () => {
            var _a2, _b;
            const bodyBuffer = Buffer.concat(body);
            switch ((_a2 = this._req.headers["content-type"]) == null ? void 0 : _a2.split(";")[0]) {
              case "application/json":
                try {
                  this._body = JSON.parse(bodyBuffer.toString());
                } catch (e) {
                  this._body = body;
                }
                break;
              case "multipart/form-data":
                const boundary = (_b = this.headers["content-type"]) == null ? void 0 : _b.split("boundary=")[1];
                if (!boundary) {
                  this._body = body;
                  break;
                }
                this._body = parseMultipart(bodyBuffer, boundary);
                break;
              case "application/x-www-form-urlencoded":
                this._body = parseUrlEncoded(bodyBuffer.toString());
                break;
              default:
                this._body = body;
                break;
            }
            resolve();
          });
          this._req.on("error", reject);
        });
      }
    };
    function parseMultipart(body, boundary) {
      const hexBoundary = Buffer.from(`--${boundary}`, "utf-8").toString("hex");
      return body.toString("hex").split(hexBoundary).reduce((acc, cur) => {
        var _a2, _b;
        const [hexMeta, hexValue] = cur.split(
          Buffer.from("\r\n\r\n").toString("hex")
        );
        const meta = Buffer.from(hexMeta, "hex").toString("utf-8");
        const name = (_a2 = meta.split('name="')[1]) == null ? void 0 : _a2.split('"')[0];
        if (!name)
          return acc;
        const fileName = (_b = meta.split('filename="')[1]) == null ? void 0 : _b.split('"')[0];
        if (fileName) {
          const fileBufferBeforeTrim = Buffer.from(hexValue, "hex");
          const fileBuffer = fileBufferBeforeTrim.slice(
            0,
            fileBufferBeforeTrim.byteLength - 2
          );
          const contentType = meta.split("Content-Type: ")[1];
          acc[name] = {
            fileName,
            data: fileBuffer,
            contentType
          };
          return acc;
        }
        const valueBufferBeforeTrim = Buffer.from(hexValue, "hex");
        const valueBuffer = valueBufferBeforeTrim.slice(
          0,
          valueBufferBeforeTrim.byteLength - 2
        );
        acc[name] = valueBuffer.toString("utf-8");
        return acc;
      }, {});
    }
    function parseUrlEncoded(body) {
      return body.split("&").reduce((acc, cur) => {
        const [key, value] = cur.split("=");
        acc[key] = decodeURIComponent(value);
        return acc;
      }, {});
    }
    var request_default = UmiApiRequest3;
  }
});

// node_modules/.pnpm/@umijs+preset-umi@4.0.89_@types+react@18.2.45_typescript@5.3.3_webpack@5.89.0/node_modules/@umijs/preset-umi/dist/features/apiRoute/response.js
var require_response = __commonJS({
  "node_modules/.pnpm/@umijs+preset-umi@4.0.89_@types+react@18.2.45_typescript@5.3.3_webpack@5.89.0/node_modules/@umijs/preset-umi/dist/features/apiRoute/response.js"(exports2, module2) {
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to2, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to2, key) && key !== except)
            __defProp2(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to2;
    };
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var response_exports = {};
    __export2(response_exports, {
      default: () => response_default
    });
    module2.exports = __toCommonJS2(response_exports);
    var UmiApiResponse3 = class {
      constructor(res) {
        this._res = res;
      }
      status(statusCode) {
        this._res.statusCode = statusCode;
        return this;
      }
      header(key, value) {
        this._res.setHeader(key, value);
        return this;
      }
      setCookie(key, value) {
        this._res.setHeader("Set-Cookie", `${key}=${value}; path=/`);
        return this;
      }
      end(data) {
        this._res.end(data);
        return this;
      }
      text(data) {
        this._res.setHeader("Content-Type", "text/plain; charset=utf-8");
        this._res.end(data);
        return this;
      }
      html(data) {
        this._res.setHeader("Content-Type", "text/html; charset=utf-8");
        this._res.end(data);
        return this;
      }
      json(data) {
        this._res.setHeader("Content-Type", "application/json");
        this._res.end(JSON.stringify(data));
        return this;
      }
    };
    var response_default = UmiApiResponse3;
  }
});

// node_modules/.pnpm/@umijs+preset-umi@4.0.89_@types+react@18.2.45_typescript@5.3.3_webpack@5.89.0/node_modules/@umijs/preset-umi/dist/features/apiRoute/index.js
var require_apiRoute = __commonJS({
  "node_modules/.pnpm/@umijs+preset-umi@4.0.89_@types+react@18.2.45_typescript@5.3.3_webpack@5.89.0/node_modules/@umijs/preset-umi/dist/features/apiRoute/index.js"(exports2, module2) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to2, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to2, key) && key !== except)
            __defProp2(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to2;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS2 = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var apiRoute_exports = {};
    __export2(apiRoute_exports, {
      UmiApiRequest: () => import_request.default,
      UmiApiResponse: () => import_response.default,
      matchApiRoute: () => import_utils.matchApiRoute
    });
    module2.exports = __toCommonJS2(apiRoute_exports);
    var import_request = __toESM2(require_request());
    var import_response = __toESM2(require_response());
    var import_utils = require_utils();
  }
});

// src/.umi/api/posts/[postId].ts
var postId_exports = {};
__export(postId_exports, {
  default: () => postId_default2
});
module.exports = __toCommonJS(postId_exports);

// src/.umi/api/_middlewares.ts
var middlewares_default = async (req, res, next) => {
  next();
};

// src/api/posts/[postId].ts
var import_client = __toESM(require_client2());
async function postId_default(req, res) {
  let prisma;
  switch (req.method) {
    case "GET":
      let post;
      if (!post) {
        prisma = new import_client.PrismaClient();
        post = await prisma.post.findUnique({
          where: { id: +req.params.postId },
          include: { author: true }
        });
        if (post) {
          res.status(200).json(post);
        } else {
          res.status(404).json({ error: "Post not found." });
        }
        await prisma.$disconnect();
      }
      break;
    default:
      res.status(405).json({ error: "Method not allowed" });
  }
}

// src/.umi/api/posts/[postId].ts
var import_apiRoute = __toESM(require_apiRoute());
var apiRoutes = [{ "path": "posts/[postId]", "id": "posts/[postId]", "file": "posts/[postId].ts", "absPath": "/posts/[postId]", "__content": `import { UmiApiRequest, UmiApiResponse } from "umi";\r
import { PrismaClient } from '@prisma/client';\r
//import { Redis } from "@upstash/redis";\r
\r
export default async function (req: UmiApiRequest, res: UmiApiResponse) {\r
  let prisma: PrismaClient;\r
  switch (req.method) {\r
    case 'GET':\r
    //   const redis = Redis.fromEnv();\r
    //   let post = await redis.get('post-' + req.params.postId);\r
    //   if (post) {\r
    //     res.status(200).json(post);\r
    //     return;\r
    //   }\r
    let post \r
      if (!post) {\r
        prisma = new PrismaClient();\r
        post = await prisma.post.findUnique({\r
          where: { id: +req.params.postId },\r
          include: { author: true }\r
        });\r
        if (post) {\r
          res.status(200).json(post);\r
        } else {\r
          res.status(404).json({ error: 'Post not found.' });\r
        }\r
       // await redis.set('post-' + req.params.postId, JSON.stringify(post));\r
        await prisma.$disconnect();\r
      }\r
      break;\r
    default:\r
      res.status(405).json({ error: 'Method not allowed' })\r
  }\r
}` }, { "path": "posts", "id": "posts/index", "file": "posts/index.ts", "absPath": "/posts", "__content": `import { UmiApiRequest, UmiApiResponse } from "umi";\r
import { PrismaClient } from '@prisma/client'\r
//import { verifyToken } from "@/utils/jwt";\r
import { verifyToken } from "@/utils/jwt";\r
\r
export default async function (req: UmiApiRequest, res: UmiApiResponse) {\r
  let prisma: PrismaClient;\r
  switch (req.method) {\r
    case 'GET':\r
      prisma = new PrismaClient();\r
      const allPosts = await prisma.post.findMany({ include: { author: true } });\r
      res.status(200).json(allPosts);\r
      await prisma.$disconnect()\r
      break;\r
\r
    case 'POST':\r
      if (!req.cookies?.token) {\r
        return res.status(401).json({\r
          message: 'Unauthorized'\r
        })\r
      }\r
      const authorId = (await verifyToken(req.cookies.token)).id;\r
      prisma = new PrismaClient();\r
      const newPost = await prisma.post.create({\r
        data: {\r
          title: req.body.title,\r
          content: req.body.content,\r
          createdAt: new Date(),\r
          authorId,\r
          tags: req.body.tags.join(','),\r
          imageUrl: req.body.imageUrl\r
        }\r
      })\r
      res.status(200).json(newPost);\r
      await prisma.$disconnect()\r
      break;\r
    default:\r
      res.status(405).json({ error: 'Method not allowed' })\r
  }\r
}` }, { "path": "register", "id": "register", "file": "register.ts", "absPath": "/register", "__content": "import  { UmiApiRequest, UmiApiResponse } from 'umi';\r\nimport { PrismaClient } from '@prisma/client';\r\nimport bcrypt from 'bcryptjs';\r\nimport { signToken } from '@/utils/jwt';\r\n\r\nexport default async function (req: UmiApiRequest, res: UmiApiResponse) {\r\n  switch (req.method) {\r\n    // \u5982\u679C\u5BF9\u8FD9\u4E2A\u8DEF\u5F84\u53D1\u8D77 POST \u8BF7\u6C42\uFF0C\u4EE3\u8868\u4ED6\u60F3\u8981\u6CE8\u518C\u4E00\u4E2A\u8D26\u53F7\r\n    case 'POST':\r\n      try {\r\n        // \u5EFA\u7ACB\u4E00\u4E2A Prisma \u5BA2\u6237\u7AEF\uFF0C\u4ED6\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u8FDE\u7EBF\u5230\u6570\u636E\u5E93\r\n        const prisma = new PrismaClient();\r\n\r\n        // res.status(503).json(req.body)\r\n        // return;\r\n        //console.log('req.body',  req.body)\r\n\r\n        // \u5728\u6570\u636E\u5E93\u7684 User \u8868\u4E2D\u5EFA\u7ACB\u4E00\u4E2A\u65B0\u7684\u6570\u636E\r\n        const user = await prisma.user.create({\r\n          data: {\r\n            email: req.body.email,\r\n\r\n            // \u5BC6\u7801\u662F\u7ECF\u8FC7 bcrypt \u52A0\u5BC6\u7684\r\n            passwordHash: bcrypt.hashSync(req.body.password, 8),\r\n            name: req.body.name,\r\n            avatarUrl: req.body.avatarUrl,\r\n          },\r\n        });\r\n\r\n        // \u628A\u5EFA\u7ACB\u6210\u529F\u7684\u7528\u6237\u6570\u636E\uFF08\u4E0D\u5305\u542B\u5BC6\u7801\uFF09\u548C JWT \u56DE\u4F20\u7ED9\u524D\u7AEF\r\n        res\r\n          .status(201)\r\n          .setCookie('token', await signToken(user.id))\r\n          .json({ ...user, passwordHash: undefined });\r\n\r\n        // \u5904\u7406\u5B8C\u8BF7\u6C42\u4EE5\u540E\u8BB0\u5F97\u65AD\u5F00\u6570\u636E\u5E93\u94FE\u63A5\r\n        await prisma.$disconnect();\r\n      } catch (e: any) {\r\n        // \u5982\u679C\u53D1\u751F\u672A\u9884\u671F\u7684\u9519\u8BEF\uFF0C\u5C06\u5BF9\u5E94\u7684\u9519\u8BEF\u8BF4\u660E\u7684 Prisma \u6587\u6863\u53D1\u7ED9\u7528\u6237\r\n        res.status(500).json({\r\n          result: false,\r\n          message:\r\n            typeof e.code === 'string'\r\n              ? 'https://www.prisma.io/docs/reference/api-reference/error-reference#' +\r\n                e.code.toLowerCase()\r\n              : e,\r\n        });\r\n      }\r\n      break;\r\n    default:\r\n      // \u5982\u679C\u4E0D\u662F POST \u8BF7\u6C42\uFF0C\u4EE3\u8868\u4ED6\u6B63\u5728\u7528\u9519\u8BEF\u7684\u65B9\u5F0F\u8BBF\u95EE\u8FD9\u4E2A API\r\n      res.status(405).json({ error: 'Method not allowed' });\r\n  }\r\n}" }, { "path": "login", "id": "login", "file": "login.ts", "absPath": "/login", "__content": `import { UmiApiRequest, UmiApiResponse } from "umi";\r
import { PrismaClient } from '@prisma/client'\r
import bcrypt from "bcryptjs";\r
import { signToken } from "@/utils/jwt";\r
\r
export default async function (req: UmiApiRequest, res: UmiApiResponse) {\r
  switch (req.method) {\r
    case 'POST':\r
      try {\r
        const prisma = new PrismaClient();\r
        const user = await prisma.user.findUnique({\r
          where: { email: req.body.email }\r
        });\r
\r
         //res.status(402).json(user);\r
\r
\r
        if (!user || !bcrypt.compareSync(req.body.password, user.passwordHash)) {\r
          return res.status(401).json({\r
            message: 'Invalid email or password'\r
          });\r
        }\r
\r
        // res.status(403).json(user);\r
        // return;\r
        var token = ''; \r
        try{\r
             token = await signToken(user.id); \r
        }catch (error: any) {\r
            res.status(507).json({\r
                error, \r
                info: 'myinfo', \r
                token, \r
            });\r
            return;\r
          }\r
       \r
\r
        res.status(200)\r
          .setCookie('token', token)\r
          .json({ ...user, passwordHash: undefined });\r
        await prisma.$disconnect()\r
      } catch (error: any) {\r
        res.status(500).json(error);\r
      }\r
      break;\r
    default:\r
      res.status(405).json({ error: 'Method not allowed' })\r
  }\r
}` }];
var postId_default2 = async (req, res) => {
  const umiReq = new import_apiRoute.UmiApiRequest(req, apiRoutes);
  await umiReq.readBody();
  const umiRes = new import_apiRoute.UmiApiResponse(res);
  await new Promise((resolve) => middlewares_default(umiReq, umiRes, resolve));
  await postId_default(umiReq, umiRes);
};
/*! Bundled license information:

@prisma/client/runtime/library.js:
  (*! Bundled license information:
  
  decimal.js/decimal.mjs:
    (*!
     *  decimal.js v10.4.3
     *  An arbitrary-precision Decimal type for JavaScript.
     *  https://github.com/MikeMcl/decimal.js
     *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
     *  MIT Licence
     *)
  *)
*/
