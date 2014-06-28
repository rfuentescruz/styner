lexer:
	./node_modules/.bin/jison ./src/css.jison -m amd -o ./lib/css-parser.js

lib: lexer
	./node_modules/.bin/r.js -o ./src/app.build.js
	./node_modules/.bin/r.js -o ./src/app.build.js optimize=none out=./lib/styner.js

test:
	./node_modules/.bin/casperjs test --verbose tests/
.PHONY: lib

