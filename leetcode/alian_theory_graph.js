//
// https://leetcode.com/problems/alien-dictionary/description/

/**dfs
 * Sol 1
 * @param {string[]} words
 * Time complexity: O(N+V+E)
Space complexity: O(V+E)
 */
function foreignDictionary(words) {
    const adj = {};
    for (const word of words) {
        for (const char of word) {
            adj[char] = new Set();
        }
    }

    for (let i = 0; i < words.length - 1; i++) {
        const w1 = words[i];
        const w2 = words[i + 1];
        const minLen = Math.min(w1.length, w2.length);
        if (w1.length > w2.length && 
            w1.slice(0, minLen) === w2.slice(0, minLen)) {
            return "";
        }
        for (let j = 0; j < minLen; j++) {
            if (w1[j] !== w2[j]) {
                adj[w1[j]].add(w2[j]);
                break;
            }
        }
    }

    const visited = {};
    const res = [];

    const dfs = (char) => {
        if (char in visited) return visited[char];
        visited[char] = true;

        for (const neighChar of adj[char]) {
            if (dfs(neighChar)) return true;
        }

        visited[char] = false;
        res.push(char);
        return false;
    };

    for (const char in adj) {
        if (dfs(char)) return "";
    }

    res.reverse();
    return res.join("");
}

/** 
 * Sol-2
 * dfs solution to find the order of characters in an alien dictionary
 * */
function alienOrderDFS(words) {
    const graph = new Map();
    const visited = new Set();
    const visiting = new Set();
    const result = [];

    // Build the graph
    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i];
        const word2 = words[i + 1];
        const minLength = Math.min(word1.length, word2.length);
        
        for (let j = 0; j < minLength; j++) {
            if (word1[j] !== word2[j]) {
                if (!graph.has(word1[j])) graph.set(word1[j], []);
                graph.get(word1[j]).push(word2[j]);
                break;
            }
        }
    }

    // DFS function to visit nodes
    const dfs = (node) => {
        if (visiting.has(node)) return false; // Cycle detected
        if (visited.has(node)) return true; // Already visited

        visiting.add(node);
        if (graph.has(node)) {
            for (const neighbor of graph.get(node)) {
                if (!dfs(neighbor)) return false;
            }
        }
        visiting.delete(node);
        visited.add(node);
        result.push(node);
        return true;
    };

    // Visit each character in the graph
    for (const char of graph.keys()) {
        if (!visited.has(char)) {
            if (!dfs(char)) return ""; // Cycle detected, return empty string
        }
    }

    return result.reverse().join('');
}
