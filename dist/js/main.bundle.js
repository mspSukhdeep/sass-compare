/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/emitus/index.js":
/*!**************************************!*\
  !*** ./node_modules/emitus/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function emitus() {
    var events = [];
    return {
        on: function (eventName, listener) {
            if (eventName && listener)
                events.push([eventName, listener]);
        },
        off: function (eventName, listener) {
            for (var i = 0; i < events.length; i++) {
                if (eventName === events[i][0] && listener === events[i][1])
                    events.splice(i, 1);
            }
        },
        emit: function (eventName, arg) {
            for (var i = 0; i < events.length; i++) {
                if (eventName && eventName === events[i][0])
                    events[i][1](eventName, arg || null);
            }
        }
    };
}
exports.emitus = emitus;


/***/ }),

/***/ "./node_modules/imgz/dist/index.js":
/*!*****************************************!*\
  !*** ./node_modules/imgz/dist/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var loadImage = function (source, index, done) {
    var img = new Image();
    img.onload = function (event) { return done(event.target, index, event); };
    img.onerror = function (event) { return done(null, index, event); };
    img.src = source;
};
var loadImages = function (sources, done, completed) {
    if (!sources.length)
        return;
    var load = function (i) {
        if (i < sources.length) {
            loadImage(sources[i], i, function (image, index, event) {
                done(image, index, event);
                load(i + 1);
            });
        }
        else if (completed)
            completed(i);
    };
    load(0);
};
function Loader(source, sourceLoaded, sourcesCompleted) {
    loadImages(Array.isArray(source) ? source : [source], sourceLoaded, sourcesCompleted);
}

exports.Loader = Loader;


/***/ }),

/***/ "./node_modules/slendr/dist/index.js":
/*!*******************************************!*\
  !*** ./node_modules/slendr/dist/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var emitus = __webpack_require__(/*! emitus */ "./node_modules/emitus/index.js");
var imgz = __webpack_require__(/*! imgz */ "./node_modules/imgz/dist/index.js");

function child(element, selector) {
    if (!element || !selector)
        return null;
    return element.querySelector(selector);
}
function children(selector, parent) {
    return Array.prototype.slice.call((parent || document.body).querySelectorAll(selector));
}
function onClick(element, func) {
    if (!element || !func)
        return;
    element.addEventListener('click', (e) => {
        e.preventDefault();
        func(e);
    }, false);
}
function transform(element, value) {
    if (!element)
        return;
    element.style.setProperty('-webkit-transform', value);
    element.style.setProperty('-moz-transform', value);
    element.style.setProperty('transform', value);
}
function translateX(element, x = '0px') {
    if (element)
        transform(element, `translateX(${x})`);
}
function cleanClass(className) {
    return className.replace(/^\./g, '');
}

const defaults = {
    // Selectors
    container: '.slendr',
    selector: '.slendr-slides > .slendr-slide',
    // Animation
    animationClass: '.slendr-animate',
    // Direction navs
    directionNavs: true,
    directionNavPrev: '.slendr-prev',
    directionNavNext: '.slendr-next',
    // Control navs
    controlNavs: true,
    controlNavClass: '.slendr-control',
    controlNavClassActive: '.slendr-control-active',
    // Slide
    slideVisibleClass: '.slendr-visible',
    slideActiveClass: '.slendr-active',
    // Slideshow
    slideshow: true,
    slideshowSpeed: 4000,
    // Keyboard
    keyboard: false
};
/**
 * Slendr is a responsive & lightweight slider for modern browsers.
 */
