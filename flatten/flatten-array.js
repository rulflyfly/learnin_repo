const array = [1, 2, 3, [4, [5, 6, [7], [8], 9, 10]]];

function flatten(arr) {
  let outArray = [...arr];

  let i = outArray.length;

  while (i > -1) {
    if (typeof outArray[i] === "object") {
      const subArr = outArray.splice(i);
      outArray = outArray.concat(...subArr);
      i = outArray.length;
    } 
    i--
  }

  return outArray;
}

console.log(flatten(array));
