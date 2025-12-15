interface Function {
  myApply(this: any, thisArg: any, argsArray?:any[]): any;
}

Function.prototype.myApply = function (thisArg, argsArray =[]) {
  return this.bind(thisArg)(...argsArray);
}

Function.prototype.myApply = function (thisArg, argsArray =[]) {
  return this.bind(thisArg, ...argsArray)();
}

Function.prototype.myApply = function (thisArg, argArray = []) {
  return this.call(thisArg, ...argArray);
};