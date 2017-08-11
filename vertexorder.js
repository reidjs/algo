//depth first vertex order
//ONLY works on DAGs (directed acyclic graphs), diagraphs with no cycles.
//Used to arrange the nodes in order from their start
function AssertEqual(actual, expected, comment) {
  if (actual === undefined )
    actual = "undefined"
  if (expected === undefined )
    expected = "undefined"
  if (actual === null)
    actual = "null"
  if (expected === null)
    expected = "null"
  if (actual === expected)
      p("passed", comment)
  else {
    if (comment !== undefined)
      p("FAILED: expected: " + expected.toString() + ", actual: " + actual.toString() + ", " + comment)
    else {
      p("FAILED: expected: " + expected.toString() + ", actual: " + actual.toString())
    }

  }
}
function Graph() {
  var vertices = {}
  this.addVertex = function(num) {
    vertices[num] = new Vertex(num)
  }
  this.checkVertex = function(num) {
    p(vertices[num])
  }
  this.v = function(num) {
    return vertices[num]
  }
  //v1 points towards v2 by pushing the number identifier of v2
  this.connectDirectionally = function(v1, v2) {
    vertices[v1].adj.push(v2)
  }
}

//pass the graph and starting vertex into the depth first search function
//will run the function func at each vertex
//OPTIONAL: if you include a function as the third var, it will call
//it every pass with the graph and vertex as params
function dfs(g, v, func = function(){}) {
  vertex = g.v(v)
  func.apply(this, [g,vertex])
  vertex.marked = true
  for(i in vertex.adj) {
    next_vertex = g.v(vertex.adj[i])
    if (!next_vertex.marked)
      dfs(g, next_vertex.num, func)
  }
}

//Returns TRUE if there is a cycle, FALSE if not
function findDirectedCycle(g, v) {
  var stack = []
  var hasCycle = false
  this.addToStack = function(v){
    stack.push(v.num)
  }
  //searches through the adjacent vertices in v for something already
  //recorded to the stack
  this.searchStackForVertexEdges = function(v) {
    for (i = 0; i < stack.length; i++){
      for (j = 0; j < v.adj.length; j++){
        if (stack[i] === v.adj[j])
          return true
      }
    }
    return false
  }
  this.searchForCycle = function(g, v) {
    if (searchStackForVertexEdges(v)) {
      hasCycle = true
    }
    else {
      addToStack(v)
    }
    return false
  }
  dfs(g, v, this.searchForCycle)
  return hasCycle

  //check if there is an edge from this vertex to one already on the stack.
  //if there is, we have a directed cycle
  //console.log(hasCycle)
}

function printVertexName(g, v) {
  console.log(v.num)
}

function Vertex(num) {
  this.num = num
  this.marked = false
  this.adj = [] //adjacent vertices
}

p = console.log

g = new Graph()
g.addVertex(1)
g.addVertex(2)
g.addVertex(3)
g.connectDirectionally(1,2)
g.connectDirectionally(2,3)
g.connectDirectionally(3,1)
p(findDirectedCycle(g, 1))
//dfs(g, 1, printVertexName)
//dfs(g, 1)
// p(g.checkVertex(2))
