'use strict';
module.exports = function extendString(){

  String.prototype.strip = function (delimiter) {
    const argLength = arguments.length;
    if (argLength > 1) {
      throw new Error('Strip expected 1 argument, got '+ argLength);
    }

    if (typeof delimiter !== 'string') {
      throw new TypeError('Strip expected delimiter to be a string, got ' + (typeof delimiter));
    }

    const len = this.length;
    if (len === 0) {
      throw new Error('Expected input string length >= 1, got ' + this.length);
    } else {
      var re = new RegExp(delimiter, "g");
      return this.replace(re, '');
    }
  };
};
