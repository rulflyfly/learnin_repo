function findSumIndices(nums, target) {
    const obj = {};

    nums.forEach((el, i) => obj[el] = i);

    for (let i = 0; i < nums.length; i++) {
        const currentEl = nums[i];
        const propbSol = target - currentEl;

        if (obj[propbSol] && i !== obj[propbSol]) return [i, obj[propbSol]];
    }
}

console.log(findSumIndices([1,3,4,2], 6))

