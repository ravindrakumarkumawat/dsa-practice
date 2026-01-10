export default function bitReversal(n) {
  let reversed = 0

  for(let i = 0; i < 32; i++) {
    const leastSignificantBit = n & 1

    reversed = (reversed << 1) | leastSignificantBit

    n >>= 1
  }

  return reversed >>> 0
}
// TC: O(1)
// SC: O(1)

// Input: n = 3
// Output: 3221225472
// Explanation: 3 in binary is 00000000000000000000000000000011. After reversing its bits, it becomes 11000000000000000000000000000000, which is 3221225472 in decimal.