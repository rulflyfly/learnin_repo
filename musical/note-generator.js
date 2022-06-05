const tone = [
  82.41, 82.41, 82.41, 82.41, 82.41, 98.0, 98.0, 82.41, 82.41, 73.91, 65.41,
  65.41, 65.41, 65.41, 61.74, 61.74, 61.74, 61.74,
];
const volume = [
  1, 0.8, 0.8, 0.8, 1, 1, 0.8, 1, 0.8, 1, 1, 0.8, 0.8, 0.8, 1, 0.8, 0.8, 0.8,
];

const notes = ["E4", "E", "G2", "E2", "D", "C4", "B4"];

const FREQUENCIES = {
  82.41: "E",
  98: "G",
  73.91: "D",
  65.41: "C",
  61.74: "B",
};

function generateMusic(t, v) {
  if (t.length === 0 || v.length === 0)
    return console.error("one of the input arrays is empty");
  if (t.length !== v.length)
    return console.error("input arrays must be the same length");

  const tones = t.map(f => f.toString());

  for (let freq of tones) {
    if (!FREQUENCIES[freq])
      return console.error(`there's no note at frequency ${freq}`);
  }

  let p = 0;
  const output = [];

  while (p < t.length) {
    const note = FREQUENCIES[tones[p]];
    const lastIndex = output.length - 1;
    const attack = { name: note, count: 1 };
    if (!output.length) {
      output[0] = attack;
    } else if (output[lastIndex].name === note) {
      if (v[p] === 1) {
        output.push(attack);
      } else {
        output[lastIndex].count++;
      }
    } else {
      output.push(attack);
    }
    p++;
  }

  return output.map(el => {
    if (el.count === 1) return el.name;
    else return `${el.name}-${el.count.toString()}`;
  });
}

console.log(generateMusic(tone, volume));
