/**
 * @param {Object} objectParam
 * @param {string|Array<string>} pathParam
 * @param {*} [defaultValue]
 * @return {*}
 */
export default function get(objectParam, pathParam, defaultValue) {
  if(objectParam == null) return defaultValue
  let params = pathParam

  if(!Array.isArray(params)) {
    params = params.split('.')
  }

  if(params.length === 0) return defaultValue

  if(params.length === 1) {
    if(objectParam.hasOwnProperty(params[0])) {
      return objectParam[params[0]]
    } else {
      return defaultValue
    }
  }

  if(Array.isArray(objectParam)) {
    const index = Number(params[0])
    return get(objectParam[index], params.slice(1), defaultValue)
  } else {
    return get(objectParam[params[0]], params.slice(1), defaultValue)
  }
}


export default function get1(obj, path, defaultValue) {
  const keys = Array.isArray(path) ? path : path.split('.');

  if (obj == null) return defaultValue;

  if (keys.length === 1) {
    return obj != null && Object.prototype.hasOwnProperty.call(obj, keys[0])
      ? obj[keys[0]]
      : defaultValue;
  }

  const [first, ...rest] = keys;

  return get(
    Array.isArray(obj) ? obj[Number(first)] : obj[first],
    rest,
    defaultValue
  );
}


export default function get2(objectParam, pathParam, defaultValue) {
  // If the path is a `.` seperated string, use split to convert it to an array.
  const path = Array.isArray(pathParam) ? pathParam : pathParam.split('.');

  let index = 0;
  let length = path.length;
  let object = objectParam;

  // Traverse path in the object, stopping early if a value is null/undefined.
  while (object != null && index < length) {
    // We use != null instead of !== null to handle undefined objects too
    // Access next level in the object using string key (handles numeric indices too).
    object = object[String(path[index])];
    index++;
  }

  // Check if the entire path was successfully traversed. If not, the path is invalid.
  const value = index && index === length ? object : undefined;

  // Return the found value, or the default if the value resolved to undefined.
  return value !== undefined ? value : defaultValue;
}