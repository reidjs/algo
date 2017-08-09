//directed graphs have edges that are one-way
function Vertex(num) {
  this.num = num
  this.marked = false
  this.adj = [] //adjacent vertices
  this.connect = function(vertex) {
    if (vertex === undefined)
      return false;
    this.adj.push(vertex)
  }
  //check if the target is reachable by depth first search
  this.directedDFS = function(target) {
    //mark this and then mark adjacent vertices
    this.marked = true
    //check all adjacent vertices
    for (i in this.adj) {
      p("checking vertex: ", this.adj[i].num)
      if (this.adj[i] === target) {
        p(String(target.num), "is reachable")
        return true
      }
      if (!this.adj[i].marked) {
        //then search all of their adjacent
        this.adj[i].directedDFS(target)
      }
    }

  }
}
p = console.log
zero = new Vertex(0)
one = new Vertex(1)
five = new Vertex(5)
two = new Vertex(2)
four = new Vertex(4)
zero.connect(one)
zero.connect(five)
five.connect(four)
//p(zero.adj)
zero.directedDFS(four)
