// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {
    // Put your code for the exercises here.
    // console.log("LOADED!")
    let shuttlePosition = {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        height: 0,
        launched: false
    }

    window.addEventListener('load', moveShuttle());

    function launchShuttle() {
        if (!shuttlePosition.launched) {
            if(window.confirm("Confirm that the shuttle is ready for takeoff.") ){
                shuttlePosition.launched = true;
                shuttlePosition.height = 10000;
                shuttlePosition.bottom = 10;
                document.getElementById('flightStatus').innerHTML = "Shuttle in flight.";
                document.getElementById('shuttleBackground').style.backgroundColor = 'blue';
                document.getElementById('spaceShuttleHeight').innerHTML = shuttlePosition.height;
                document.getElementById('rocket').style.bottom = shuttlePosition.bottom + 'px'; 
            }
        } else {
            window.alert("Shuttle is already airborne!");
        }
    }

    function landShuttle() {
        if (shuttlePosition.launched) {
            window.alert("The shuttle is landing. Landing gear engaged.");
            shuttlePosition.launched = false;
            shuttlePosition.height = 0;
            document.getElementById('flightStatus').innerHTML = "The shuttle has landed.";
            document.getElementById('shuttleBackground').style.backgroundColor = 'green';
            document.getElementById('spaceShuttleHeight').innerHTML = shuttlePosition.height;
            document.getElementById('rocket').style.bottom = '0px';
            document.getElementById('rocket').style.right = '0px';
            document.getElementById('rocket').style.left = '0px';
        } else {
            window.alert('Shuttle has not launched yet.');
        }
    }

    function abortMission() {
        if (window.confirm("Confirm that you want to abort the mission.") ){
            shuttlePosition.launched = false;
            shuttlePosition.height = 0;
            document.getElementById('flightStatus').innerHTML = "Mission aborted.";
            document.getElementById('shuttleBackground').style.backgroundColor = 'red';
            document.getElementById('spaceShuttleHeight').innerHTML = shuttlePosition.height;
            document.getElementById('rocket').style.bottom = '0px';
            document.getElementById('rocket').style.right = '0px';
            document.getElementById('rocket').style.left = '0px';
        }
    }

    function moveShuttle(direction) {
        if (direction === 'up') {
            // console.log('up');
            shuttlePosition.bottom += 10;
            shuttlePosition.height += 10000;
        } else if (direction === 'down') {
            // console.log('down');
            shuttlePosition.bottom -= 10;
            shuttlePosition.height -= 10000;
        } else if (direction === 'right') {
            // console.log('right');
            shuttlePosition.right -= 10;
            shuttlePosition.left += 10;
        } else if (direction === 'left') {
            // console.log('left');
            shuttlePosition.left -= 10;
            shuttlePosition.right += 10;
        }
        document.getElementById('rocket').style.position = shuttlePosition.position;
        document.getElementById('rocket').style.bottom = shuttlePosition.bottom + 'px';
        document.getElementById('rocket').style.right = shuttlePosition.right + 'px';
        document.getElementById('rocket').style.left = shuttlePosition.left + 'px';
        document.getElementById('rocket').style.marginLeft = 'auto';
        document.getElementById('rocket').style.marginRight = 'auto';
        document.getElementById('spaceShuttleHeight').innerHTML = shuttlePosition.height;
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
        if (shuttlePosition.launched){
            moveShuttle('up');
        } else {
            window.alert('Shuttle has not launched yet!');
        }
    })

    downButton.addEventListener('click', function() {
        // console.log("DOWN!")
        if (shuttlePosition.launched){
            moveShuttle('down');
        } else {
            window.alert('Shuttle has not launched yet!');
        }
    })
    rightButton.addEventListener('click', function() {
        // console.log("RIGHT!")
        if (shuttlePosition.launched){
            moveShuttle('right');
        } else {
            window.alert('Shuttle has not launched yet!');
        }
    })
    leftButton.addEventListener('click', function() {
        // console.log("LEFT!")
        if (shuttlePosition.launched){
            moveShuttle('left');
        } else {
            window.alert('Shuttle has not launched yet!');
        }
    })

    abortButton.addEventListener('click', abortMission);

    }
   
window.addEventListener("load", init);
