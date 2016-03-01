## Strip Character

<br>
[![npm version](https://img.shields.io/npm/v/strip_character.svg)](https://www.npmjs.com/package/strip_character) 
[![Build Status](https://travis-ci.org/dawsonbotsford/arrford.svg?branch=master)](https://travis-ci.org/abrelsfo/strip.svg?branch=master) 
[![NPM downloads](http://img.shields.io/npm/dm/strip_character.svg?style=flat)](http://npmjs.org/strip_character)

<br>
> Extension of String that removes all characters that match the delimiter

<br>
### Installation
```npm install strip_character```

<br>
### Usage
```js
require('strip_character')();

"Hello World".strip(' ');
//=> HelloWorld

"This is the end of the world as we know it".strip('t');
//=>his is he end of he world as we know i   Case-Insensitive

"This is the end of the world as we know it".strip('t', false);
//=>This is he end of he world as we know i
```


<br>
### API
### String.strip(delimiter[, strip])

##### delimiter
Type: String

##### strip
Type: Boolean<br>
true: case-insensitive<br>
false: case-sensitive<br>
default: true

Extension of String that removes all characters that match the delimiter


<br>
### License
MIT © [Alex Brelsford](abrelsfo.github.io)


<br>
Template: **[meread](https://github.com/dawsonbotsford/meread)**
