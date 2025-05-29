class Node {
  constructor(value) {
    this.item = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Completes a binary tree from an array using level order insertion. (Complete Binary Tree)
 * This function takes an array representing a binary tree in level order and constructs the tree.
 * It uses a recursive approach to insert nodes into the tree based on their indices in the array.
 * The array should represent a complete binary tree, where null values can be used to indicate missing nodes.
 * @param {number[]} arr - The array representing the binary tree in level order.
 * @param {number} i - The index of the current element in the array.
 * @returns {Node|null} - The root node of the binary tree or null if the index is out of bounds.
 */
function insertLevelOrder(arr, i) {
  if (i >= arr.length || arr[i] == null) return null;

  const node = new Node(arr[i]);
  node.left = insertLevelOrder(arr, 2 * i + 1);
  node.right = insertLevelOrder(arr, 2 * i + 2);

  return node;
}

function buildCompleteBinaryTree(arr, i = 0) {
  if (i >= arr.length || arr[i] == null) return null;

  const node = new Node(arr[i]);
  node.left = buildCompleteBinaryTree(arr, 2 * i + 1);
  node.right = buildCompleteBinaryTree(arr, 2 * i + 2);
  return node;
}

// Usage
const arr = [1, 2, 3, 4, 5, 6]; // Sorted in level order
const root = insertLevelOrder(arr, 0);

// Optional: Inorder Traversal
function inorder(node) {
  if (node == null) return;
  inorder(node.left);
  process.stdout.write(`${node.item}->`);
  inorder(node.right);
}

console.log("Inorder traversal:");
inorder(root); // Output: 4->2->5->1->6->3->


/**
 * Binary Search Tree (BST) implementation with insertion and inorder traversal.
 * This class allows you to create a binary search tree, insert values into it,
 * and perform an inorder traversal to display the values in sorted order.
 * The BST maintains the property that for any given node, all values in the left subtree
 * are less than the node's value, and all values in the right subtree are greater.
 * @class BST
 * @property {Node|null} root - The root node of the binary search tree.
 * @method insert(value) - Inserts a new value into the BST.
 * @method _insertRec(node, value) - Helper method for recursive insertion.
 * @method inorder(node) - Performs an inorder traversal of the BST and prints the values.
 */
class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this._insertRec(this.root, value);
  }

  _insertRec(node, value) {
    if (node === null) return new Node(value);
    if (value < node.item) node.left = this._insertRec(node.left, value);
    else node.right = this._insertRec(node.right, value);
    return node;
  }

  inorder(node) {
    if (node === null) return;
    this.inorder(node.left);
    process.stdout.write(`${node.item}->`);
    this.inorder(node.right);
  }
}

function buildBSTFromArray(arr) {
  const tree = new BST();
  arr.forEach(val => {
    if (val != null) tree.insert(val);
  });
  return tree.root;
}

// Usage
const arr1 = [5, 2, 8, 1, 3, 7, 9];
const tree = new BST();
arr1.forEach(num => tree.insert(num));

console.log("Inorder traversal of BST:");
tree.inorder(tree.root); // Output: 1->2->3->5->7->8->9->

/**
 * Builds a balanced binary search tree (BST) from a sorted array.
 * This function takes a sorted array and constructs a balanced BST by recursively
 * selecting the middle element as the root, and then recursively building the left
 * and right subtrees from the left and right halves of the array.
 * @param {number[]} arr - The sorted array from which to build the BST.
 * @param {number} start - The starting index of the current subarray.
 * @param {number} end - The ending index of the current subarray.
 * @returns {Node|null} - The root node of the balanced BST or null if the subarray is empty.
 */
function buildBalancedBST(arr, start = 0, end = arr.length - 1) {
  if (start > end) return null;

  const mid = Math.floor((start + end) / 2);
  const node = new Node(arr[mid]);

  node.left = buildBalancedBST(arr, start, mid - 1);
  node.right = buildBalancedBST(arr, mid + 1, end);

  return node;
}


// Tree Traversal Functions
// These functions perform different types of tree traversal: inorder, preorder, and postorder.
// Inorder: Left, Root, Right
// Preorder: Root, Left, Right
// Postorder: Left, Right, Root
// These functions take a node as input and print the items in the specified order.

function inorder(node) {
  if (!node) return;
  inorder(node.left);
  process.stdout.write(node.item + '->');
  inorder(node.right);
}

function preorder(node) {
  if (!node) return;
  process.stdout.write(node.item + '->');
  preorder(node.left);
  preorder(node.right);
}

function postorder(node) {
  if (!node) return;
  postorder(node.left);
  postorder(node.right);
  process.stdout.write(node.item + '->');
}

/**
 * To check if a binary tree is a perfect binary tree.
 * A perfect binary tree is a type of binary tree in which every internal node has exactly two children
 * and all leaf nodes are at the same level.
 * A perfect binary tree is also a complete binary tree, but not all complete binary trees are perfect.
 * A perfect binary tree has a specific structure where the number of nodes at each level doubles as you go down the tree.
 * For example, a perfect binary tree of height h has 2^h - 1 nodes.
 * @param {*} root 
 * @returns 
 */
function isPerfectBinaryTree(root) {
  function getDepth(node) {
    let d = 0;
    while (node) {
      d++;
      node = node.leftChild;
    }
    return d;
  }

  function check(node, depth, level = 0) {
    if (!node) return true;

    if (!node.leftChild && !node.rightChild) {
      return depth === level + 1;
    }

    if (!node.leftChild || !node.rightChild) return false;

    return (
      check(node.leftChild, depth, level + 1) &&
      check(node.rightChild, depth, level + 1)
    );
  }

  const depth = getDepth(root);
  return check(root, depth);
}

/**
 * To check if a binary tree is a complete binary tree.
 * A complete binary tree is a type of binary tree in which every level, except possibly the last,
 * is completely filled, and all nodes are as far left as possible.
 * This means that all nodes at a given level are filled before any nodes at the next level are added.
 * A complete binary tree can be represented as an array where for any node at index i,
 * its left child is at index 2*i + 1 and its right child is at index 2*i + 2.
 * @param {Node} root - The root node of the binary tree.
 * @returns {boolean} - Returns true if the binary tree is complete, false otherwise.
 */
function isCompleteBinaryTree(root) {
  if (!root) return true;

  const queue = [root];
  let end = false;

  while (queue.length > 0) {
    const node = queue.shift();

    if (node.leftChild) {
      if (end) return false;
      queue.push(node.leftChild);
    } else {
      end = true;
    }

    if (node.rightChild) {
      if (end) return false;
      queue.push(node.rightChild);
    } else {
      end = true;
    }
  }

  return true;
}
/**
 * Balanced Binary Tree Check
 * This function checks if a binary tree is balanced.
 * A balanced binary tree is defined as a tree where the height of the two subtrees of any node never differs by more than one.
 * The function uses a recursive helper function to calculate the height of each subtree and check the balance condition.
 * @param {*} root 
 * @returns 
 */
function isBalancedBinaryTree(root) {
  function check(node) {
    if (!node) return { height: 0, balanced: true };

    const left = check(node.leftChild);
    const right = check(node.rightChild);

    const height = Math.max(left.height, right.height) + 1;
    const balanced =
      left.balanced &&
      right.balanced &&
      Math.abs(left.height - right.height) <= 1;

    return { height, balanced };
  }

  return check(root).balanced;
}
