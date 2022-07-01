const capacity = [2,3,4,5];
const rocks = [1,2,4,4];
const additionalRocks = 2;

function maximumBags(capacity, rocks, additionalRocks) {
    let fullBags = 0;
    const itemsToFull = [];

    for (let i = 0; i < capacity.length; i++) {
        if ((capacity[i] - rocks[i]) === 0) fullBags++;
        else itemsToFull.push((capacity[i] - rocks[i]));
    };
    
    itemsToFull.sort((a, b) => a - b);

    let i = 0;
    let remainingRocks = additionalRocks;

    while (remainingRocks && i < itemsToFull.length) {
        if (itemsToFull[i] <= remainingRocks) {
            remainingRocks -= itemsToFull[i];
            fullBags++
        }
        i++
    }

    return fullBags;
} 

console.log(maximumBags([10,2,2], [2,2,0], 100));