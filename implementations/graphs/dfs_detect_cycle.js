// Adjent List Representation of Graph
function hasCycleDFS(graph, V) {
    const visited = new Array(V).fill(false);

    for (let i = 0; i < V; i++) {
        if (!visited[i]) {
            if (dfsDetectCycle(i, -1, visited, graph)) {
                return true;
            }
        }
    }

    return false;
}

function dfsDetectCycle(node, parent, visited, graph) {
    visited[node] = true;

    for (const neighbor of graph[node]) {
        if (!visited[neighbor]) {
            if (dfsDetectCycle(neighbor, node, visited, graph)) {
                return true;
            }
        } else if (neighbor !== parent) {
            // Visited neighbor and not coming from parent => cycle
            return true;
        }
    }

    return false;
}
