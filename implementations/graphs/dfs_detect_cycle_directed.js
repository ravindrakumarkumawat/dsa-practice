// dfs for detecting cycles in a directed graph
function hasCycle(graph) {
  const visited = new Set();
  const recStack = new Set();

  function dfs(node) {
    if (recStack.has(node)) {
      return true; // Cycle detected
    }
    if (visited.has(node)) {
      return false; // Already visited, no cycle here
    }

    visited.add(node);
    recStack.add(node);

    for (const neighbor of graph[node]) {
      if (dfs(neighbor)) {
        return true; // Cycle found in the recursive call
      }
    }

    recStack.delete(node); // Remove from recursion stack
    return false; // No cycle found
  }

  for (let i = 0; i < graph.length; i++) {
    if (!visited.has(i) && dfs(i)) {
      return true; // Cycle detected in the graph
    }
  }

  return false; // No cycles found in the graph
}