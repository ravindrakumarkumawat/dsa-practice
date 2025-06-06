// https://leetcode.com/problems/graph-valid-tree/description/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    if (edges.length !== n - 1) return false; // A valid tree must have exactly n-1 edges

    const parent = Array(n).fill(-1);

    const find = (x) => {
        if (parent[x] === -1) return x;
        return find(parent[x]);
    };

    const union = (x, y) => {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX === rootY) return false; // Cycle detected
        parent[rootX] = rootY; // Union the sets
        return true;
    };

    for (const [u, v] of edges) {
        if (!union(u, v)) return false; // If union fails, it means a cycle exists
    }

    return true; // If no cycles and correct number of edges, it's a valid tree
}


// https://leetcode.com/problems/graph-valid-tree/description/
// DFS approach to check if a graph is a valid tree
function validTree(n, edges) {
  if (edges.length !== n - 1) return false;

  const graph = Array.from({ length: n }, () => []);

  for (const [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = new Set();

  const dfs = (node, parent) => {
    if (visited.has(node)) return false;
    visited.add(node);

    for (const neighbor of graph[node]) {
      if (neighbor === parent) continue;
      if (!dfs(neighbor, node)) return false;
    }

    return true;
  };

  return dfs(0, -1) && visited.size === n;
}