class Slendr {
    constructor(options) {
        this.options = options;
        this.slidesLength = 0;
        this.current = 0;
        this.timeout = 0;
        this.paused = true;
        this.animating = false;
        this.containerWidth = 0;
        this.translationDir = 0;
        this.slide = null;
        this.controlNavActive = null;
        this.opts = Object.assign({}, defaults, this.options);
        if (typeof this.opts.container === 'string') {
            const childContainer = child(document.body, this.opts.container);
            if (!childContainer)
                throw new Error('No container found');
            this.container = childContainer;
        }
        else
            this.container = this.opts.container;
        const selectorContainer = this.opts.selector.substr(0, this.opts.selector.search(' '));
        const slidesContainer = child(this.container, selectorContainer);
        if (!slidesContainer)
            throw new Error('No slides container found');
        this.slidesContainer = slidesContainer;
        this.slides = children(this.opts.selector, slidesContainer);
        this.slidesLength = this.slides.length;
        this.containerWidth = this.container.offsetWidth;
        this.opts.animationClass = cleanClass(this.opts.animationClass);
        this.opts.slideActiveClass = cleanClass(this.opts.slideActiveClass);
        this.opts.slideVisibleClass = cleanClass(this.opts.slideVisibleClass);
        this.opts.controlNavClass = cleanClass(this.opts.controlNavClass);
        this.opts.controlNavClassActive = cleanClass(this.opts.controlNavClassActive);
        this.emitter = emitus.emitus();
        this.initialize();
    }
    /**
     * Moves the current slider to the previous slide
     */
    prev() {
        if (!this.animating)
            this.goTo(0);
    }
    /**
     * Moves the current slider to the next slide
     */
    next() {
        if (!this.animating)
            this.goTo(1);
    }
    /**
     * Starts slideshow timer mode for the current slider
     */
    play() {
        if (!this.paused)
            return;
        this.opts.slideshow = true;
        this.slideshow();
        this.emitter.emit('play', [this.current]);
    }
    /**
     * Pauses slideshow timer for the current slider
     */
    pause() {
        if (!this.opts.slideshow)
            return;
        clearTimeout(this.timeout);
        this.paused = true;
        this.animating = false;
        this.opts.slideshow = false;
        this.emitter.emit('pause', [this.current]);
    }
    /**
     * Moves the current slider by slide index
     *
     * @param index Slide index to move
     */
    move(index) {
        this.goToBy(index);
    }
    /**
     * Adds an event listener to the current slider
     *
     * @param eventName SlendrEvent ('move', 'next', 'prev', 'play' or 'pause')
     * @param listener EmitusListener
     */
    on(eventName, listener) {
        this.emitter.on(eventName, listener);
    }
    /**
     * Removes a registered event listener
     *
     * @param eventName SlendrEvent ('move', 'next', 'prev', 'play' or 'pause')
     * @param listener EmitusListener
     */
    off(eventName, listener) {
        this.emitter.off(eventName, listener);
    }
    initialize() {
        if (this.slidesLength < 2) {
            if (this.slidesLength === 1) {
                this.slides[0].setAttribute('data-slide-index', '0');
                this.showSlideBy(0);
            }
            return;
        }
        this.container.setAttribute('data-slides-length', this.slidesLength.toString());
        this.showSlideBy(0);
        this.addEvents();
        if (this.opts.controlNavs) {
            this.controlNavActive = this.controlNavs();
            if (this.controlNavActive)
                this.controlNavActive(0);
        }
        if (this.opts.directionNavs)
            this.directionNavs();
        else
            this.opts.directionNavs = false;
        if (this.opts.keyboard)
            this.keyboard();
        this.loadImages();
        this.slideshow();
    }
    goToBy(index) {
        if (!this.animating && this.current !== index && (index >= 0 && index < this.slidesLength)) {
            this.goTo(this.current - index < 0 ? 1 : 0, index);
        }
    }
    goTo(direction, index = -1) {
        this.animating = true;
        window.clearTimeout(this.timeout);
        this.showSlide(this.slides[this.current]);
        if (index !== -1) {
            this.current = index;
        }
        else {
            this.current = direction === 1 ? this.current + 1 : this.current - 1;
            if (this.current > this.slidesLength - 1)
                this.current = 0;
            if (this.current < 0)
                this.current = this.slidesLength - 1;
        }
        this.slide = this.slides[this.current];
        this.showSlide(this.slide);
        this.slidesContainer.classList.add(this.opts.animationClass);
        translateX(this.slidesContainer, (direction === 1 ? '-' : '') + this.containerWidth + 'px');
        translateX(this.slide, (direction === 1 ? '' : '-') + this.containerWidth + 'px');
        if (this.controlNavActive)
            this.controlNavActive(this.current);
        this.translationDir = direction;
    }
    slideshow() {
        if (this.opts.slideshow) {
            this.paused = false;
            window.clearTimeout(this.timeout);
            this.timeout = window.setTimeout(() => this.next(), this.opts.slideshowSpeed);
        }
    }
    showSlideBy(index) {
        for (let i = 0; i < this.slidesLength; i++)
            this.showSlide(this.slides[i], index === i, index === i);
    }
    showSlide(slide, yes = true, cls = false) {
        if (yes)
            slide.classList.add(this.opts.slideVisibleClass);
        else
            slide.classList.remove(this.opts.slideVisibleClass);
        if (cls)
            slide.classList.add(this.opts.slideActiveClass);
        else
            slide.classList.remove(this.opts.slideActiveClass);
    }
    background(slide) {
        const src = slide.getAttribute('data-slide-src');
        if (src) {
            slide.style.setProperty('background-image', `url('${src}')`);
            slide.removeAttribute('data-slide-src');
        }
    }
    loadImages() {
        const slides = this.slides;
        const sources = [];
        for (let i = 0; i < this.slidesLength; i++) {
            slides[i].setAttribute('data-slide-index', i.toString());
            const src = slides[i].getAttribute('data-slide-src') || null;
            if (src)
                sources.push(src);
        }
        if (sources.length) {
            imgz.Loader(sources, (image, i) => {
                if (image) {
                    this.emitter.emit('image:load', [image, i, this.slides[i]]);
                    this.background(slides[i]);
                }
            }, (len) => this.emitter.emit('image:completed', [len]));
        }
    }
    keyboard() {
        document.addEventListener('keyup', ({ which }) => {
            if (which === 37)
                this.prev();
            if (which === 39)
                this.next();
        }, false);
    }
    onTransitionEnd() {
        this.animating = false;
        this.slidesContainer.classList.remove(this.opts.animationClass);
        transform(this.slidesContainer, 'none');
        transform(this.slides[this.current], 'none');
        this.showSlideBy(this.current);
        this.emitter.emit('move', [this.translationDir, this.current, this.slide]);
        this.emitter.emit(this.translationDir ? 'next' : 'prev', [this.current, this.slide]);
        this.slideshow();
    }
    addEvents() {
        window.addEventListener('resize', () => this.containerWidth = this.container.offsetWidth, false);
        this.slidesContainer.addEventListener('transitionend', () => this.onTransitionEnd(), false);
    }
    directionNavs() {
        const prevNav = child(this.container, this.opts.directionNavPrev);
        const nextNav = child(this.container, this.opts.directionNavNext);
        if (prevNav)
            onClick(prevNav, () => this.prev());
        if (nextNav)
            onClick(nextNav, () => this.next());
    }
    controlNavs() {
        const control = child(this.container, `.${this.opts.controlNavClass}`);
        if (!control)
            return null;
        while (control.firstChild)
            control.removeChild(control.firstChild);
        const controlNavList = [];
        const ul = document.createElement('ul');
        let i = 0;
        while (i < this.slidesLength) {
            const el = this.createBullet(ul, i++);
            if (el)
                controlNavList.push(el);
        }
        control.appendChild(ul);
        const controlNavActive = (index) => {
            if (this.slidesLength > 1) {
                let n = 0;
                while (n < controlNavList.length) {
                    controlNavList[n++].classList.remove(this.opts.controlNavClassActive);
                }
                controlNavList[index || 0].classList.add(this.opts.controlNavClassActive);
            }
        };
        return controlNavActive;
    }
    createBullet(ul, i) {
        const a = document.createElement('a');
        onClick(a, () => this.goToBy(i));
        ul.appendChild(a);
        return a;
    }
}

