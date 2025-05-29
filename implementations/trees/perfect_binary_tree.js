class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

/**
 * Class to check if a binary tree is perfect.
 * A perfect binary tree is a type of binary tree in which every internal node has exactly two children
 * and all leaf nodes are at the same level.
 * A perfect binary tree has a specific structure where the number of nodes at each level doubles as you go down the tree.
 * For example, a perfect binary tree of height h has 2^h - 1 nodes.
 * @class PerfectBinaryTree
 * @static
 */
class PerfectBinaryTree {
  // Calculate the depth (height) of the tree
  static depth(node) {
    if (node === null) return 0;

    const leftDepth = this.depth(node.left);
    const rightDepth = this.depth(node.right);

    return Math.max(leftDepth, rightDepth) + 1;
  }

  // Recursively check if tree is perfect
  static isPerfectHelper(root, d, level = 0) {
    if (root === null) return true;

    if (root.left === null && root.right === null) {
      return d === level + 1;
    }

    if (root.left === null || root.right === null) return false;

    return (
      this.isPerfectHelper(root.left, d, level + 1) &&
      this.isPerfectHelper(root.right, d, level + 1)
    );
  }

  // Wrapper function
  static isPerfect(root) {
    const d = this.depth(root);
    return this.isPerfectHelper(root, d);
  }

  // Utility: create a perfect binary tree from array
  static buildFromArray(arr) {
    if (!arr.length) return null;

    const nodes = arr.map((val) => (val !== null ? new Node(val) : null));

    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i] !== null) {
        const leftIdx = 2 * i + 1;
        const rightIdx = 2 * i + 2;

        if (leftIdx < nodes.length) nodes[i].left = nodes[leftIdx];
        if (rightIdx < nodes.length) nodes[i].right = nodes[rightIdx];
      }
    }

    return nodes[0];
  }
}

// Example usage
const arr = [1, 2, 3, 4, 5, 6, 7]; // perfect binary tree
const root = PerfectBinaryTree.buildFromArray(arr);

if (PerfectBinaryTree.isPerfect(root)) {
  console.log("The tree is a perfect binary tree");
} else {
  console.log("The tree is not a perfect binary tree");
}
