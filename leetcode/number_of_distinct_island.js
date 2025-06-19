// https://leetcode.com/problems/number-of-distinct-islands/description/

// Using Dfs for the same problem
function numDistinctIslandsDFS(grid) {
  const visited = new Set();
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const distinctIslands = new Set();

  function dfs(x, y, start) {
    if (
      x < 0 || x >= grid.length ||
      y < 0 || y >= grid[0].length ||
      grid[x][y] === 0 || visited.has(`${x},${y}`)
    ) {
      return [];
    }

    visited.add(`${x},${y}`);
    const shape = [[x - start[0], y - start[1]]];

    for (const [dx, dy] of directions) {
      shape.push(...dfs(x + dx, y + dy, start));
    }

    return shape;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1 && !visited.has(`${i},${j}`)) {
        const islandShape = dfs(i, j, [i, j]);
        distinctIslands.add(islandShape.sort().toString());
      }
    }
  }

  return distinctIslands.size;
}


// BFS approach to find the number of distinct islands
// This approach uses a queue to explore the grid and track the shape of each island.
function numDistinctIslands(grid) {
  const visited = new Set();
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const distinctIslands = new Set();

  function bfs(start) {
    const queue = [start];
    const shape = [];
    visited.add(start.toString());

    while (queue.length > 0) {
      const [x, y] = queue.shift();
      shape.push([x - start[0], y - start[1]]);

      for (const [dx, dy] of directions) {
        const neighbor = [x + dx, y + dy];
        if (
          neighbor[0] >= 0 && neighbor[0] < grid.length &&
          neighbor[1] >= 0 && neighbor[1] < grid[0].length &&
          grid[neighbor[0]][neighbor[1]] === 1 &&
          !visited.has(neighbor.toString())
        ) {
          visited.add(neighbor.toString());
          queue.push(neighbor);
        }
      }
    }

    return shape.sort().toString(); // Sort to ensure unique representation
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1 && !visited.has([i, j].toString())) {
        const islandShape = bfs([i, j]);
        distinctIslands.add(islandShape);
      }
    }
  }

  return distinctIslands.size;
}