exports.Slendr = Slendr;


/***/ }),

/***/ "./src/js/eventHandlers.js":
/*!*********************************!*\
  !*** ./src/js/eventHandlers.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.$ = (function(window, document, fn, nsRegAndEvents, id, s_EventListener, s_MatchesSelector, i, j, k, l, $) {
    $ = function(s, context) {
        return new $.i(s, context);
    };
    $.i = function(s, context) {
        fn.push.apply(this, !s ? fn : s.nodeType || s == window ? [s] : "" + s === s ? /</.test(s) ? ((i = document.createElement(context || 'q')).innerHTML = s, i.children) : (context && $(context)[0] || document).querySelectorAll(s) : /f/.test(typeof s) ? /c/.test(document.readyState) ? s() : $(document).on('DOMContentLoaded', s) : s);
    };
    $.i[l = 'prototype'] = ($.extend = function(obj) {
        k = arguments;
        for (i = 1; i < k.length; i++) {
            if (l = k[i]) {
                for (j in l) {
                    obj[j] = l[j];
                }
            }
        }
        return obj;
    })($.fn = $[l] = fn, {
        on: function(n, f) {
            n = n.split(nsRegAndEvents);
            this.map(function(item) {
                (nsRegAndEvents[i = n[0] + (item.b$ = item.b$ || ++id)] = nsRegAndEvents[i] || []).push([f, n[1]]);
                item['add' + s_EventListener](n[0], f);
            });
            return this;
        },
        off: function(n, f) {
            n = n.split(nsRegAndEvents);
            l = 'remove' + s_EventListener;
            this.map(function(item) {
                k = nsRegAndEvents[n[0] + item.b$];
                if (i = k && k.length) {
                    while (j = k[--i]) {
                        if ((!f || f == j[0]) && (!n[1] || n[1] == j[1])) {
                            item[l](n[0], j[0]);
                            k.splice(i, 1);
                        }
                    }
                } else {
                    !n[1] && item[l](n[0], f);
                }
            });
            return this;
        },
        is: function(s) {
            i = this[0];
            return (i.matches || i['webkit' + s_MatchesSelector] || i['moz' + s_MatchesSelector] || i['ms' + s_MatchesSelector] || i['o' + s_MatchesSelector]).call(i, s);
        },
        parents: function(selector) {
            var collection = $();
            this.forEach(function(node) {
                var parent;
                while ((node = node.parentNode) && (node !== document)) {
                    if (selector) {
                        if ($(node).is(selector)) {
                            parent = node;
                        }
                    } else {
                        parent = node;
                    }
                    if (parent && !~collection.indexOf(parent)) {
                        collection.push(parent);
                    }
                }
            });
            return collection;
        },
        find: function(selector) {
            var collection = $();
            this.forEach(function(node) {
                var child;
                Array.prototype.map.call(node.children, (child) => {
                    if ((selector && $(child).is(selector)) || !selector) {
                        collection.push(child);
                    }
                })
            });
            return collection;
        },
        val: function (newVal) {
            if (newVal) {
                this.forEach(function (node) {
                    node.value = newVal;
                });
                return this;
            }
            return this[0].value;
        },
        addClass: function(className) {
            this.forEach(function(node) {
                node.classList.add(className);
            });
            return this;
        },
        removeClass: function(className) {
            this.forEach(function(node) {
                node.classList.remove(className);
            });
            return this;
        },
        toggleClass: function(className){
            this.forEach(function(node) {
                node.classList.toggle(className);
            })
            return this;
        },
        submit: function(s) {
            //Haven't test submit function yet
            this.submit();
            return this;
        },
        html: function(content) {
            this[0].innerHTML = content;
            return this;
        },
        hide: function () {
            this.forEach(function (node) {
                node.style.display = "none";
            });
            return this;
        },
        show: function () {
            this.forEach(function (node) {
                node.style.display = "initial";
            });
            return this;
        },
        attr: function (name, value) {
            if (name) {
                if (value) {
                    this[0].setAttribute(name, value);
                }
                else {
                    return this[0].getAttribute(name);
                }
            }
            return this;
        },
        data: function (name, value) {
            if (name) {
                return this.attr("data-" + name, value);
            }
            return this;
        },
        width: function (newWidth) {
            let response = null;

            if (newWidth) {
                this[0].style.width = newWidth;
                response = this;
            }
            else if(this.length>0){
                response = this[0].clientWidth
            }

            return response;
        },
        height: function (newHeight) {
            if (newHeight) {
                this[0].style.height = newHeight;
                return this;
            }
            return this[0].clientHeight;
        }
    });
    return $;
})(window, document, [], /\.(.+)/, 0, 'EventListener', 'MatchesSelector')


/***/ }),

