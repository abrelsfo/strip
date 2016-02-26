# strip
Remove all characters that match the delimiter

# Usage
```js

require(['./helper/extendString.js'],
  function (extendString){
    extendString();

    "Hello World".strip(' ');
    //=> HelloWorld

    "This is the end of the world as we know it".strip('w');
    //=>This is the end of the orld as e kno it
  }
);
```
