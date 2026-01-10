export default function binaryTreeEqual(a, b) {
  if(a === null && b === null) return true

  if(a === null || b === null) {
    return false
  }

  if(a.val !== b.val) return false

  return binaryTreeEqual(a.left, b.left) && binaryTreeEqual(a.right, b.right)
}


// below is incorrect version
// export function binaryTreeEqual(a, b) {
//   if(a === null && b === null) return true

//   if(
//     (a.left && b.left === null) ||
//     (b.left && a.left === null) ||
//     (a.right && b.right === null) ||
//     (b.right && a.right === null)
//   ) {
//     return false
//   }

//   if(a.val !== b.val) return false

//   return binaryTreeEqual(a.left, b.left) || binaryTreeEqual(a.right, b.right)
// }