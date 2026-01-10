interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export default function binaryTreeEqual(
  a: TreeNode | null,
  b: TreeNode | null,
): boolean {
  if (a == null && b == null) {
    return true;
  }

  if (b == null || a == null) {
    return false;
  }

  if (a.val != b.val) {
    return false;
  }

  return binaryTreeEqual(a.right, b.right) && binaryTreeEqual(a.left, b.left);
}

export function binaryTreeEqualQueue(
  a: TreeNode | null,
  b: TreeNode | null,
): boolean {
  function check(a: TreeNode | null, b: TreeNode | null) {
    if (a === null && b === null) {
      return true;
    }
    if (a === null || b === null) {
      return false;
    }
    if (a.val !== b.val) {
      return false;
    }
    return true;
  }

  const queue: [TreeNode | null, TreeNode | null][] = [[a, b]];

  while (queue.length) {
    [a, b] = queue.shift() as [TreeNode | null, TreeNode | null];

    if (!check(a, b)) {
      return false;
    }

    if (a) {
      queue.push([a.left, b?.left] as [TreeNode | null, TreeNode | null]);
      queue.push([a.right, b?.right] as [TreeNode | null, TreeNode | null]);
    }
  }

  return true;
}
