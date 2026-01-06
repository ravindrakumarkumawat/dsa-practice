export default function binaryTreeMaximumDepth(root) {
  if(root === null) return 0

  const left = binaryTreeMaximumDepth(root.left)
  const right = binaryTreeMaximumDepth(root.right)
  return Math.max(left, right) + 1
}

export function binaryTreeMaximumDepthWithLevelTrackFromStart(root) {
  function helper(node, level) {
    if(node === null) return level

    const left = helper(node.left, level + 1)
    const right = helper(node.right, level + 1)
    return Math.max(left, right)
  }

  return helper(root, 0)
}
