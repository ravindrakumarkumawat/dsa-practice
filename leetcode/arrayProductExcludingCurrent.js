export default function arrayProductExcludingCurrent(numbers) {
  const prefix = [1]
  const suffix = [1]
  const len = numbers.length

  for(let i = 0; i < len; i++) {
    prefix.push(prefix[prefix.length - 1] * numbers[i])
  }

  for(let i = len-1; i >= 0; i--) {
    suffix.unshift(suffix[0] * numbers[i])
  }
  const result = []
  for(let i = 0; i < len; i++) {
    result.push(prefix[i] * suffix[i+1])
  }

  return result
}

// TC: O(n)
// SC: O(n)