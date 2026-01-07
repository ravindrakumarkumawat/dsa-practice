export default function binaryTreeFlip(root) {
  if(root === null) return null

  const left = binaryTreeFlip(root.left)
  const right = binaryTreeFlip(root.right)

  root.left = right
  root.right = left
  return root
}