// bfs bipertite graph
function isBipartite(graph) {
    const visited = new Set();
    const queue = [];
    const colors = new Map();

    for (let i = 0; i < graph.length; i++) {
      if (!visited.has(i)) {
        queue.push(i);
        colors.set(i, 0); // Start coloring with color 0

        while (queue.length > 0) {
          const node = queue.shift();
          visited.add(node);
          const currentColor = colors.get(node);

          for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
              colors.set(neighbor, 1 - currentColor); // Alternate color
              queue.push(neighbor);
            } else if (colors.get(neighbor) === currentColor) {
              return false; // Found a conflict in coloring
            }
          }
        }
      }
    }

    return true; // No conflicts found, graph is bipartite
    
  }