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
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Insert a key
  insert(key) {
    this.root = this._insertNode(this.root, key);
  }

  _insertNode(node, key) {
    if (node === null) return new Node(key);

    if (key < node.key) {
      node.left = this._insertNode(node.left, key);
    } else if (key > node.key) {
      node.right = this._insertNode(node.right, key);
    }

    return node;
  }

  // Inorder traversal
  inorder() {
    this._inorderRec(this.root);
    console.log();
  }

  _inorderRec(node) {
    if (node !== null) {
      this._inorderRec(node.left);
      process.stdout.write(node.key + ' -> ');
      this._inorderRec(node.right);
    }
  }

  // Delete a key
  delete(key) {
    this.root = this._deleteNode(this.root, key);
  }

  _deleteNode(node, key) {
    if (node === null) return node;

    if (key < node.key) {
      node.left = this._deleteNode(node.left, key);
    } else if (key > node.key) {
      node.right = this._deleteNode(node.right, key);
    } else {
      // Node with one child or no child
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      // Node with two children: get inorder successor
      node.key = this._minValue(node.right);
      node.right = this._deleteNode(node.right, node.key);
    }

    return node;
  }

  _minValue(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current.key;
  }
}

// Example usage
const bst = new BinarySearchTree();

bst.insert(8);
bst.insert(3);
bst.insert(1);
bst.insert(6);
bst.insert(7);
bst.insert(10);
bst.insert(14);
bst.insert(4);

console.log("Inorder traversal:");
bst.inorder();

console.log("\nAfter deleting 10:");
bst.delete(10);
bst.inorder();

// Binary Search Tree Applications
// In multilevel indexing in the database
// For dynamic sorting
// For managing virtual memory areas in Unix kernel

// Binary Search Tree Complexities
// Time Complexity
// Operation	Best Case Complexity	Average Case Complexity	Worst Case Complexity
// Search	    O(log n)	            O(log n)	              O(n)
// Insertion	O(log n)	            O(log n)	              O(n)
// Deletion	  O(log n)	            O(log n)	              O(n)