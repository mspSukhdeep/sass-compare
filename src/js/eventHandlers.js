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