const nums = [100, 4, 200, 1, 3, 2]; //4

const nums_2 = [0, 3, 7, 2, 12, 5, 8, 11, 4, 6, 0, 1, 10, 22, 20]; //9


function findLongestConsecutive(arr) {
  const helperObg = {};

  arr.forEach(el => {
    helperObg[el] = 1;
  });

  let maxLen = 0;

  for (let key in helperObg) {
    if (!helperObg[key - 1]) {
        let currentNum = Number(key);
        let currentLen = 1;
        while (helperObg[currentNum + 1]) {
            currentNum += 1;
            currentLen += 1;
        }
        maxLen = Math.max(maxLen, currentLen)
    }
  }

  return maxLen;
}

console.log(findLongestConsecutive(nums_2));
