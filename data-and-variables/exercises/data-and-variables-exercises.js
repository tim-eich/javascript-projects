// Declare and assign the variables below
let shuttleName = "Determination";
let shuttleSpeedMph = 17500;
let distToMarsKm = 225000000;
let distToMoonKm = 384000;
let milesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof(shuttleName));
console.log(typeof(shuttleSpeedMph));
console.log(typeof(distToMarsKm));
console.log(typeof(distToMoonKm));
console.log(typeof(milesPerKm));

// Calculate a space mission below
let milesToMars = distToMarsKm * milesPerKm;
let travTimeToMars = milesToMars / shuttleSpeedMph;
let daysToMars = travTimeToMars / 24;

// Print the results of the space mission calculations below
console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.");

// Calculate a trip to the moon below
let milesToMoon = distToMoonKm * milesPerKm;
let travTimeToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = travTimeToMoon / 24;

// Print the results of the trip to the moon below
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");