// Breadth-First Search (BFS) / Level Order Traversal
function levelOrderTraversal(root) {
  if (!root) return;

  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    process.stdout.write(node.item + " ");
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}

// Depth-First Search (DFS) - Preorder
function dfsPreOrder(root) {
  if (!root) return;
  process.stdout.write(root.item + " ");
  dfsPreOrder(root.left);
  dfsPreOrder(root.right);
}

// DFS - Inorder
function dfsInOrder(root) {
  if (!root) return;
  dfsInOrder(root.left);
  process.stdout.write(root.item + " ");
  dfsInOrder(root.right);
}

// DFS - Postorder
function dfsPostOrder(root) {
  if (!root) return;
  dfsPostOrder(root.left);
  dfsPostOrder(root.right);
  process.stdout.write(root.item + " ");
}

// Left View of Binary Tree
function leftView(root) {
  if (!root) return;

  const queue = [[root, 0]];
  const levelMap = new Map();

  while (queue.length > 0) {
    const [node, level] = queue.shift();

    if (!levelMap.has(level)) {
      process.stdout.write(node.item + " ");
      levelMap.set(level, true);
    }

    if (node.left) queue.push([node.left, level + 1]);
    if (node.right) queue.push([node.right, level + 1]);
  }
}

// Right View of Binary Tree
function rightView(root) {
  if (!root) return;

  const queue = [[root, 0]];
  const levelMap = new Map();

  while (queue.length > 0) {
    const [node, level] = queue.shift();

    // overwrite to keep last node at that level
    levelMap.set(level, node.item);

    if (node.left) queue.push([node.left, level + 1]);
    if (node.right) queue.push([node.right, level + 1]);
  }

  for (let level = 0; level < levelMap.size; level++) {
    process.stdout.write(levelMap.get(level) + " ");
  }
}
