
function swap (arr, i, j){
  var t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}
function msg (str) {
  str.toString()
  console.log(str)
}
//take two arrays and merge them into sorted order
//expects that the two halves are already sorted!
function merge(arr, lo, mid, hi) {
  lefthalf = arr.slice(lo,mid)
  righthalf = arr.slice(mid,hi)
  aux = []
  for (i = lo; i < hi; i++) {
    //left half exhausted
    if (lefthalf.length < 1) {
      aux.push(righthalf.shift())
    }
    //right half exhausted
    else if (righthalf.length < 1) {
      aux.push(lefthalf.shift())
    }
    //current key on right is less than current key on left
    else if (righthalf[0] < lefthalf[0]) {
      aux.push(righthalf.shift())
    }
    //current key on left is less than current key on right
    else{
      aux.push(lefthalf.shift())
    }
  }
  msg(aux)
}
//Divide the array into two parts and then sort them independently and merge the resulting
//arrays into the result
a = "EEGDMRACEFRT".split('')
mid = Math.floor(a.length/2)
merge(a, 0, mid, a.length)
