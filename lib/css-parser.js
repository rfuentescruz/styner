

define([], function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"all":3,"selector":4,"EOF":5,"S":6,"combinator":7,"simple_selector_sequence":8,"PLUS":9,"GREATER":10,"TILDE":11,"element_selector":12,"selector_qualifiers":13,"type_selector":14,"universal":15,"selector_qualifier":16,"HASH":17,"class":18,"attrib":19,"negation":20,"pseudo":21,"namespace_prefix":22,"element_name":23,"IDENT":24,"|":25,"*|":26,"*":27,".":28,"[":29,"attrib_name":30,"]":31,"attrib_matcher":32,"attrib_value":33,"PREFIXMATCH":34,"SUFFIXMATCH":35,"SUBSTRINGMATCH":36,"=":37,"INCLUDES":38,"DASHMATCH":39,"STRING":40,"DOUBLE_COLON":41,"functional_pseudo":42,"COLON":43,"FUNCTION":44,"expression_list":45,")":46,"expression":47,"-":48,"DIMENSION":49,"NUMBER":50,"NOT":51,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",6:"S",9:"PLUS",10:"GREATER",11:"TILDE",17:"HASH",24:"IDENT",25:"|",26:"*|",27:"*",28:".",29:"[",31:"]",34:"PREFIXMATCH",35:"SUFFIXMATCH",36:"SUBSTRINGMATCH",37:"=",38:"INCLUDES",39:"DASHMATCH",40:"STRING",41:"DOUBLE_COLON",43:"COLON",44:"FUNCTION",46:")",48:"-",49:"DIMENSION",50:"NUMBER",51:"NOT"},
productions_: [0,[3,2],[4,5],[4,3],[4,1],[7,1],[7,1],[7,1],[8,1],[8,2],[8,1],[12,1],[12,1],[13,1],[13,2],[16,1],[16,1],[16,1],[16,1],[16,1],[14,2],[14,1],[22,2],[22,1],[22,1],[23,1],[15,2],[15,1],[18,2],[19,3],[19,5],[30,2],[30,1],[32,1],[32,1],[32,1],[32,1],[32,1],[32,1],[33,1],[33,1],[21,2],[21,2],[21,2],[21,2],[42,3],[47,1],[47,1],[47,1],[47,1],[47,1],[47,1],[45,2],[45,1],[20,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */, selector) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1: return selector.specificity; 
break;
case 2: this.$ = $$[$0-4] + '' + $$[$0-2] + '' + $$[$0]; 
break;
case 3: this.$ = $$[$0-2] + '' + $$[$0]; 
break;
case 9: this.$ = $$[$0-1] + '' + $$[$0]; 
break;
case 11: selector.specificity += 1 
break;
case 15: selector.specificity += 100; 
break;
case 16: selector.specificity += 10; 
break;
case 17: selector.specificity += 10; 
break;
case 20: this.$ = $$[$0-1] + '' + $$[$0]; 
break;
case 41: selector.specificity += 1; this.$ = $$[$0-1] + '' + $$[$0]; 
break;
case 42: selector.specificity += 1; this.$ = $$[$0-1] + '' + $$[$0]; console.log(this.$)
break;
case 43: console.log($$[$0-1]); selector.specificity += 10; this.$ = $$[$0-1] + '' + $$[$0]; 
break;
case 44: selector.specificity += 10; this.$ = $$[$0-1] + '' + $$[$0]; 
break;
}
},
table: [{3:1,4:2,8:3,12:4,13:5,14:6,15:7,16:8,17:[1,12],18:13,19:14,20:15,21:16,22:9,23:10,24:[1,17],25:[1,19],26:[1,18],27:[1,11],28:[1,20],29:[1,21],41:[1,23],43:[1,24],51:[1,22]},{1:[3]},{5:[1,25],6:[1,26]},{5:[2,4],6:[2,4],46:[2,4]},{5:[2,8],6:[2,8],13:27,16:8,17:[1,12],18:13,19:14,20:15,21:16,28:[1,20],29:[1,21],41:[1,23],43:[1,24],46:[2,8],51:[1,22]},{5:[2,10],6:[2,10],16:28,17:[1,12],18:13,19:14,20:15,21:16,28:[1,20],29:[1,21],41:[1,23],43:[1,24],46:[2,10],51:[1,22]},{5:[2,11],6:[2,11],17:[2,11],28:[2,11],29:[2,11],41:[2,11],43:[2,11],46:[2,11],51:[2,11]},{5:[2,12],6:[2,12],17:[2,12],28:[2,12],29:[2,12],41:[2,12],43:[2,12],46:[2,12],51:[2,12]},{5:[2,13],6:[2,13],17:[2,13],28:[2,13],29:[2,13],41:[2,13],43:[2,13],46:[2,13],51:[2,13]},{23:29,24:[1,31],27:[1,30]},{5:[2,21],6:[2,21],17:[2,21],28:[2,21],29:[2,21],41:[2,21],43:[2,21],46:[2,21],51:[2,21]},{5:[2,27],6:[2,27],17:[2,27],28:[2,27],29:[2,27],41:[2,27],43:[2,27],46:[2,27],51:[2,27]},{5:[2,15],6:[2,15],17:[2,15],28:[2,15],29:[2,15],41:[2,15],43:[2,15],46:[2,15],51:[2,15]},{5:[2,16],6:[2,16],17:[2,16],28:[2,16],29:[2,16],41:[2,16],43:[2,16],46:[2,16],51:[2,16]},{5:[2,17],6:[2,17],17:[2,17],28:[2,17],29:[2,17],41:[2,17],43:[2,17],46:[2,17],51:[2,17]},{5:[2,18],6:[2,18],17:[2,18],28:[2,18],29:[2,18],41:[2,18],43:[2,18],46:[2,18],51:[2,18]},{5:[2,19],6:[2,19],17:[2,19],28:[2,19],29:[2,19],41:[2,19],43:[2,19],46:[2,19],51:[2,19]},{5:[2,25],6:[2,25],17:[2,25],25:[1,32],28:[2,25],29:[2,25],41:[2,25],43:[2,25],46:[2,25],51:[2,25]},{24:[2,23],27:[2,23]},{24:[2,24],27:[2,24]},{24:[1,33]},{22:35,24:[1,36],25:[1,19],26:[1,18],30:34},{4:37,8:3,12:4,13:5,14:6,15:7,16:8,17:[1,12],18:13,19:14,20:15,21:16,22:9,23:10,24:[1,17],25:[1,19],26:[1,18],27:[1,11],28:[1,20],29:[1,21],41:[1,23],43:[1,24],51:[1,22]},{24:[1,39],42:38,44:[1,40]},{24:[1,42],42:41,44:[1,40]},{1:[2,1]},{7:43,8:44,9:[1,45],10:[1,46],11:[1,47],12:4,13:5,14:6,15:7,16:8,17:[1,12],18:13,19:14,20:15,21:16,22:9,23:10,24:[1,17],25:[1,19],26:[1,18],27:[1,11],28:[1,20],29:[1,21],41:[1,23],43:[1,24],51:[1,22]},{5:[2,9],6:[2,9],16:28,17:[1,12],18:13,19:14,20:15,21:16,28:[1,20],29:[1,21],41:[1,23],43:[1,24],46:[2,9],51:[1,22]},{5:[2,14],6:[2,14],17:[2,14],28:[2,14],29:[2,14],41:[2,14],43:[2,14],46:[2,14],51:[2,14]},{5:[2,20],6:[2,20],17:[2,20],28:[2,20],29:[2,20],41:[2,20],43:[2,20],46:[2,20],51:[2,20]},{5:[2,26],6:[2,26],17:[2,26],28:[2,26],29:[2,26],41:[2,26],43:[2,26],46:[2,26],51:[2,26]},{5:[2,25],6:[2,25],17:[2,25],28:[2,25],29:[2,25],41:[2,25],43:[2,25],46:[2,25],51:[2,25]},{24:[2,22],27:[2,22]},{5:[2,28],6:[2,28],17:[2,28],28:[2,28],29:[2,28],41:[2,28],43:[2,28],46:[2,28],51:[2,28]},{31:[1,48],32:49,34:[1,50],35:[1,51],36:[1,52],37:[1,53],38:[1,54],39:[1,55]},{24:[1,56]},{25:[1,32],31:[2,32],34:[2,32],35:[2,32],36:[2,32],37:[2,32],38:[2,32],39:[2,32]},{6:[1,26],46:[1,57]},{5:[2,41],6:[2,41],17:[2,41],28:[2,41],29:[2,41],41:[2,41],43:[2,41],46:[2,41],51:[2,41]},{5:[2,42],6:[2,42],17:[2,42],28:[2,42],29:[2,42],41:[2,42],43:[2,42],46:[2,42],51:[2,42]},{9:[1,60],24:[1,65],40:[1,64],45:58,47:59,48:[1,61],49:[1,62],50:[1,63]},{5:[2,43],6:[2,43],17:[2,43],28:[2,43],29:[2,43],41:[2,43],43:[2,43],46:[2,43],51:[2,43]},{5:[2,44],6:[2,44],17:[2,44],28:[2,44],29:[2,44],41:[2,44],43:[2,44],46:[2,44],51:[2,44]},{6:[1,66]},{5:[2,3],6:[2,3],46:[2,3]},{6:[2,5]},{6:[2,6]},{6:[2,7]},{5:[2,29],6:[2,29],17:[2,29],28:[2,29],29:[2,29],41:[2,29],43:[2,29],46:[2,29],51:[2,29]},{24:[1,68],33:67,40:[1,69]},{24:[2,33],40:[2,33]},{24:[2,34],40:[2,34]},{24:[2,35],40:[2,35]},{24:[2,36],40:[2,36]},{24:[2,37],40:[2,37]},{24:[2,38],40:[2,38]},{31:[2,31],34:[2,31],35:[2,31],36:[2,31],37:[2,31],38:[2,31],39:[2,31]},{5:[2,54],6:[2,54],17:[2,54],28:[2,54],29:[2,54],41:[2,54],43:[2,54],46:[2,54],51:[2,54]},{9:[1,60],24:[1,65],40:[1,64],46:[1,70],47:71,48:[1,61],49:[1,62],50:[1,63]},{9:[2,53],24:[2,53],40:[2,53],46:[2,53],48:[2,53],49:[2,53],50:[2,53]},{9:[2,46],24:[2,46],40:[2,46],46:[2,46],48:[2,46],49:[2,46],50:[2,46]},{9:[2,47],24:[2,47],40:[2,47],46:[2,47],48:[2,47],49:[2,47],50:[2,47]},{9:[2,48],24:[2,48],40:[2,48],46:[2,48],48:[2,48],49:[2,48],50:[2,48]},{9:[2,49],24:[2,49],40:[2,49],46:[2,49],48:[2,49],49:[2,49],50:[2,49]},{9:[2,50],24:[2,50],40:[2,50],46:[2,50],48:[2,50],49:[2,50],50:[2,50]},{9:[2,51],24:[2,51],40:[2,51],46:[2,51],48:[2,51],49:[2,51],50:[2,51]},{8:72,12:4,13:5,14:6,15:7,16:8,17:[1,12],18:13,19:14,20:15,21:16,22:9,23:10,24:[1,17],25:[1,19],26:[1,18],27:[1,11],28:[1,20],29:[1,21],41:[1,23],43:[1,24],51:[1,22]},{31:[1,73]},{31:[2,39]},{31:[2,40]},{5:[2,45],6:[2,45],17:[2,45],28:[2,45],29:[2,45],41:[2,45],43:[2,45],46:[2,45],51:[2,45]},{9:[2,52],24:[2,52],40:[2,52],46:[2,52],48:[2,52],49:[2,52],50:[2,52]},{5:[2,2],6:[2,2],46:[2,2]},{5:[2,30],6:[2,30],17:[2,30],28:[2,30],29:[2,30],41:[2,30],43:[2,30],46:[2,30],51:[2,30]}],
defaultActions: {25:[2,1],45:[2,5],46:[2,6],47:[2,7],68:[2,39],69:[2,40]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 6;
break;
case 1:return 38;
break;
case 2:return 39;
break;
case 3:return 34;
break;
case 4:return 35;
break;
case 5:return 36;
break;
case 6:return 44;
break;
case 7:return 24;
break;
case 8:return 40;
break;
case 9:return 50;
break;
case 10:return 17;
break;
case 11:return 9;
break;
case 12:return 10;
break;
case 13:return 'COMMA';
break;
case 14:return 11;
break;
case 15:return 41;
break;
case 16:return 51;
break;
case 17:return 43;
break;
case 18:return 'ATKEYWORD';
break;
case 19:return 'INVALID';
break;
case 20:return 'PERCENTAGE';
break;
case 21:return 49;
break;
case 22:return 'CDO';
break;
case 23:return 'CDC';
break;
case 24:return 5;
break;
case 25:/* ignore comments */
break;
case 26: return yy_.yytext; 
break;
}
},
rules: [/^(?:[ \t\r\n\f]+)/,/^(?:~=)/,/^(?:\|=)/,/^(?:\^=)/,/^(?:\$=)/,/^(?:\*=)/,/^(?:([-]?([_a-z]|([^\0-\177])|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))([_a-z0-9-]|([^\0-\177])|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))*)\()/,/^(?:([-]?([_a-z]|([^\0-\177])|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))([_a-z0-9-]|([^\0-\177])|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))*))/,/^(?:(("([^\n\r\f\\"]|\\(\n|\r\n|\r|\f)|([^\0-\177])|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))*")|('([^\n\r\f\\']|\\(\n|\r\n|\r|\f)|([^\0-\177])|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))*')))/,/^(?:([0-9]+|[0-9]*\.[0-9]+))/,/^(?:#(([_a-z0-9-]|([^\0-\177])|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))+))/,/^(?:\+)/,/^(?:>)/,/^(?:,)/,/^(?:~)/,/^(?:::)/,/^(?::not\()/,/^(?::)/,/^(?:([-]?([_a-z]|([^\0-\177])|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))([_a-z0-9-]|([^\0-\177])|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))*))/,/^(?:(("([^\n\r\f\\"]|\\(\n|\r\n|\r|\f)|([^\0-\177])|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))*)|('([^\n\r\f\\']|\\(\n|\r\n|\r|\f)|([^\0-\177])|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))*)))/,/^(?:([0-9]+|[0-9]*\.[0-9]+))/,/^(?:([0-9]+|[0-9]*\.[0-9]+)([-]?([_a-z]|([^\0-\177])|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))([_a-z0-9-]|([^\0-\177])|((\\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?)|\\[^\n\r\f0-9a-f]))*))/,/^(?:<!--)/,/^(?:-->)/,/^(?:$)/,/^(?:\/\*[^*]*\*+([^/*][^*]*\*+)*\/)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
return parser;
});