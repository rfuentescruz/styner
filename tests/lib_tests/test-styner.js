var util = require('utils'),
    fs = require('fs');

var dirname = fs.absolute(phantom.casperScriptBaseDir);

casper.test.begin('Test matching rule styling', 6, function(test) {
    casper.start(
        dirname + '/../fixtures/styner-test-simple-matching-rule.html'
    ).then(function() {
        test.assertEval(function() {
            var header = document.getElementById('header');
            return header.style.length === 0;
        }, "Inline styles should not be present at start");

        test.assertEval(function() {
            var header = document.getElementById('header');
            return header.style.fontSize !== '200px';
        }, "Element does not have styles needed to test non-matching rules");
    }).then(function() {
        this.evaluate(function() {
            window.stynerStyles = window.styner.run();
        });
    }).then(function() {
        test.assertEval(function() {
            var header = document.getElementById('header');
            return header.style.length == 1;
        }, "Styles should have been inlined");

        test.assertEval(function() {
            var header = document.getElementById('header');
            return header.style[0] == 'color';
        }, "Correct style attribute should have been modified");

        test.assertEval(function() {
            var header = document.getElementById('header');
            return header.style.color == 'red';
        }, "Inline style must have the correct value");

        test.assertEval(function() {
            var header = document.getElementById('header');
            return header.style.fontSize !== '200px';
        }, "Element does not have styles for non-matching rules");
    }).run(function() {
        test.done();
    });
});

casper.test.begin('Test multiple matching rules styling', 5, function(test) {
    casper.start(
        dirname + '/../fixtures/styner-test-multiple-matching-rules.html'
    ).then(function() {
        test.assertEval(function() {
            var header = document.getElementById('header-id');
            return header.style.length === 0;
        }, "Inline styles should not be present at start");

        test.assertEval(function() {
            var header = document.getElementById('header-id');
            return (
                header.style.fontSize !== '200px' &&
                header.style.color !== 'red' &&
                header.style.marginTop !== '100px' &&
                header.style.float !== 'left'
            );
        }, "Element initially does not have the styles to test");
    }).then(function() {
        this.evaluate(function() {
            window.stynerStyles = window.styner.run();
        });
    }).then(function() {
        test.assertEval(function() {
            var header = document.getElementById('header-id');
            return header.style.length == 4;
        }, "Styles should have been inlined");

        test.assertEval(function() {
            var header = document.getElementById('header-id');
            return (
                header.style.fontSize === '200px' &&
                header.style.color === 'red' &&
                header.style.marginTop === '100px' &&
                header.style.float === 'left'
            );
        }, "Element must have all styles for all matching rules");

        test.assertEval(function() {
            var header = document.getElementById('non-matching-id');
            return (
                header.style.fontSize !== '200px' &&
                header.style.color !== 'red' &&
                header.style.marginTop === '100px' &&
                header.style.float !== 'left'
            );
        }, "Element must only have styles for matching rules");
    }).run(function() {
        test.done();
    });
});

casper.test.begin('Test same specificity rule order', 4, function(test) {
    casper.start(
        util.format('%s/%s',
            dirname,
            '../fixtures/styner-test-multiple-matching-conflicting-rules.html'
        )
    ).then(function() {
        test.assertEval(function() {
            var header = document.getElementById('header-id');
            return header.style.length === 0;
        }, "Inline styles should not be present at start");

        test.assertEval(function() {
            var header = document.getElementById('header-id');
            return (
                header.style.color !== 'red' &&
                header.style.color !== 'blue' &&
                header.style.color !== 'yellow' &&
                header.style.color !== 'green'
            );
        }, "Element initially does not have the styles to test");
    }).then(function() {
        this.evaluate(function() {
            window.stynerStyles = window.styner.run();
        });
    }).then(function() {
        test.assertEval(function() {
            var header = document.getElementById('header-id');
            return header.style.length == 1;
        }, "Styles should have been inlined");

        test.assertEval(function() {
            var header = document.getElementById('header-id');
            return header.style.color === 'green';
        }, "Must have the style for the most recent rule (same specificity)");

    }).run(function() {
        test.done();
    });
});

casper.test.begin('Test different specificity rule order', 4, function(test) {
    casper.start(
        util.format('%s/%s',
            dirname,
            '../fixtures/styner-test-multiple-matching-conflicting-rules.html'
        )
    ).then(function() {
        test.assertEval(function() {
            var header = document.getElementById('header-id-2');
            return header.style.length === 0;
        }, "Inline styles should not be present at start");

        test.assertEval(function() {
            var header = document.getElementById('header-id-2');
            return (
                header.style.fontSize !== '100px' &&
                header.style.fontSize !== '1px'
            );
        }, "Element initially does not have the styles to test");
    }).then(function() {
        this.evaluate(function() {
            window.stynerStyles = window.styner.run();
        });
    }).then(function() {
        test.assertEval(function() {
            var header = document.getElementById('header-id-2');
            return header.style.length == 1;
        }, "Styles should have been inlined");

        test.assertEval(function() {
            var header = document.getElementById('header-id-2');
            return header.style.fontSize === '100px';
        }, "Must have the style for the most specific rule");
    }).run(function() {
        test.done();
    });
});

