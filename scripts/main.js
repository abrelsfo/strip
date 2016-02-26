require(['./helper/extendString.js'],
  function (extendString){
    extendString();
    document.write(('This is the end of the world as we know it').strip(' '));
  }
);
