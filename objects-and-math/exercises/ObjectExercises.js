let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautId: 1,
   move: function (max) {
      return Math.floor(Math.random() * max);
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautId: 2,
   move: function (max) {
      return Math.floor(Math.random() * max);
   }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautId: 3,
   move: function (max) {
      return Math.floor(Math.random() * max);
   }
};

let dogOne = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautId: 4,
   move: function (max) {
      return Math.floor(Math.random() * max);
   }
};

let microOne = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautId: 5,
   move: function (max) {
      return Math.floor(Math.random() * max);
   }
};

let crew = [superChimpOne, salamander, superChimpTwo, dogOne, microOne];


// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!

// Prints all objects to check output
// for (let i = 0; i < crew.length; i ++) {
//    console.log(crew[i]);
// }

function crewReports(animal) {
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautId}.`;
}

// console.log(crewReports(microOne));

function fitnessTest(arr) {
   let raceResults = [];
   for (let i = 0; i < arr.length; i ++) {
      let steps = 0;
      let turns = 0;
      while (steps < 20) {
         steps += arr[i].move(10);
         turns += 1;
         // Check on loop:
         // console.log(`On their ${turns} turn, ${arr[i].name} reached a total of ${steps} steps.`);
      }
      raceResults.push(`${arr[i].name} took ${turns} turns to take 20 steps.`);
   }
   return raceResults;
}

console.log(fitnessTest(crew));

