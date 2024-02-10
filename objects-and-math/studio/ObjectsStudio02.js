// Code your orbitCircumference function here:
function orbitCircumference(radInKm) {
  return Math.round(2 * Math.PI * radInKm);
}

// Code your missionDuration function here:
function missionDuration (orbits, orbitalRadius, orbitalSpeed) {
  return Math.round((orbits * orbitCircumference(orbitalRadius)/orbitalSpeed)*100)/100;
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(candidates) {
  // return Math.floor(Math.random() * 6);
  return candidates.splice(Math.floor(Math.random() * candidates.length), 1)[0];
}

// Selects candidate with lowest oxygen usage
function conserveOxygen(candidates) {
  return Object.entries(candidates).sort((a,b) => a[1].o2Used(1) - b[1].o2Used(1))[0][1];
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate, orbits, orbitalRadius, orbitalSpeed) {
  let spaceWalkDuration = missionDuration(orbits, orbitalRadius, orbitalSpeed);
  return `${candidate.name} will perform the spacewalk, which will last ${spaceWalkDuration} hours and require ${candidate.o2Used(spaceWalkDuration).toFixed(4)} kg of oxygen.`
}

// Candidate data & crew array.
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

// Expanded crew to test code
let crew = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];
let numberOfOrbits = 5;
let defaultOrbitalRadius = 2000;
let defaultOrbitalSpeed = 28000;

// console.log(`The mission will travel ${orbitCircumference(defaultOrbRadius) * orbits} km around the planet, and it will take ${missionDuration(orbits, defaultOrbRadius, defaultOrbSpeed)} hours to complete.`)

// console.log(oxygenExpended(selectRandomEntry(crew), numberOfOrbits, defaultOrbitalRadius, defaultOrbitalSpeed));

// console.log(oxygenExpended(conserveOxygen(crew), numberOfOrbits, defaultOrbitalRadius, defaultOrbitalSpeed));