Function.prototype.myCall = function(thisArg, ...arrayArgs) {
  return this.bind(thisArg)(...arrayArgs);
}

Function.prototype.myCall = function(thisArg, ...arrayArgs) {
  return this.bind(thisArg, ...arrayArgs)();
}

Function.prototype.myCall = function (thisArg, ...arrayArgs) {
  return this.apply(thisArg, arrayArgs);
}