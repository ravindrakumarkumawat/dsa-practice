// Tree Node class
class Node {
  constructor(key) {
    this.item = key;
    this.left = null;
    this.right = null;
  }
}

// Binary Tree class
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Postorder traversal (Left, Right, Root)
  postorder(node) {
    if (node === null) return;

    this.postorder(node.left);
    this.postorder(node.right);
    process.stdout.write(`${node.item}->`);
  }

  // Inorder traversal (Left, Root, Right)
  inorder(node) {
    if (node === null) return;

    this.inorder(node.left);
    process.stdout.write(`${node.item}->`);
    this.inorder(node.right);
  }

  // Preorder traversal (Root, Left, Right)
  preorder(node) {
    if (node === null) return;

    process.stdout.write(`${node.item}->`);
    this.preorder(node.left);
    this.preorder(node.right);
  }
}

// Main logic
const tree = new BinaryTree();
tree.root = new Node(1);
tree.root.left = new Node(12);
tree.root.right = new Node(9);
tree.root.left.left = new Node(5);
tree.root.left.right = new Node(6);

console.log("Inorder traversal");
tree.inorder(tree.root); // Expected: 5->12->6->1->9->

console.log("\nPreorder traversal");
tree.preorder(tree.root); // Expected: 1->12->5->6->9->

console.log("\nPostorder traversal");
tree.postorder(tree.root); // Expected: 5->6->12->9->1->
