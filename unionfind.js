//Read into tinyUF.html and load in the lines as unions between nodes
//for example, 4 3 means union 4 and 3 OR id[4] = 3

//union find - the index represents the 'id' whereas the value at
//that index represents the group it belongs to. For example if
//id[5] == 3 then the fifth node belongs to group 3
var read = document.querySelector('body')
var UF = function(nodes) {
  this.id = []
  for(var i = 0; i < nodes; i++){
    this.id.push(i)
  }
}
function connected(id, p, q){
  return find(id, p) == find(id, q)
}
function find(id, p) {

  while(p != id[p]) {
    p = id[p]
  }
  // console.log(p)
  return p
}
function union(id, p, q) {
  var i = find(id, p)
  var j = find(id, q)
  if (i == j)
    return
  // console.log(id[i])
  id[i] = j
  // console.log(id[i])
  // console.log(uf.id)
  // console.log(id)
}
var readlines = read.textContent.split('\n')
var uf = new UF(readlines[1])
var unions = readlines.slice(2)
for (var i = 0; i < unions.length; i++){
  var u = unions[i].trim()
  var p = Number(u[0])
  var q = Number(u[2])
  union(uf.id, p, q)
}
console.log(uf.id)
// union(uf.id, 4, 3)
// union(uf.id, 3, 8)
// union(uf.id, 6, 5)
// console.log(uf.id)
// console.log(uf)

// console.log(read.textContent.split('\n')[1])
