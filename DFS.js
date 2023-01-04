class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {

        this.children.push(new Node(name));
        return this;
    }
    addNode(node) {
        this.nodes.push(node);
        this.edges[node] = [];
    }

    depthFirstSearch(array) {
        // Write your code here.

        array.push(this.name)
        for (const child of this.children) {
            child.depthFirstSearch(array);
        }
        return array;
    }

}

const graph = new Node("a");

const f = graph.addChild("b")

f.addChild("x")
const y = graph.addChild("c")
y.addChild("n")
graph.addChild("d")
console.log(graph.children[2]);
const ans = graph.depthFirstSearch([])

console.log(ans)