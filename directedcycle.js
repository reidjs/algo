//directed cycle detection: does this graph have a directed cycle? if so,
//find the vertices on the cycle in order from the vertex back to itself.
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
    if (!mutePassingTests)
      p("passed", comment)
    else
      ;
  else {
    if (comment !== undefined)
      p("FAILED: expected: " + expected.toString() + ", actual: " + actual.toString() + ", " + comment)
    else {
      p("FAILED: expected: " + expected.toString() + ", actual: " + actual.toString())
    }

  }

}
function Vertex(num) {
  this.num = num
  this.marked = false
  this.adj = [] //adjacent vertices
  this.cycle = null
  this.connect = function(vertex) {
    if (vertex === undefined)
      return false;
    this.adj.push(vertex)
  }
  //TO DO: Implement directed cycle search
  //check all nodes to see if there is a cycle
  this.directedCycle = function() {

  }
  //check if the target is reachable by depth first search
  this.directedDFSToFindCycle = function(target) {
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
  this.hasCycle = function() {
    return (this.cycle !== null)
  }
}
p = console.log
zero = new Vertex(0)
one = new Vertex(1)
five = new Vertex(5)
four = new Vertex(4)
three = new Vertex(3)
zero.connect(one)
zero.connect(five)
five.connect(four)
four.connect(three)
three.connect(five)

AssertEqual(zero.hasCycle(), true, "The zero vertex should be part of a cycle with the other vertices")
