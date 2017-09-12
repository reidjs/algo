//least significant digit first string sort
//sort string str on leading n characters (e.g. n = 7, first seven characters)
p = console.log;
function lsdSort(arr, n) {
    //this is a stable sort, so start with the last digit then work in
    for (var d = n-1; d >= 0; d--) {
      for(var i = 0; i < arr.length; i++){
        arr.sort(function(a, b){
          p(a[d], b[d])
          return a[d] - b[d];
        });

      }
    }
    return arr;
}

p(lsdSort(['4PGC938', '2IYE230', '3CI0720', '1ICK750', '3ATW723', '3CIO720'], 7));
