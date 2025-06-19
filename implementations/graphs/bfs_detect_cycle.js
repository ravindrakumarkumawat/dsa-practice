// Adjent List Representation of Graph
function hasCycleBFS(graph, V) {
    const visited = new Array(V).fill(false);

    for (let i = 0; i < V; i++) {
        if (!visited[i]) {
            if (bfsDetectCycle(i, visited, graph)) {
                return true;
            }
        }
    }

    return false;
}

function bfsDetectCycle(start, visited, graph) {
    const queue = [];
    queue.push([start, -1]); // [currentNode, parent]
    visited[start] = true;

    while (queue.length > 0) {
        const [node, parent] = queue.shift();

        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push([neighbor, node]);
            } else if (neighbor !== parent) {
                // Visited neighbor that's not the parent → cycle found
                return true;
            }
        }
    }

    return false;
}

const V = 5;
const graph = [
    [1, 4],    // 0
    [0, 2],    // 1
    [1, 3],    // 2
    [2, 4],    // 3
    [0, 3]     // 4
];

console.log(hasCycleBFS(graph, V)); // true (cycle exists)
