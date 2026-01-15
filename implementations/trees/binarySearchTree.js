class Node {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree {
  constructor() {
    this.root = null
  }

  /**
   * Inserts a new value into the BST while maintaining BST properties.
   * @param {*} value The value to be inserted into the BST.
   */
  insert(value) {
    const newNode = new Node(value)

    if(this.root === null) {
      this.root = newNode
      return;
    }

    let currentNode = this.root;
    let parent = null

    while(currentNode) {
      parent = currentNode

      if(value < currentNode.value) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }
    if(value < parent.value) {
      parent.left = newNode
    } else {
      parent.right = newNode
    }
  }

  /**
   * Searches for a value in the BST. Returns true if the value exists, false otherwise.
   * @param {*} value The value to search for.
   * @return {boolean} True if the value is found, false otherwise.
   */
  search(value) {
    let currentNode = this.root;

    while(currentNode) {
      if(value === currentNode.value) return true
      currentNode = value < currentNode.value ? currentNode.left : currentNode.right
    }

    return false
  }

  /**
   * Deletes a value from the BST, if it exists, while maintaining BST properties.
   * @param {*} value The value to be deleted from the BST.
   */
  delete(value) {
    let currentNode = this.root;
    let parent = null;

    while(currentNode && currentNode.value !== value) {
      parent = currentNode

      if(value < currentNode.value) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }

    if(!currentNode) return

    if(currentNode.left && currentNode.right) {
      let successor = currentNode.right
      let successorParent = currentNode

      while(successor.left) {
        successorParent = successor
        successor = successor.left
      }

      currentNode.value = successor.value
      currentNode = successor
      parent = successorParent
    }

    let child = currentNode.left ? currentNode.left : currentNode.right

    if(!parent) {
      this.root = child
    } else {
      if(parent.left === currentNode) {
        parent.left = child
      } else {
        parent.right = child
      }
    }
  }
}

const bst = new BST();
bst.insert(15);
bst.insert(10);
bst.insert(20);
bst.search(10); // true
bst.delete(10);
bst.search(10); // false

// TC: O(h) where h is the height of the tree
// SC: O(1)