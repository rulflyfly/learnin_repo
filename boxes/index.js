const boxTypes = [[5,10],[2,5],[4,7],[3,9]]
const truckSize = 10

function maximumUnits(boxTypes, truckSize) {
    const sortedBoxes = [...boxTypes.sort((a, b) => b[1] - a[1])];
    
    let maxEl = 0;
    
    let spareSpace = truckSize;
    let i = 0;
    
    while (spareSpace && i < sortedBoxes.length) {
        if (sortedBoxes[i][0] <= spareSpace) {
            spareSpace -= sortedBoxes[i][0];
            maxEl += (sortedBoxes[i][0] * sortedBoxes[i][1])
            i++;
        } else if (sortedBoxes[i][0] > spareSpace) {
            maxEl += spareSpace * sortedBoxes[i][1]
            spareSpace = 0;
        }
        
    }

    return maxEl;
};

console.log(maximumUnits([[1,3],[5,5],[2,5],[4,2],[4,1],[3,1],[2,2],[1,3],[2,5],[3,2]], 35));