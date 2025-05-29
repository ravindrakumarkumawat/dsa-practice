class Node {
  constructor(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Build a full binary tree from array (level order)
  static buildFullBinaryTreeFromArray(arr) {
    if (!arr.length) return null;

    let nodes = arr.map(val => (val != null ? new Node(val) : null));
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (node !== null) {
        const leftIdx = 2 * i + 1;
        const rightIdx = 2 * i + 2;
        if (leftIdx < nodes.length) node.leftChild = nodes[leftIdx];
        if (rightIdx < nodes.length) node.rightChild = nodes[rightIdx];
      }
    }
    const tree = new BinaryTree();
    tree.root = nodes[0];
    return tree;
  }

  isFullBinaryTree(node) {
    // If tree is empty
    if (node === null) return true;

    // If it's a leaf node
    if (node.leftChild === null && node.rightChild === null)
      return true;

    // If both children exist, check subtrees
    if (node.leftChild !== null && node.rightChild !== null)
      return (
        this.isFullBinaryTree(node.leftChild) &&
        this.isFullBinaryTree(node.rightChild)
      );

    // If one child is null and the other is not
    return false;
  }
}

// Full binary tree: [1, 2, 3, 4, 5, 6, 7]
const arr = [1, 2, 3, 4, 5, 6, 7];

const tree = BinaryTree.buildFullBinaryTreeFromArray(arr);

if (tree.isFullBinaryTree(tree.root)) {
  console.log("✅ The tree is a full binary tree");
} else {
  console.log("❌ The tree is not a full binary tree");
}

function getMaxDepth(node) {
  if (node === null) return 0;

  const leftDepth = getMaxDepth(node.leftChild);
  const rightDepth = getMaxDepth(node.rightChild);

  return Math.max(leftDepth, rightDepth) + 1;
}

function getTreeHeight(node) {
  if (node === null) return -1; // height of empty tree is -1 (or 0 if you define root level as 1)

  const leftHeight = getTreeHeight(node.leftChild);
  const rightHeight = getTreeHeight(node.rightChild);

  return Math.max(leftHeight, rightHeight) + 1;
}

function isPerfectBinaryTree(node, depth, level = 0) {
  if (node === null) return true;

  // If it's a leaf node, check if it's at the correct depth
  if (node.leftChild === null && node.rightChild === null) {
    return depth === level + 1;
  }

  // If it has one child, it's not perfect
  if (node.leftChild === null || node.rightChild === null) {
    return false;
  }

  // Check both subtrees
  return (
    isPerfectBinaryTree(node.leftChild, depth, level + 1) &&
    isPerfectBinaryTree(node.rightChild, depth, level + 1)
  );
}

function getMaxDepthIterative(root) {
  if (root === null) return 0;

  let depth = 0;
  const queue = [root];

  while (queue.length > 0) {
    let levelSize = queue.length;
    while (levelSize--) {
      const node = queue.shift();
      if (node.leftChild) queue.push(node.leftChild);
      if (node.rightChild) queue.push(node.rightChild);
    }
    depth++;
  }

  return depth;
}