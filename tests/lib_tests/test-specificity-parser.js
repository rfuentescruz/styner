var util = require('utils'),
    fs = require('fs');

var dirname = fs.absolute(phantom.casperScriptBaseDir);

casper.test.begin('Test selector specificity', 40, function(test) {
    casper.start(dirname + '/../fixtures/specificity-parser-test.html').then(function() {
        test.assertSelectorParserReturns = function(selector, expected, seed) {
            test.assertEvalEquals(
                function(selector, initialSpecificity) {
                    return window.parser.parse(
                        selector,
                        {specificity: initialSpecificity}
                    );
                },
                expected,
                'Parsing "' + selector + '" should return ' + expected,
                [selector, seed || 0]
            );
        };

        test.assertSelectorParserReturns('*', 0);
        test.assertSelectorParserReturns('h1', 1);
        test.assertSelectorParserReturns('.class', 10);
        test.assertSelectorParserReturns('#id', 100);
        test.assertSelectorParserReturns('[href]', 10);
        test.assertSelectorParserReturns('[href="~foo"]', 10);
        test.assertSelectorParserReturns('[href="^foo"]', 10);
        test.assertSelectorParserReturns('[href="|foo"]', 10);
        test.assertSelectorParserReturns('[href="*foo"]', 10);
        test.assertSelectorParserReturns('[href="$foo"]', 10);
        test.assertSelectorParserReturns(':pseudo-class', 10);
        test.assertSelectorParserReturns(':pseudo-class-func(1n+2)', 10);
        test.assertSelectorParserReturns('::pseudo-element', 1);
        test.assertSelectorParserReturns('::pseudo-element-func(1n+2)', 1);
        test.assertSelectorParserReturns(':not(h1)', 1);
        test.assertSelectorParserReturns(':not(.class)', 10);
        test.assertSelectorParserReturns(':not(#id)', 100);

        test.assertSelectorParserReturns('h1.class', 11);
        test.assertSelectorParserReturns('h1#id', 101);
        test.assertSelectorParserReturns('h1[href]', 11);
        test.assertSelectorParserReturns('h1:pseudo-class', 11);
        test.assertSelectorParserReturns('h1::pseudo-element', 2);
        test.assertSelectorParserReturns('h1:not(.class)', 11);

        test.assertSelectorParserReturns('h1.class#id', 111);
        test.assertSelectorParserReturns('h1#id.class', 111);
        test.assertSelectorParserReturns('h1.class.class2', 21);
        test.assertSelectorParserReturns('h1#id[href]', 111);
        test.assertSelectorParserReturns('h1.class:pseudo-class', 21);
        test.assertSelectorParserReturns('h1.class:pseudo-class:not(#id)', 121);
        test.assertSelectorParserReturns('h1:not(#id.class[href])', 121);

        test.assertSelectorParserReturns('h1 a', 2);
        test.assertSelectorParserReturns('h1.class a', 12);
        test.assertSelectorParserReturns('h1 a#id', 102);
        test.assertSelectorParserReturns('h1[href="~foo"] a:pseudo-class', 22);
        test.assertSelectorParserReturns('h1.class a:not(#id)', 112);

        test.assertSelectorParserReturns('h1#id a.class', 112);
        test.assertSelectorParserReturns('h1#id > a.class', 112);
        test.assertSelectorParserReturns('h1#id ~ a.class', 112);
        test.assertSelectorParserReturns('h1#id + a.class', 112);

        test.assertSelectorParserReturns('h1.class a:not(#id) span[href]', 123);

    }).run(function() {
        test.done();
    });
});

casper.test.begin('Test invalid selectors', 4, function(test) {
    casper.start(dirname + '/../fixtures/specificity-parser-test.html').then(function() {
        this.evaluate(function() {
            var style = document.createElement('style');
            style.setAttribute('type', 'text/css');
            style.setAttribute('id', 'injected-invalid-css');
            style.textContent = 'h1.class:foo( {font-size:12px}';
            document.getElementsByTagName('body')[0].appendChild(style);
        });
    }).then(function() {
        test.assertExists('#injected-invalid-css');
        test.assertEval(function() {
            return document.styleSheets.length == 1;
        }, "Injected stylesheet must be accessible via JS");
        test.assertEval(function() {
            return document.styleSheets[0].rules.length === 0;
        }, "Invalid stylesheet rules must not be allowed");
        test.assertEval(function() {
            try {
                window.parser.parse(
                    'h1.#:foo(',
                    {specificity: 0}
                );
                return false;
            } catch (e) {
                return true;
            }
        }, "Selector parser must throw errors for invalid selectors");
    }).run(function() {
        test.done();
    });
});

casper.test.begin('Test browser JS API for CSS', 5, function(test) {
    casper.start(dirname + '/../fixtures/specificity-parser-test.html').then(function() {
        this.evaluate(function() {
            var style = document.createElement('style');
            style.setAttribute('type', 'text/css');
            style.setAttribute('id', 'injected-css');
            style.textContent = 'h1>a {font-size:12px}';
            document.getElementsByTagName('body')[0].appendChild(style);
        });
    }).then(function() {
        test.assertExists('#injected-css');
        test.assertEval(function() {
            return document.styleSheets.length == 1;
        }, "Injected stylesheet must be accessible via JS");
        test.assertEval(function() {
            return document.styleSheets[0].rules.length == 1;
        }, "Injected stylesheet rules must not be empty");
        test.assertEval(function() {
            return document.styleSheets[0].rules[0].selectorText == 'h1 > a';
        }, "Browser must normalize CSS rules that do not have proper spacing");
        test.assertEvalEquals(function() {
            return window.parser.parse(
                document.styleSheets[0].rules[0].selectorText,
                {specificity: 0}
            );
        }, 2, "Selector parser must parse the rule properly");
    }).run(function() {
        test.done();
    });
});
