//mark Vertex
//visit recursively all Vertexs that are adjacent not marked
p = console.log
var count = 0
function Vertex() {
  this.adj = [] //adjacent Vertexs
  this.marked = false
  this.connect = function(vertex) {
    if (vertex === undefined)
      return false;
    this.adj.push(vertex)
    vertex.adj.push(this)
  }
  //depth first search starting at this Vertex
  this.dfs = function() {
    this.marked = true
    count+=1
    for(i in this.adj) {
      if (!this.adj[i].marked)
        this.adj[i].dfs()
    }
  }
  //breadth first search starting at this Vertex
  this.bfs = function() {
    //remove next vertex v from queue
    //put onto queue all unmarked vertices that are adjacent to v and mark them
    queue = []
    

  }
}
zero = new Vertex()
one = new Vertex()
two = new Vertex()
three = new Vertex()
four = new Vertex()
five = new Vertex()
zero.connect(two)
zero.connect(one)
zero.connect(five)

one.connect(two)

two.connect(three)
two.connect(four)

three.connect(four)
three.connect(five)


zero.dfs()
p(three)
