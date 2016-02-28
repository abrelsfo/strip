## strip_character
Extension of String that removes all characters that match the delimiter

## Usage
```js
require('strip_character')();

"Hello World".strip(' ');
//=> HelloWorld

"This is the end of the world as we know it".strip('t');
//=>his is he end of he world as we know i   Case-Insensitive

"This is the end of the world as we know it".strip('t', false);
//=>This is he end of he world as we know i
```

## API

### String.strip(delimiter[, strip])

##### delimiter
Type: String

##### strip
Type: Boolean
true: case-insensitive
false: case-sensitive
default: true

Extension of String that removes all characters that match the delimiter

##License

MIT © [Alex Brelsford](abrelsfo.github.io)
