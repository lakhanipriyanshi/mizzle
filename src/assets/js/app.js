/**
 * Mizzle - Technology and Corporate TailwindCSS Template
 *
 * @author StackBros https://stackbros.in/
 * @version 1.0.0
 */

// CSS File Import
import "../css/style.css"

// Plugin File Import
import "preline"

import { createIcons, icons } from "lucide"

// Caution, this will import all the icons and bundle them.
createIcons({ icons })

import { init } from "ityped"

import Swiper from "swiper/bundle"

import GLightbox from "glightbox"
import "glightbox/dist/css/glightbox.css"

import AOS from "aos"
import "aos/dist/aos.css"

import Isotope from "isotope-layout"
import imagesLoaded from "imagesloaded"

import { jarallax, jarallaxVideo } from "jarallax";
import 'jarallax/dist/jarallax.min.css';


("use strict")
!(function () {
    ; ((window.Element.prototype.removeClass = function () {
        let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            selectors = this
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors)
        }
        if (this.isVariableDefined(selectors) && className) {
            selectors.classList.remove(className)
        }
        return this
    }),
        (window.Element.prototype.addClass = function () {
            let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                selectors = this
            if (!(selectors instanceof HTMLElement) && selectors !== null) {
                selectors = document.querySelector(selectors)
            }
            if (this.isVariableDefined(selectors) && className) {
                selectors.classList.add(className)
            }
            return this
        }),
        (window.Element.prototype.toggleClass = function () {
            let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                selectors = this
            if (!(selectors instanceof HTMLElement) && selectors !== null) {
                selectors = document.querySelector(selectors)
            }
            if (this.isVariableDefined(selectors) && className) {
                selectors.classList.toggle(className)
            }
            return this
        }),
        (window.Element.prototype.isVariableDefined = function () {
            return !!this && typeof this != "undefined" && this != null
        }))
})()