/***/ "./src/js/fuse.js":
/*!************************!*\
  !*** ./src/js/fuse.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (obj) {
  return !Array.isArray ? Object.prototype.toString.call(obj) === '[object Array]' : Array.isArray(obj);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bitapRegexSearch = __webpack_require__(5);
var bitapSearch = __webpack_require__(7);
var patternAlphabet = __webpack_require__(4);

var Bitap = function () {
  function Bitap(pattern, _ref) {
    var _ref$location = _ref.location,
        location = _ref$location === undefined ? 0 : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === undefined ? 100 : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
        _ref$maxPatternLength = _ref.maxPatternLength,
        maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength,
        _ref$isCaseSensitive = _ref.isCaseSensitive,
        isCaseSensitive = _ref$isCaseSensitive === undefined ? false : _ref$isCaseSensitive,
        _ref$tokenSeparator = _ref.tokenSeparator,
        tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;

    _classCallCheck(this, Bitap);

    this.options = {
      location: location,
      distance: distance,
      threshold: threshold,
      maxPatternLength: maxPatternLength,
      isCaseSensitive: isCaseSensitive,
      tokenSeparator: tokenSeparator,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength
    };

    this.pattern = this.options.isCaseSensitive ? pattern : pattern.toLowerCase();

    if (this.pattern.length <= maxPatternLength) {
      this.patternAlphabet = patternAlphabet(this.pattern);
    }
  }

  _createClass(Bitap, [{
    key: 'search',
    value: function search(text) {
      if (!this.options.isCaseSensitive) {
        text = text.toLowerCase();
      }

      // Exact match
      if (this.pattern === text) {
        return {
          isMatch: true,
          score: 0,
          matchedIndices: [[0, text.length - 1]]
        };
      }

      // When pattern length is greater than the machine word length, just do a a regex comparison
      var _options = this.options,
          maxPatternLength = _options.maxPatternLength,
          tokenSeparator = _options.tokenSeparator;

      if (this.pattern.length > maxPatternLength) {
        return bitapRegexSearch(text, this.pattern, tokenSeparator);
      }

      // Otherwise, use Bitap algorithm
      var _options2 = this.options,
          location = _options2.location,
          distance = _options2.distance,
          threshold = _options2.threshold,
          findAllMatches = _options2.findAllMatches,
          minMatchCharLength = _options2.minMatchCharLength;

      return bitapSearch(text, this.pattern, this.patternAlphabet, {
        location: location,
        distance: distance,
        threshold: threshold,
        findAllMatches: findAllMatches,
        minMatchCharLength: minMatchCharLength
      });
    }
  }]);

  return Bitap;
}();

// let x = new Bitap("od mn war", {})
// let result = x.search("Old Man's War")
// console.log(result)

module.exports = Bitap;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = __webpack_require__(0);

var deepValue = function deepValue(obj, path, list) {
  if (!path) {
    // If there's no path left, we've gotten to the object we care about.
    list.push(obj);
  } else {
    var dotIndex = path.indexOf('.');
    var firstSegment = path;
    var remaining = null;

    if (dotIndex !== -1) {
      firstSegment = path.slice(0, dotIndex);
      remaining = path.slice(dotIndex + 1);
    }

    var value = obj[firstSegment];

    if (value !== null && value !== undefined) {
      if (!remaining && (typeof value === 'string' || typeof value === 'number')) {
        list.push(value.toString());
      } else if (isArray(value)) {
        // Search each item in the array.
        for (var i = 0, len = value.length; i < len; i += 1) {
          deepValue(value[i], remaining, list);
        }
      } else if (remaining) {
        // An object. Recurse further.
        deepValue(value, remaining, list);
      }
    }
  }

  return list;
};

module.exports = function (obj, path) {
  return deepValue(obj, path, []);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var matchmask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var minMatchCharLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var matchedIndices = [];
  var start = -1;
  var end = -1;
  var i = 0;

  for (var len = matchmask.length; i < len; i += 1) {
    var match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        matchedIndices.push([start, end]);
      }
      start = -1;
    }
  }

  // (i-1 - start) + 1 => i - start
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    matchedIndices.push([start, i - 1]);
  }

  return matchedIndices;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (pattern) {
  var mask = {};
  var len = pattern.length;

  for (var i = 0; i < len; i += 1) {
    mask[pattern.charAt(i)] = 0;
  }

  for (var _i = 0; _i < len; _i += 1) {
    mask[pattern.charAt(_i)] |= 1 << len - _i - 1;
  }

  return mask;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SPECIAL_CHARS_REGEX = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;

module.exports = function (text, pattern) {
  var tokenSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : / +/g;

  var regex = new RegExp(pattern.replace(SPECIAL_CHARS_REGEX, '\\$&').replace(tokenSeparator, '|'));
  var matches = text.match(regex);
  var isMatch = !!matches;
  var matchedIndices = [];

  if (isMatch) {
    for (var i = 0, matchesLen = matches.length; i < matchesLen; i += 1) {
      var match = matches[i];
      matchedIndices.push([text.indexOf(match), match.length - 1]);
    }
  }

  return {
    // TODO: revisit this score
    score: isMatch ? 0.5 : 1,
    isMatch: isMatch,
    matchedIndices: matchedIndices
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (pattern, _ref) {
  var _ref$errors = _ref.errors,
      errors = _ref$errors === undefined ? 0 : _ref$errors,
      _ref$currentLocation = _ref.currentLocation,
      currentLocation = _ref$currentLocation === undefined ? 0 : _ref$currentLocation,
      _ref$expectedLocation = _ref.expectedLocation,
      expectedLocation = _ref$expectedLocation === undefined ? 0 : _ref$expectedLocation,
      _ref$distance = _ref.distance,
      distance = _ref$distance === undefined ? 100 : _ref$distance;

  var accuracy = errors / pattern.length;
  var proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy;
  }

  return accuracy + proximity / distance;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bitapScore = __webpack_require__(6);
var matchedIndices = __webpack_require__(3);

module.exports = function (text, pattern, patternAlphabet, _ref) {
  var _ref$location = _ref.location,
      location = _ref$location === undefined ? 0 : _ref$location,
      _ref$distance = _ref.distance,
      distance = _ref$distance === undefined ? 100 : _ref$distance,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
      _ref$findAllMatches = _ref.findAllMatches,
      findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
      _ref$minMatchCharLeng = _ref.minMatchCharLength,
      minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;

  var expectedLocation = location;
  // Set starting location at beginning text and initialize the alphabet.
  var textLen = text.length;
  // Highest score beyond which we give up.
  var currentThreshold = threshold;
  // Is there a nearby exact match? (speedup)
  var bestLocation = text.indexOf(pattern, expectedLocation);

  var patternLen = pattern.length;

  // a mask of the matches
  var matchMask = [];
  for (var i = 0; i < textLen; i += 1) {
    matchMask[i] = 0;
  }

  if (bestLocation !== -1) {
    var score = bitapScore(pattern, {
      errors: 0,
      currentLocation: bestLocation,
      expectedLocation: expectedLocation,
      distance: distance
    });
    currentThreshold = Math.min(score, currentThreshold);

    // What about in the other direction? (speed up)
    bestLocation = text.lastIndexOf(pattern, expectedLocation + patternLen);

    if (bestLocation !== -1) {
      var _score = bitapScore(pattern, {
        errors: 0,
        currentLocation: bestLocation,
        expectedLocation: expectedLocation,
        distance: distance
      });
      currentThreshold = Math.min(_score, currentThreshold);
    }
  }

  // Reset the best location
  bestLocation = -1;

  var lastBitArr = [];
  var finalScore = 1;
  var binMax = patternLen + textLen;

  var mask = 1 << patternLen - 1;

  for (var _i = 0; _i < patternLen; _i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    var binMin = 0;
    var binMid = binMax;

    while (binMin < binMid) {
      var _score3 = bitapScore(pattern, {
        errors: _i,
        currentLocation: expectedLocation + binMid,
        expectedLocation: expectedLocation,
        distance: distance
      });

      if (_score3 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }

    // Use the result from this iteration as the maximum for the next.
    binMax = binMid;

    var start = Math.max(1, expectedLocation - binMid + 1);
    var finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;

    // Initialize the bit array
    var bitArr = Array(finish + 2);

    bitArr[finish + 1] = (1 << _i) - 1;

    for (var j = finish; j >= start; j -= 1) {
      var currentLocation = j - 1;
      var charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (charMatch) {
        matchMask[currentLocation] = 1;
      }

      // First pass: exact match
      bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;

      // Subsequent passes: fuzzy match
      if (_i !== 0) {
        bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = bitapScore(pattern, {
          errors: _i,
          currentLocation: currentLocation,
          expectedLocation: expectedLocation,
          distance: distance
        });

        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation;

          // Already passed `loc`, downhill from here on in.
          if (bestLocation <= expectedLocation) {
            break;
          }

          // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }

    // No hope for a (better) match at greater error levels.
    var _score2 = bitapScore(pattern, {
      errors: _i + 1,
      currentLocation: expectedLocation,
      expectedLocation: expectedLocation,
      distance: distance
    });

    // console.log('score', score, finalScore)

    if (_score2 > currentThreshold) {
      break;
    }

    lastBitArr = bitArr;
  }

  // console.log('FINAL SCORE', finalScore)

  // Count exact matches (those with a score of 0) to be "almost" exact
  return {
    isMatch: bestLocation >= 0,
    score: finalScore === 0 ? 0.001 : finalScore,
    matchedIndices: matchedIndices(matchMask, minMatchCharLength)
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bitap = __webpack_require__(1);
var deepValue = __webpack_require__(2);
var isArray = __webpack_require__(0);

var Fuse = function () {
  function Fuse(list, _ref) {
    var _ref$location = _ref.location,
        location = _ref$location === undefined ? 0 : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === undefined ? 100 : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
        _ref$maxPatternLength = _ref.maxPatternLength,
        maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength,
        _ref$caseSensitive = _ref.caseSensitive,
        caseSensitive = _ref$caseSensitive === undefined ? false : _ref$caseSensitive,
        _ref$tokenSeparator = _ref.tokenSeparator,
        tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng,
        _ref$id = _ref.id,
        id = _ref$id === undefined ? null : _ref$id,
        _ref$keys = _ref.keys,
        keys = _ref$keys === undefined ? [] : _ref$keys,
        _ref$shouldSort = _ref.shouldSort,
        shouldSort = _ref$shouldSort === undefined ? true : _ref$shouldSort,
        _ref$getFn = _ref.getFn,
        getFn = _ref$getFn === undefined ? deepValue : _ref$getFn,
        _ref$sortFn = _ref.sortFn,
        sortFn = _ref$sortFn === undefined ? function (a, b) {
      return a.score - b.score;
    } : _ref$sortFn,
        _ref$tokenize = _ref.tokenize,
        tokenize = _ref$tokenize === undefined ? false : _ref$tokenize,
        _ref$matchAllTokens = _ref.matchAllTokens,
        matchAllTokens = _ref$matchAllTokens === undefined ? false : _ref$matchAllTokens,
        _ref$includeMatches = _ref.includeMatches,
        includeMatches = _ref$includeMatches === undefined ? false : _ref$includeMatches,
        _ref$includeScore = _ref.includeScore,
        includeScore = _ref$includeScore === undefined ? false : _ref$includeScore,
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose;

    _classCallCheck(this, Fuse);

    this.options = {
      location: location,
      distance: distance,
      threshold: threshold,
      maxPatternLength: maxPatternLength,
      isCaseSensitive: caseSensitive,
      tokenSeparator: tokenSeparator,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength,
      id: id,
      keys: keys,
      includeMatches: includeMatches,
      includeScore: includeScore,
      shouldSort: shouldSort,
      getFn: getFn,
      sortFn: sortFn,
      verbose: verbose,
      tokenize: tokenize,
      matchAllTokens: matchAllTokens
    };

    this.setCollection(list);
  }

  _createClass(Fuse, [{
    key: 'setCollection',
    value: function setCollection(list) {
      this.list = list;
      return list;
    }
  }, {
    key: 'search',
    value: function search(pattern) {
      this._log('---------\nSearch pattern: "' + pattern + '"');

      var _prepareSearchers2 = this._prepareSearchers(pattern),
          tokenSearchers = _prepareSearchers2.tokenSearchers,
          fullSearcher = _prepareSearchers2.fullSearcher;

      var _search2 = this._search(tokenSearchers, fullSearcher),
          weights = _search2.weights,
          results = _search2.results;

      this._computeScore(weights, results);

      if (this.options.shouldSort) {
        this._sort(results);
      }

      return this._format(results);
    }
  }, {
    key: '_prepareSearchers',
    value: function _prepareSearchers() {
      var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var tokenSearchers = [];

      if (this.options.tokenize) {
        // Tokenize on the separator
        var tokens = pattern.split(this.options.tokenSeparator);
        for (var i = 0, len = tokens.length; i < len; i += 1) {
          tokenSearchers.push(new Bitap(tokens[i], this.options));
        }
      }

      var fullSearcher = new Bitap(pattern, this.options);

      return { tokenSearchers: tokenSearchers, fullSearcher: fullSearcher };
    }
  }, {
    key: '_search',
    value: function _search() {
      var tokenSearchers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var fullSearcher = arguments[1];

      var list = this.list;
      var resultMap = {};
      var results = [];

      // Check the first item in the list, if it's a string, then we assume
      // that every item in the list is also a string, and thus it's a flattened array.
      if (typeof list[0] === 'string') {
        // Iterate over every item
        for (var i = 0, len = list.length; i < len; i += 1) {
          this._analyze({
            key: '',
            value: list[i],
            record: i,
            index: i
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }

        return { weights: null, results: results };
      }

      // Otherwise, the first item is an Object (hopefully), and thus the searching
      // is done on the values of the keys of each item.
      var weights = {};
      for (var _i = 0, _len = list.length; _i < _len; _i += 1) {
        var item = list[_i];
        // Iterate over every key
        for (var j = 0, keysLen = this.options.keys.length; j < keysLen; j += 1) {
          var key = this.options.keys[j];
          if (typeof key !== 'string') {
            weights[key.name] = {
              weight: 1 - key.weight || 1
            };
            if (key.weight <= 0 || key.weight > 1) {
              throw new Error('Key weight has to be > 0 and <= 1');
            }
            key = key.name;
          } else {
            weights[key] = {
              weight: 1
            };
          }

          this._analyze({
            key: key,
            value: this.options.getFn(item, key),
            record: item,
            index: _i
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }
      }

      return { weights: weights, results: results };
    }
  }, {
    key: '_analyze',
    value: function _analyze(_ref2, _ref3) {
      var key = _ref2.key,
          _ref2$arrayIndex = _ref2.arrayIndex,
          arrayIndex = _ref2$arrayIndex === undefined ? -1 : _ref2$arrayIndex,
          value = _ref2.value,
          record = _ref2.record,
          index = _ref2.index;
      var _ref3$tokenSearchers = _ref3.tokenSearchers,
          tokenSearchers = _ref3$tokenSearchers === undefined ? [] : _ref3$tokenSearchers,
          _ref3$fullSearcher = _ref3.fullSearcher,
          fullSearcher = _ref3$fullSearcher === undefined ? [] : _ref3$fullSearcher,
          _ref3$resultMap = _ref3.resultMap,
          resultMap = _ref3$resultMap === undefined ? {} : _ref3$resultMap,
          _ref3$results = _ref3.results,
          results = _ref3$results === undefined ? [] : _ref3$results;

      // Check if the texvaluet can be searched
      if (value === undefined || value === null) {
        return;
      }

      var exists = false;
      var averageScore = -1;
      var numTextMatches = 0;

      if (typeof value === 'string') {
        this._log('\nKey: ' + (key === '' ? '-' : key));

        var mainSearchResult = fullSearcher.search(value);
        this._log('Full text: "' + value + '", score: ' + mainSearchResult.score);

        if (this.options.tokenize) {
          var words = value.split(this.options.tokenSeparator);
          var scores = [];

          for (var i = 0; i < tokenSearchers.length; i += 1) {
            var tokenSearcher = tokenSearchers[i];

            this._log('\nPattern: "' + tokenSearcher.pattern + '"');

            // let tokenScores = []
            var hasMatchInText = false;

            for (var j = 0; j < words.length; j += 1) {
              var word = words[j];
              var tokenSearchResult = tokenSearcher.search(word);
              var obj = {};
              if (tokenSearchResult.isMatch) {
                obj[word] = tokenSearchResult.score;
                exists = true;
                hasMatchInText = true;
                scores.push(tokenSearchResult.score);
              } else {
                obj[word] = 1;
                if (!this.options.matchAllTokens) {
                  scores.push(1);
                }
              }
              this._log('Token: "' + word + '", score: ' + obj[word]);
              // tokenScores.push(obj)
            }

            if (hasMatchInText) {
              numTextMatches += 1;
            }
          }

          averageScore = scores[0];
          var scoresLen = scores.length;
          for (var _i2 = 1; _i2 < scoresLen; _i2 += 1) {
            averageScore += scores[_i2];
          }
          averageScore = averageScore / scoresLen;

          this._log('Token score average:', averageScore);
        }

        var finalScore = mainSearchResult.score;
        if (averageScore > -1) {
          finalScore = (finalScore + averageScore) / 2;
        }

        this._log('Score average:', finalScore);

        var checkTextMatches = this.options.tokenize && this.options.matchAllTokens ? numTextMatches >= tokenSearchers.length : true;

        this._log('\nCheck Matches: ' + checkTextMatches);

        // If a match is found, add the item to <rawResults>, including its score
        if ((exists || mainSearchResult.isMatch) && checkTextMatches) {
          // Check if the item already exists in our results
          var existingResult = resultMap[index];
          if (existingResult) {
            // Use the lowest score
            // existingResult.score, bitapResult.score
            existingResult.output.push({
              key: key,
              arrayIndex: arrayIndex,
              value: value,
              score: finalScore,
              matchedIndices: mainSearchResult.matchedIndices
            });
          } else {
            // Add it to the raw result list
            resultMap[index] = {
              item: record,
              output: [{
                key: key,
                arrayIndex: arrayIndex,
                value: value,
                score: finalScore,
                matchedIndices: mainSearchResult.matchedIndices
              }]
            };

            results.push(resultMap[index]);
          }
        }
      } else if (isArray(value)) {
        for (var _i3 = 0, len = value.length; _i3 < len; _i3 += 1) {
          this._analyze({
            key: key,
            arrayIndex: _i3,
            value: value[_i3],
            record: record,
            index: index
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }
      }
    }
  }, {
    key: '_computeScore',
    value: function _computeScore(weights, results) {
      this._log('\n\nComputing score:\n');

      for (var i = 0, len = results.length; i < len; i += 1) {
        var output = results[i].output;
        var scoreLen = output.length;

        var currScore = 1;
        var bestScore = 1;

        for (var j = 0; j < scoreLen; j += 1) {
          var weight = weights ? weights[output[j].key].weight : 1;
          var score = weight === 1 ? output[j].score : output[j].score || 0.001;
          var nScore = score * weight;

          if (weight !== 1) {
            bestScore = Math.min(bestScore, nScore);
          } else {
            output[j].nScore = nScore;
            currScore *= nScore;
          }
        }

        results[i].score = bestScore === 1 ? currScore : bestScore;

        this._log(results[i]);
      }
    }
  }, {
    key: '_sort',
    value: function _sort(results) {
      this._log('\n\nSorting....');
      results.sort(this.options.sortFn);
    }
  }, {
    key: '_format',
    value: function _format(results) {
      var finalOutput = [];

      if (this.options.verbose) {
        this._log('\n\nOutput:\n\n', JSON.stringify(results));
      }

      var transformers = [];

      if (this.options.includeMatches) {
        transformers.push(function (result, data) {
          var output = result.output;
          data.matches = [];

          for (var i = 0, len = output.length; i < len; i += 1) {
            var item = output[i];

            if (item.matchedIndices.length === 0) {
              continue;
            }

            var obj = {
              indices: item.matchedIndices,
              value: item.value
            };
            if (item.key) {
              obj.key = item.key;
            }
            if (item.hasOwnProperty('arrayIndex') && item.arrayIndex > -1) {
              obj.arrayIndex = item.arrayIndex;
            }
            data.matches.push(obj);
          }
        });
      }

      if (this.options.includeScore) {
        transformers.push(function (result, data) {
          data.score = result.score;
        });
      }

      for (var i = 0, len = results.length; i < len; i += 1) {
        var result = results[i];

        if (this.options.id) {
          result.item = this.options.getFn(result.item, this.options.id)[0];
        }

        if (!transformers.length) {
          finalOutput.push(result.item);
          continue;
        }

        var data = {
          item: result.item
        };

        for (var j = 0, _len2 = transformers.length; j < _len2; j += 1) {
          transformers[j](result, data);
        }

        finalOutput.push(data);
      }

      return finalOutput;
    }
  }, {
    key: '_log',
    value: function _log() {
      if (this.options.verbose) {
        var _console;

        (_console = console).log.apply(_console, arguments);
      }
    }
  }]);

  return Fuse;
}();

module.exports = Fuse;

/***/ })
/******/ ]);
});
//# sourceMappingURL=fuse.js.map

