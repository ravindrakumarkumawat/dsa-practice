/**
 * Rabin-Karp Algorithm for String Matching
 * This algorithm uses hashing to find any one of a set of pattern strings in a text.
 * It is particularly efficient for multiple pattern searches.
 * The time complexity is O(n + m) on average, where n is the length of the text and m is the length of the pattern.
 * The space complexity is O(1) for the hash values.
 * Rabin-Karp Algorithm Applications
  * For pattern matching
  * For searching string in a bigger text
 * @param {*} pattern 
 * @param {*} text 
 * @param {*} q 
 */

function rabinKarp(pattern, text, q) {
  const d = 10; // Base
  const m = pattern.length;
  const n = text.length;
  let pHash = 0; // Hash for pattern
  let tHash = 0; // Hash for text window
  let h = 1;

  // Compute the highest power of d used in hashing (d^(m-1) % q)
  for (let i = 0; i < m - 1; i++) {
    h = (h * d) % q;
  }

  // Initial hash for pattern and first window of text
  for (let i = 0; i < m; i++) {
    pHash = (d * pHash + pattern.charCodeAt(i)) % q;
    tHash = (d * tHash + text.charCodeAt(i)) % q;
  }

  // Slide over the text
  for (let i = 0; i <= n - m; i++) {
    // If hash matches, check character by character
    if (pHash === tHash) {
      if (text.slice(i, i + m) === pattern) {
        console.log("Pattern found at position:", i + 1);
      }
    }

    // Calculate hash for next window
    if (i < n - m) {
      tHash = (d * (tHash - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % q;
      if (tHash < 0) tHash += q;
    }
  }
}

// Example usage
rabinKarp("CDD", "ABCCDDAEFG", 13);
