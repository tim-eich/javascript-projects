function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener('click', event => {
        document.getElementById('statusReport').innerHTML = "Houston, we have liftoff!";
    });
}

window.addEventListener("load", init);


