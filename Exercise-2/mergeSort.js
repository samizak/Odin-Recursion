function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < leftArr.length) {
    result.push(leftArr[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < rightArr.length) {
    result.push(rightArr[rightIndex]);
    rightIndex++;
  }

  return result;
}

console.log(mergeSort([])); // []
console.log(mergeSort([5, 1])); // [1, 5]
console.log(mergeSort([10, 7, 8, 9, 1, 5])); // [1, 5, 7, 8, 9, 10]
console.log(mergeSort([93, 151, 3, 20, 463, 155, 167, 34, 13])); // [3, 13, 20, 34, 93, 151, 155, 167, 463];
