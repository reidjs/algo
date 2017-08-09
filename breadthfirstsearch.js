//mark Vertex
//visit recursively all Vertexs that are adjacent not marked
p = console.log
var count = 0
function Vertex(num) {
  this.adj = [] //adjacent Vertexs
  this.num = num
  this.marked = false
  this.edgeTo = null
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
  //UNFINISHED
  //breadth first search starting at this Vertex
  this.bfs = function() {
    this.marked = true
    var queue = [this]
    while (queue.length > 0) {
      //remove next vertex v from queue
      var nextElementFromQueue = queue.shift()
      nextElementFromQueue.adj.forEach(function(element) {
        //put onto the queue all unmarked elements and mark them
        if (!element.marked){
          element.marked = true
          queue.push(element)
        }
      })
      //for printing out the queue to check for successful implementation
      var queueString = ""
      queue.forEach(function(element) {
        queueString += String(element.num) + ", "
      })
      p(queueString)
    }
    //put onto queue all unmarked vertices that are adjacent to V and mark them


  }
}
zero = new Vertex(0)
one = new Vertex(1)
two = new Vertex(2)
three = new Vertex(3)
four = new Vertex(4)
five = new Vertex(5)
zero.connect(two)
zero.connect(one)
zero.connect(five)

one.connect(two)

two.connect(three)
two.connect(four)

three.connect(four)
three.connect(five)


zero.bfs()
//p(zero)
