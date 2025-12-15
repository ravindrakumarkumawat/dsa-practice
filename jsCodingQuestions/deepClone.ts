// export default function deepClone(value: any): any {
//   return JSON.parse(JSON.stringify(value));
// }

export default function deepClone<T>(value: T): T {
  if (typeof value !== 'object' || value === null) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(deepClone) as T;
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, value]) => [key, deepClone(value)])
  ) as T;
}