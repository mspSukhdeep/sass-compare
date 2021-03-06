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

            this.forEach(function(itemGroup){
                var items = itemGroup.querySelectorAll(selector);

                for(var i=0;i<items.length;i++){
                    collection.push(items[i]);
                }
            })
            
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
        hasClass: function(className) {
            if(this[0].classList.contains(className)){
                return true;
            }
            return false;
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
        append: function(content) {
            let fragment = document.createRange().createContextualFragment(content);
            this[0].appendChild(fragment);
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
            if (name && this[0]) {
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
