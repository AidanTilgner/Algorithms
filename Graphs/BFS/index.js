// BFS is iterative
const visit = (vertex) => {
  console.log("Vertex: ", vertex);
};

const BFS = (G, v) => {
  let marked = getMarkedList(G);
  let queue = [v];
  while (queue.length) {
    v = queue.pop();

    if (!marked[v]) {
      visit(v);
      marked[v] = true;

      const neighbors = G.neighbors(v);
      for (let i = 0; i < neighbors.length; i++) {
        if (!marked[neighbors[i]]) {
          queue.unshift(neighbors[i]);
        }
      }
    }
  }
};

const getMarkedList = (G) => {
  let list = [];
  for (let i = 0; i < G.size(); i++) {
    list.push(false);
  }
  return list;
};
