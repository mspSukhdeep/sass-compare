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
        val: function(s) {
            let value = '';
            this.forEach(function(node) {
                value += node.value;
            });
            return value;
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
        submit: function(s) {
            this.submit();
            return this;
        },
        html: function(content) {
            this[0].innerHTML = content;
            return this;
        }

    });
    return $;
})(window, document, [], /\.(.+)/, 0, 'EventListener', 'MatchesSelector')

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
/***/ (function(module, exports) {

let DOMElements = {
    create: {
        productList: function(data) {
            $_html = ``;
            data.map((item) => {
                $_html += `
		            <li class="search-result__product">
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
		            </li>`;
            });
            return $_html;
        },
        categoryList: function(data) {
            $_html = ``;

            data.map((item) => {
                $_html += `
			        	<li class="search-result__category">
				            <div class="search-result__category-title">
				                ${item.title}
				            </div>
				            <div class="search-result__category-description">
				                ${item.description}
				            </div>
				        </li>`;
            });

            return $_html;
        }
    }
}
$(".search__input").on("focus", function() {
    $(this).parents(".search-wrapper").addClass("search-wrapper--page").find(".search").addClass("container");
    fetch(`http://localhost/data/product.php`).then(function(response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }
        response.json().then(function(response) {
            $(".js-search-product-list").html(DOMElements.create.productList(response.products.data));
            $(".js-search-category-list").html(DOMElements.create.categoryList(response.categories.data));
        });
    }).catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}).on("blur", function() {
    // $(this).parents(".search-wrapper").removeClass("search-wrapper--page").find(".search").removeClass("container");
});

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
/* harmony import */ var _js_search_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/search.js */ "./src/js/search.js");
/* harmony import */ var _js_search_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_search_js__WEBPACK_IMPORTED_MODULE_3__);







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