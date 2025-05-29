class Node {
  constructor(item) {
    this.item = item;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}
/**
 * AVL Tree Implementation
 * AVL Tree is a self-balancing binary search tree where the difference between heights of left and right subtrees cannot be more than one for all nodes.
 * It is named after its inventors Adelson-Velsky and Landis.
 * AVL Tree maintains the balance by performing rotations during insertion and deletion operations.
 */
class AVLTree {
  constructor() {
    this.root = null;
  }

  height(node) {
    return node ? node.height : 0;
  }

  getBalanceFactor(node) {
    return node ? this.height(node.left) - this.height(node.right) : 0;
  }

  max(a, b) {
    return a > b ? a : b;
  }

  rightRotate(y) {
    const x = y.left;
    const T2 = x.right;

    x.right = y;
    y.left = T2;

    y.height = this.max(this.height(y.left), this.height(y.right)) + 1;
    x.height = this.max(this.height(x.left), this.height(x.right)) + 1;

    return x;
  }

  leftRotate(x) {
    const y = x.right;
    const T2 = y.left;

    y.left = x;
    x.right = T2;

    x.height = this.max(this.height(x.left), this.height(x.right)) + 1;
    y.height = this.max(this.height(y.left), this.height(y.right)) + 1;

    return y;
  }

  insertNode(node, item) {
    if (!node) return new Node(item);

    if (item < node.item) node.left = this.insertNode(node.left, item);
    else if (item > node.item) node.right = this.insertNode(node.right, item);
    else return node; // Duplicates not allowed

    node.height = 1 + this.max(this.height(node.left), this.height(node.right));

    const balance = this.getBalanceFactor(node);

    // Left Left Case
    if (balance > 1 && item < node.left.item) return this.rightRotate(node);

    // Right Right Case
    if (balance < -1 && item > node.right.item) return this.leftRotate(node);

    // Left Right Case
    if (balance > 1 && item > node.left.item) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // Right Left Case
    if (balance < -1 && item < node.right.item) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    return node;
  }

  minValueNode(node) {
    let current = node;
    while (current.left) current = current.left;
    return current;
  }

  deleteNode(root, item) {
    if (!root) return root;

    if (item < root.item) {
      root.left = this.deleteNode(root.left, item);
    } else if (item > root.item) {
      root.right = this.deleteNode(root.right, item);
    } else {
      if (!root.left || !root.right) {
        root = root.left || root.right;
      } else {
        const temp = this.minValueNode(root.right);
        root.item = temp.item;
        root.right = this.deleteNode(root.right, temp.item);
      }
    }

    if (!root) return root;

    root.height = 1 + this.max(this.height(root.left), this.height(root.right));
    const balance = this.getBalanceFactor(root);

    // Left Left
    if (balance > 1 && this.getBalanceFactor(root.left) >= 0) return this.rightRotate(root);

    // Left Right
    if (balance > 1 && this.getBalanceFactor(root.left) < 0) {
      root.left = this.leftRotate(root.left);
      return this.rightRotate(root);
    }

    // Right Right
    if (balance < -1 && this.getBalanceFactor(root.right) <= 0) return this.leftRotate(root);

    // Right Left
    if (balance < -1 && this.getBalanceFactor(root.right) > 0) {
      root.right = this.rightRotate(root.right);
      return this.leftRotate(root);
    }

    return root;
  }

  preOrder(node) {
    if (node) {
      process.stdout.write(node.item + " ");
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  printTree(node, indent = "", isLast = true) {
    if (node) {
      process.stdout.write(indent);
      process.stdout.write(isLast ? "R----" : "L----");
      console.log(node.item);

      indent += isLast ? "     " : "|    ";
      this.printTree(node.left, indent, false);
      this.printTree(node.right, indent, true);
    }
  }
}

// Driver Code
const tree = new AVLTree();
tree.root = tree.insertNode(tree.root, 33);
tree.root = tree.insertNode(tree.root, 13);
tree.root = tree.insertNode(tree.root, 53);
tree.root = tree.insertNode(tree.root, 9);
tree.root = tree.insertNode(tree.root, 21);
tree.root = tree.insertNode(tree.root, 61);
tree.root = tree.insertNode(tree.root, 8);
tree.root = tree.insertNode(tree.root, 11);

console.log("Before Deletion:");
tree.printTree(tree.root);

tree.root = tree.deleteNode(tree.root, 13);
console.log("\nAfter Deletion:");
tree.printTree(tree.root);

/**
 * AVL Tree Applications
 * For indexing large records in databases
 * For searching in large databases
 * */

// Complexities of Different Operations on an AVL Tree
// Insertion	Deletion	Search
// O(log n)	  O(log n)	O(log n)