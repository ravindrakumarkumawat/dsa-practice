export default function bitCounting(n: number): number[] {
  const ans: number[] = [];

  for (let i = 0; i <= n; i++) {
    let count = 0;
    let num = i;

    while (num > 0) {
      count += num & 1;
      num >>= 1;
    }

    ans.push(count);
  }

  return ans;
}
// TC: O(nk) where n is the input number and k is the number of bits in the number
// SC: O(n) for the output array

// Example usage:
// Input: n = 5
// Output: [0, 1, 1, 2, 1, 2]

// DP approach with the most significant bit
export function bitCountingDpMSB(n: number): number[] {
  const ans: number[] = new Array(n + 1).fill(0);
  let x = 0;
  let b = 1;

  while (b <= n) {
    while (x < b && x + b <= n) {
      ans[x + b] = ans[x] + 1;
      ++x;
    }
    x = 0;
    b <<= 1;
  }

  return ans;
}

// TC: O(n)
// SC: O(n)

// DP approach with the least significant bit
export function bitCountingDpLSB(n: number): number[] {
  const ans: number[] = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    ans[i] = ans[i >> 1] + (i & 1);
  }

  return ans;
}

// TC: O(n)
// SC: O(n)

// Example usage:
// Input: n = 5
// Output: [0, 1, 1, 2, 1, 2]

export function bitCountingLSBDp(n: number): number[] {
  const counts: number[] = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    const leastSignificantBit = i & 1;
    counts[i] = counts[Math.floor(i / 2)] + leastSignificantBit;
    console.log(`i: ${i}, leastSignificantBit: ${leastSignificantBit}, counts[${i}]: ${counts[i]}`);
  }

  return counts;
}

