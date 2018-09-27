module.exports = function longestConsecutiveLength(array) {
  var arr = {};
  var l = 0;
  for (var i = 0; i<array.length; i++){
    arr[array[i]] = true;
  };
  for (i in arr) {
    if (!arr[i-1]){
      var j = +i;
      var n = 1;
      while (arr[+j+1]) {
        n++;
        j++;
      }
    }
    l = Math.max(l,n);
  }
  return l;
}
