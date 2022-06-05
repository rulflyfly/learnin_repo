const structure = {
  tracks: [
    {
      instrument: "Piano",
    },
    {
      instrument: "Synth",
    },
    {
      instrument: "Piano",
    },
    {
      instrument: "Drum",
    },
    {
      instrument: "Synth",
    },
  ],

  instruments: {
    Piano: {
      plugins: [
        { type: "Gate", plugins: [{ type: "Reverb" }, { type: "Delay" }] },
      ],
    },
    Synth: {
      plugins: [
        {
          type: "Reverb",
        },
        {
          type: "Delay",
        },
        {
          type: "VST1",
          plugins: [
            { type: "Reverb" },
            {
              type: "Filter",
              plugins: [{ type: "Compressor" }],
            },
          ],
        },
      ],
    },
    Drum: {
      plugins: [{ type: "Delay" }],
    },
    Cowbell: {
      plugins: [{ type: "Reverb" }],
    },
  },
};

const outArr = [];

function makeRenderTrack(type, name) {
  return {
    type,
    name,
  };
}

function checkAlreadyRendered(name) {
  for (let i = 0; i < outArr.length; i++) {
    if (outArr[i].name === name) return true;
  }
  return false;
}

function parsePlagins(plugin) {
  if (plugin.plugins) {
    if (plugin.type) {
      if (!checkAlreadyRendered(plugin.type)) {
        outArr.push(makeRenderTrack("plugin", plugin.type));
      }
    }
    for (plugin of plugin.plugins) {
      const pluginToPasre = plugin;
      delete plugin;
      parsePlagins(pluginToPasre);
    }
  } else {
    if (!checkAlreadyRendered(plugin.type)) {
      outArr.push(makeRenderTrack("plugin", plugin.type));
    }
    return plugin.type;
  }
}

function parseTrack(structure) {
  let i = 0;

  while (i < structure.tracks.length) {
    const instrumentKey = structure.tracks[i].instrument;
    const instrument = structure.instruments[instrumentKey];
    parsePlagins(instrument);
    if (!checkAlreadyRendered(instrumentKey)) {
      outArr.push(makeRenderTrack("insrument", instrumentKey));
    }
    outArr.push(makeRenderTrack("track", i + 1));
    i++;
  }
  return outArr;
}

console.log(parseTrack(structure));