/***/ }),

/***/ "./src/js/header.js":
/*!**************************!*\
  !*** ./src/js/header.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(".js-mob-nav").on("click", function(){
	$(".hdr__nav").addClass("hdr__nav--show");
});


$(".js-expand-list").on("click", function(){
	$(this).toggleClass("menu__li-1--expanded");
});

$(".js-close-menu").on("click", function(){
	$(".hdr__nav").removeClass("hdr__nav--show");
});


/***/ }),

/***/ "./src/js/review.js":
/*!**************************!*\
  !*** ./src/js/review.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function handleStarClick() {
    let $ratingStar = $(".write-review__form .rating__star"),
        $ratingInr = $ratingStar.find(".rating__star-inr"),
        ratingWidth = $ratingStar.width();

    $ratingStar.on("click", function (e) {
        let rating = Math.ceil((e.offsetX / ratingWidth) * 5) || 1;
        $ratingInr.width((rating * 20) + "%");
        $(".write-review__field--rating .write-review__input").val(rating)[0].setCustomValidity("");
    });
}());

$(".write-review__submit").on("click", function () {
    $(".write-review__form").addClass("write-review__form--submitted");

    var $ratingField = $(".write-review__field--rating .write-review__input"),
        ratingVal = $ratingField.val();
    if (!ratingVal) {
        $ratingField[0].setCustomValidity("You must select a rating.");
        return false;
    }
    else {
        $ratingField[0].setCustomValidity("");
    }

    var $reviewField = $(".write-review__field--review .write-review__input"),
        reviewVal = $reviewField.val(),
        reviewWords = reviewVal.match(/\s*\S+\s*/g);
    if (!reviewWords || reviewWords.length < 20) {
        $reviewField[0].setCustomValidity("Your review must be at least 20 words long.");
        return false;
    }
    else {
        $reviewField[0].setCustomValidity("");
    }
});

