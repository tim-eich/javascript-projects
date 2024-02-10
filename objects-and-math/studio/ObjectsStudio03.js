// Code your crewMass function here:
function crewMass(crew) {
  let totalMass = 0;
  for (const member in crew) {
    // //Check loop in progress
    // console.log(`Crew Member: ${crew[member].name}, Mass: ${crew[member].mass}`)
    totalMass += crew[member].mass;
  }
  return totalMass;
}

// Code your fuelRequired function here:
function fuelRequired(rocketMass, crewMass, crew) {
  let safetyFuel = 0;
  // Adds 200 kg of fuel for a cat or dog, 100 for each other crew member
  for (let i = 0; i < crew.length; i++) {
    if (crew[i].species === 'cat' || crew[i].species === 'dog') {
      safetyFuel += 200;
    } else {
      safetyFuel += 100;
    }
  }
  return Math.ceil((rocketMass + crewMass) * 9.5 + safetyFuel);
}

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

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
 
let crew = [candidateB,candidateD,candidateF];
let uncrewedRocketMass = 75000;

// console.log(crewMass(crew));

console.log(`The mission has a launch mass of ${crewMass(crew)} kg and requires ${fuelRequired(uncrewedRocketMass, crewMass(crew), crew)} kg of fuel.`);
 