var e = {
    init: function () {
        (
            e.stickyHeader(),
            e.backTotop(),
            e.lightBox(),
            e.parallaxBG(),
            e.aosFunc(),
            e.typeText(),
            e.enableIsotope(),
            e.swiperSlider(),
            e.mouseMove()
        )
    },

    isVariableDefined: function (el) {
        return typeof !!el && el != "undefined" && el != null
    },

    getParents: function (el, selector, filter) {
        const result = []
        const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector

        // match start from parent
        el = el.parentElement
        while (el && !matchesSelector.call(el, selector)) {
            if (!filter) {
                if (selector) {
                    if (matchesSelector.call(el, selector)) {
                        return result.push(el)
                    }
                } else {
                    result.push(el)
                }
            } else {
                if (matchesSelector.call(el, filter)) {
                    result.push(el)
                }
            }
            el = el.parentElement
            if (e.isVariableDefined(el)) {
                if (matchesSelector.call(el, selector)) {
                    return el
                }
            }
        }
        return result
    },

    getNextSiblings: function (el, selector, filter) {
        let sibs = []
        let nextElem = el.parentNode.firstChild
        const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector
        do {
            if (nextElem.nodeType === 3) continue // ignore text nodes
            if (nextElem === el) continue // ignore elem of target
            if (nextElem === el.nextElementSibling) {
                if (!filter || filter(el)) {
                    if (selector) {
                        if (matchesSelector.call(nextElem, selector)) {
                            return nextElem
                        }
                    } else {
                        sibs.push(nextElem)
                    }
                    el = nextElem
                }
            }
        } while ((nextElem = nextElem.nextSibling))
        return sibs
    },

    on: function (selectors, type, listener) {
        document.addEventListener("DOMContentLoaded", () => {
            if (!(selectors instanceof HTMLElement) && selectors !== null) {
                selectors = document.querySelector(selectors)
            }
            selectors.addEventListener(type, listener)
        })
    },

    onAll: function (selectors, type, listener) {
        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll(selectors).forEach((element) => {
                if (type.indexOf(",") > -1) {
                    let types = type.split(",")
                    types.forEach((type) => {
                        element.addEventListener(type, listener)
                    })
                } else {
                    element.addEventListener(type, listener)
                }
            })
        })
    },

    removeClass: function (selectors, className) {
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors)
        }
        if (e.isVariableDefined(selectors)) {
            selectors.removeClass(className)
        }
    },

    removeAllClass: function (selectors, className) {
        if (e.isVariableDefined(selectors) && selectors instanceof HTMLElement) {
            document.querySelectorAll(selectors).forEach((element) => {
                element.removeClass(className)
            })
        }
    },

    toggleClass: function (selectors, className) {
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors)
        }
        if (e.isVariableDefined(selectors)) {
            selectors.toggleClass(className)
        }
    },

    toggleAllClass: function (selectors, className) {
        if (e.isVariableDefined(selectors) && selectors instanceof HTMLElement) {
            document.querySelectorAll(selectors).forEach((element) => {
                element.toggleClass(className)
            })
        }
    },

    addClass: function (selectors, className) {
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors)
        }
        if (e.isVariableDefined(selectors)) {
            selectors.addClass(className)
        }
    },

    select: function (selectors) {
        return document.querySelector(selectors)
    },

    selectAll: function (selectors) {
        return document.querySelectorAll(selectors)
    },

    // Sticky Header
    stickyHeader: function () {
        var stickyNav = e.select(".header-sticky")
        if (e.isVariableDefined(stickyNav)) {
            document.addEventListener("scroll", function (event) {
                var scTop = window.pageYOffset || document.documentElement.scrollTop
                if (scTop >= 100) {
                    stickyNav.addClass("header-sticky-on")
                } else {
                    stickyNav.removeClass("header-sticky-on")
                }
            })
        }
    },

    // Back to Top
    backTotop: function () {
        var scrollpos = window.scrollY
        var backBtn = e.select(".back-top")
        if (e.isVariableDefined(backBtn)) {
            var add_class_on_scroll = () => backBtn.addClass("show")
            var remove_class_on_scroll = () => backBtn.removeClass("show")

            window.addEventListener("scroll", function () {
                scrollpos = window.scrollY
                if (scrollpos >= 800) {
                    add_class_on_scroll()
                } else {
                    remove_class_on_scroll()
                }
            })

            backBtn.addEventListener("click", () =>
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            )
        }
    },

    // GLightbox
    /* @required https://github.com/biati-digital/glightbox */

    lightBox: function () {
        var light = e.select("[data-glightbox]")
        if (e.isVariableDefined(light)) {
            var lb = GLightbox({
                selector: "*[data-glightbox]",
                openEffect: "fade",
                closeEffect: "fade",
            })
        }
    },

    // AOS Animation
    /* @required https://github.com/michalsnik/aos/tree/v2 */

    aosFunc: function () {
        var aos = e.select(".aos")
        if (e.isVariableDefined(aos)) {
            AOS.init({
                duration: 500,
                easing: "ease-out-quart",
                once: true,
            })
        }
    },

    // Typing Text Animation
    /* @required https://github.com/luisvinicius167/ityped */

    typeText: function () {
        var t = e.select(".typed")
        if (e.isVariableDefined(t)) {
            var type = e.selectAll(".typed")
            type.forEach((el) => {
                var strings = el.getAttribute("data-type-text")
                var split_strings = strings.split("&&")
                var typespeed = el.getAttribute("data-speed") ? el.getAttribute("data-speed") : 200
                var typeBackSpeed = el.getAttribute("data-back-speed") ? el.getAttribute("data-back-speed") : 50

                init(el, {
                    strings: split_strings,
                    showCursor: true,
                    typeSpeed: typespeed,
                    backSpeed: typeBackSpeed,
                })
            })
        }
    },

    // START Parallax Background
    /* @required https://github.com/nk-o/jarallax */

    parallaxBG: function () {
        var parBG = e.select('.bg-parallax');
        if (e.isVariableDefined(parBG)) {
            jarallax(e.selectAll('.bg-parallax'), {
                speed: 0.6
            });
        }

        jarallaxVideo()
        jarallax(document.querySelectorAll('[data-jarallax]'))
    },
    // END: Parallax Background

    // Isotope
    /* @required https://isotope.metafizzy.co/ */

    enableIsotope: function () {
        var isGridItem = e.select(".grid-item")
        if (e.isVariableDefined(isGridItem)) {
            // Code only for normal Grid
            var onlyGrid = e.select("[data-isotope]")
            if (e.isVariableDefined(onlyGrid)) {
                var allGrid = e.selectAll("[data-isotope]")
                allGrid.forEach((gridItem) => {
                    var gridItemData = gridItem.getAttribute("data-isotope")
                    var gridItemDataObj = JSON.parse(gridItemData)
                    var iso = new Isotope(gridItem, {
                        itemselector: ".grid-item",
                        layoutMode: gridItemDataObj.layoutMode,
                    })

                    imagesLoaded(gridItem).on("progress", function () {
                        // layout Isotope after each image loads
                        iso.layout()
                    })
                })
            }

            // Code only for normal Grid
            var onlyGridFilter = e.select(".grid-menu")
            if (e.isVariableDefined(onlyGridFilter)) {
                var filterMenu = e.selectAll(".grid-menu")
                filterMenu.forEach((menu) => {
                    var filterContainer = menu.getAttribute("data-target")
                    var a = menu.dataset.target
                    var b = e.select(a)
                    var filterContainerItemData = b.getAttribute("data-isotope")
                    var filterContainerItemDataObj = JSON.parse(filterContainerItemData)
                    var filter = new Isotope(filterContainer, {
                        itemselector: ".grid-item",
                        transitionDuration: "0.7s",
                        layoutMode: filterContainerItemDataObj.layoutMode,
                    })

                    var menuItems = menu.querySelectorAll("li a")
                    menuItems.forEach((menuItem) => {
                        menuItem.addEventListener("click", function (event) {
                            var filterValue = menuItem.getAttribute("data-filter")
                            filter.arrange({ filter: filterValue })
                            menuItems.forEach((control) => control.removeClass("active"))
                            menuItem.addClass("active")
                        })
                    })

                    imagesLoaded(filterContainer).on("progress", function () {
                        filter.layout()
                    })
                })
            }
        }
    },

    // Swiper slider
    swiperSlider: function () {
        var swpr = e.select("[data-swiper-options]")
        if (e.isVariableDefined(swpr)) {
            // basic options for all sliders
            let defaults = {
                spaceBetween: 0,
                slidesPerView: 1,
                loop: true,
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                },
                freeMode: false,
            }

            // call init function
            initSwipers(defaults)

            function initSwipers(defaults = {}, selector = ".swiper") {
                // get all swiper elements
                let swipers = document.querySelectorAll(selector)

                // iterate over swiper elements
                swipers.forEach((swiper) => {
                    // get custom options
                    let optionsData = swiper.getAttribute("data-swiper-options") ? JSON.parse(swiper.getAttribute("data-swiper-options")) : {}

                    // combine defaults and custom options
                    let options = {
                        ...defaults,
                        ...optionsData,
                    }

                    // init swiper
                    new Swiper(swiper, options)
                })
            }
        }
    },

    // Mouse Move Parallax
    mouseMove: function () {
        document.addEventListener("mousemove", parallax)
        function parallax(event) {
            this.querySelectorAll(".parallax-wrap .layer").forEach((shift) => {
                const position = shift.getAttribute("data-depth")
                const x = (window.innerWidth - event.pageX * position) / 90
                const y = (window.innerHeight - event.pageY * position) / 90

                shift.style.transform = `translateX(${x}px) translateY(${y}px)`
            })
        }
    },
}