$(".write-review__form").on("submit", function (e) {
    e.preventDefault();

    fetch("", {
        "method": "POST",
        "body": JSON.stringify({
            "product": $(".write-review__section").data("pid"),
            "email": decodeURIComponent(window.location.search),
            "rating": $(".write-review__field--rating .write-review__input").val(),
            "title": $(".write-review__field--title .write-review__input").val(),
            "review": $(".write-review__field--review .write-review__input").val(),
            "name": $(".write-review__field--name .write-review__input").val(),
            "job": $(".write-review__field--job .write-review__input").val(),
            "company": $(".write-review__field--company .write-review__input").val()
        })
    }).then(function (response) {
        if (response.ok) {
            $(".write-review__section").addClass("write-review__section--collapsed");
        }
    });
});


/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var slendr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slendr */ "./node_modules/slendr/dist/index.js");
/* harmony import */ var slendr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slendr__WEBPACK_IMPORTED_MODULE_0__);

if (document.querySelectorAll(".slider").length > 0) {
    const myslider = new slendr__WEBPACK_IMPORTED_MODULE_0__["Slendr"]({
        slideshow: true
    })
    // myslider.on('move', (direction, index, element) => console.log(direction))
    document.addEventListener('click', (event) => {
        if (event.target.matches('.slider-thumnail__img')) {
            myslider.move(parseInt(event.target.dataset.index));
        }
    })
}

