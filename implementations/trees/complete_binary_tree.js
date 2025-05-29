class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
/**
 * Class to check if a binary tree is complete.
 * A complete binary tree is a type of binary tree in which every level, except possibly the last,
 * is completely filled, and all nodes are as far left as possible.
 * This means that all nodes at a given level are filled before any nodes at the next level are added.
 * A complete binary tree can be represented as an array where for any node at index i,
 * its left child is at index 2*i + 1 and its right child is at index 2*i + 2.
 * @class BinaryTree
 */
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Count the number of nodes in the tree
  countNodes(node) {
    if (node === null) return 0;
    return 1 + this.countNodes(node.left) + this.countNodes(node.right);
  }

  // Check if the tree is a complete binary tree
  isComplete(node, index, totalNodes) {
    if (node === null) return true;

    if (index >= totalNodes) return false;

    return (
      this.isComplete(node.left, 2 * index + 1, totalNodes) &&
      this.isComplete(node.right, 2 * index + 2, totalNodes)
    );
  }

  // Utility to build binary tree from array
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
const arr = [1, 2, 3, 4, 5, 6]; // this is a complete binary tree
const tree = new BinaryTree();
tree.root = BinaryTree.buildFromArray(arr);

const totalNodes = tree.countNodes(tree.root);
const isComplete = tree.isComplete(tree.root, 0, totalNodes);

if (isComplete) {
  console.log("The tree is a complete binary tree");
} else {
  console.log("The tree is not a complete binary tree");
}

/**
 * Complete Binary Tree Applications
 * Heap-based data structures
 * Heap sort
 */