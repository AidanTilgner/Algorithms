// * Helpers
const visit = (v) => {
  console.log("Vertex: ", v);
};

const getMarkedList = (G) => {
  let list = [];
  for (let i = 0; i < G.size(); i++) {
    list.push(false);
  }
  return list;
};

const marked = getMarkedList(G);

// * Recursive Solution
const dfsRecursive = (G, v) => {
  visit(v);
  marked[v] = true;

  const neighbors = G.neighbors(v);
  for (let i = 0; i < neighbors.length; i++) {
    if (!marked[neighbors[i]]) {
      dfsRecursive(G, neighbors[i]);
    }
  }
};

// * Iterative Solution
const dfsIterative = (G, v) => {
  let stack = [v];

  while (stack.length) {
    v = stack.pop();
    if (!marked[v]) {
      visit(v);
      marked[v] = true;

      const neighbors = G.neighbors(v);
      for (let i = 0; i < neighbors.length; i++) {
        if (!marked[neighbors[i]]) {
          stack.push(neighbors[i]);
        }
      }
    }
  }
};
