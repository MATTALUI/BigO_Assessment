// 0(1)
function constant(array){
  return array[0];
}

// 0(n)
function(array){
  for(let i = 0; i<array.length;i++){
    console.log(array[i]);
  }
}

// 0(n^2)
function quadratic(arrayOfArrays){
  for(let i = 0; i<arrayOfArrays; i++){
    for(let j = 0; j<arrayOfArrays[i].length;j++){
      console.log(arrayOfArrays[i][j]);
    }
  }
}
