function bfs(graph, startNode) {
  const visited = new Set();
  const queue = [startNode];
  const result = [];

  visited.add(startNode);

  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node);

    const neighbors = graph[node];

    if (neighbors) {
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }

  return result;
}

// Example Usage:
const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B', 'F'],
  'F': ['C', 'E']
};

const startNode = 'A';
const bfsResult = bfs(graph, startNode);
console.log("BFS traversal:", bfsResult);
