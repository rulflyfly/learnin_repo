const array1 = [4, 5, 6, 19, 21];
const array2 = [1, 4, 5, 6, 19, 21];

function findExcessEl(array1, array2) {
    let i = 0;
    while (i < Math.max(array1.length, array2.length)) {
        if (array1[i] != array2[i]) {
            if (array1.length > array2.length) return array1[i];
            return array2[i]
        }
        i++;
    }
}

console.log(findExcessEl(array1, array2))