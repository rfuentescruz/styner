define('styner', ['css-parser'], function(parser) {
    var module = {
        stynerId: 0,
        pendingRules: [],
        specificityCache: {},
        config: {
            stynerIdAttribute: 'data-styner-id',
            dryRun: false,
            removeClass: true,
            removeStyles: true
        }
    };

    module.run = function(config) {
        var pendingStyles = [];
        for (var i = 0; i < document.styleSheets.length; i++) {
            var sheet = document.styleSheets[i];

            if (sheet.cssRules && sheet.cssRules.length) {
                module._collectStyles(sheet.cssRules, pendingStyles);
            }
        }

        if (!module.config.dryRun) {
            module._applyStyles(pendingStyles);
            module._cleanUp();
        }

        return pendingStyles;
    };

    module._collectStyles = function(rules, pendingStyles) {
        for (var i = 0; i < rules.length; i++) {
            var rule = rules[i];

            if (rule.type == CSSRule.STYLE_RULE) {
                var selectors = rule.selectorText.split(',');
                for (var j = selectors.length - 1; j >= 0; j--) {
                    var selector = {
                        selectorText: selectors[j].trim(),
                        specificity: 0
                    };

                    var elements = [];

                    try {
                        elements = document.querySelectorAll(
                            selector.selectorText
                        );
                    } catch (e) {
                        continue;
                    }

                    if (elements && elements.length) {
                        var specificity = parser.parse(
                            selector.selectorText,
                            selector
                        );

                        for (var k = 0; k < elements.length; k++) {
                            var el = elements[k];

                            var stynerId = el.getAttribute(
                                module.config.stynerIdAttribute
                            );

                            if (!stynerId) {
                                el.setAttribute(
                                    module.config.stynerIdAttribute,
                                    module.stynerId
                                );

                                // inline styles are more specific than any
                                // CSS selector so we're assigning it a
                                // specificity of 1XXX
                                module._computeStyles(
                                    pendingStyles,
                                    module.stynerId,
                                    el.style,
                                    1000
                                );

                                stynerId = module.stynerId;
                                module.stynerId++;
                            }

                            module._computeStyles(
                                pendingStyles,
                                stynerId,
                                rule.style,
                                selector.specificity
                            );
                        }
                    }
                }

            } else if (rule.type == CSSRule.MEDIA_RULE) {
                if (window.matchMedia(rule.media[0]).matches) {
                    module._collectStyles(rule.cssRules, pendingStyles);
                }
            }
        }
    };

    module._computeStyles = function(queue, id, styles, ruleSpecificity) {
        if (typeof queue[id] === 'undefined') {
            queue[id] = {};
        }

        for (var i = 0; i < styles.length; i++) {
            var name = styles[i];
            if (typeof queue[id][name] === 'undefined') {
                queue[id][name] = [];
            }

            var important = styles.getPropertyPriority(name);
            queue[id][name].push({
                'val': styles.getPropertyValue(name),
                'specificity': ruleSpecificity + (important ? 10000 : 0)
            });
        }
    };

    module._sortStyles = function(a, b) {
        return a.specificity - b.specificity;
    };

    module._applyStyles = function(rules) {
        for (var pid in rules) {
            var target = document.querySelector(
                '[' + module.config.stynerIdAttribute + '="' + pid + '"]'
            );

            if (target) {
                for (var property in rules[pid]) {
                    rules[pid][property].sort(module._sortStyles);
                    var numCandidates = rules[pid][property].length;
                    target.style.setProperty(
                        property,
                        rules[pid][property][numCandidates - 1].val
                    );
                }

                target.removeAttribute(module.config.stynerIdAttribute);
            }
        }
    };

    module._cleanUp = function() {
        if (module.config.removeStyles) {
            var styleElements = document.querySelectorAll(
                'style,link[rel="stylesheet"]'
            );
            for (var i = styleElements.length -  1; i >= 0; i--) {
                styleElements[i].parentNode.removeChild(styleElements[i]);
            }
        }

        if (module.config.removeClass) {
            var classedElements = document.querySelectorAll('body *[class]');
            for (var j = classedElements.length -  1; j >= 0; j--) {
                classedElements[j].removeAttribute('class');
            }
        }
    };

    return {
        'run': module.run,
        'parser': parser
    };
});
