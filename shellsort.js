function swap (arr, i, j){
  var t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}
function msg (str) {
  console.log(str)
}

//every hth entry starting anywhere yields a sorted subsequence
//it's like insertion sort but instead of going by 1 everytime
//the size of the shell changes
function shellSort(arr, shellsize) {
  h = shellsize
  while (h >= 1) {
    for (i = h; i < arr.length; i++) { //basically insertion sort
      for (j = i; j >= h && a[j] < a[j-h]; j-=h)
        swap(a, j, j-h)
    }
    h = h/3
  }
}


a = "SHELLSORTEXAMPLE".split('')
msg(a.join(''))
h = 1
while (h < a.length/3) {
  h = 3*h + 1 //set our h value;. Thisis the optimal solution but won't be fully sorted
}
msg("h = " + h.toString())
shellSort(a,h)
msg(a.join(''))
h = 4
msg("h = " + h.toString())
shellSort(a,h)
msg(a.join(''))
h = 1
msg("h = " + h.toString())
shellSort(a,h)
msg(a.join(''))
