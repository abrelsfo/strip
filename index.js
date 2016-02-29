'use strict';
module.exports = function extendString(){

  String.prototype.strip = function (delimiter, strip) {
    const argLength = arguments.length;
    if (strip === undefined){
      strip = true;
    }

    if (argLength !== 1 && argLength !== 2) {
      throw new Error('Strip expected 1 or 2 arguments, got '+ argLength);
    }

    if (typeof delimiter !== 'string') {
      throw new TypeError('Strip expected delimiter to be a string, got ' + (typeof delimiter));
    }

    if (typeof strip !== 'boolean') {
      throw new TypeError('Strip expected strip to be a number, got ' + (typeof strip));
    }

    const len = this.length;
    if (len === 0) {
        throw new Error('Expected input string length >= 1, got ' + this.length);
    } else {
      if (strip){
        var re = new RegExp(delimiter, "gi");
      } else {
        var re = new RegExp(delimiter, "g");
      }
      return this.replace(re, '');
    }
  };
};
