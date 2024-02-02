// Code your selectRandomEntry function here:

function selectRandomEntry(arr) {
  // return Math.floor(Math.random() * 6);
  return arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
}

// Code your buildCrewArray function here:
function buildCrewArray (candidates, selectedIds) {
  let crew = [];
  for (const id in selectedIds) {
    // console.log(selectedIds[id]);
    for (let i = 0; i < candidates.length; i ++) {
      // console.log(candidates[i].astronautID);
      if (selectedIds[id] === candidates[i].astronautID) {

        // console.log(candidates[i]);
        crew.push(candidates.splice(i, 1)[0]);
      }
    }
  }
  return crew;
}

let idNumbers = [291, 414, 503, 599, 796, 890];

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

let selectedCrew = []
selectedCrew.push(selectRandomEntry(idNumbers));
// console.log(selectedCrew);
selectedCrew.push(selectRandomEntry(idNumbers));
// console.log(selectedCrew);
selectedCrew.push(selectRandomEntry(idNumbers));
// console.log(selectedCrew);

// Code your template literal and console.log statements:

// console.log(selectRandomEntry(idNumbers));
// console.log(idNumbers);
// console.log(selectRandomEntry(idNumbers));
// console.log(idNumbers);
// console.log(selectRandomEntry(idNumbers));
// console.log(idNumbers);

// console.log(animals);

let crew = buildCrewArray(animals, selectedCrew);
console.log();
console.log(`${crew[0].name}, ${crew[1].name}, and ${crew[2].name} are going to space!`);