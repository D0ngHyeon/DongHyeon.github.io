// Copyright 2014 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//     You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//     See the License for the specific language governing permissions and
// limitations under the License.

!(function () {
  var a = {},
    b = {},
    c = {};
  !(function (a, b) {
    function c(a) {
      if ("number" == typeof a) return a;
      var b = {};
      for (var c in a) b[c] = a[c];
      return b;
    }
    function d() {
      (this._delay = 0),
        (this._endDelay = 0),
        (this._fill = "none"),
        (this._iterationStart = 0),
        (this._iterations = 1),
        (this._duration = 0),
        (this._playbackRate = 1),
        (this._direction = "normal"),
        (this._easing = "linear"),
        (this._easingFunction = x);
    }
    function e() {
      return a.isDeprecated(
        "Invalid timing inputs",
        "2016-03-02",
        "TypeError exceptions will be thrown instead.",
        !0
      );
    }
    function f(b, c, e) {
      var f = new d();
      return (
        c && ((f.fill = "both"), (f.duration = "auto")),
        "number" != typeof b || isNaN(b)
          ? void 0 !== b &&
            Object.getOwnPropertyNames(b).forEach(function (c) {
              if ("auto" != b[c]) {
                if (
                  ("number" == typeof f[c] || "duration" == c) &&
                  ("number" != typeof b[c] || isNaN(b[c]))
                )
                  return;
                if ("fill" == c && -1 == v.indexOf(b[c])) return;
                if ("direction" == c && -1 == w.indexOf(b[c])) return;
                if (
                  "playbackRate" == c &&
                  1 !== b[c] &&
                  a.isDeprecated(
                    "AnimationEffectTiming.playbackRate",
                    "2014-11-28",
                    "Use Animation.playbackRate instead."
                  )
                )
                  return;
                f[c] = b[c];
              }
            })
          : (f.duration = b),
        f
      );
    }
    function g(a) {
      return (
        "number" == typeof a &&
          (a = isNaN(a) ? { duration: 0 } : { duration: a }),
        a
      );
    }
    function h(b, c) {
      return (b = a.numericTimingToObject(b)), f(b, c);
    }
    function i(a, b, c, d) {
      return a < 0 || a > 1 || c < 0 || c > 1
        ? x
        : function (e) {
            function f(a, b, c) {
              return (
                3 * a * (1 - c) * (1 - c) * c +
                3 * b * (1 - c) * c * c +
                c * c * c
              );
            }
            if (e <= 0) {
              var g = 0;
              return a > 0 ? (g = b / a) : !b && c > 0 && (g = d / c), g * e;
            }
            if (e >= 1) {
              var h = 0;
              return (
                c < 1
                  ? (h = (d - 1) / (c - 1))
                  : 1 == c && a < 1 && (h = (b - 1) / (a - 1)),
                1 + h * (e - 1)
              );
            }
            for (var i = 0, j = 1; i < j; ) {
              var k = (i + j) / 2,
                l = f(a, c, k);
              if (Math.abs(e - l) < 1e-5) return f(b, d, k);
              l < e ? (i = k) : (j = k);
            }
            return f(b, d, k);
          };
    }
    function j(a, b) {
      return function (c) {
        if (c >= 1) return 1;
        var d = 1 / a;
        return (c += b * d) - (c % d);
      };
    }
    function k(a) {
      C || (C = document.createElement("div").style),
        (C.animationTimingFunction = ""),
        (C.animationTimingFunction = a);
      var b = C.animationTimingFunction;
      if ("" == b && e())
        throw new TypeError(a + " is not a valid value for easing");
      return b;
    }
    function l(a) {
      if ("linear" == a) return x;
      var b = E.exec(a);
      if (b) return i.apply(this, b.slice(1).map(Number));
      var c = F.exec(a);
      if (c) return j(Number(c[1]), A);
      var d = G.exec(a);
      return d
        ? j(Number(d[1]), { start: y, middle: z, end: A }[d[2]])
        : B[a] || x;
    }
    function m(a) {
      return Math.abs(n(a) / a.playbackRate);
    }
    function n(a) {
      return 0 === a.duration || 0 === a.iterations
        ? 0
        : a.duration * a.iterations;
    }
    function o(a, b, c) {
      if (null == b) return H;
      var d = c.delay + a + c.endDelay;
      return b < Math.min(c.delay, d)
        ? I
        : b >= Math.min(c.delay + a, d)
        ? J
        : K;
    }
    function p(a, b, c, d, e) {
      switch (d) {
        case I:
          return "backwards" == b || "both" == b ? 0 : null;
        case K:
          return c - e;
        case J:
          return "forwards" == b || "both" == b ? a : null;
        case H:
          return null;
      }
    }
    function q(a, b, c, d, e) {
      var f = e;
      return 0 === a ? b !== I && (f += c) : (f += d / a), f;
    }
    function r(a, b, c, d, e, f) {
      var g = a === 1 / 0 ? b % 1 : a % 1;
      return (
        0 !== g || c !== J || 0 === d || (0 === e && 0 !== f) || (g = 1), g
      );
    }
    function s(a, b, c, d) {
      return a === J && b === 1 / 0
        ? 1 / 0
        : 1 === c
        ? Math.floor(d) - 1
        : Math.floor(d);
    }
    function t(a, b, c) {
      var d = a;
      if ("normal" !== a && "reverse" !== a) {
        var e = b;
        "alternate-reverse" === a && (e += 1),
          (d = "normal"),
          e !== 1 / 0 && e % 2 != 0 && (d = "reverse");
      }
      return "normal" === d ? c : 1 - c;
    }
    function u(a, b, c) {
      var d = o(a, b, c),
        e = p(a, c.fill, b, d, c.delay);
      if (null === e) return null;
      var f = q(c.duration, d, c.iterations, e, c.iterationStart),
        g = r(f, c.iterationStart, d, c.iterations, e, c.duration),
        h = s(d, c.iterations, g, f),
        i = t(c.direction, h, g);
      return c._easingFunction(i);
    }
    var v = "backwards|forwards|both|none".split("|"),
      w = "reverse|alternate|alternate-reverse".split("|"),
      x = function (a) {
        return a;
      };
    d.prototype = {
      _setMember: function (b, c) {
        (this["_" + b] = c),
          this._effect &&
            ((this._effect._timingInput[b] = c),
            (this._effect._timing = a.normalizeTimingInput(
              this._effect._timingInput
            )),
            (this._effect.activeDuration = a.calculateActiveDuration(
              this._effect._timing
            )),
            this._effect._animation &&
              this._effect._animation._rebuildUnderlyingAnimation());
      },
      get playbackRate() {
        return this._playbackRate;
      },
      set delay(a) {
        this._setMember("delay", a);
      },
      get delay() {
        return this._delay;
      },
      set endDelay(a) {
        this._setMember("endDelay", a);
      },
      get endDelay() {
        return this._endDelay;
      },
      set fill(a) {
        this._setMember("fill", a);
      },
      get fill() {
        return this._fill;
      },
      set iterationStart(a) {
        if ((isNaN(a) || a < 0) && e())
          throw new TypeError(
            "iterationStart must be a non-negative number, received: " + a
          );
        this._setMember("iterationStart", a);
      },
      get iterationStart() {
        return this._iterationStart;
      },
      set duration(a) {
        if ("auto" != a && (isNaN(a) || a < 0) && e())
          throw new TypeError(
            "duration must be non-negative or auto, received: " + a
          );
        this._setMember("duration", a);
      },
      get duration() {
        return this._duration;
      },
      set direction(a) {
        this._setMember("direction", a);
      },
      get direction() {
        return this._direction;
      },
      set easing(a) {
        (this._easingFunction = l(k(a))), this._setMember("easing", a);
      },
      get easing() {
        return this._easing;
      },
      set iterations(a) {
        if ((isNaN(a) || a < 0) && e())
          throw new TypeError(
            "iterations must be non-negative, received: " + a
          );
        this._setMember("iterations", a);
      },
      get iterations() {
        return this._iterations;
      },
    };
    var y = 1,
      z = 0.5,
      A = 0,
      B = {
        ease: i(0.25, 0.1, 0.25, 1),
        "ease-in": i(0.42, 0, 1, 1),
        "ease-out": i(0, 0, 0.58, 1),
        "ease-in-out": i(0.42, 0, 0.58, 1),
        "step-start": j(1, y),
        "step-middle": j(1, z),
        "step-end": j(1, A),
      },
      C = null,
      D = "\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*",
      E = new RegExp(
        "cubic-bezier\\(" + D + "," + D + "," + D + "," + D + "\\)"
      ),
      F = /steps\(\s*(\d+)\s*\)/,
      G = /steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/,
      H = 0,
      I = 1,
      J = 2,
      K = 3;
    (a.cloneTimingInput = c),
      (a.makeTiming = f),
      (a.numericTimingToObject = g),
      (a.normalizeTimingInput = h),
      (a.calculateActiveDuration = m),
      (a.calculateIterationProgress = u),
      (a.calculatePhase = o),
      (a.normalizeEasing = k),
      (a.parseEasingFunction = l);
  })(a),
    (function (a, b) {
      function c(a, b) {
        return a in k ? k[a][b] || b : b;
      }
      function d(a) {
        return (
          "display" === a ||
          0 === a.lastIndexOf("animation", 0) ||
          0 === a.lastIndexOf("transition", 0)
        );
      }
      function e(a, b, e) {
        if (!d(a)) {
          var f = h[a];
          if (f) {
            i.style[a] = b;
            for (var g in f) {
              var j = f[g],
                k = i.style[j];
              e[j] = c(j, k);
            }
          } else e[a] = c(a, b);
        }
      }
      function f(a) {
        var b = [];
        for (var c in a)
          if (!(c in ["easing", "offset", "composite"])) {
            var d = a[c];
            Array.isArray(d) || (d = [d]);
            for (var e, f = d.length, g = 0; g < f; g++)
              (e = {}),
                (e.offset =
                  "offset" in a ? a.offset : 1 == f ? 1 : g / (f - 1)),
                "easing" in a && (e.easing = a.easing),
                "composite" in a && (e.composite = a.composite),
                (e[c] = d[g]),
                b.push(e);
          }
        return (
          b.sort(function (a, b) {
            return a.offset - b.offset;
          }),
          b
        );
      }
      function g(b) {
        function c() {
          var a = d.length;
          null == d[a - 1].offset && (d[a - 1].offset = 1),
            a > 1 && null == d[0].offset && (d[0].offset = 0);
          for (var b = 0, c = d[0].offset, e = 1; e < a; e++) {
            var f = d[e].offset;
            if (null != f) {
              for (var g = 1; g < e - b; g++)
                d[b + g].offset = c + ((f - c) * g) / (e - b);
              (b = e), (c = f);
            }
          }
        }
        if (null == b) return [];
        window.Symbol &&
          Symbol.iterator &&
          Array.prototype.from &&
          b[Symbol.iterator] &&
          (b = Array.from(b)),
          Array.isArray(b) || (b = f(b));
        for (
          var d = b.map(function (b) {
              var c = {};
              for (var d in b) {
                var f = b[d];
                if ("offset" == d) {
                  if (null != f) {
                    if (((f = Number(f)), !isFinite(f)))
                      throw new TypeError("Keyframe offsets must be numbers.");
                    if (f < 0 || f > 1)
                      throw new TypeError(
                        "Keyframe offsets must be between 0 and 1."
                      );
                  }
                } else if ("composite" == d) {
                  if ("add" == f || "accumulate" == f)
                    throw {
                      type: DOMException.NOT_SUPPORTED_ERR,
                      name: "NotSupportedError",
                      message: "add compositing is not supported",
                    };
                  if ("replace" != f)
                    throw new TypeError("Invalid composite mode " + f + ".");
                } else f = "easing" == d ? a.normalizeEasing(f) : "" + f;
                e(d, f, c);
              }
              return (
                void 0 == c.offset && (c.offset = null),
                void 0 == c.easing && (c.easing = "linear"),
                c
              );
            }),
            g = !0,
            h = -1 / 0,
            i = 0;
          i < d.length;
          i++
        ) {
          var j = d[i].offset;
          if (null != j) {
            if (j < h)
              throw new TypeError(
                "Keyframes are not loosely sorted by offset. Sort or specify offsets."
              );
            h = j;
          } else g = !1;
        }
        return (
          (d = d.filter(function (a) {
            return a.offset >= 0 && a.offset <= 1;
          })),
          g || c(),
          d
        );
      }
      var h = {
          background: [
            "backgroundImage",
            "backgroundPosition",
            "backgroundSize",
            "backgroundRepeat",
            "backgroundAttachment",
            "backgroundOrigin",
            "backgroundClip",
            "backgroundColor",
          ],
          border: [
            "borderTopColor",
            "borderTopStyle",
            "borderTopWidth",
            "borderRightColor",
            "borderRightStyle",
            "borderRightWidth",
            "borderBottomColor",
            "borderBottomStyle",
            "borderBottomWidth",
            "borderLeftColor",
            "borderLeftStyle",
            "borderLeftWidth",
          ],
          borderBottom: [
            "borderBottomWidth",
            "borderBottomStyle",
            "borderBottomColor",
          ],
          borderColor: [
            "borderTopColor",
            "borderRightColor",
            "borderBottomColor",
            "borderLeftColor",
          ],
          borderLeft: ["borderLeftWidth", "borderLeftStyle", "borderLeftColor"],
          borderRadius: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomRightRadius",
            "borderBottomLeftRadius",
          ],
          borderRight: [
            "borderRightWidth",
            "borderRightStyle",
            "borderRightColor",
          ],
          borderTop: ["borderTopWidth", "borderTopStyle", "borderTopColor"],
          borderWidth: [
            "borderTopWidth",
            "borderRightWidth",
            "borderBottomWidth",
            "borderLeftWidth",
          ],
          flex: ["flexGrow", "flexShrink", "flexBasis"],
          font: [
            "fontFamily",
            "fontSize",
            "fontStyle",
            "fontVariant",
            "fontWeight",
            "lineHeight",
          ],
          margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
          outline: ["outlineColor", "outlineStyle", "outlineWidth"],
          padding: [
            "paddingTop",
            "paddingRight",
            "paddingBottom",
            "paddingLeft",
          ],
        },
        i = document.createElementNS("http://www.w3.org/1999/xhtml", "div"),
        j = { thin: "1px", medium: "3px", thick: "5px" },
        k = {
          borderBottomWidth: j,
          borderLeftWidth: j,
          borderRightWidth: j,
          borderTopWidth: j,
          fontSize: {
            "xx-small": "60%",
            "x-small": "75%",
            small: "89%",
            medium: "100%",
            large: "120%",
            "x-large": "150%",
            "xx-large": "200%",
          },
          fontWeight: { normal: "400", bold: "700" },
          outlineWidth: j,
          textShadow: { none: "0px 0px 0px transparent" },
          boxShadow: { none: "0px 0px 0px 0px transparent" },
        };
      (a.convertToArrayForm = f), (a.normalizeKeyframes = g);
    })(a),
    (function (a) {
      var b = {};
      (a.isDeprecated = function (a, c, d, e) {
        var f = e ? "are" : "is",
          g = new Date(),
          h = new Date(c);
        return (
          h.setMonth(h.getMonth() + 3),
          !(
            g < h &&
            (a in b ||
              console.warn(
                "Web Animations: " +
                  a +
                  " " +
                  f +
                  " deprecated and will stop working on " +
                  h.toDateString() +
                  ". " +
                  d
              ),
            (b[a] = !0),
            1)
          )
        );
      }),
        (a.deprecated = function (b, c, d, e) {
          var f = e ? "are" : "is";
          if (a.isDeprecated(b, c, d, e))
            throw new Error(b + " " + f + " no longer supported. " + d);
        });
    })(a),
    (function () {
      if (document.documentElement.animate) {
        var c = document.documentElement.animate([], 0),
          d = !0;
        if (
          (c &&
            ((d = !1),
            "play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState"
              .split("|")
              .forEach(function (a) {
                void 0 === c[a] && (d = !0);
              })),
          !d)
        )
          return;
      }
      !(function (a, b, c) {
        function d(a) {
          for (var b = {}, c = 0; c < a.length; c++)
            for (var d in a[c])
              if ("offset" != d && "easing" != d && "composite" != d) {
                var e = {
                  offset: a[c].offset,
                  easing: a[c].easing,
                  value: a[c][d],
                };
                (b[d] = b[d] || []), b[d].push(e);
              }
          for (var f in b) {
            var g = b[f];
            if (0 != g[0].offset || 1 != g[g.length - 1].offset)
              throw {
                type: DOMException.NOT_SUPPORTED_ERR,
                name: "NotSupportedError",
                message: "Partial keyframes are not supported",
              };
          }
          return b;
        }
        function e(c) {
          var d = [];
          for (var e in c)
            for (var f = c[e], g = 0; g < f.length - 1; g++) {
              var h = g,
                i = g + 1,
                j = f[h].offset,
                k = f[i].offset,
                l = j,
                m = k;
              0 == g && ((l = -1 / 0), 0 == k && (i = h)),
                g == f.length - 2 && ((m = 1 / 0), 1 == j && (h = i)),
                d.push({
                  applyFrom: l,
                  applyTo: m,
                  startOffset: f[h].offset,
                  endOffset: f[i].offset,
                  easingFunction: a.parseEasingFunction(f[h].easing),
                  property: e,
                  interpolation: b.propertyInterpolation(
                    e,
                    f[h].value,
                    f[i].value
                  ),
                });
            }
          return (
            d.sort(function (a, b) {
              return a.startOffset - b.startOffset;
            }),
            d
          );
        }
        b.convertEffectInput = function (c) {
          var f = a.normalizeKeyframes(c),
            g = d(f),
            h = e(g);
          return function (a, c) {
            if (null != c)
              h.filter(function (a) {
                return c >= a.applyFrom && c < a.applyTo;
              }).forEach(function (d) {
                var e = c - d.startOffset,
                  f = d.endOffset - d.startOffset,
                  g = 0 == f ? 0 : d.easingFunction(e / f);
                b.apply(a, d.property, d.interpolation(g));
              });
            else
              for (var d in g)
                "offset" != d &&
                  "easing" != d &&
                  "composite" != d &&
                  b.clear(a, d);
          };
        };
      })(a, b),
        (function (a, b, c) {
          function d(a) {
            return a.replace(/-(.)/g, function (a, b) {
              return b.toUpperCase();
            });
          }
          function e(a, b, c) {
            (h[c] = h[c] || []), h[c].push([a, b]);
          }
          function f(a, b, c) {
            for (var f = 0; f < c.length; f++) {
              e(a, b, d(c[f]));
            }
          }
          function g(c, e, f) {
            var g = c;
            /-/.test(c) &&
              !a.isDeprecated(
                "Hyphenated property names",
                "2016-03-22",
                "Use camelCase instead.",
                !0
              ) &&
              (g = d(c)),
              ("initial" != e && "initial" != f) ||
                ("initial" == e && (e = i[g]), "initial" == f && (f = i[g]));
            for (var j = e == f ? [] : h[g], k = 0; j && k < j.length; k++) {
              var l = j[k][0](e),
                m = j[k][0](f);
              if (void 0 !== l && void 0 !== m) {
                var n = j[k][1](l, m);
                if (n) {
                  var o = b.Interpolation.apply(null, n);
                  return function (a) {
                    return 0 == a ? e : 1 == a ? f : o(a);
                  };
                }
              }
            }
            return b.Interpolation(!1, !0, function (a) {
              return a ? f : e;
            });
          }
          var h = {};
          b.addPropertiesHandler = f;
          var i = {
            backgroundColor: "transparent",
            backgroundPosition: "0% 0%",
            borderBottomColor: "currentColor",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
            borderBottomWidth: "3px",
            borderLeftColor: "currentColor",
            borderLeftWidth: "3px",
            borderRightColor: "currentColor",
            borderRightWidth: "3px",
            borderSpacing: "2px",
            borderTopColor: "currentColor",
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
            borderTopWidth: "3px",
            bottom: "auto",
            clip: "rect(0px, 0px, 0px, 0px)",
            color: "black",
            fontSize: "100%",
            fontWeight: "400",
            height: "auto",
            left: "auto",
            letterSpacing: "normal",
            lineHeight: "120%",
            marginBottom: "0px",
            marginLeft: "0px",
            marginRight: "0px",
            marginTop: "0px",
            maxHeight: "none",
            maxWidth: "none",
            minHeight: "0px",
            minWidth: "0px",
            opacity: "1.0",
            outlineColor: "invert",
            outlineOffset: "0px",
            outlineWidth: "3px",
            paddingBottom: "0px",
            paddingLeft: "0px",
            paddingRight: "0px",
            paddingTop: "0px",
            right: "auto",
            strokeDasharray: "none",
            strokeDashoffset: "0px",
            textIndent: "0px",
            textShadow: "0px 0px 0px transparent",
            top: "auto",
            transform: "",
            verticalAlign: "0px",
            visibility: "visible",
            width: "auto",
            wordSpacing: "normal",
            zIndex: "auto",
          };
          b.propertyInterpolation = g;
        })(a, b),
        (function (a, b, c) {
          function d(b) {
            var c = a.calculateActiveDuration(b),
              d = function (d) {
                return a.calculateIterationProgress(c, d, b);
              };
            return (d._totalDuration = b.delay + c + b.endDelay), d;
          }
          b.KeyframeEffect = function (c, e, f, g) {
            var h,
              i = d(a.normalizeTimingInput(f)),
              j = b.convertEffectInput(e),
              k = function () {
                j(c, h);
              };
            return (
              (k._update = function (a) {
                return null !== (h = i(a));
              }),
              (k._clear = function () {
                j(c, null);
              }),
              (k._hasSameTarget = function (a) {
                return c === a;
              }),
              (k._target = c),
              (k._totalDuration = i._totalDuration),
              (k._id = g),
              k
            );
          };
        })(a, b),
        (function (a, b) {
          (a.apply = function (b, c, d) {
            b.style[a.propertyName(c)] = d;
          }),
            (a.clear = function (b, c) {
              b.style[a.propertyName(c)] = "";
            });
        })(b),
        (function (a) {
          window.Element.prototype.animate = function (b, c) {
            var d = "";
            return (
              c && c.id && (d = c.id),
              a.timeline._play(a.KeyframeEffect(this, b, c, d))
            );
          };
        })(b),
        (function (a, b) {
          function c(a, b, d) {
            if ("number" == typeof a && "number" == typeof b)
              return a * (1 - d) + b * d;
            if ("boolean" == typeof a && "boolean" == typeof b)
              return d < 0.5 ? a : b;
            if (a.length == b.length) {
              for (var e = [], f = 0; f < a.length; f++)
                e.push(c(a[f], b[f], d));
              return e;
            }
            throw "Mismatched interpolation arguments " + a + ":" + b;
          }
          a.Interpolation = function (a, b, d) {
            return function (e) {
              return d(c(a, b, e));
            };
          };
        })(b),
        (function (a, b, c) {
          a.sequenceNumber = 0;
          var d = function (a, b, c) {
            (this.target = a),
              (this.currentTime = b),
              (this.timelineTime = c),
              (this.type = "finish"),
              (this.bubbles = !1),
              (this.cancelable = !1),
              (this.currentTarget = a),
              (this.defaultPrevented = !1),
              (this.eventPhase = Event.AT_TARGET),
              (this.timeStamp = Date.now());
          };
          (b.Animation = function (b) {
            (this.id = ""),
              b && b._id && (this.id = b._id),
              (this._sequenceNumber = a.sequenceNumber++),
              (this._currentTime = 0),
              (this._startTime = null),
              (this._paused = !1),
              (this._playbackRate = 1),
              (this._inTimeline = !0),
              (this._finishedFlag = !0),
              (this.onfinish = null),
              (this._finishHandlers = []),
              (this._effect = b),
              (this._inEffect = this._effect._update(0)),
              (this._idle = !0),
              (this._currentTimePending = !1);
          }),
            (b.Animation.prototype = {
              _ensureAlive: function () {
                this.playbackRate < 0 && 0 === this.currentTime
                  ? (this._inEffect = this._effect._update(-1))
                  : (this._inEffect = this._effect._update(this.currentTime)),
                  this._inTimeline ||
                    (!this._inEffect && this._finishedFlag) ||
                    ((this._inTimeline = !0),
                    b.timeline._animations.push(this));
              },
              _tickCurrentTime: function (a, b) {
                a != this._currentTime &&
                  ((this._currentTime = a),
                  this._isFinished &&
                    !b &&
                    (this._currentTime =
                      this._playbackRate > 0 ? this._totalDuration : 0),
                  this._ensureAlive());
              },
              get currentTime() {
                return this._idle || this._currentTimePending
                  ? null
                  : this._currentTime;
              },
              set currentTime(a) {
                (a = +a),
                  isNaN(a) ||
                    (b.restart(),
                    this._paused ||
                      null == this._startTime ||
                      (this._startTime =
                        this._timeline.currentTime - a / this._playbackRate),
                    (this._currentTimePending = !1),
                    this._currentTime != a &&
                      (this._idle && ((this._idle = !1), (this._paused = !0)),
                      this._tickCurrentTime(a, !0),
                      b.applyDirtiedAnimation(this)));
              },
              get startTime() {
                return this._startTime;
              },
              set startTime(a) {
                (a = +a),
                  isNaN(a) ||
                    this._paused ||
                    this._idle ||
                    ((this._startTime = a),
                    this._tickCurrentTime(
                      (this._timeline.currentTime - this._startTime) *
                        this.playbackRate
                    ),
                    b.applyDirtiedAnimation(this));
              },
              get playbackRate() {
                return this._playbackRate;
              },
              set playbackRate(a) {
                if (a != this._playbackRate) {
                  var c = this.currentTime;
                  (this._playbackRate = a),
                    (this._startTime = null),
                    "paused" != this.playState &&
                      "idle" != this.playState &&
                      ((this._finishedFlag = !1),
                      (this._idle = !1),
                      this._ensureAlive(),
                      b.applyDirtiedAnimation(this)),
                    null != c && (this.currentTime = c);
                }
              },
              get _isFinished() {
                return (
                  !this._idle &&
                  ((this._playbackRate > 0 &&
                    this._currentTime >= this._totalDuration) ||
                    (this._playbackRate < 0 && this._currentTime <= 0))
                );
              },
              get _totalDuration() {
                return this._effect._totalDuration;
              },
              get playState() {
                return this._idle
                  ? "idle"
                  : (null == this._startTime &&
                      !this._paused &&
                      0 != this.playbackRate) ||
                    this._currentTimePending
                  ? "pending"
                  : this._paused
                  ? "paused"
                  : this._isFinished
                  ? "finished"
                  : "running";
              },
              _rewind: function () {
                if (this._playbackRate >= 0) this._currentTime = 0;
                else {
                  if (!(this._totalDuration < 1 / 0))
                    throw new DOMException(
                      "Unable to rewind negative playback rate animation with infinite duration",
                      "InvalidStateError"
                    );
                  this._currentTime = this._totalDuration;
                }
              },
              play: function () {
                (this._paused = !1),
                  (this._isFinished || this._idle) &&
                    (this._rewind(), (this._startTime = null)),
                  (this._finishedFlag = !1),
                  (this._idle = !1),
                  this._ensureAlive(),
                  b.applyDirtiedAnimation(this);
              },
              pause: function () {
                this._isFinished || this._paused || this._idle
                  ? this._idle && (this._rewind(), (this._idle = !1))
                  : (this._currentTimePending = !0),
                  (this._startTime = null),
                  (this._paused = !0);
              },
              finish: function () {
                this._idle ||
                  ((this.currentTime =
                    this._playbackRate > 0 ? this._totalDuration : 0),
                  (this._startTime = this._totalDuration - this.currentTime),
                  (this._currentTimePending = !1),
                  b.applyDirtiedAnimation(this));
              },
              cancel: function () {
                this._inEffect &&
                  ((this._inEffect = !1),
                  (this._idle = !0),
                  (this._paused = !1),
                  (this._finishedFlag = !0),
                  (this._currentTime = 0),
                  (this._startTime = null),
                  this._effect._update(null),
                  b.applyDirtiedAnimation(this));
              },
              reverse: function () {
                (this.playbackRate *= -1), this.play();
              },
              addEventListener: function (a, b) {
                "function" == typeof b &&
                  "finish" == a &&
                  this._finishHandlers.push(b);
              },
              removeEventListener: function (a, b) {
                if ("finish" == a) {
                  var c = this._finishHandlers.indexOf(b);
                  c >= 0 && this._finishHandlers.splice(c, 1);
                }
              },
              _fireEvents: function (a) {
                if (this._isFinished) {
                  if (!this._finishedFlag) {
                    var b = new d(this, this._currentTime, a),
                      c = this._finishHandlers.concat(
                        this.onfinish ? [this.onfinish] : []
                      );
                    setTimeout(function () {
                      c.forEach(function (a) {
                        a.call(b.target, b);
                      });
                    }, 0),
                      (this._finishedFlag = !0);
                  }
                } else this._finishedFlag = !1;
              },
              _tick: function (a, b) {
                this._idle ||
                  this._paused ||
                  (null == this._startTime
                    ? b &&
                      (this.startTime =
                        a - this._currentTime / this.playbackRate)
                    : this._isFinished ||
                      this._tickCurrentTime(
                        (a - this._startTime) * this.playbackRate
                      )),
                  b && ((this._currentTimePending = !1), this._fireEvents(a));
              },
              get _needsTick() {
                return (
                  this.playState in { pending: 1, running: 1 } ||
                  !this._finishedFlag
                );
              },
              _targetAnimations: function () {
                var a = this._effect._target;
                return (
                  a._activeAnimations || (a._activeAnimations = []),
                  a._activeAnimations
                );
              },
              _markTarget: function () {
                var a = this._targetAnimations();
                -1 === a.indexOf(this) && a.push(this);
              },
              _unmarkTarget: function () {
                var a = this._targetAnimations(),
                  b = a.indexOf(this);
                -1 !== b && a.splice(b, 1);
              },
            });
        })(a, b),
        (function (a, b, c) {
          function d(a) {
            var b = j;
            (j = []),
              a < q.currentTime && (a = q.currentTime),
              q._animations.sort(e),
              (q._animations = h(a, !0, q._animations)[0]),
              b.forEach(function (b) {
                b[1](a);
              }),
              g(),
              (l = void 0);
          }
          function e(a, b) {
            return a._sequenceNumber - b._sequenceNumber;
          }
          function f() {
            (this._animations = []),
              (this.currentTime =
                window.performance && performance.now ? performance.now() : 0);
          }
          function g() {
            o.forEach(function (a) {
              a();
            }),
              (o.length = 0);
          }
          function h(a, c, d) {
            (p = !0), (n = !1), (b.timeline.currentTime = a), (m = !1);
            var e = [],
              f = [],
              g = [],
              h = [];
            return (
              d.forEach(function (b) {
                b._tick(a, c),
                  b._inEffect
                    ? (f.push(b._effect), b._markTarget())
                    : (e.push(b._effect), b._unmarkTarget()),
                  b._needsTick && (m = !0);
                var d = b._inEffect || b._needsTick;
                (b._inTimeline = d), d ? g.push(b) : h.push(b);
              }),
              o.push.apply(o, e),
              o.push.apply(o, f),
              m && requestAnimationFrame(function () {}),
              (p = !1),
              [g, h]
            );
          }
          var i = window.requestAnimationFrame,
            j = [],
            k = 0;
          (window.requestAnimationFrame = function (a) {
            var b = k++;
            return 0 == j.length && i(d), j.push([b, a]), b;
          }),
            (window.cancelAnimationFrame = function (a) {
              j.forEach(function (b) {
                b[0] == a && (b[1] = function () {});
              });
            }),
            (f.prototype = {
              _play: function (c) {
                c._timing = a.normalizeTimingInput(c.timing);
                var d = new b.Animation(c);
                return (
                  (d._idle = !1),
                  (d._timeline = this),
                  this._animations.push(d),
                  b.restart(),
                  b.applyDirtiedAnimation(d),
                  d
                );
              },
            });
          var l = void 0,
            m = !1,
            n = !1;
          (b.restart = function () {
            return (
              m || ((m = !0), requestAnimationFrame(function () {}), (n = !0)),
              n
            );
          }),
            (b.applyDirtiedAnimation = function (a) {
              if (!p) {
                a._markTarget();
                var c = a._targetAnimations();
                c.sort(e),
                  h(b.timeline.currentTime, !1, c.slice())[1].forEach(function (
                    a
                  ) {
                    var b = q._animations.indexOf(a);
                    -1 !== b && q._animations.splice(b, 1);
                  }),
                  g();
              }
            });
          var o = [],
            p = !1,
            q = new f();
          b.timeline = q;
        })(a, b),
        (function (a) {
          function b(a, b) {
            var c = a.exec(b);
            if (c)
              return (
                (c = a.ignoreCase ? c[0].toLowerCase() : c[0]),
                [c, b.substr(c.length)]
              );
          }
          function c(a, b) {
            b = b.replace(/^\s*/, "");
            var c = a(b);
            if (c) return [c[0], c[1].replace(/^\s*/, "")];
          }
          function d(a, d, e) {
            a = c.bind(null, a);
            for (var f = []; ; ) {
              var g = a(e);
              if (!g) return [f, e];
              if ((f.push(g[0]), (e = g[1]), !(g = b(d, e)) || "" == g[1]))
                return [f, e];
              e = g[1];
            }
          }
          function e(a, b) {
            for (
              var c = 0, d = 0;
              d < b.length && (!/\s|,/.test(b[d]) || 0 != c);
              d++
            )
              if ("(" == b[d]) c++;
              else if (")" == b[d] && (c--, 0 == c && d++, c <= 0)) break;
            var e = a(b.substr(0, d));
            return void 0 == e ? void 0 : [e, b.substr(d)];
          }
          function f(a, b) {
            for (var c = a, d = b; c && d; ) c > d ? (c %= d) : (d %= c);
            return (c = (a * b) / (c + d));
          }
          function g(a) {
            return function (b) {
              var c = a(b);
              return c && (c[0] = void 0), c;
            };
          }
          function h(a, b) {
            return function (c) {
              return a(c) || [b, c];
            };
          }
          function i(b, c) {
            for (var d = [], e = 0; e < b.length; e++) {
              var f = a.consumeTrimmed(b[e], c);
              if (!f || "" == f[0]) return;
              void 0 !== f[0] && d.push(f[0]), (c = f[1]);
            }
            if ("" == c) return d;
          }
          function j(a, b, c, d, e) {
            for (
              var g = [], h = [], i = [], j = f(d.length, e.length), k = 0;
              k < j;
              k++
            ) {
              var l = b(d[k % d.length], e[k % e.length]);
              if (!l) return;
              g.push(l[0]), h.push(l[1]), i.push(l[2]);
            }
            return [
              g,
              h,
              function (b) {
                var d = b
                  .map(function (a, b) {
                    return i[b](a);
                  })
                  .join(c);
                return a ? a(d) : d;
              },
            ];
          }
          function k(a, b, c) {
            for (var d = [], e = [], f = [], g = 0, h = 0; h < c.length; h++)
              if ("function" == typeof c[h]) {
                var i = c[h](a[g], b[g++]);
                d.push(i[0]), e.push(i[1]), f.push(i[2]);
              } else
                !(function (a) {
                  d.push(!1),
                    e.push(!1),
                    f.push(function () {
                      return c[a];
                    });
                })(h);
            return [
              d,
              e,
              function (a) {
                for (var b = "", c = 0; c < a.length; c++) b += f[c](a[c]);
                return b;
              },
            ];
          }
          (a.consumeToken = b),
            (a.consumeTrimmed = c),
            (a.consumeRepeated = d),
            (a.consumeParenthesised = e),
            (a.ignore = g),
            (a.optional = h),
            (a.consumeList = i),
            (a.mergeNestedRepeated = j.bind(null, null)),
            (a.mergeWrappedNestedRepeated = j),
            (a.mergeList = k);
        })(b),
        (function (a) {
          function b(b) {
            function c(b) {
              var c = a.consumeToken(/^inset/i, b);
              return c
                ? ((d.inset = !0), c)
                : (c = a.consumeLengthOrPercent(b))
                ? (d.lengths.push(c[0]), c)
                : ((c = a.consumeColor(b)), c ? ((d.color = c[0]), c) : void 0);
            }
            var d = { inset: !1, lengths: [], color: null },
              e = a.consumeRepeated(c, /^/, b);
            if (e && e[0].length) return [d, e[1]];
          }
          function c(c) {
            var d = a.consumeRepeated(b, /^,/, c);
            if (d && "" == d[1]) return d[0];
          }
          function d(b, c) {
            for (
              ;
              b.lengths.length < Math.max(b.lengths.length, c.lengths.length);

            )
              b.lengths.push({ px: 0 });
            for (
              ;
              c.lengths.length < Math.max(b.lengths.length, c.lengths.length);

            )
              c.lengths.push({ px: 0 });
            if (b.inset == c.inset && !!b.color == !!c.color) {
              for (
                var d, e = [], f = [[], 0], g = [[], 0], h = 0;
                h < b.lengths.length;
                h++
              ) {
                var i = a.mergeDimensions(b.lengths[h], c.lengths[h], 2 == h);
                f[0].push(i[0]), g[0].push(i[1]), e.push(i[2]);
              }
              if (b.color && c.color) {
                var j = a.mergeColors(b.color, c.color);
                (f[1] = j[0]), (g[1] = j[1]), (d = j[2]);
              }
              return [
                f,
                g,
                function (a) {
                  for (
                    var c = b.inset ? "inset " : " ", f = 0;
                    f < e.length;
                    f++
                  )
                    c += e[f](a[0][f]) + " ";
                  return d && (c += d(a[1])), c;
                },
              ];
            }
          }
          function e(b, c, d, e) {
            function f(a) {
              return {
                inset: a,
                color: [0, 0, 0, 0],
                lengths: [{ px: 0 }, { px: 0 }, { px: 0 }, { px: 0 }],
              };
            }
            for (var g = [], h = [], i = 0; i < d.length || i < e.length; i++) {
              var j = d[i] || f(e[i].inset),
                k = e[i] || f(d[i].inset);
              g.push(j), h.push(k);
            }
            return a.mergeNestedRepeated(b, c, g, h);
          }
          var f = e.bind(null, d, ", ");
          a.addPropertiesHandler(c, f, ["box-shadow", "text-shadow"]);
        })(b),
        (function (a, b) {
          function c(a) {
            return a.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
          }
          function d(a, b, c) {
            return Math.min(b, Math.max(a, c));
          }
          function e(a) {
            if (/^\s*[-+]?(\d*\.)?\d+\s*$/.test(a)) return Number(a);
          }
          function f(a, b) {
            return [a, b, c];
          }
          function g(a, b) {
            if (0 != a) return i(0, 1 / 0)(a, b);
          }
          function h(a, b) {
            return [
              a,
              b,
              function (a) {
                return Math.round(d(1, 1 / 0, a));
              },
            ];
          }
          function i(a, b) {
            return function (e, f) {
              return [
                e,
                f,
                function (e) {
                  return c(d(a, b, e));
                },
              ];
            };
          }
          function j(a) {
            var b = a.trim().split(/\s*[\s,]\s*/);
            if (0 !== b.length) {
              for (var c = [], d = 0; d < b.length; d++) {
                var f = e(b[d]);
                if (void 0 === f) return;
                c.push(f);
              }
              return c;
            }
          }
          function k(a, b) {
            if (a.length == b.length)
              return [
                a,
                b,
                function (a) {
                  return a.map(c).join(" ");
                },
              ];
          }
          function l(a, b) {
            return [a, b, Math.round];
          }
          (a.clamp = d),
            a.addPropertiesHandler(j, k, ["stroke-dasharray"]),
            a.addPropertiesHandler(e, i(0, 1 / 0), [
              "border-image-width",
              "line-height",
            ]),
            a.addPropertiesHandler(e, i(0, 1), [
              "opacity",
              "shape-image-threshold",
            ]),
            a.addPropertiesHandler(e, g, ["flex-grow", "flex-shrink"]),
            a.addPropertiesHandler(e, h, ["orphans", "widows"]),
            a.addPropertiesHandler(e, l, ["z-index"]),
            (a.parseNumber = e),
            (a.parseNumberList = j),
            (a.mergeNumbers = f),
            (a.numberToString = c);
        })(b),
        (function (a, b) {
          function c(a, b) {
            if ("visible" == a || "visible" == b)
              return [
                0,
                1,
                function (c) {
                  return c <= 0 ? a : c >= 1 ? b : "visible";
                },
              ];
          }
          a.addPropertiesHandler(String, c, ["visibility"]);
        })(b),
        (function (a, b) {
          function c(a) {
            (a = a.trim()), (f.fillStyle = "#000"), (f.fillStyle = a);
            var b = f.fillStyle;
            if (((f.fillStyle = "#fff"), (f.fillStyle = a), b == f.fillStyle)) {
              f.fillRect(0, 0, 1, 1);
              var c = f.getImageData(0, 0, 1, 1).data;
              f.clearRect(0, 0, 1, 1);
              var d = c[3] / 255;
              return [c[0] * d, c[1] * d, c[2] * d, d];
            }
          }
          function d(b, c) {
            return [
              b,
              c,
              function (b) {
                function c(a) {
                  return Math.max(0, Math.min(255, a));
                }
                if (b[3])
                  for (var d = 0; d < 3; d++) b[d] = Math.round(c(b[d] / b[3]));
                return (
                  (b[3] = a.numberToString(a.clamp(0, 1, b[3]))),
                  "rgba(" + b.join(",") + ")"
                );
              },
            ];
          }
          var e = document.createElementNS(
            "http://www.w3.org/1999/xhtml",
            "canvas"
          );
          e.width = e.height = 1;
          var f = e.getContext("2d");
          a.addPropertiesHandler(c, d, [
            "background-color",
            "border-bottom-color",
            "border-left-color",
            "border-right-color",
            "border-top-color",
            "color",
            "fill",
            "flood-color",
            "lighting-color",
            "outline-color",
            "stop-color",
            "stroke",
            "text-decoration-color",
          ]),
            (a.consumeColor = a.consumeParenthesised.bind(null, c)),
            (a.mergeColors = d);
        })(b),
        (function (a, b) {
          function c(a) {
            function b() {
              var b = h.exec(a);
              g = b ? b[0] : void 0;
            }
            function c() {
              var a = Number(g);
              return b(), a;
            }
            function d() {
              if ("(" !== g) return c();
              b();
              var a = f();
              return ")" !== g ? NaN : (b(), a);
            }
            function e() {
              for (var a = d(); "*" === g || "/" === g; ) {
                var c = g;
                b();
                var e = d();
                "*" === c ? (a *= e) : (a /= e);
              }
              return a;
            }
            function f() {
              for (var a = e(); "+" === g || "-" === g; ) {
                var c = g;
                b();
                var d = e();
                "+" === c ? (a += d) : (a -= d);
              }
              return a;
            }
            var g,
              h = /([\+\-\w\.]+|[\(\)\*\/])/g;
            return b(), f();
          }
          function d(a, b) {
            if ("0" == (b = b.trim().toLowerCase()) && "px".search(a) >= 0)
              return { px: 0 };
            if (/^[^(]*$|^calc/.test(b)) {
              b = b.replace(/calc\(/g, "(");
              var d = {};
              b = b.replace(a, function (a) {
                return (d[a] = null), "U" + a;
              });
              for (
                var e = "U(" + a.source + ")",
                  f = b
                    .replace(/[-+]?(\d*\.)?\d+([Ee][-+]?\d+)?/g, "N")
                    .replace(new RegExp("N" + e, "g"), "D")
                    .replace(/\s[+-]\s/g, "O")
                    .replace(/\s/g, ""),
                  g = [/N\*(D)/g, /(N|D)[*\/]N/g, /(N|D)O\1/g, /\((N|D)\)/g],
                  h = 0;
                h < g.length;

              )
                g[h].test(f) ? ((f = f.replace(g[h], "$1")), (h = 0)) : h++;
              if ("D" == f) {
                for (var i in d) {
                  var j = c(
                    b
                      .replace(new RegExp("U" + i, "g"), "")
                      .replace(new RegExp(e, "g"), "*0")
                  );
                  if (!isFinite(j)) return;
                  d[i] = j;
                }
                return d;
              }
            }
          }
          function e(a, b) {
            return f(a, b, !0);
          }
          function f(b, c, d) {
            var e,
              f = [];
            for (e in b) f.push(e);
            for (e in c) f.indexOf(e) < 0 && f.push(e);
            return (
              (b = f.map(function (a) {
                return b[a] || 0;
              })),
              (c = f.map(function (a) {
                return c[a] || 0;
              })),
              [
                b,
                c,
                function (b) {
                  var c = b
                    .map(function (c, e) {
                      return (
                        1 == b.length && d && (c = Math.max(c, 0)),
                        a.numberToString(c) + f[e]
                      );
                    })
                    .join(" + ");
                  return b.length > 1 ? "calc(" + c + ")" : c;
                },
              ]
            );
          }
          var g = "px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc",
            h = d.bind(null, new RegExp(g, "g")),
            i = d.bind(null, new RegExp(g + "|%", "g")),
            j = d.bind(null, /deg|rad|grad|turn/g);
          (a.parseLength = h),
            (a.parseLengthOrPercent = i),
            (a.consumeLengthOrPercent = a.consumeParenthesised.bind(null, i)),
            (a.parseAngle = j),
            (a.mergeDimensions = f);
          var k = a.consumeParenthesised.bind(null, h),
            l = a.consumeRepeated.bind(void 0, k, /^/),
            m = a.consumeRepeated.bind(void 0, l, /^,/);
          a.consumeSizePairList = m;
          var n = function (a) {
              var b = m(a);
              if (b && "" == b[1]) return b[0];
            },
            o = a.mergeNestedRepeated.bind(void 0, e, " "),
            p = a.mergeNestedRepeated.bind(void 0, o, ",");
          (a.mergeNonNegativeSizePair = o),
            a.addPropertiesHandler(n, p, ["background-size"]),
            a.addPropertiesHandler(i, e, [
              "border-bottom-width",
              "border-image-width",
              "border-left-width",
              "border-right-width",
              "border-top-width",
              "flex-basis",
              "font-size",
              "height",
              "line-height",
              "max-height",
              "max-width",
              "outline-width",
              "width",
            ]),
            a.addPropertiesHandler(i, f, [
              "border-bottom-left-radius",
              "border-bottom-right-radius",
              "border-top-left-radius",
              "border-top-right-radius",
              "bottom",
              "left",
              "letter-spacing",
              "margin-bottom",
              "margin-left",
              "margin-right",
              "margin-top",
              "min-height",
              "min-width",
              "outline-offset",
              "padding-bottom",
              "padding-left",
              "padding-right",
              "padding-top",
              "perspective",
              "right",
              "shape-margin",
              "stroke-dashoffset",
              "text-indent",
              "top",
              "vertical-align",
              "word-spacing",
            ]);
        })(b),
        (function (a, b) {
          function c(b) {
            return a.consumeLengthOrPercent(b) || a.consumeToken(/^auto/, b);
          }
          function d(b) {
            var d = a.consumeList(
              [
                a.ignore(a.consumeToken.bind(null, /^rect/)),
                a.ignore(a.consumeToken.bind(null, /^\(/)),
                a.consumeRepeated.bind(null, c, /^,/),
                a.ignore(a.consumeToken.bind(null, /^\)/)),
              ],
              b
            );
            if (d && 4 == d[0].length) return d[0];
          }
          function e(b, c) {
            return "auto" == b || "auto" == c
              ? [
                  !0,
                  !1,
                  function (d) {
                    var e = d ? b : c;
                    if ("auto" == e) return "auto";
                    var f = a.mergeDimensions(e, e);
                    return f[2](f[0]);
                  },
                ]
              : a.mergeDimensions(b, c);
          }
          function f(a) {
            return "rect(" + a + ")";
          }
          var g = a.mergeWrappedNestedRepeated.bind(null, f, e, ", ");
          (a.parseBox = d),
            (a.mergeBoxes = g),
            a.addPropertiesHandler(d, g, ["clip"]);
        })(b),
        (function (a, b) {
          function c(a) {
            return function (b) {
              var c = 0;
              return a.map(function (a) {
                return a === k ? b[c++] : a;
              });
            };
          }
          function d(a) {
            return a;
          }
          function e(b) {
            if ("none" == (b = b.toLowerCase().trim())) return [];
            for (
              var c, d = /\s*(\w+)\(([^)]*)\)/g, e = [], f = 0;
              (c = d.exec(b));

            ) {
              if (c.index != f) return;
              f = c.index + c[0].length;
              var g = c[1],
                h = n[g];
              if (!h) return;
              var i = c[2].split(","),
                j = h[0];
              if (j.length < i.length) return;
              for (var k = [], o = 0; o < j.length; o++) {
                var p,
                  q = i[o],
                  r = j[o];
                if (
                  void 0 ===
                  (p = q
                    ? {
                        A: function (b) {
                          return "0" == b.trim() ? m : a.parseAngle(b);
                        },
                        N: a.parseNumber,
                        T: a.parseLengthOrPercent,
                        L: a.parseLength,
                      }[r.toUpperCase()](q)
                    : { a: m, n: k[0], t: l }[r])
                )
                  return;
                k.push(p);
              }
              if ((e.push({ t: g, d: k }), d.lastIndex == b.length)) return e;
            }
          }
          function f(a) {
            return a.toFixed(6).replace(".000000", "");
          }
          function g(b, c) {
            if (b.decompositionPair !== c) {
              b.decompositionPair = c;
              var d = a.makeMatrixDecomposition(b);
            }
            if (c.decompositionPair !== b) {
              c.decompositionPair = b;
              var e = a.makeMatrixDecomposition(c);
            }
            return null == d[0] || null == e[0]
              ? [
                  [!1],
                  [!0],
                  function (a) {
                    return a ? c[0].d : b[0].d;
                  },
                ]
              : (d[0].push(0),
                e[0].push(1),
                [
                  d,
                  e,
                  function (b) {
                    var c = a.quat(d[0][3], e[0][3], b[5]);
                    return a
                      .composeMatrix(b[0], b[1], b[2], c, b[4])
                      .map(f)
                      .join(",");
                  },
                ]);
          }
          function h(a) {
            return a.replace(/[xy]/, "");
          }
          function i(a) {
            return a.replace(/(x|y|z|3d)?$/, "3d");
          }
          function j(b, c) {
            var d = a.makeMatrixDecomposition && !0,
              e = !1;
            if (!b.length || !c.length) {
              b.length || ((e = !0), (b = c), (c = []));
              for (var f = 0; f < b.length; f++) {
                var j = b[f].t,
                  k = b[f].d,
                  l = "scale" == j.substr(0, 5) ? 1 : 0;
                c.push({
                  t: j,
                  d: k.map(function (a) {
                    if ("number" == typeof a) return l;
                    var b = {};
                    for (var c in a) b[c] = l;
                    return b;
                  }),
                });
              }
            }
            var m = function (a, b) {
                return (
                  ("perspective" == a && "perspective" == b) ||
                  (("matrix" == a || "matrix3d" == a) &&
                    ("matrix" == b || "matrix3d" == b))
                );
              },
              o = [],
              p = [],
              q = [];
            if (b.length != c.length) {
              if (!d) return;
              var r = g(b, c);
              (o = [r[0]]), (p = [r[1]]), (q = [["matrix", [r[2]]]]);
            } else
              for (var f = 0; f < b.length; f++) {
                var j,
                  s = b[f].t,
                  t = c[f].t,
                  u = b[f].d,
                  v = c[f].d,
                  w = n[s],
                  x = n[t];
                if (m(s, t)) {
                  if (!d) return;
                  var r = g([b[f]], [c[f]]);
                  o.push(r[0]), p.push(r[1]), q.push(["matrix", [r[2]]]);
                } else {
                  if (s == t) j = s;
                  else if (w[2] && x[2] && h(s) == h(t))
                    (j = h(s)), (u = w[2](u)), (v = x[2](v));
                  else {
                    if (!w[1] || !x[1] || i(s) != i(t)) {
                      if (!d) return;
                      var r = g(b, c);
                      (o = [r[0]]), (p = [r[1]]), (q = [["matrix", [r[2]]]]);
                      break;
                    }
                    (j = i(s)), (u = w[1](u)), (v = x[1](v));
                  }
                  for (var y = [], z = [], A = [], B = 0; B < u.length; B++) {
                    var C =
                        "number" == typeof u[B]
                          ? a.mergeNumbers
                          : a.mergeDimensions,
                      r = C(u[B], v[B]);
                    (y[B] = r[0]), (z[B] = r[1]), A.push(r[2]);
                  }
                  o.push(y), p.push(z), q.push([j, A]);
                }
              }
            if (e) {
              var D = o;
              (o = p), (p = D);
            }
            return [
              o,
              p,
              function (a) {
                return a
                  .map(function (a, b) {
                    var c = a
                      .map(function (a, c) {
                        return q[b][1][c](a);
                      })
                      .join(",");
                    return (
                      "matrix" == q[b][0] &&
                        16 == c.split(",").length &&
                        (q[b][0] = "matrix3d"),
                      q[b][0] + "(" + c + ")"
                    );
                  })
                  .join(" ");
              },
            ];
          }
          var k = null,
            l = { px: 0 },
            m = { deg: 0 },
            n = {
              matrix: [
                "NNNNNN",
                [k, k, 0, 0, k, k, 0, 0, 0, 0, 1, 0, k, k, 0, 1],
                d,
              ],
              matrix3d: ["NNNNNNNNNNNNNNNN", d],
              rotate: ["A"],
              rotatex: ["A"],
              rotatey: ["A"],
              rotatez: ["A"],
              rotate3d: ["NNNA"],
              perspective: ["L"],
              scale: ["Nn", c([k, k, 1]), d],
              scalex: ["N", c([k, 1, 1]), c([k, 1])],
              scaley: ["N", c([1, k, 1]), c([1, k])],
              scalez: ["N", c([1, 1, k])],
              scale3d: ["NNN", d],
              skew: ["Aa", null, d],
              skewx: ["A", null, c([k, m])],
              skewy: ["A", null, c([m, k])],
              translate: ["Tt", c([k, k, l]), d],
              translatex: ["T", c([k, l, l]), c([k, l])],
              translatey: ["T", c([l, k, l]), c([l, k])],
              translatez: ["L", c([l, l, k])],
              translate3d: ["TTL", d],
            };
          a.addPropertiesHandler(e, j, ["transform"]),
            (a.transformToSvgMatrix = function (b) {
              var c = a.transformListToMatrix(e(b));
              return (
                "matrix(" +
                f(c[0]) +
                " " +
                f(c[1]) +
                " " +
                f(c[4]) +
                " " +
                f(c[5]) +
                " " +
                f(c[12]) +
                " " +
                f(c[13]) +
                ")"
              );
            });
        })(b),
        (function (a, b) {
          function c(a, b) {
            b.concat([a]).forEach(function (b) {
              b in document.documentElement.style && (d[a] = b), (e[b] = a);
            });
          }
          var d = {},
            e = {};
          c("transform", ["webkitTransform", "msTransform"]),
            c("transformOrigin", ["webkitTransformOrigin"]),
            c("perspective", ["webkitPerspective"]),
            c("perspectiveOrigin", ["webkitPerspectiveOrigin"]),
            (a.propertyName = function (a) {
              return d[a] || a;
            }),
            (a.unprefixedPropertyName = function (a) {
              return e[a] || a;
            });
        })(b);
    })(),
    (function () {
      if (void 0 === document.createElement("div").animate([]).oncancel) {
        var a;
        if (window.performance && performance.now)
          var a = function () {
            return performance.now();
          };
        else
          var a = function () {
            return Date.now();
          };
        var b = function (a, b, c) {
            (this.target = a),
              (this.currentTime = b),
              (this.timelineTime = c),
              (this.type = "cancel"),
              (this.bubbles = !1),
              (this.cancelable = !1),
              (this.currentTarget = a),
              (this.defaultPrevented = !1),
              (this.eventPhase = Event.AT_TARGET),
              (this.timeStamp = Date.now());
          },
          c = window.Element.prototype.animate;
        window.Element.prototype.animate = function (d, e) {
          var f = c.call(this, d, e);
          (f._cancelHandlers = []), (f.oncancel = null);
          var g = f.cancel;
          f.cancel = function () {
            g.call(this);
            var c = new b(this, null, a()),
              d = this._cancelHandlers.concat(
                this.oncancel ? [this.oncancel] : []
              );
            setTimeout(function () {
              d.forEach(function (a) {
                a.call(c.target, c);
              });
            }, 0);
          };
          var h = f.addEventListener;
          f.addEventListener = function (a, b) {
            "function" == typeof b && "cancel" == a
              ? this._cancelHandlers.push(b)
              : h.call(this, a, b);
          };
          var i = f.removeEventListener;
          return (
            (f.removeEventListener = function (a, b) {
              if ("cancel" == a) {
                var c = this._cancelHandlers.indexOf(b);
                c >= 0 && this._cancelHandlers.splice(c, 1);
              } else i.call(this, a, b);
            }),
            f
          );
        };
      }
    })(),
    (function (a) {
      var b = document.documentElement,
        c = null,
        d = !1;
      try {
        var e = getComputedStyle(b).getPropertyValue("opacity"),
          f = "0" == e ? "1" : "0";
        (c = b.animate({ opacity: [f, f] }, { duration: 1 })),
          (c.currentTime = 0),
          (d = getComputedStyle(b).getPropertyValue("opacity") == f);
      } catch (a) {
      } finally {
        c && c.cancel();
      }
      if (!d) {
        var g = window.Element.prototype.animate;
        window.Element.prototype.animate = function (b, c) {
          return (
            window.Symbol &&
              Symbol.iterator &&
              Array.prototype.from &&
              b[Symbol.iterator] &&
              (b = Array.from(b)),
            Array.isArray(b) || null === b || (b = a.convertToArrayForm(b)),
            g.call(this, b, c)
          );
        };
      }
    })(a),
    (function (a, b, c) {
      function d(a) {
        var c = b.timeline;
        (c.currentTime = a),
          c._discardAnimations(),
          0 == c._animations.length ? (f = !1) : requestAnimationFrame(d);
      }
      var e = window.requestAnimationFrame;
      (window.requestAnimationFrame = function (a) {
        return e(function (c) {
          b.timeline._updateAnimationsPromises(),
            a(c),
            b.timeline._updateAnimationsPromises();
        });
      }),
        (b.AnimationTimeline = function () {
          (this._animations = []), (this.currentTime = void 0);
        }),
        (b.AnimationTimeline.prototype = {
          getAnimations: function () {
            return this._discardAnimations(), this._animations.slice();
          },
          _updateAnimationsPromises: function () {
            b.animationsWithPromises = b.animationsWithPromises.filter(
              function (a) {
                return a._updatePromises();
              }
            );
          },
          _discardAnimations: function () {
            this._updateAnimationsPromises(),
              (this._animations = this._animations.filter(function (a) {
                return "finished" != a.playState && "idle" != a.playState;
              }));
          },
          _play: function (a) {
            var c = new b.Animation(a, this);
            return (
              this._animations.push(c),
              b.restartWebAnimationsNextTick(),
              c._updatePromises(),
              c._animation.play(),
              c._updatePromises(),
              c
            );
          },
          play: function (a) {
            return a && a.remove(), this._play(a);
          },
        });
      var f = !1;
      b.restartWebAnimationsNextTick = function () {
        f || ((f = !0), requestAnimationFrame(d));
      };
      var g = new b.AnimationTimeline();
      b.timeline = g;
      try {
        Object.defineProperty(window.document, "timeline", {
          configurable: !0,
          get: function () {
            return g;
          },
        });
      } catch (a) {}
      try {
        window.document.timeline = g;
      } catch (a) {}
    })(0, c),
    (function (a, b, c) {
      (b.animationsWithPromises = []),
        (b.Animation = function (b, c) {
          if (
            ((this.id = ""),
            b && b._id && (this.id = b._id),
            (this.effect = b),
            b && (b._animation = this),
            !c)
          )
            throw new Error("Animation with null timeline is not supported");
          (this._timeline = c),
            (this._sequenceNumber = a.sequenceNumber++),
            (this._holdTime = 0),
            (this._paused = !1),
            (this._isGroup = !1),
            (this._animation = null),
            (this._childAnimations = []),
            (this._callback = null),
            (this._oldPlayState = "idle"),
            this._rebuildUnderlyingAnimation(),
            this._animation.cancel(),
            this._updatePromises();
        }),
        (b.Animation.prototype = {
          _updatePromises: function () {
            var a = this._oldPlayState,
              b = this.playState;
            return (
              this._readyPromise &&
                b !== a &&
                ("idle" == b
                  ? (this._rejectReadyPromise(), (this._readyPromise = void 0))
                  : "pending" == a
                  ? this._resolveReadyPromise()
                  : "pending" == b && (this._readyPromise = void 0)),
              this._finishedPromise &&
                b !== a &&
                ("idle" == b
                  ? (this._rejectFinishedPromise(),
                    (this._finishedPromise = void 0))
                  : "finished" == b
                  ? this._resolveFinishedPromise()
                  : "finished" == a && (this._finishedPromise = void 0)),
              (this._oldPlayState = this.playState),
              this._readyPromise || this._finishedPromise
            );
          },
          _rebuildUnderlyingAnimation: function () {
            this._updatePromises();
            var a,
              c,
              d,
              e,
              f = !!this._animation;
            f &&
              ((a = this.playbackRate),
              (c = this._paused),
              (d = this.startTime),
              (e = this.currentTime),
              this._animation.cancel(),
              (this._animation._wrapper = null),
              (this._animation = null)),
              (!this.effect || this.effect instanceof window.KeyframeEffect) &&
                ((this._animation = b.newUnderlyingAnimationForKeyframeEffect(
                  this.effect
                )),
                b.bindAnimationForKeyframeEffect(this)),
              (this.effect instanceof window.SequenceEffect ||
                this.effect instanceof window.GroupEffect) &&
                ((this._animation = b.newUnderlyingAnimationForGroup(
                  this.effect
                )),
                b.bindAnimationForGroup(this)),
              this.effect &&
                this.effect._onsample &&
                b.bindAnimationForCustomEffect(this),
              f &&
                (1 != a && (this.playbackRate = a),
                null !== d
                  ? (this.startTime = d)
                  : null !== e
                  ? (this.currentTime = e)
                  : null !== this._holdTime &&
                    (this.currentTime = this._holdTime),
                c && this.pause()),
              this._updatePromises();
          },
          _updateChildren: function () {
            if (this.effect && "idle" != this.playState) {
              var a = this.effect._timing.delay;
              this._childAnimations.forEach(
                function (c) {
                  this._arrangeChildren(c, a),
                    this.effect instanceof window.SequenceEffect &&
                      (a += b.groupChildDuration(c.effect));
                }.bind(this)
              );
            }
          },
          _setExternalAnimation: function (a) {
            if (this.effect && this._isGroup)
              for (var b = 0; b < this.effect.children.length; b++)
                (this.effect.children[b]._animation = a),
                  this._childAnimations[b]._setExternalAnimation(a);
          },
          _constructChildAnimations: function () {
            if (this.effect && this._isGroup) {
              var a = this.effect._timing.delay;
              this._removeChildAnimations(),
                this.effect.children.forEach(
                  function (c) {
                    var d = b.timeline._play(c);
                    this._childAnimations.push(d),
                      (d.playbackRate = this.playbackRate),
                      this._paused && d.pause(),
                      (c._animation = this.effect._animation),
                      this._arrangeChildren(d, a),
                      this.effect instanceof window.SequenceEffect &&
                        (a += b.groupChildDuration(c));
                  }.bind(this)
                );
            }
          },
          _arrangeChildren: function (a, b) {
            null === this.startTime
              ? (a.currentTime = this.currentTime - b / this.playbackRate)
              : a.startTime !== this.startTime + b / this.playbackRate &&
                (a.startTime = this.startTime + b / this.playbackRate);
          },
          get timeline() {
            return this._timeline;
          },
          get playState() {
            return this._animation ? this._animation.playState : "idle";
          },
          get finished() {
            return window.Promise
              ? (this._finishedPromise ||
                  (-1 == b.animationsWithPromises.indexOf(this) &&
                    b.animationsWithPromises.push(this),
                  (this._finishedPromise = new Promise(
                    function (a, b) {
                      (this._resolveFinishedPromise = function () {
                        a(this);
                      }),
                        (this._rejectFinishedPromise = function () {
                          b({
                            type: DOMException.ABORT_ERR,
                            name: "AbortError",
                          });
                        });
                    }.bind(this)
                  )),
                  "finished" == this.playState &&
                    this._resolveFinishedPromise()),
                this._finishedPromise)
              : (console.warn(
                  "Animation Promises require JavaScript Promise constructor"
                ),
                null);
          },
          get ready() {
            return window.Promise
              ? (this._readyPromise ||
                  (-1 == b.animationsWithPromises.indexOf(this) &&
                    b.animationsWithPromises.push(this),
                  (this._readyPromise = new Promise(
                    function (a, b) {
                      (this._resolveReadyPromise = function () {
                        a(this);
                      }),
                        (this._rejectReadyPromise = function () {
                          b({
                            type: DOMException.ABORT_ERR,
                            name: "AbortError",
                          });
                        });
                    }.bind(this)
                  )),
                  "pending" !== this.playState && this._resolveReadyPromise()),
                this._readyPromise)
              : (console.warn(
                  "Animation Promises require JavaScript Promise constructor"
                ),
                null);
          },
          get onfinish() {
            return this._animation.onfinish;
          },
          set onfinish(a) {
            this._animation.onfinish =
              "function" == typeof a
                ? function (b) {
                    (b.target = this), a.call(this, b);
                  }.bind(this)
                : a;
          },
          get oncancel() {
            return this._animation.oncancel;
          },
          set oncancel(a) {
            this._animation.oncancel =
              "function" == typeof a
                ? function (b) {
                    (b.target = this), a.call(this, b);
                  }.bind(this)
                : a;
          },
          get currentTime() {
            this._updatePromises();
            var a = this._animation.currentTime;
            return this._updatePromises(), a;
          },
          set currentTime(a) {
            this._updatePromises(),
              (this._animation.currentTime = isFinite(a)
                ? a
                : Math.sign(a) * Number.MAX_VALUE),
              this._register(),
              this._forEachChild(function (b, c) {
                b.currentTime = a - c;
              }),
              this._updatePromises();
          },
          get startTime() {
            return this._animation.startTime;
          },
          set startTime(a) {
            this._updatePromises(),
              (this._animation.startTime = isFinite(a)
                ? a
                : Math.sign(a) * Number.MAX_VALUE),
              this._register(),
              this._forEachChild(function (b, c) {
                b.startTime = a + c;
              }),
              this._updatePromises();
          },
          get playbackRate() {
            return this._animation.playbackRate;
          },
          set playbackRate(a) {
            this._updatePromises();
            var b = this.currentTime;
            (this._animation.playbackRate = a),
              this._forEachChild(function (b) {
                b.playbackRate = a;
              }),
              null !== b && (this.currentTime = b),
              this._updatePromises();
          },
          play: function () {
            this._updatePromises(),
              (this._paused = !1),
              this._animation.play(),
              -1 == this._timeline._animations.indexOf(this) &&
                this._timeline._animations.push(this),
              this._register(),
              b.awaitStartTime(this),
              this._forEachChild(function (a) {
                var b = a.currentTime;
                a.play(), (a.currentTime = b);
              }),
              this._updatePromises();
          },
          pause: function () {
            this._updatePromises(),
              this.currentTime && (this._holdTime = this.currentTime),
              this._animation.pause(),
              this._register(),
              this._forEachChild(function (a) {
                a.pause();
              }),
              (this._paused = !0),
              this._updatePromises();
          },
          finish: function () {
            this._updatePromises(),
              this._animation.finish(),
              this._register(),
              this._updatePromises();
          },
          cancel: function () {
            this._updatePromises(),
              this._animation.cancel(),
              this._register(),
              this._removeChildAnimations(),
              this._updatePromises();
          },
          reverse: function () {
            this._updatePromises();
            var a = this.currentTime;
            this._animation.reverse(),
              this._forEachChild(function (a) {
                a.reverse();
              }),
              null !== a && (this.currentTime = a),
              this._updatePromises();
          },
          addEventListener: function (a, b) {
            var c = b;
            "function" == typeof b &&
              ((c = function (a) {
                (a.target = this), b.call(this, a);
              }.bind(this)),
              (b._wrapper = c)),
              this._animation.addEventListener(a, c);
          },
          removeEventListener: function (a, b) {
            this._animation.removeEventListener(a, (b && b._wrapper) || b);
          },
          _removeChildAnimations: function () {
            for (; this._childAnimations.length; )
              this._childAnimations.pop().cancel();
          },
          _forEachChild: function (b) {
            var c = 0;
            if (
              (this.effect.children &&
                this._childAnimations.length < this.effect.children.length &&
                this._constructChildAnimations(),
              this._childAnimations.forEach(
                function (a) {
                  b.call(this, a, c),
                    this.effect instanceof window.SequenceEffect &&
                      (c += a.effect.activeDuration);
                }.bind(this)
              ),
              "pending" != this.playState)
            ) {
              var d = this.effect._timing,
                e = this.currentTime;
              null !== e &&
                (e = a.calculateIterationProgress(
                  a.calculateActiveDuration(d),
                  e,
                  d
                )),
                (null == e || isNaN(e)) && this._removeChildAnimations();
            }
          },
        }),
        (window.Animation = b.Animation);
    })(a, c),
    (function (a, b, c) {
      function d(b) {
        this._frames = a.normalizeKeyframes(b);
      }
      function e() {
        for (var a = !1; i.length; ) i.shift()._updateChildren(), (a = !0);
        return a;
      }
      var f = function (a) {
        if (
          ((a._animation = void 0),
          a instanceof window.SequenceEffect || a instanceof window.GroupEffect)
        )
          for (var b = 0; b < a.children.length; b++) f(a.children[b]);
      };
      (b.removeMulti = function (a) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          d._parent
            ? (-1 == b.indexOf(d._parent) && b.push(d._parent),
              d._parent.children.splice(d._parent.children.indexOf(d), 1),
              (d._parent = null),
              f(d))
            : d._animation &&
              d._animation.effect == d &&
              (d._animation.cancel(),
              (d._animation.effect = new KeyframeEffect(null, [])),
              d._animation._callback &&
                (d._animation._callback._animation = null),
              d._animation._rebuildUnderlyingAnimation(),
              f(d));
        }
        for (c = 0; c < b.length; c++) b[c]._rebuild();
      }),
        (b.KeyframeEffect = function (b, c, e, f) {
          return (
            (this.target = b),
            (this._parent = null),
            (e = a.numericTimingToObject(e)),
            (this._timingInput = a.cloneTimingInput(e)),
            (this._timing = a.normalizeTimingInput(e)),
            (this.timing = a.makeTiming(e, !1, this)),
            (this.timing._effect = this),
            "function" == typeof c
              ? (a.deprecated(
                  "Custom KeyframeEffect",
                  "2015-06-22",
                  "Use KeyframeEffect.onsample instead."
                ),
                (this._normalizedKeyframes = c))
              : (this._normalizedKeyframes = new d(c)),
            (this._keyframes = c),
            (this.activeDuration = a.calculateActiveDuration(this._timing)),
            (this._id = f),
            this
          );
        }),
        (b.KeyframeEffect.prototype = {
          getFrames: function () {
            return "function" == typeof this._normalizedKeyframes
              ? this._normalizedKeyframes
              : this._normalizedKeyframes._frames;
          },
          set onsample(a) {
            if ("function" == typeof this.getFrames())
              throw new Error(
                "Setting onsample on custom effect KeyframeEffect is not supported."
              );
            (this._onsample = a),
              this._animation && this._animation._rebuildUnderlyingAnimation();
          },
          get parent() {
            return this._parent;
          },
          clone: function () {
            if ("function" == typeof this.getFrames())
              throw new Error("Cloning custom effects is not supported.");
            var b = new KeyframeEffect(
              this.target,
              [],
              a.cloneTimingInput(this._timingInput),
              this._id
            );
            return (
              (b._normalizedKeyframes = this._normalizedKeyframes),
              (b._keyframes = this._keyframes),
              b
            );
          },
          remove: function () {
            b.removeMulti([this]);
          },
        });
      var g = Element.prototype.animate;
      Element.prototype.animate = function (a, c) {
        var d = "";
        return (
          c && c.id && (d = c.id),
          b.timeline._play(new b.KeyframeEffect(this, a, c, d))
        );
      };
      var h = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
      (b.newUnderlyingAnimationForKeyframeEffect = function (a) {
        if (a) {
          var b = a.target || h,
            c = a._keyframes;
          "function" == typeof c && (c = []);
          var d = a._timingInput;
          d.id = a._id;
        } else
          var b = h,
            c = [],
            d = 0;
        return g.apply(b, [c, d]);
      }),
        (b.bindAnimationForKeyframeEffect = function (a) {
          a.effect &&
            "function" == typeof a.effect._normalizedKeyframes &&
            b.bindAnimationForCustomEffect(a);
        });
      var i = [];
      b.awaitStartTime = function (a) {
        null === a.startTime &&
          a._isGroup &&
          (0 == i.length && requestAnimationFrame(e), i.push(a));
      };
      var j = window.getComputedStyle;
      Object.defineProperty(window, "getComputedStyle", {
        configurable: !0,
        enumerable: !0,
        value: function () {
          b.timeline._updateAnimationsPromises();
          var a = j.apply(this, arguments);
          return (
            e() && (a = j.apply(this, arguments)),
            b.timeline._updateAnimationsPromises(),
            a
          );
        },
      }),
        (window.KeyframeEffect = b.KeyframeEffect),
        (window.Element.prototype.getAnimations = function () {
          return document.timeline.getAnimations().filter(
            function (a) {
              return null !== a.effect && a.effect.target == this;
            }.bind(this)
          );
        });
    })(a, c),
    (function (a, b, c) {
      function d(a) {
        a._registered ||
          ((a._registered = !0),
          g.push(a),
          h || ((h = !0), requestAnimationFrame(e)));
      }
      function e(a) {
        var b = g;
        (g = []),
          b.sort(function (a, b) {
            return a._sequenceNumber - b._sequenceNumber;
          }),
          (b = b.filter(function (a) {
            a();
            var b = a._animation ? a._animation.playState : "idle";
            return (
              "running" != b && "pending" != b && (a._registered = !1),
              a._registered
            );
          })),
          g.push.apply(g, b),
          g.length ? ((h = !0), requestAnimationFrame(e)) : (h = !1);
      }
      var f =
        (document.createElementNS("http://www.w3.org/1999/xhtml", "div"), 0);
      b.bindAnimationForCustomEffect = function (b) {
        var c,
          e = b.effect.target,
          g = "function" == typeof b.effect.getFrames();
        c = g ? b.effect.getFrames() : b.effect._onsample;
        var h = b.effect.timing,
          i = null;
        h = a.normalizeTimingInput(h);
        var j = function () {
          var d = j._animation ? j._animation.currentTime : null;
          null !== d &&
            ((d = a.calculateIterationProgress(
              a.calculateActiveDuration(h),
              d,
              h
            )),
            isNaN(d) && (d = null)),
            d !== i &&
              (g ? c(d, e, b.effect) : c(d, b.effect, b.effect._animation)),
            (i = d);
        };
        (j._animation = b),
          (j._registered = !1),
          (j._sequenceNumber = f++),
          (b._callback = j),
          d(j);
      };
      var g = [],
        h = !1;
      b.Animation.prototype._register = function () {
        this._callback && d(this._callback);
      };
    })(a, c),
    (function (a, b, c) {
      function d(a) {
        return a._timing.delay + a.activeDuration + a._timing.endDelay;
      }
      function e(b, c, d) {
        (this._id = d),
          (this._parent = null),
          (this.children = b || []),
          this._reparent(this.children),
          (c = a.numericTimingToObject(c)),
          (this._timingInput = a.cloneTimingInput(c)),
          (this._timing = a.normalizeTimingInput(c, !0)),
          (this.timing = a.makeTiming(c, !0, this)),
          (this.timing._effect = this),
          "auto" === this._timing.duration &&
            (this._timing.duration = this.activeDuration);
      }
      (window.SequenceEffect = function () {
        e.apply(this, arguments);
      }),
        (window.GroupEffect = function () {
          e.apply(this, arguments);
        }),
        (e.prototype = {
          _isAncestor: function (a) {
            for (var b = this; null !== b; ) {
              if (b == a) return !0;
              b = b._parent;
            }
            return !1;
          },
          _rebuild: function () {
            for (var a = this; a; )
              "auto" === a.timing.duration &&
                (a._timing.duration = a.activeDuration),
                (a = a._parent);
            this._animation && this._animation._rebuildUnderlyingAnimation();
          },
          _reparent: function (a) {
            b.removeMulti(a);
            for (var c = 0; c < a.length; c++) a[c]._parent = this;
          },
          _putChild: function (a, b) {
            for (
              var c = b
                  ? "Cannot append an ancestor or self"
                  : "Cannot prepend an ancestor or self",
                d = 0;
              d < a.length;
              d++
            )
              if (this._isAncestor(a[d]))
                throw {
                  type: DOMException.HIERARCHY_REQUEST_ERR,
                  name: "HierarchyRequestError",
                  message: c,
                };
            for (var d = 0; d < a.length; d++)
              b ? this.children.push(a[d]) : this.children.unshift(a[d]);
            this._reparent(a), this._rebuild();
          },
          append: function () {
            this._putChild(arguments, !0);
          },
          prepend: function () {
            this._putChild(arguments, !1);
          },
          get parent() {
            return this._parent;
          },
          get firstChild() {
            return this.children.length ? this.children[0] : null;
          },
          get lastChild() {
            return this.children.length
              ? this.children[this.children.length - 1]
              : null;
          },
          clone: function () {
            for (
              var b = a.cloneTimingInput(this._timingInput), c = [], d = 0;
              d < this.children.length;
              d++
            )
              c.push(this.children[d].clone());
            return this instanceof GroupEffect
              ? new GroupEffect(c, b)
              : new SequenceEffect(c, b);
          },
          remove: function () {
            b.removeMulti([this]);
          },
        }),
        (window.SequenceEffect.prototype = Object.create(e.prototype)),
        Object.defineProperty(
          window.SequenceEffect.prototype,
          "activeDuration",
          {
            get: function () {
              var a = 0;
              return (
                this.children.forEach(function (b) {
                  a += d(b);
                }),
                Math.max(a, 0)
              );
            },
          }
        ),
        (window.GroupEffect.prototype = Object.create(e.prototype)),
        Object.defineProperty(window.GroupEffect.prototype, "activeDuration", {
          get: function () {
            var a = 0;
            return (
              this.children.forEach(function (b) {
                a = Math.max(a, d(b));
              }),
              a
            );
          },
        }),
        (b.newUnderlyingAnimationForGroup = function (c) {
          var d,
            e = null,
            f = function (b) {
              var c = d._wrapper;
              if (c && "pending" != c.playState && c.effect)
                return null == b
                  ? void c._removeChildAnimations()
                  : 0 == b &&
                    c.playbackRate < 0 &&
                    (e || (e = a.normalizeTimingInput(c.effect.timing)),
                    (b = a.calculateIterationProgress(
                      a.calculateActiveDuration(e),
                      -1,
                      e
                    )),
                    isNaN(b) || null == b)
                  ? (c._forEachChild(function (a) {
                      a.currentTime = -1;
                    }),
                    void c._removeChildAnimations())
                  : void 0;
            },
            g = new KeyframeEffect(null, [], c._timing, c._id);
          return (g.onsample = f), (d = b.timeline._play(g));
        }),
        (b.bindAnimationForGroup = function (a) {
          (a._animation._wrapper = a),
            (a._isGroup = !0),
            b.awaitStartTime(a),
            a._constructChildAnimations(),
            a._setExternalAnimation(a);
        }),
        (b.groupChildDuration = d);
    })(a, c);
})();
//# sourceMappingURL=web-animations-next-lite.min.js.map
