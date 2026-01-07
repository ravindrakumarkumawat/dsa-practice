interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export default function binaryTreeFlip(root: TreeNode | null): TreeNode | null {
  // Base case: if the node is null, return null
  if (root === null) {
    return null;
  }

  // Recursively invert the left and right subtrees
  const right: TreeNode | null = binaryTreeFlip(root.right);
  const left: TreeNode | null = binaryTreeFlip(root.left);

  // Swap the left and right children of the current node
  root.left = right;
  root.right = left;

  // Return the root of the inverted tree
  return root;
}

export function binaryTreeFlipWithStack(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }

  // Initialize a stack with the root node
  let stack: (TreeNode | null)[] = [];
  stack.push(root);

  // Iterate while there are nodes in the stack
  while (stack.length !== 0) {
    // Pop a node from the stack
    let node = stack.pop() as TreeNode;

    // Swap the left and right children of the current node
    let temp = node.left;
    node.left = node.right;
    node.right = temp;

    // If the left child is not null, push it onto the stack
    if (node.left !== null) {
      stack.push(node.left);
    }

    // If the right child is not null, push it onto the stack
    if (node.right !== null) {
      stack.push(node.right);
    }
  }

  // Return the root of the inverted tree
  return root;
}

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export function binaryTreeFlipQueue(root: TreeNode | null): TreeNode | null {
  // Base case: if the root is null, return null
  if (root === null) {
    return null;
  }

  // Initialize a queue and add the root node
  const queue: (TreeNode | null)[] = [];
  queue.push(root);

  // Iterate while there are nodes in the queue
  while (queue.length > 0) {
    // Dequeue the current node
    const current = queue.shift();

    if (current !== undefined && current !== null) {
      // Swap the left and right children
      const temp = current.left;
      current.left = current.right;
      current.right = temp;

      // If the left child exists, add it to the queue
      if (current.left !== null) {
        queue.push(current.left);
      }

      // If the right child exists, add it to the queue
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
  }

  // Return the root of the inverted tree
  return root;
}
