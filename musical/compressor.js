const volume = [8, 8, 6, 6, 12, 12, 12, 12, 8, 12, 6, 6, 8];

const result = [8, 4, 3, 6, 12, 6, 6, 6, 4, 6, 3, 6, 8];

const PARAMS = {
  threshold: 6,
  ratio: 0.5,
  attack: 2,
  release: 2,
};

function compress(input) {
    let a = PARAMS.attack;
    let r = PARAMS.release;
    let i = 0;

    const outVolume = [...input]

    while (i < outVolume.length) {
        if (outVolume[i] > PARAMS.threshold) {
            r = PARAMS.release;
            if (a > 1) {
                a--;
            } else {
                outVolume[i] = outVolume[i] * PARAMS.ratio;
            }
        } else {
            a = PARAMS.attack;
            if (r > 1) {
                outVolume[i] = outVolume[i] * PARAMS.ratio;
                r--;
            }
        }

        i++;
    }


    return outVolume;
    
}

console.log(compress(volume))