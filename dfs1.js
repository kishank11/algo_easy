const { Node } = require("./DFS")




graph = new Node("a");

graph.addChild("b")
y = graph.addChild("c")
y.addChild("d")


console.log(graph)
console.log(graph.depthFirstSearch(graph.name))
depthFirstSearch()