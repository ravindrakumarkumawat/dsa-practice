// https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/description/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
//DFS approach to count components in an undirected graph
function countComponentsDFS(n, edges) {
    if (n === 0) return 0; // No nodes means no components
    if (edges.length === 0) return n; // No edges means each node is its own component

    const graph = Array.from({ length: n }, () => []);
    
    for (const [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
    }

    const visited = new Set();

    const dfs = (node) => {
        visited.add(node);
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                dfs(neighbor);
            }
        }
    };
    
    let componentCount = 0;
    for (let i = 0; i < n; i++) {
        if (!visited.has(i)) {
            dfs(i);
            componentCount++;
        }
    }

    return componentCount;
}

// union-find approach to count components in an undirected graph
var countComponents = function(n, edges) {
    if (n === 0) return 0; // No nodes means no components
    if (edges.length === 0) return n; // No edges means each node is its own component

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
        union(u, v);
    }

    // Count unique roots to determine number of components
    const uniqueRoots = new Set();
    for (let i = 0; i < n; i++) {
        uniqueRoots.add(find(i));
    }

    return uniqueRoots.size;
}
