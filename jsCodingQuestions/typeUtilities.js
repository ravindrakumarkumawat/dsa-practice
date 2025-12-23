// Advanced implementations using Object.prototype.toString.call
export function isBoolean(value) {
  return Object.prototype.toString.call(value) === '[object Boolean]';
}

export function isNumber(value) {
  return Object.prototype.toString.call(value) === '[object Number]';
}

export function isNull(value) {
  return Object.prototype.toString.call(value) === '[object Null]';
}

export function isString(value) {
  return Object.prototype.toString.call(value) === '[object String]';
}

export function isSymbol(value) {
  return Object.prototype.toString.call(value) === '[object Symbol]';
}

export function isUndefined(value) {
  return Object.prototype.toString.call(value) === '[object Undefined]';
}


// Alternative simpler implementations
export function isBoolean(value) {
  return value === true || value === false;
}

export function isNumber(value) {
  return typeof value === 'number';
}

export function isNull(value) {
  return value === null;
}

export function isString(value) {
  return typeof value === 'string';
}

export function isSymbol(value) {
  return typeof value === 'symbol';
}

export function isUndefined(value) {
  return value === undefined;
}
