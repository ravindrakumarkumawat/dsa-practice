export default function fill<T>(
  array: Array<T>, 
  value: any, 
  start: number = 0, 
  end: number = array.length
): Array<T> {
  const len = array.length

  let s = start < 0 ? Math.max(len + start, 0) : Math.min(start, len)
  let e = end < 0 ? Math.max(len + end, 0) : Math.min(end, len)

  while (s < e) {
    array[s] = value
    s++
  }

  return array
}

export const filll = <T>(array: T[], value: T, start: number = 0, end: number = array.length): T[] => {
  return array
}