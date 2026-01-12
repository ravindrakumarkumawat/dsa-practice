export default function binaryTreeSubtree(root, subRoot) {
  if (root === null) return false

  if(isIdentical(root, subRoot)) return true

  return binaryTreeSubtree(root.left, subRoot) || binaryTreeSubtree(root.right, subRoot)
}

function isIdentical(node1, node2) {
  if(node1 === null || node2 === null) {
    return node1 === null && node2 === null
  }

  return node1.val === node2.val &&
    isIdentical(node1.left, node2.left) &&
    isIdentical(node1.right, node2.right)
}

// TC: O(N * M) where N is number of nodes in root and M is number of nodes in subRoot
// SC: O(H) where H is height of root tree