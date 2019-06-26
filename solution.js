
function checksum(arr){
  return arr.map(x => Math.max(x) - Math.min(x))
}
