/* ======================================================= 
 * Auto Grid Responsive Gallery
 * By David Blanco
 *
 * Contact: http://codecanyon.net/user/davidbo90
 *
 * Created: June 6, 2013
 *
 * Copyright (c) 2013, David Blanco. All rights reserved.
 * Released under CodeCanyon License http://codecanyon.net/
 *
 * Note: Script based in jQuery Masonry v2.1.07 made by David DeSandro http://masonry.desandro.com/ (under MIT)
 *
 * ======================================================= */


(function (e, f, g) {
    var b = f.event,
        a = f.event.handle ? "handle" : "dispatch",
        d;
    b.special.smartresize = {
        setup: function () {
            f(this).bind("resize", b.special.smartresize.handler)
        },
        teardown: function () {
            f(this).unbind("resize", b.special.smartresize.handler)
        },
        handler: function (k, h) {
            var j = this,
                i = arguments;
            k.type = "smartresize";
            if (d) {
                clearTimeout(d)
            }
            d = setTimeout(function () {
                b[a].apply(j, i)
            }, h === "execAsap" ? 0 : 100)
        }
    };
    f.fn.smartresize = function (h) {
        return h ? this.bind("smartresize", h) : this.trigger("smartresize", ["execAsap"])
    };
    f.Mason = function (h, i) {
        this.element = f(i);
        this._create(h);
        this._init()
    };
    f.Mason.settings = {
        isResizable: true,
        isAnimated: false,
        animationOptions: {
            queue: false,
            duration: 500
        },
        gutterWidth: 0,
        isRTL: false,
        isFitWidth: false,
        containerStyle: {
            position: "relative"
        }
    };
    f.Mason.prototype = {
        _resized: false,
        _filterFindBricks: function (i) {
            var h = this.options.itemSelector;
            return !h ? i : i.filter(h).add(i.find(h))
        },
        _getBricks: function (i) {
            var h = this._filterFindBricks(i).css({
                position: "absolute"
            }).addClass("grid-brick");
            return h
        },
        _create: function (k) {
            this.options = f.extend(true, {}, f.Mason.settings, k);
            this.styleQueue = [];
            var j = this.element[0].style;
            this.originalStyle = {
                height: j.height || ""
            };
            var l = this.options.containerStyle;
            for (var n in l) {
                this.originalStyle[n] = j[n] || ""
            }
            this.element.css(l);
            this.horizontalDirection = this.options.isRTL ? "right" : "left";
            var i = this.element.css("padding-" + this.horizontalDirection);
            var m = this.element.css("padding-top");
            this.offset = {
                x: i ? parseInt(i, 10) : 0,
                y: m ? parseInt(m, 10) : 0
            };
            this.isFluid = this.options.columnWidth && typeof this.options.columnWidth === "function";
            var h = this;
            setTimeout(function () {
                h.element.addClass("grid")
            }, 0);
            if (this.options.isResizable) {
                f(e).bind("smartresize.grid", function () {
                    h.resize()
                })
            }
            this.reloadItems()
        },
        _init: function (h) {
            this._getColumns();
            this._reLayout(h)
        },
        option: function (h, i) {
            if (f.isPlainObject(h)) {
                this.options = f.extend(true, this.options, h)
            }
        },
        layout: function (p, q) {
            for (var n = 0, o = p.length; n < o; n++) {
                this._placeBrick(p[n])
            }
            var h = {};
            h.height = Math.max.apply(Math, this.colYs);
            if (this.options.isFitWidth) {
                var l = 0;
                n = this.cols;
                while (--n) {
                    if (this.colYs[n] !== 0) {
                        break
                    }
                    l++
                }
                h.width = (this.cols - l) * this.columnWidth - this.options.gutterWidth
            }
            this.styleQueue.push({
                $el: this.element,
                style: h
            });
            var j = !this.isLaidOut ? "css" : (this.options.isAnimated ? "animate" : "css"),
                k = this.options.animationOptions;
            var m;
            for (n = 0, o = this.styleQueue.length; n < o; n++) {
                m = this.styleQueue[n];
                m.$el[j](m.style, k)
            }
            this.styleQueue = [];
            if (q) {
                q.call(p)
            }
            this.isLaidOut = true
        },
        _getColumns: function () {
            var h = this.options.isFitWidth ? this.element.parent() : this.element,
                i = h.width();
            this.columnWidth = this.isFluid ? this.options.columnWidth(i) : this.options.columnWidth || this.$bricks.outerWidth(true) || i;
            this.columnWidth += this.options.gutterWidth;
            this.cols = Math.floor((i + this.options.gutterWidth) / this.columnWidth);
            this.cols = Math.max(this.cols, 1)
        },
        _placeBrick: function (q) {
            var o = f(q),
                s, w, l, u, m;
            s = Math.ceil(o.outerWidth(true) / this.columnWidth);
            s = Math.min(s, this.cols);
            if (s === 1) {
                l = this.colYs
            } else {
                w = this.cols + 1 - s;
                l = [];
                for (m = 0; m < w; m++) {
                    u = this.colYs.slice(m, m + s);
                    l[m] = Math.max.apply(Math, u)
                }
            }
            var h = Math.min.apply(Math, l),
                v = 0;
            for (var n = 0, r = l.length; n < r; n++) {
                if (l[n] === h) {
                    v = n;
                    break
                }
            }
            var p = {
                top: h + this.offset.y
            };
            p[this.horizontalDirection] = this.columnWidth * v + this.offset.x;
            this.styleQueue.push({
                $el: o,
                style: p
            });
            var t = h + o.outerHeight(true),
                k = this.cols + 1 - r;
            for (n = 0; n < k; n++) {
                this.colYs[v + n] = t
            }
        },
        resize: function () {
            var h = this.cols;
            this._getColumns();
            if (this.isFluid || this.cols !== h) {
                this._reLayout()
            }
        },
        _reLayout: function (j) {
            var h = this.cols;
            this.colYs = [];
            while (h--) {
                this.colYs.push(0)
            }
            this.layout(this.$bricks, j)
        },
        reloadItems: function () {
            this.$bricks = this._getBricks(this.element.children())
        },
        reload: function (h) {
            this.reloadItems();
            this._init(h)
        },
        appended: function (i, j, k) {
            if (j) {
                this._filterFindBricks(i).css({
                    top: this.element.height()
                });
                var h = this;
                setTimeout(function () {
                    h._appended(i, k)
                }, 1)
            } else {
                this._appended(i, k)
            }
        },
        _appended: function (h, j) {
            var i = this._getBricks(h);
            this.$bricks = this.$bricks.add(i);
            this.layout(i, j)
        },
        remove: function (h) {
            this.$bricks = this.$bricks.not(h);
            h.remove()
        },
        destroy: function () {
            this.$bricks.removeClass("grid-brick").each(function () {
                this.style.position = "";
                this.style.top = "";
                this.style.left = ""
            });
            var h = this.element[0].style;
            for (var i in this.originalStyle) {
                h[i] = this.originalStyle[i]
            }
            this.element.unbind(".grid").removeClass("grid").removeData("grid");
            f(e).unbind(".grid")
        }
    };
    /*!
     * jQuery imagesLoaded plugin v1.1.0
     * http://github.com/desandro/imagesloaded
     *
     * MIT License. by Paul Irish et al.
     */
    ;
    f.fn.imagesLoaded = function (o) {
        var m = this,
            k = m.find("img").add(m.filter("img")),
            h = k.length,
            n = "../../content/images/ajax-loader.gif",
            j = [];

        function l() {
            o.call(m, k)
        }

        function i(q) {
            var p = q.target;
            if (p.src !== n && f.inArray(p, j) === -1) {
                j.push(p);
                if (--h <= 0) {
                    setTimeout(l);
                    k.unbind(".imagesLoaded", i)
                }
            }
        }
        if (!h) {
            l()
        }
        k.bind("load.imagesLoaded error.imagesLoaded", i).each(function () {
            var p = this.src;
            this.src = n;
            this.src = p
        });
        return m
    };
    var c = function (h) {
        if (e.console) {
            e.console.error(h)
        }
    };
    f.fn.grid = function (j) {
        var h = function (w) {
            var E = f.extend({}, f.fn.grid.defaults, j);
            if (j == g) {
                j = {}
            }
            j.isFitWidth = E.isFitWidth;
            j.isAnimated = E.isAnimated;
            j.itemSelector = ".box";
            j.gutterWidth = E.horizontalSpaceBetweenThumbnails;
            var t = f(w);
            var J = E.columnWidth;
            if (J == "auto") {
                j.columnWidth = function (ar) {
                    var at = -999;
                    for (var aq = E.columns; aq >= 1; aq--) {
                        if (at < E.columnMinWidth) {
                            at = (((ar - (aq - 1) * j.gutterWidth) / aq) | 0)
                        }
                    }
                    t.find("div.box").width(at);
                    return at
                }
            } else {
                if ((typeof J) != "function") {
                    j.columnWidth = function (aq) {
                        var ar = J;
                        t.find("div.box").width(ar);
                        return ar
                    }
                }
            }
            t.find("div.box").css("margin-bottom", E.verticalSpaceBetweenThumbnails);
            var M = null;
            var am = t.data("directory");
            var C = f('<ul class="category-navbar" />').hide().insertBefore(t);
            var ai = function () {
                var aq = C.find("li[class=select]").data("category");
                return aq
            };
            var al = f("<div />").insertAfter(t);
            var I = function () {
                al.addClass("grid-loader").removeClass("grid-loadMore").html("")
            };
            var S = function () {
                al.removeClass("grid-loader")
            };
            var O = false;
            var q = function (av) {
                var ar = 0;
                for (var au in M) {
                    var aq = M[au];
                    if (av == au || av == "CLIENTES") {
                        for (var at in aq) {
                            ar++
                        }
                    }
                }
                if (ar > 0) {
                    O = false;
                    return true
                } else {
                    return false
                }
            };
            var u = function (aq) {
                if (aq) {
                    al.addClass("grid-loadMore").html("VER MAIS CLIENTES")
                } else {
                    al.removeClass("grid-loadMore").html("")
                }
            };
            var D = function (au, aA, aq) {
                var az = "../../content/images/clientes/";
                if (aq == "no") {
                    az = ""
                }
                var ar = au + "/content/images/clientes/";
                if (au == "CLIENTES") {
                    ar = ""
                }
                var aw = aA.split(/\.(?=[^.]*$)/)[0];
                var av = "<h5>In " + au + "</h5>";
                if (au == "CLIENTES" || E.captionCategory == false) {
                    av = ""
                }
                var at = "";
                if (aw.indexOf("$$") != -1) {
                    var ay = aw.split("$$");
                    aw = ay[0];
                    at = 'data-url="' + ay[1].split(":").join("/") + '"'
                }
                if (aw.substr(1, 1) == "-") {
                    aw = aw.substr(2)
                }
                var ax = '<div class="box" data-category="' + au + '" ' + at + '><img src="' + am + "/" + ar + az + aA + '" data-lightbox="' + az + ar + aA + '" /><div class="image-caption"><h3>' + aq.thumb + "</h3>" + av + '</div><div class="lightbox-text">' + aw + " <span>In " + au + "</span></div></div>";
                return ax
            };
            var l = function () {
                var aq = ai();
                if (aq != "CLIENTES") {
                    t.children("div").not('.box[data-category="' + aq + '"]').removeClass("box grid-brick").hide()
                }
            };
            var k = function (aq) {
                aq = f(aq);
                aq.css("margin-bottom", E.verticalSpaceBetweenThumbnails);
                t.append(aq.hide());
                t.imagesLoaded(function () {
                    aq.hide().css({
                        top: 200,
                        left: 200
                    });
                    aq.show();
                    l();
                    t.grid("reload");
                    S();
                    u(q(ai()));
                    O = false
                })
            };
            var r = function (at) {
                I();
                var aA = 0;
                for (var aC in M) {
                    var aq = M[aC];
                    var ar = 0;
                    for (var aw in aq) {
                        ar++
                    }
                    if (ar > aA) {
                        aA = ar
                    }
                }
                var az = new Array();
                if (E.aleatoryImagesFromCategories) {
                    for (var av = 0; av < aA; av++) {
                        var aE = 0;
                        for (var aC in M) {
                            aq = M[aC];
                            var aD = aC;
                            if (aE == 0) {
                                aD = "CLIENTES"
                            }
                            var aB = 0;
                            for (var aw in aq) {
                                if (aB == av) {
                                    az.push({
                                        category: aD,
                                        image: aw,
                                        thumb: aq[aw],
                                        categoryOriginal: aC
                                    });
                                    break
                                }
                                aB++
                            }
                            aE++
                        }
                    }
                } else {
                    var aE = 0;
                    for (var aC in M) {
                        var aq = M[aC];
                        var aD = aC;
                        if (aE == 0) {
                            aD = "CLIENTES"
                        }
                        for (var aw in aq) {
                            az.push({
                                category: aD,
                                image: aw,
                                thumb: aq[aw],
                                categoryOriginal: aC
                            })
                        }
                        aE++
                    }
                }
                var ay = "";
                var ax = 0;
                while (ax < at) {
                    if (ax >= az.length) {
                        break
                    }
                    var au = az[ax];
                    ay += D(au.category, au.image, au.thumb);
                    delete M[au.categoryOriginal][au.image];
                    ax++
                }
                k(ay)
            };
            var Z = function (ar, az) {
                I();
                var ax = new Array();
                var aB = 0;
                for (var ay in M) {
                    var aq = M[ay];
                    var aA = ay;
                    if (aB == 0) {
                        aA = "CLIENTES"
                    }
                    if (aA == az) {
                        for (var au in aq) {
                            ax.push({
                                category: aA,
                                image: au,
                                thumb: aq[au],
                                categoryOriginal: ay
                            })
                        }
                    }
                    aB++
                }
                var aw = "";
                var av = 0;
                while (av < ar) {
                    if (av >= ax.length) {
                        break
                    }
                    var at = ax[av];
                    aw += D(at.category, at.image, at.thumb);
                    delete M[at.categoryOriginal][at.image];
                    av++
                }
                k(aw)
            };
            var ak = function () {
                if (al.hasClass("grid-loadMore")) {
                    var aq = ai();
                    if (aq == "CLIENTES") {
                        r(E.imagesToLoad)
                    } else {
                        Z(E.imagesToLoad, aq)
                    }
                }
            };
            al.on("click", function () {
                ak()
            });
            if (E.lazyLoad) {
                f(e).scroll(function () {
                    if (al.closest("html").length) {
                        if ((f(e).scrollTop() == (f(document).height() - f(e)[0].innerHeight)) && O == false) {
                            O = true;
                            ak()
                        }
                    }
                })
            }
            var v = function () {
                var aq = 0;
                for (var ar in M) {
                    var at = f("<li />").data("category", ar).appendTo(C);
                    f("<a />").html(ar).appendTo(at);
                    if (aq == 0) {
                        at.addClass("select");
                        at.data("category", "CLIENTES")
                    }
                    aq++
                }
                if (E.smartNavBar && aq <= 2) {
                    E.showNavBar = false
                }
                if (E.showNavBar) {
                    C.slideDown(400)
                }
            };
            f.getJSON(window.location.origin+"/reader-clientes.php?directory=" + am + "&categoriesOrder=" + E.categoriesOrder + "&imagesOrder=" + E.imagesOrder, function (aq) {
                M = aq;
                C.css("display", "none");
                v();
                r(E.imagesToLoadStart)
            });
            C.on("click", "a", function (aq) {
                aq.preventDefault();
                var au = jQuery(this);
                if (au.parent("li").hasClass("select")) {
                    return
                }
                au.parent("li").addClass("select").siblings("li").removeClass("select");
                var at = t;
                var ar = au.parent("li").data("category");
                if (ar == "CLIENTES") {
                    at.children("div").show().addClass("box grid-brick").css({
                        top: 200,
                        left: 200
                    })
                } else {
                    at.children('div[data-category="' + ar + '"]').show().addClass("box grid-brick").css({
                        top: 200,
                        left: 200
                    });
                    at.children("div").not('.box[data-category="' + ar + '"]').removeClass("box grid-brick").hide()
                }
                t.grid("reload");
                u(q(ai()))
            });
            t.on("mouseenter.hoverdir, mouseleave.hoverdir", "div.box", function (aw) {
                if (!E.caption) {
                    return
                }
                var au = f(this),
                    av = aw.type,
                    at = au.find("div.image-caption"),
                    ax = n(au, {
                        x: aw.pageX,
                        y: aw.pageY
                    }),
                    ar = af(ax, au);
                var ay = at.children("div.aligment");
                if (ay[0] == g) {
                    var aq = at.html();
                    at.html("<div class='aligment'><div class='aligment'>" + aq + "</div></div>")
                }
                if (av === "mouseenter") {
                    if (E.captionType == "classic") {
                        at.css({
                            left: 0,
                            top: 0
                        });
                        at.fadeIn(300);
                        return
                    }
                    at.css({
                        left: ar.from,
                        top: ar.to
                    });
                    at.stop().show().fadeTo(0, 1, function () {
                        f(this).stop().animate({
                            top: 0,
                            left: 0
                        }, 200, "linear")
                    })
                } else {
                    if (E.captionType == "classic") {
                        at.css({
                            left: 0,
                            top: 0
                        });
                        at.fadeOut(300);
                        return
                    }
                    if (E.captionType == "grid-fade") {
                        at.fadeOut(700)
                    } else {
                        at.stop().animate({
                            left: ar.from,
                            top: ar.to
                        }, 200, "linear", function () {
                            at.hide()
                        })
                    }
                }
            });
            var n = function (at, aw) {
                var ar = at.width(),
                    au = at.height(),
                    aq = (aw.x - at.offset().left - (ar / 2)) * (ar > au ? (au / ar) : 1),
                    ax = (aw.y - at.offset().top - (au / 2)) * (au > ar ? (ar / au) : 1),
                    av = Math.round((((Math.atan2(ax, aq) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
                return av
            };
            var af = function (at, ar) {
                var au, aq;
                switch (at) {
                    case 0:
                        if (!E.reverse) {
                            au = 0, aq = -ar.height()
                        } else {
                            au = 0, aq = -ar.height()
                        }
                        break;
                    case 1:
                        if (!E.reverse) {
                            au = ar.width(), aq = 0
                        } else {
                            au = -ar.width(), aq = 0
                        }
                        break;
                    case 2:
                        if (!E.reverse) {
                            au = 0, aq = ar.height()
                        } else {
                            au = 0, aq = -ar.height()
                        }
                        break;
                    case 3:
                        if (!E.reverse) {
                            au = -ar.width(), aq = 0
                        } else {
                            au = ar.width(), aq = 0
                        }
                        break
                }
                return {
                    from: au,
                    to: aq
                }
            };
            var V = f("body");
            var ad = {
                interval: "none"
            };
            var p = 0;
            var P = f('<div class="autoGrid-lightbox" />').appendTo(V);
            var U = f('<div class="autoGrid-nav" />').appendTo(P);
            var X = f('<div class="autoGrid-close" />').appendTo(U);
            var T = f('<i class="iconClose" />').appendTo(X);
            var y = f('<div class="autoGrid-play" />');
            if (E.lightboxPlayBtn) {
                y.appendTo(U)
            }
            var F = f('<i class="iconPlay" />').appendTo(y);
            var ab = f('<div class="autoGrid-lbcaption" />').appendTo(U).html("Here will go the text for the lightbox");
            var ag = f('<div class="autoGrid-next" />').appendTo(U);
            var ao = f('<i class="iconNext" />').appendTo(ag);
            var B = f('<div class="autoGrid-prev" />').appendTo(U);
            var H = f('<i class="iconPrev" />').appendTo(B);
            var aa = f('<div class="lightbox-timer" />').appendTo(P);
            var s = X.width();
            var W = 3;
            if (E.lightboxPlayBtn) {
                W = 4
            }
            var m = function () {
                var at = P.outerWidth();
                if (at < 650) {
                    ab.hide();
                    ag.css("width", (at / W));
                    B.css("width", (at / W));
                    y.css("width", (at / W));
                    X.css("width", at - ((at / W) * (W - 1)))
                } else {
                    ab.show();
                    ag.css("width", s);
                    B.css("width", s);
                    y.css("width", s);
                    X.css("width", s)
                }
                var aq = P.find("img");
                var ar = P.outerHeight() - U.outerHeight() - 10;
                aq.css("max-height", ar)
            };
            jQuery(e).resize(function () {
                m()
            });
            var R = new Image();
            var aj = function () {
                R.onload = null;
                R.src = null;
                R = null;
                P.find("img").remove()
            };
            var L = function () {
                P.find(".lb-loader").remove()
            };
            var A = function () {
                P.append('<div class="lb-loader"/>')
            };
            P.attr("unselectable", "on").css("user-select", "none").on("selectstart", false);
            var K = function () {
                aa.stop(true, true).width(0)
            };
            var an = function () {
                clearInterval(ad.interval)
            };
            var z = function () {
                if (E.lightBoxShowTimer == false) {
                    return
                }
                aa.css({
                    position: "absolute",
                    bottom: 0
                }).animate({
                    width: "100%"
                }, E.lightBoxPlayInterval, "linear", function () {
                    K()
                })
            };
            var ap = false;
            var Y = false;
            var N = function () {
                ad.interval = setTimeout(function () {
                    o()
                }, E.lightBoxPlayInterval);
                z()
            };
            var x = function () {
                if (ap && Y == false) {
                    K();
                    an();
                    N()
                }
            };
            var ae = f("<span />");
            var G = function (ax, ar) {
                aj();
                L();
                A();
                var av = 0;
                var aw = 0;
                if (ar != true) {
                    av = 0.9;
                    aw = E.lightBoxSpeedFx
                }
                if (E.lightBoxZoomAnim == false) {
                    av = 1
                }
                var at = ax;
                var au = at.data("lightbox");
                if (au == g) {
                    au = at.attr("src")
                }
                var az = at.siblings("div.lightbox-text").html();
                if (E.lightBoxText == false) {
                    az = ""
                }
                var ay = "<div><div>" + az + "</div></div>";
                ab.html(ay);
                R = new Image();
                var aq = f(R);
                R.onload = function () {
                    L();
                    P.append(aq.hide().scale(av));
                    aq.fadeIn(aw).animate({
                        scale: "1"
                    }, {
                        duration: E.lightBoxSpeedFx,
                        complete: function () {
                            x()
                        }
                    });
                    m()
                };
                R.src = au;
                ae.stop(true);
                ae = f(R)
            };
            var ah = false;
            t.on("click", "div.box", function () {
                ah = true;
                var at = f(this);
                var ar = at.data("url");
                if (ar != g) {
                    e.location.href = "http://" + ar;
                    return
                }
                if (E.lightBox == false) {
                    return
                }
                Y = false;
                p = t.find(".box").index(this);
                var aq = at.children("img");
                U.animate({
                    "margin-top": 0
                }, E.lightBoxSpeedFx);
                P.fadeIn(E.lightBoxSpeedFx);
                G(aq, true)
            });
            P.on("click", "div", function (aq) {
                aq.stopPropagation()
            });
            P.on("click", "img", function (aq) {
                aq.stopPropagation()
            });
            P.on("click", function () {
                ac()
            });
            X.on("click", function () {
                ac()
            });
            var ac = function () {
                if (E.lightBoxStopPlayOnClose) {
                    y.removeClass("selected");
                    ap = false
                }
                ah = false;
                Y = true;
                K();
                an();
                P.find(".lb-loader").remove();
                var ar = 0;
                if (E.lightBoxZoomAnim == false) {
                    ar = 1
                }
                var aq = P.find("img").stop().show();
                U.animate({
                    "margin-top": -U.outerHeight()
                }, E.lightBoxSpeedFx);
                if (aq[0] != g) {
                    aq.animate({
                        scale: ar
                    }, E.lightBoxSpeedFx, function () {
                        P.fadeOut(100)
                    })
                } else {
                    P.fadeOut(100)
                }
            };
            var o = function () {
                Y = false;
                var au = t.find(".box");
                p += 1;
                if (p >= au.length) {
                    p = 0
                }
                if (!au.eq(p).is(":visible")) {
                    var aq = p;
                    for (var at = 0; at < au.length; at++) {
                        aq++;
                        if (aq >= au.length) {
                            aq = 0
                        }
                        if (au.eq(aq).is(":visible")) {
                            p = aq;
                            break
                        }
                    }
                }
                var ar = au.eq(p).children("img");
                G(ar)
            };
            var Q = function () {
                Y = false;
                var au = t.find(".box");
                p -= 1;
                if (p < 0) {
                    p = au.length - 1
                }
                if (!au.eq(p).is(":visible")) {
                    var aq = p;
                    for (var at = 0; at < au.length; at++) {
                        aq--;
                        if (aq < 0) {
                            aq = au.length - 1
                        }
                        if (au.eq(aq).is(":visible")) {
                            p = aq;
                            break
                        }
                    }
                }
                var ar = au.eq(p).children("img");
                G(ar)
            };
            ag.on("click", function () {
                K();
                an();
                o()
            });
            P.on("click", "img", function () {
                K();
                an();
                o()
            });
            B.on("click", function () {
                K();
                an();
                Q()
            });
            f(document).keyup(function (aq) {
                if (!E.lightboxKeyboardNav) {
                    return
                }
                if (aq.keyCode == "37") {
                    if (ah == false) {
                        return
                    }
                    K();
                    an();
                    Q()
                }
                if (aq.keyCode == "39") {
                    if (ah == false) {
                        return
                    }
                    K();
                    an();
                    o()
                }
                if (aq.keyCode == 27) {
                    ac()
                }
            });
            if (E.lightBoxAutoPlay) {
                y.addClass("selected");
                ap = true
            }
            y.on("click", function () {
                w = f(this);
                if (w.hasClass("selected")) {
                    w.removeClass("selected");
                    ap = false;
                    K();
                    an()
                } else {
                    w.addClass("selected");
                    ap = true;
                    N()
                }
            })
        };
        if (typeof j === "string") {
            var i = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                var k = f.data(this, "grid");
                if (!k) {
                    c("cannot call methods on grid prior to initialization; attempted to call method '" + j + "'");
                    return
                }
                if (!f.isFunction(k[j]) || j.charAt(0) === "_") {
                    c("no such method '" + j + "' for grid instance");
                    return
                }
                k[j].apply(k, i)
            })
        } else {
            this.each(function () {
                var k = f.data(this, "grid");
                if (k) {
                    k.option(j || {});
                    k._init()
                } else {
                    h(this);
                    f.data(this, "grid", new f.Mason(j, this))
                }
            })
        }
        return this
    };
    f.fn.grid.defaults = {
        categoriesOrder: "byDate",
        imagesOrder: "byDate",
        isFitWidth: true,
        lazyLoad: false,
        showNavBar: true,
        smartNavBar: true,
        imagesToLoadStart: 15,
        imagesToLoad: 5,
        aleatoryImagesFromCategories: true,
        horizontalSpaceBetweenThumbnails: 5,
        verticalSpaceBetweenThumbnails: 5,
        columnWidth: "auto",
        columns: 5,
        columnMinWidth: 220,
        isAnimated: true,
        caption: true,
        captionCategory: true,
        captionType: "grid-fade",
        lightBox: true,
        lightboxKeyboardNav: true,
        lightBoxSpeedFx: 500,
        lightBoxZoomAnim: true,
        lightBoxText: true,
        lightboxPlayBtn: true,
        lightBoxAutoPlay: false,
        lightBoxPlayInterval: 4000,
        lightBoxShowTimer: true,
        lightBoxStopPlayOnClose: false
    }
})(window, jQuery);