function selectionSort(arr) {
  // find smallest item in array and put in first spot
  // find next smallest item and exchange with second spot
  // and so on
  var minIndex = 0
  var minVal = arr[0]
  for(i = 0; i < arr.length; i++) {
    msg(minVal)
    minIndex = i
    for(j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    swap(arr, i, minIndex)
  }
}
function swap (arr, i, j){
  var t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}
function msg (str) {
  console.log(str)
}
var x = "blahblahblah"
a = x.split('')
selectionSort(a)
msg(a)
