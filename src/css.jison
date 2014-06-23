%{
parser.specificity = 0;
%}

%lex

%option case-insensitive

ident     [-]?{nmstart}{nmchar}*
name      {nmchar}+
nmstart   [_a-z]|{nonascii}|{escape}
nonascii  [^\0-\177]
unicode   \\[0-9a-f]{1,6}(\r\n|[ \n\r\t\f])?
escape    {unicode}|\\[^\n\r\f0-9a-f]
nmchar    [_a-z0-9-]|{nonascii}|{escape}
num       [0-9]+|[0-9]*\.[0-9]+
string    {string1}|{string2}
string1   \"([^\n\r\f\\"]|\\{nl}|{nonascii}|{escape})*\"
string2   \'([^\n\r\f\\']|\\{nl}|{nonascii}|{escape})*\'
invalid   {invalid1}|{invalid2}
invalid1  \"([^\n\r\f\\"]|\\{nl}|{nonascii}|{escape})*
invalid2  \'([^\n\r\f\\']|\\{nl}|{nonascii}|{escape})*
nl        \n|\r\n|\r|\f
w         [ \t\r\n\f]*

D         d|\\0{0,4}(44|64)(\r\n|[ \t\r\n\f])?
E         e|\\0{0,4}(45|65)(\r\n|[ \t\r\n\f])?
N         n|\\n
O         o|\\o
T         t|\\0{0,4}(54|74)(\r\n|[ \t\r\n\f])?|\\t
V         v|\\0{0,4}(58|78)(\r\n|[ \t\r\n\f])?|\\v

%%

[ \t\r\n\f]+     return 'S';

"~="             return 'INCLUDES';
"|="             return 'DASHMATCH';
"^="             return 'PREFIXMATCH';
"$="             return 'SUFFIXMATCH';
"*="             return 'SUBSTRINGMATCH';
{ident}"("       return 'FUNCTION';
{ident}          return 'IDENT';
{string}         return 'STRING';
{num}            return 'NUMBER';
"#"{name}        return 'HASH';
"+"              return 'PLUS';
">"              return 'GREATER';
","              return 'COMMA';
"~"              return 'TILDE';
":not("          return 'NOT';
@{ident}         return 'ATKEYWORD';
{invalid}        return 'INVALID';
{num}%           return 'PERCENTAGE';
{num}{ident}     return 'DIMENSION';
"<!--"           return 'CDO';
"-->"            return 'CDC';
<<EOF>>          return 'EOF';

\/\*[^*]*\*+([^/*][^*]*\*+)*\/                    /* ignore comments */

.                { return yytext; };
/lex
%%

all
  : selector EOF { return parser.specificity; }
  ;

selector
  : selector S combinator S simple_selector_sequence { $$ = $1 + '' + $3 + '' + $5; }
  | selector S simple_selector_sequence { $$ = $1 + '' + $3; }
  | simple_selector_sequence
  ;

combinator
  : PLUS
  | GREATER
  | TILDE
  ;

simple_selector_sequence
  : element_selector
  | element_selector selector_qualifiers { $$ = $1 + '' + $2; }
  | selector_qualifiers
  ;

element_selector
  : type_selector { parser.specificity += 1; }
  | universal
  ;

selector_qualifiers
  : selector_qualifier
  | selector_qualifiers selector_qualifier
  ;

selector_qualifier
  : HASH { parser.specificity += 100; }
  | class { parser.specificity += 10; }
  | attrib { parser.specificity += 10; }
  | negation
  | pseudo
  ;

type_selector
  : namespace_prefix element_name { $$ = $1 + '' + $2; }
  | element_name
  ;

namespace_prefix
  : IDENT '|'
  | "*|"
  | '|'
  ;

element_name
  : IDENT
  ;

universal
  : namespace_prefix '*'
  | '*'
  ;

class
  : '.' IDENT
  ;

attrib
  : '[' attrib_name ']'
  | '[' attrib_name attrib_matcher attrib_value ']'
  ;

attrib_name
 : namespace_prefix IDENT
 | IDENT
 ;

attrib_matcher
  : PREFIXMATCH
  | SUFFIXMATCH
  | SUBSTRINGMATCH
  | '='
  | INCLUDES
  | DASHMATCH
  ;

attrib_value
  : IDENT
  | STRING
  ;

pseudo
  : "::" functional_pseudo { parser.specificity += 1; $$ = $1 + '' + $2; }
  | "::" IDENT { parser.specificity += 1; $$ = $1 + '' + $2; }
  | ':' functional_pseudo { parser.specificity += 10; $$ = $1 + '' + $2; }
  | ':' IDENT { parser.specificity += 10; $$ = $1 + '' + $2; }
  ;

functional_pseudo
  : FUNCTION expression_list ')'
  ;

expression
  /* In CSS3, the expressions are identifiers, strings, */
  /* or of the form "an+b" */
  : PLUS
  | '-'
  | DIMENSION
  | NUMBER
  | STRING
  | IDENT
  ;

expression_list
  : expression_list expression
  | expression
  ;

negation
  : NOT selector ')'
  ;
