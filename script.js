function stringChop(str, size) {
  // your code here
 
  if (str === null) {
    return [];
  }
 
  if (str.length === 0) {
    return [];
  }
 
  size = parseInt(size);
 
  const arr = [];
  let i = 0;
 
  while (i < str.length) {
    arr.push(str.slice(i, i + size));
    i += size;
  }
 
  return arr;
}
 
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));