casper.test.begin('Test rule source specificity', 4, function(test) {
    casper.start(
        util.format('%s/%s',
            dirname,
            '../fixtures/styner-test-multiple-matching-conflicting-rules.html'
        )
    ).then(function() {
        test.assertEval(function() {
            var header = document.getElementById('header-id-4');
            return header.style.length === 0;
        }, "Inline styles should not be present at start");

        test.assertEval(function() {
            var header = document.getElementById('header-id-4');
            return (
                header.style.paddingTop !== '100px' &&
                header.style.paddingTop !== '200px'
            );
        }, "Element initially does not have the styles to test");
    }).then(function() {
        this.evaluate(function() {
            window.stynerStyles = window.styner.run();
        });
    }).then(function() {
        test.assertEval(function() {
            var header = document.getElementById('header-id-4');
            return header.style.length == 1;
        }, "Styles should have been inlined");

        test.assertEval(function() {
            var header = document.getElementById('header-id-4');
            return header.style.paddingTop === '200px';
        }, "At same specificity, recent document styles override extern ones");
    }).run(function() {
        test.done();
    });
});

casper.test.begin(
    'Test extern and document styles have the same specificity',
    4,
    function(test) {
        casper.start(
            util.format('%s/%s',
                dirname,
                '../fixtures/styner-test-multiple-matching-conflicting-rules.html'
            )
        ).then(function() {
            test.assertEval(function() {
                var header = document.getElementById('header-id-5');
                return header.style.length === 0;
            }, "Inline styles should not be present at start");

            test.assertEval(function() {
                var header = document.getElementById('header-id-5');
                return (
                    header.style.float !== 'left' &&
                    header.style.float !== 'right'
                );
            }, "Element initially does not have the styles to test");
        }).then(function() {
            this.evaluate(function() {
                window.stynerStyles = window.styner.run();
            });
        }).then(function() {
            test.assertEval(function() {
                var header = document.getElementById('header-id-5');
                return header.style.length == 1;
            }, "Styles should have been inlined");

            test.assertEval(function() {
                    var header = document.getElementById('header-id-5');
                    return header.style.float === 'right';
                },
                "Newer extern styles override document style (same specificity)"
            );
        }).run(function() {
            test.done();
        });
    }
);

casper.test.begin(
    'Test inline styles are more specific than other sources',
    3,
    function(test) {
        casper.start(
            util.format('%s/%s',
                dirname,
                '../fixtures/styner-test-multiple-matching-conflicting-rules.html'
            )
        ).then(function() {
            test.assertEval(function() {
                var header = document.getElementById('header-id-6');
                return (
                    header.style.length === 1 &&
                    header.style.display === 'inline-block'
                );
            }, "Element initially has inline style (will be overriden)");
        }).then(function() {
            this.evaluate(function() {
                window.stynerStyles = window.styner.run();
            });
        }).then(function() {
            test.assertEval(function() {
                var header = document.getElementById('header-id-6');
                return header.style.length == 1;
            }, "Styles should have been inlined and previous one overriden");

            test.assertEval(function() {
                    var header = document.getElementById('header-id-6');
                    return header.style.display === 'inline-block';
                },
                "Inline styles beat selector specificity"
            );
        }).run(function() {
            test.done();
        });
    }
);

casper.test.begin('Test "!important" specificity', 3, function(test) {
    casper.start(
        util.format('%s/%s',
            dirname,
            '../fixtures/styner-test-multiple-matching-conflicting-rules.html'
        )
    ).then(function() {
        test.assertEval(function() {
            var header = document.getElementById('header-id-3');
            return (
                header.style.length === 1 &&
                header.style.marginTop === '500px'
            );
        }, "Element initially has inline style (will be overriden)");
    }).then(function() {
        this.evaluate(function() {
            window.stynerStyles = window.styner.run();
        });
    }).then(function() {
        test.assertEval(function() {
            var header = document.getElementById('header-id-3');
            return header.style.length == 1;
        }, "Styles should have been inlined and previous one overriden");

        test.assertEval(function() {
            var header = document.getElementById('header-id-3');
            return header.style.marginTop === '1px';
        }, "'!important' trumps all other specificity rules");
    }).run(function() {
        test.done();
    });
});

casper.test.begin('Test media queries', 4, function(test) {
    casper.start(
        util.format('%s/%s',
            dirname,
            '../fixtures/styner-test-media-queries.html'
        )
    ).then(function() {
        casper.viewport(200, 500);
    }).then(function() {
            test.assertEval(function() {
                var header = document.getElementById('header');
                return header.style.length === 0;
            }, "Inline styles should not be present at start");

            test.assertEval(function() {
                var header = document.getElementById('header');
                return (
                    header.style.color !== 'red' &&
                    header.style.float !== 'blue'
                );
            }, "Element initially does not have the styles to test");
    }).then(function() {
        this.evaluate(function() {
            window.stynerStyles = window.styner.run();
        });
    }).then(function() {
        test.assertEval(function() {
            var header = document.getElementById('header');
            return header.style.length == 1;
        }, "Styles should have been inlined");

        test.assertEval(function() {
            var header = document.getElementById('header');
            return header.style.color === 'red';
        }, "media query for max-width: 300px rules are applied");
    }).run(function() {
        test.done();
    });
});
