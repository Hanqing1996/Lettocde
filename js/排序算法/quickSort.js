const arr = [30, 32, 6, 24, 37, 32, 45, 21, 38, 23, 47];

// 好粗暴，不过我喜欢
function quickSort(arr){
  if(arr.length <= 1){
    return arr;
  }
  let temp = arr[0];
  const left = [];
  const right = [];
  for(var i = 1; i < arr.length; i++){
    if(arr[i] > temp){
      right.push(arr[i]);
    }else{
      left.push(arr[i]);
    }
  }

  const leftPart=left.length<=1?left:quickSort(left)
  const rightPart=right.length<=1?right:quickSort(right)

  return leftPart.concat([temp], rightPart);
}

console.log(quickSort(arr));
