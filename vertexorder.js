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
  this.returnVerticesAsArray = function(){
    return Object.keys(vertices)
  }
  this.returnFirstVerticeAsObject = function() {
    return this.v(Object.keys(vertices)[0])
  }
  this.returnFirstVerticeAsNumber = function(){
    return Object.keys(vertices)[0]
  }
}

//pass the graph and starting vertex NUMBER!! (not the vertex itself)
//OPTIONAL: if you include a function as the third var, it will call
//before every pass with the graph and vertex as params
//OPTIONAL: If you include a function as fourht var, it will call
//AFTER every pass with grpah and vertex as params
function dfs(g, v, pre_func = function(){}, post_func = function(){}) {
  vertex = g.v(v)
  pre_func.apply(this, [g,vertex])
  vertex.marked = true
  for(i = 0; i < vertex.adj.length; i++) {
    //PROBLEM: doesn't work if nodes are two directional
    p("current", vertex)
    next_vertex = g.v(vertex.adj[i])
    p("next", next_vertex)
    if (!next_vertex.marked)
        dfs(g, next_vertex.num, pre_func, post_func)
  }
  post_func.apply(this, [g,vertex])
}

function vertexOrder(g) {
  //the graph MUST not have a directed cycle to topologically sort.
  if (hasDirectedCycle(g))
    return false
  var pre = [] //integer queue
  var post = [] //integer queue
  var reversePost = [] //integer stack
  this.preEnqueue = function(g, v){
    pre.unshift(v)
  }
  this.postEnqueue = function(g, v){
    post.unshift(v)
    reversePost.push(v)
  }
  dfs(g, g.returnFirstVerticeAsNumber(), this.preEnqueue, this.postEnqueue)
  p(reversePost)
}
//starting at a random vertice in the graph g, returns TRUE if there is a
//cycle and returns FALSE if there is not a cycle.
function hasDirectedCycle(g) {
  start_vertice = g.returnVerticesAsArray()[0]
  return findDirectedCycle(g, start_vertice)
  //p(Object.keys(g.v))
  //findDirectedCycle(g, g.)
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
g.addVertex(0)
g.addVertex(1)
g.addVertex(2)
g.addVertex(3)
g.addVertex(5)
g.connectDirectionally(0,1)
g.connectDirectionally(1,0)
g.connectDirectionally(0,5)
g.connectDirectionally(2,3)
g.connectDirectionally(2,0)
g.connectDirectionally(3,5)
g.connectDirectionally(3,2)
//g.connectDirectionally(3,1)
//p(findDirectedCycle(g, 1))
p("Directed cycle:", hasDirectedCycle(g))
vertexOrder(g)

//dfs(g, 1, printVertexName)
//dfs(g, 1)
// p(g.checkVertex(2))
