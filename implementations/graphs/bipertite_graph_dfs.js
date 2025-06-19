// dfs bipertite graph implementation
function isBipartite(graph) {
    const visited = new Set();
    const colors = new Map();

    function dfs(node, color) {
        if (visited.has(node)) {
            return colors.get(node) === color;
        }

        visited.add(node);
        colors.set(node, color);

        for (const neighbor of graph[node]) {
            if (!dfs(neighbor, 1 - color)) {
                return false; // Found a conflict in coloring
            }
        }
        return true;
    }

    for (let i = 0; i < graph.length; i++) {
        if (!visited.has(i) && !dfs(i, 0)) {
            return false; // Graph is not bipartite
        }
    }

    return true; // No conflicts found, graph is bipartite
}