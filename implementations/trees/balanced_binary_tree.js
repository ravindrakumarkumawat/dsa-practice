class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Class to check if a binary tree is height-balanced. (Balanced Binary Tree)
 * A height-balanced binary tree is defined as a tree where the height of the two subtrees of any node
 * never differs by more than one.
 * This means that for every node, the difference in height between its left and right subtrees is at most 1.
 * @class BinaryTree
 */

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Function to check if the tree is height-balanced
  isBalanced(root) {
    const check = (node) => {
      if (!node) return { isBalanced: true, height: 0 };

      const left = check(node.left);
      const right = check(node.right);

      const height = Math.max(left.height, right.height) + 1;
      const balanced =
        left.isBalanced &&
        right.isBalanced &&
        Math.abs(left.height - right.height) <= 1;

      return { isBalanced: balanced, height: height };
    };

    return check(root).isBalanced;
  }

  // Utility to build binary tree from array (null means missing node)
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

// Example usage:
const arr = [1, 2, 3, 4, 5]; // Balanced binary tree
const tree = new BinaryTree();
tree.root = BinaryTree.buildFromArray(arr);

if (tree.isBalanced(tree.root)) {
  console.log("The tree is balanced");
} else {
  console.log("The tree is not balanced");
}

/**
 * Balanced Binary Tree Applications
 * AVL tree
 * Balanced Binary Search Tree
 */