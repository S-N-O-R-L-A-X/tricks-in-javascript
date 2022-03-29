function init() {
  let arr=[];
  for (let i = 0; i < m; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {
      arr[i][j] = 0;
    }
  }
  console.log(arr);
}


function compare() {
  let arr1 = new Array(3).fill(new Array(4).fill(1));
  let arr2 = new Array(3).fill(0).map(() => new Array(4).fill(1));
  arr1[0][1] = 3;
  arr2[0][1] = 3;
  console.log(arr1);// [ [ 1, 3, 1, 1 ], [ 1, 3, 1, 1 ], [ 1, 3, 1, 1 ] ]
  console.log(arr2);// [ [ 1, 3, 1, 1 ], [ 1, 1, 1, 1 ], [ 1, 1, 1, 1 ] ]
}



compare();