e.init()

document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.replace(/\/$/, "")

    document.querySelectorAll("#navbar a[href]").forEach((link) => {
        const href = link.getAttribute("href")?.replace(/\/$/, "")
        if (!href) return

        if (currentPath === href || currentPath.endsWith(href)) {
            link.classList.add("active")
        }
    })
})


document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname.replace(/\/$/, "")

    document.querySelectorAll("#offcanvasSidebar ul a[href]").forEach((link) => {
        const href = link.getAttribute("href")?.replace(/\/$/, "")
        if (!href) return

        if (currentPath === href || currentPath.endsWith(href)) {
            link.classList.add("active")
        }
    })
})

const counters = document.querySelectorAll(".counter")

counters.forEach((counter) => {
    let start = 0
    const target = +counter.dataset.target
    const speed = target / 80

    const update = () => {
        start += speed
        if (start < target) {
            counter.textContent = Math.ceil(start)
            requestAnimationFrame(update)
        } else {
            counter.textContent = target
        }
    }

    update()
})


// Ligth/Dark Theme Mode
const themeToggle = document.getElementById("light-dark-mode")
const html = document.documentElement

const THEMES = ["system", "light", "dark"]

function applyTheme(theme) {
    // remove manual classes
    html.classList.remove("light", "dark")

    // add only if not system
    if (theme === "light") html.classList.add("light")
    if (theme === "dark") html.classList.add("dark")

    localStorage.setItem("theme", theme)
}

// toggle: system → light → dark → system
themeToggle?.addEventListener("click", () => {
    const current = localStorage.getItem("theme") || "system"
    const next = THEMES[(THEMES.indexOf(current) + 1) % THEMES.length]
    applyTheme(next)
})

// restore on load
applyTheme(localStorage.getItem("theme") || "system")

