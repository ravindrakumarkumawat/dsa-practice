export default function isBalancedBrackets(str) {
  const stk = []
  const bracketsMapping = { 
    ')': '(', 
    '}': '{', 
    ']': '['
  }
  for(let i = 0; i < str.length; i++) {
    if(!bracketsMapping.hasOwnProperty(str.charAt(i))) {
      stk.push(str.charAt(i))
    } else {
      const last = stk.pop()
      if(last !== bracketsMapping[str.charAt(i)]) return false
    }
  }

  return stk.length === 0
}

// Input: str = "([)]"
// Output: false