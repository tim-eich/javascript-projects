function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
  return arr[Math.floor(Math.random() * arr.length + 1)];
}

//TODO: Export the randomFromArray function.
module.exports = {
  randomFromArray: randomFromArray
}