$(".js-form").on("submit", function(event) {

    event.preventDefault();

    let $inputForm = $(this),
        email = $inputForm.find(".intro__form-input").val(),
        $allInputForms = $(".intro__form");

    fetch(`/api/save.php?email=${email}`).then(function(response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }
        response.json().then(function(data) {
            $allInputForms.addClass("hide").parents(".js-form-wrapper").find(".intro__form-success").removeClass("hide");
        });
    }).catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
});

/***/ }),

/***/ "./src/js/search.js":
/*!**************************!*\
  !*** ./src/js/search.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Fuse = __webpack_require__(/*! ./fuse */ "./src/js/fuse.js");

let MODAL = {
    state: {
        products: [],
        categories: []
    },
    searchOptions: {
        product: {
            shouldSort: true,
            threshold: 0.5,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: ["label"],
            slice: 5
        },
        category: {
            shouldSort: true,
            threshold: 0.2,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: ["title"],
            slice: 4
        }
    }
};

let DOMElements = {
    create: {
        productList: function(data) {
            let $_html = ``;
            if (data.length) {
                data.map((item) => {
                    $_html += `
		            <li class="search-result__product">
		            	<a class="no-link-style search-result__link" href="${item.link}">
			                <img class="search-result__product-image" src="${item.image}" /  >
			                <div class="search-result__product-info">
			                    <div class="search-result__product-title">
			                        ${item.label}
			                    </div>
			                    <div class="search-result__product-category">
			                        in 
			                        <span class="semi-bold">
			                            ${item.category}
			                        </span>
			                    </div>
			                </div>
		                </a>
		            </li>`;
                });
            } else {
                $_html += `
		            <li class="search-result__empty">
		                    No result found
		            </li>`;
            }
            return $_html;
        },
        categoryList: function(data) {
            let $_html = ``;
            if (data.length) {
                data.map((item) => {
                    $_html += `
			        	<li class="search-result__category">
			        		<a class="no-link-style search-result__link" href="${item.link}">
					            <div class="search-result__category-title">
					                ${item.title}
					            </div>
					            <div class="search-result__category-description">
					                ${item.description}
					            </div>
				            </a>
				        </li>`;
                });
            } else {
                $_html += `
		            <li class="search-result__empty">
		                    No result found
		            </li>`;
            }
            return $_html;
        }
    }
}

