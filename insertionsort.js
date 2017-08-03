function swap (arr, i, j){
  var t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}
function msg (str) {
  console.log(str)
}
function insertionSort(arr) {
  for(i = 1; i < arr.length; i++) {
    for(j = i; j > 0 && arr[j] < arr[j-1]; j--)
      swap(arr, j, j-1)
  }
}
function insertionSort2(arr) {
  for(i = 1; i < arr.length; i++) {
    for (j = i; j > 0; j--) {
      if (arr[j] < arr[j-1]) //gets rid of the weird syntax
        swap(arr, j, j-1)
    }
  }
}
var a = "blahdfgdfgdf blahblah".split('')
insertionSort2(a)
msg(a)
