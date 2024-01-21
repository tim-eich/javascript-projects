let input = require('readline-sync');

//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startingFuelLevel = 0;
let astronautsAboard = 0;
let altitudeAchieved = 0;


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

startingFuelLevel = input.question("Please enter the starting fuel level: ");

while (startingFuelLevel < 5000 || startingFuelLevel > 30000) {
  console.log("Starting fuel level is outside of launch parameters!");
  startingFuelLevel = input.question("Please enter the starting fuel level: ");
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
astronautsAboard = input.question("How many astronauts are aboard? ");

while (astronautsAboard <= 0 || astronautsAboard > 7) {
  console.log("Number of astronauts aboards is outside of launch parameters.");
  astronautsAboard = input.question("How many astronauts are aboard? ");
}  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (startingFuelLevel >= astronautsAboard * 100) {
  altitudeAchieved += 50;
  startingFuelLevel -= 100;
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”
If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`The shuttle gained an alititude of ${altitudeAchieved} km.`);
if (altitudeAchieved >= 2000) {
  console.log(`Orbit achieved!`);
} else {
  console.log(`You have failed to reach orbit.`);
}