function initSearch(response) {
    MODAL.state.products = response.products.data;
    MODAL.state.categories = response.categories.data;
    $(".js-search-product-list").html(DOMElements.create.productList(response.products.data.slice(0,MODAL.searchOptions.product.slice)));
    $(".js-search-category-list").html(DOMElements.create.categoryList(response.categories.data.slice(0,MODAL.searchOptions.category.slice)));
}

$(".search__input").on("focus", function() {
    $(this).parents(".search-wrapper").addClass("search-wrapper--page").find(".search").addClass("container");

    if (MODAL.state.products.length === 0) {
        fetch(`https://www.zariance.com/api/product.php`).then(function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }
            response.json().then(function(response) {
                initSearch(response);
            });
        }).catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
    }
}).on("blur", function() {
    // $(this).parents(".search-wrapper").removeClass("search-wrapper--page").find(".search").removeClass("container");
});

function productSearch(searchTerm) {
    let productItems = [];
    if (searchTerm) {
        let fuse = new Fuse(MODAL.state.products, MODAL.searchOptions.product);
        productItems = fuse.search(searchTerm);
    } else {
        productItems = MODAL.state.products;
    }
    $(".js-search-product-list").html(DOMElements.create.productList(productItems.slice(0,5)));
}

function categorySearch(searchTerm) {
    let categoryItems = [];
    if (searchTerm) {
        let fuse = new Fuse(MODAL.state.categories, MODAL.searchOptions.category);
        categoryItems = fuse.search(searchTerm);
    } else {
        categoryItems = MODAL.state.categories;
    }
    $(".js-search-category-list").html(DOMElements.create.categoryList(categoryItems.slice(0,4)));
}

$(".js-search-input").on("input", function() {
    let searchTerm = $(this).val();
    console.log(searchTerm);
    productSearch(searchTerm);
    categorySearch(searchTerm);
})

$(".js-search-close").on("click", function() {
    $(".search-wrapper").removeClass("search-wrapper--page");
})

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.sass */ "./src/scss/style.sass");
/* harmony import */ var _scss_style_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/eventHandlers.js */ "./src/js/eventHandlers.js");
/* harmony import */ var _js_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_eventHandlers_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_script_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/script.js */ "./src/js/script.js");
/* harmony import */ var _js_fuse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/fuse.js */ "./src/js/fuse.js");
/* harmony import */ var _js_fuse_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_fuse_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_search_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/search.js */ "./src/js/search.js");
/* harmony import */ var _js_search_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_search_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/header.js */ "./src/js/header.js");
/* harmony import */ var _js_header_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_header_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _js_review_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/review.js */ "./src/js/review.js");
/* harmony import */ var _js_review_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_review_js__WEBPACK_IMPORTED_MODULE_6__);











/***/ }),

/***/ "./src/scss/style.sass":
/*!*****************************!*\
  !*** ./src/scss/style.sass ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map