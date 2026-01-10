export default function bitCounting(n) {
  const result = []
  
  for(let i = 0; i <= n; i++) {
    let count = 0
    let num = i

    while(num > 0) {
      count += (num & 1)
      num >>>= 1
    }

    result.push(count)
  }

  return result
}