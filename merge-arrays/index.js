const array1 = [1, 2, 5, 7, 8, 10, 14, 17];
const array2 = [1, 3, 5, 6, 7, 8];

function mergeArrays(arr1, arr2) {
  const outArr = [];
  let i = 0;
  const maxLen = Math.max(arr1.length, arr2.length);

  while (i < maxLen) {
    if (arr1[i] === arr2[i]) {
      outArr.push(arr1[i]);
    }
    if (arr1[i] > arr2[i]) {
      if (outArr[outArr.length - 1] === arr2[i]) {
        outArr.push(arr1[i]);
      } else {
        outArr.push(arr2[i]);
        outArr.push(arr1[i]);
      }
    }
    if (arr2[i] > arr1[i]) {
      if (outArr[outArr.length - 1] === arr1[i]) {
        outArr.push(arr2[i]);
      } else {
        outArr.push(arr1[i]);
        outArr.push(arr2[i]);
      }
    }

    if (!arr1[i]) {
      if (outArr[outArr.length - 1] !== arr2[i]) {
        outArr.push(arr2[i]);
      }
    }

    if (!arr2[i]) {
      if (outArr[outArr.length - 1] !== arr1[i]) {
        outArr.push(arr1[i]);
      }
    }
    i++;
  }

  return outArr;
}

console.log(mergeArrays(array1, array2));