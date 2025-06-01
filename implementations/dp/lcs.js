/**
 * longest common subsequence (LCS) problem
 * Given two sequences, find the length of the longest subsequence present in both of them.
 * A subsequence is a sequence that appears in the same relative order, but not necessarily contiguous.
 * For example, "abc", "abg", "aeg", 'acefg', 'abcde', and 'acefg' are subsequences of "abcdefg".
 * The longest common subsequence problem is a classic problem in computer science and 
 * has applications in various fields such as bioinformatics, text comparison, and version control systems.
 */
function buildDpTable(S1, S2) {
  const dp = Array(S1.length + 1).fill().map(() => Array(S2.length + 1).fill(0));
  for (let i = 1; i <= S1.length; i++) {
    for (let j = 1; j <= S2.length; j++) {
      if (S1[i - 1] === S2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp;
}


function lcs(S1, S2) {
  if (S1.length === 0 || S2.length === 0) return "";
  if (S1 === S2) return S1;

  const dp = buildDpTable(S1, S2);
  if (dp.length === 0 || dp[0].length === 0) return "";

  // Backtrack to get the LCS string
  let i = S1.length, j = S2.length, result = "";
  while (i > 0 && j > 0) {
    if (S1[i - 1] === S2[j - 1]) {
      result = S1[i - 1] + result;
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  return result;
}

// Example
const S1 = "ACADB", S2 = "CBDA";
console.log("LCS:", lcs(S1, S2));
/**
 * Longest Common Subsequence (LCS) using Dynamic Programming
 * This implementation uses a 2D array to store the lengths of the longest common subsequences
 * between prefixes of the two strings.
 * The time complexity is O(m * n), where m and n are the lengths of the two strings.
 */
var longestCommonSubsequence2D = function(S1, S22) {
  if (S1.length === 0 || S2.length === 0) return "";
  if (S1 === S2) return S1;

  const dp = buildDpTable(S1, S2);

  return dp[S1.length][S2.length];
};
console.log("Longest Common Subsequence Length 2D:", longestCommonSubsequence2D(S1, S2));

/**
 * Optimized version of the longest common subsequence problem
 * This version uses a single array to store the lengths of the longest common subsequences
 * instead of a 2D array, reducing space complexity.
 * The time complexity remains O(m * n), where m and n are the lengths of the two strings.
 */
var longestCommonSubsequence = function(text1, text2) {
    const dp = Array(text1.length).fill(0);
    let longest = 0;

    for (const c of text2) {
        let curLength = 0;
        for (let i = 0; i < dp.length; i++) {
            if (curLength < dp[i]) {
                curLength = dp[i];
            } else if (c === text1[i]) {
                dp[i] = curLength + 1;
                longest = Math.max(longest, curLength + 1);
            }
        }
    }

    return longest;    
};

console.log("Longest Common Subsequence Length:", longestCommonSubsequence(S1, S2));
export { lcs, longestCommonSubsequence };