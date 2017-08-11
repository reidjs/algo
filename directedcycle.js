//directed cycle detection: does this graph have a directed cycle? if so,
//find the vertices on the cycle in order from the vertex back to itself.
//NOTE: Only finds one cycle. Cannot be used to find multiple cycles. 
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
function Vertex(num) {
  this.num = num
  this.marked = false
  this.adj = [] //adjacent vertices
  //this.cycles = []
  this.connect = function(vertex) {
    if (vertex === undefined)
      return false;
    this.adj.push(vertex)
  }
  //TO DO: Implement directed cycle search
  //check all nodes to see if there is a cycle
  //check if the target is reachable by depth first search
  this.directedDFSToFindCycles = function(cycles = [], stack = []) {
    this.marked = true
    //check all adjacent vertices
    for (i in this.adj) {
      // p("checking vertex: ", this.adj[i].num)
      stack.push(this.adj[i])
      if (!this.adj[i].marked) {
        this.adj[i].directedDFSToFindCycles(cycles, stack)
      }
      else {
        // p(this.num) //it is storing the cycle to the one that loops back
        cycles.push(stack)
        //p(this.cycles)
        stack = []
      }
    }
    return cycles
  }
  this.hasCycle = function(cycles) {
    cycles.length > 0
  }
}

function printCycles(cycles) {
  var str='PRINTING CYCLES: '
  cycles.forEach(function(cycle){
    cycle.forEach(function(vertex, index){
      str += vertex.num
      //print an arrow unless we're on the last index
      if (index < cycle.length - 1)
        str += "->"
    })
  })
  p(str)
}

p = console.log
//init vertexes
zero = new Vertex(0)
five = new Vertex(5)
four = new Vertex(4)
three = new Vertex(3)

//form one cycle
zero.connect(five)
five.connect(four)
four.connect(three)
three.connect(five)
var cycles = zero.directedDFSToFindCycles()
printCycles(cycles)

AssertEqual(cycles.length > 0, true, "The zero vertex should be part of a cycle with the other vertices")

two = new Vertex(2)
three.connect(two)
two.connect(three)
four.connect(two)
var cycles = zero.directedDFSToFindCycles()
printCycles(cycles)
AssertEqual(cycles.length > 1, false, "This function should only be able to find one cycle")



zero = new Vertex(0)
one = new Vertex(1)
five = new Vertex(5)
four = new Vertex(4)
three = new Vertex(3)
zero.connect(one)
zero.connect(five)
five.connect(four)
four.connect(three)
var cycles = zero.directedDFSToFindCycles()
printCycles(cycles)
AssertEqual(cycles.length == 0, true, "The zero vertex shouldnt be part of a cycle with the other vertices")
