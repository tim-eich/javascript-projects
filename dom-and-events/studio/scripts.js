// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {
    // Put your code for the exercises here.
    // console.log("LOADED!")
    function launchShuttle() {
        if(window.confirm("Confirm that the shuttle is ready for takeoff.") ){
            document.getElementById('flightStatus').innerHTML = "Shuttle in flight.";
            document.getElementById('shuttleBackground').style.backgroundColor = 'blue';
            document.getElementById('spaceShuttleHeight').innerHTML += 10000; 
        }
    }

    function landShuttle() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById('flightStatus').innerHTML = "The shuttle has landed.";
        document.getElementById('shuttleBackground').style.backgroundColor = 'green';
        document.getElementById('spaceShuttleHeight').innerHTML = 0;
    }

    function abortMission() {
        if (window.confirm("Confirm that you want to abort the mission.") ){
            document.getElementById('flightStatus').innerHTML = "Mission aborted.";
            document.getElementById('shuttleBackground').style.backgroundColor = 'green';
            document.getElementById('spaceShuttleHeight').innerHTML = 0;
        }
    }

    const takeoffButton = document.getElementById('takeoff');
    const landingButton = document.getElementById('landing');
    const abortButton = document.getElementById('missionAbort');

    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');
    const rightButton = document.getElementById('right');
    const leftButton = document.getElementById('left');

    takeoffButton.addEventListener('click', launchShuttle);

    landingButton.addEventListener('click', landShuttle);

    upButton.addEventListener('click', function() {
        // console.log("UP!")
        console.log(document.getElementById('rocket').style.position);
    })

    downButton.addEventListener('click', function() {
        // console.log("DOWN!")

    })
    rightButton.addEventListener('click', function() {
        // console.log("RIGHT!")

    })
    leftButton.addEventListener('click', function() {
        // console.log("LEFT!")

    })

    abortButton.addEventListener('click', abortMission);


    }
   
window.addEventListener("load", init);
