const ex_1 = [1, 2, 3];
const ex_2 = [1, 10, 2, 9];

function minMoves(nums) {
    nums.sort((a,b) => a - b)
    let ans = 0, median = nums[~~(nums.length / 2)]  // ~~() is the same as Math.floor()
    for (let i = 0; i < nums.length; i++) ans += Math.abs(median - nums[i])
    return ans
}

console.log(minMoves(ex_2))