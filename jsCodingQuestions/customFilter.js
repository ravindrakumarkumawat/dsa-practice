elArray.prototype.myFilter = function (cb, args) {
  const filtered = []
  
  for(let i = 0; i < this.length; i++) {
    if (this[i] !== undefined) {
      if(cb.call(args, this[i], i, this)) {
        filtered.push(this[i])
      }
    }
  }
  
  return filtered
}

const arr =  [1,2,,4]
const fil = arr.myFilter((value) => value % 2 == 0);
console.log(fil)

Array.prototype.customFilter = function (cb, args) {
  const filtered = []
  const arr = Object(this) // Convert to object, to handle cases like null or undefined
  const len = arr.length >>> 0
  
  for(let i = 0; i < len; i++) {
    if (i in arr) {
      const element = arr[i]
      if(cb.call(args, element, i, arr)) {
        filtered.push(element)
      }
    }
  }
  
  return filtered
}

const arra =  [1,2,,4]
const filt = arra.customFilter((value) => value % 2 == 0);
console.log(filt)