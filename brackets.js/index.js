const b_1 = '(1 + 1) * (1 + (2 + 1))' // true

const b_2 = '(1 + 1) * (1 + (2 + 1)' // false

function checkBrackets(str) {
    if (!str.length) throw Error('string should not be empty')
    let hasBrackets = false;
    for (let char of str) {
        if (char === '(' || char === ')') hasBrackets = true;
    }
    //if (!hasBrackets) throw Error('string must have brackets');

    return hasBrackets
}

console.log(checkBrackets)