const fetch = require('node-fetch');
const fs = require('fs');
let dropData = '';
let charactersData = '';
fetch(
  'https://raw.githubusercontent.com/optc-db/optc-db.github.io/master/common/data/drops.js'
).then(data => {
  let dest = fs.createWriteStream('./src/Data/drops.txt');
  let stream = data.body.pipe(dest);
  stream.on('finish', () => {
    console.warn('Fortnights downloaded');
    fetch(
      'https://raw.githubusercontent.com/optc-db/optc-db.github.io/master/common/data/units.js'
    ).then(data => {
      let dest = fs.createWriteStream('./src/Data/characters.txt');
      let stream = data.body.pipe(dest);
      stream.on('finish', () => {
        console.warn('Characters downloaded');
        loadFile();
      });
    });
  });
});

function loadFile() {
  fs.readFile('./src/Data/drops.txt', 'utf8', (err, data) => {
    if (err) throw err;
    dropData = data;
    fs.readFile('./src/Data/characters.txt', 'utf8', (err2, data2) => {
      if (err) throw err;
      charactersData = data2;
      processData();
    });
  });
}

function processData() {
  let window = {};
  eval(dropData);
  eval(charactersData);
  let fortnights = window.drops.Fortnight;
  let characters = window.units;
  fortnights = fortnights.map(prepareFortnight);
  characters = characters.map((character, index) =>
    prepareCharacter(character, index)
  );
  saveFile(fortnights, characters);
  //fortnights.map((fortnight => console.log(fortnight.name)));
}

function prepareCharacter(character, index) {
  return { name: character[0], value: index + 1, type: character[1] };
}

function prepareFortnight(fortnight) {
  fortnight.drops = [];
  moveDrops(fortnight, 'Expert');
  moveDrops(fortnight, 'Elite');
  moveDrops(fortnight, 'All Difficulties');
  moveDrops(fortnight, 'All Dificulties');
  moveDrops(fortnight, 'Japan');
  fortnight.thumb = fortnight.thumb.toString().padStart(4, '0');
  for (let property in fortnight) {
    if (fortnight.hasOwnProperty(property)) {
      if (
        [
          'Expert',
          'Elite',
          'All Difficulties',
          'All Dificulties',
          'Japan',
          'nakama',
          'condition',
          'gamewith',
        ].indexOf(property) > -1
      ) {
        delete fortnight[property];
      }
    }
  }
  return fortnight;
}

function moveDrops(data, text) {
  if (data[text]) {
    data[text].map(element => {
      if (element.toString().startsWith('-'))
        data.drops.push(
          element
            .toString()
            .replace('-', '')
            .padStart(4, '0')
        );
    });
  }
}

function saveFile(fortnights, characters) {
  fs.writeFileSync('./src/Data/fortnights.json', JSON.stringify(fortnights));
  fs.writeFileSync('./src/Data/characters.json', JSON.stringify(characters));
  fs.unlinkSync('./src/Data/characters.txt');
  fs.unlinkSync('./src/Data/drops.txt');
}
