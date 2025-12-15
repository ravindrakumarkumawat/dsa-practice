export default function fill(array, value, start = 0, end = array.length) {
  const len = array.length

  let s = start < 0 ? Math.max(len + start, 0) : Math.min(start, len)
  let e = end < 0 ? Math.max(len + end, 0) : Math.min(end, len)

  while (s < e) {
    array[s] = value
    s++
  }

  return array
}