let input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodCab = food.split(',');
let equipmentCab = equipment.split(',');
let petsCab = pets.split(',');
let sleepAidsCab = sleepAids.split(',');

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodCab, equipmentCab, petsCab, sleepAidsCab];

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let selectedCab = input.question(`Please select from cabinets 1 - ${cargoHold.length}: `) - 1;

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (selectedCab > cargoHold.length - 1) {
    console.log("The selected cabinet does not exist!");
} else {
    console.log(`Cabinet ${selectedCab + 1} contains ${cargoHold[selectedCab]}`);
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let userItem = input.question(`Please select an item from cabinet ${selectedCab + 1}: `);
if (cargoHold[selectedCab].includes(userItem.toLowerCase())) {
    console.log(`Cabinet ${selectedCab + 1} DOES contain your item!`);
} else {
    console.log(`Cabinet ${selectedCab + 1} DOES NOT contain your item!`);
}