// Initialize Variables below
const date = "Monday 2019-03-18";
const time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg =	74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = 100;
let weatherStatus = "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    preparedForLiftOff = false;
    console.log('Launch scrubbed. Too much astronaut.');
} else if (astronautStatus !== "ready") {
    // add logic below to verify all astronauts are ready
    preparedForLiftOff = false;
    console.log('Launch scrubbed because Bob was late. Thanks a lot Bob.');
} else if (totalMassKg > 850000) {
    // add logic below to verify the total mass does not exceed the maximum limit of 850000
    preparedForLiftOff = false;
    console.log("Launch scrubbed. Shuttle too thicc.");
} else if (fuelTempCelsius < minimumFuelTemp || fuelTempCelsius > maximumFuelTemp) {
    // add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
    preparedForLiftOff = false;
    console.log("Launch cancelled, meteorology department scrubbed.");
} else if (fuelLevel < 100) {
    // add logic below to verify the fuel level is at 100%
    preparedForLiftOff = false;
    console.log("Can one of you get out and push?");
} else if (weatherStatus !== "clear") {
    preparedForLiftOff = false;
    console.log("We've lost sight of space. Stand by for reacquisition");
} else {
    // Verify shuttle launch can proceed based on above conditions
    console.log("Date: " + date);
    console.log("Time: " + time);
    console.log("Crew Aboard: " + astronautCount);
    console.log("Crew Mass: " + crewMassKg + " kg");
    console.log("Fuel Mass: " + fuelMassKg + " kg");
    console.log("Shuttle Mass: " + shuttleMassKg + " kg");
    console.log("Total Mass: " + totalMassKg + " kg");
    console.log("Fuel Temp: " + fuelTempCelsius + " ºC");
    console.log("Weather Status: " + weatherStatus);
    console.log("Launch is a go, GLHF!");
}
