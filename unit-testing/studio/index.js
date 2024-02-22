let launchcode = {
    organization: 'nonprofit',
    executiveDirector: 'Jeff',
<<<<<<< HEAD
    percentageCoolEmployees: 100
=======
    percentageCoolEmployees: 100,
    programsOffered: [
        'JavaScript',
        'Java',
        'C++'
    ]
>>>>>>> 222269dfecbca0dbc205aeceec6f506f688b4aa7
}

function launchOutput(num) {
    const replies = {
        0: "Rutabagas! That doesn't work.",
        3: 'Launch!', 
        4: 'Code!',
        6: 'Rocks!', 
        7: 'LaunchCode!',
        9: 'Launch Rocks! (CRASH!!!!)',
        10: 'Code Rocks!',
        13: 'LaunchCode Rocks!',
    }
    const factors = [2, 3, 5];
    let replyCounter = 0;
    for (let i = 0; i < factors.length; i++) {
        // console.log(i);
    // check if number is a factor
        if(num % factors[i] === 0) {
            // use loop to log if number is divisible by 2, 3, or 5
            replyCounter += factors[i] + 1;
            // console.log(replyCounter);
        }
    }
    return replies[replyCounter];
}

<<<<<<< HEAD
console.log(launchcode.keys().length);
=======
console.log(launchOutput(30));

// console.log(launchOutput(4));

module.exports = {
    launchcode: launchcode,
    launchOutput: launchOutput
}
>>>>>>> 222269dfecbca0dbc205aeceec6f506f688b4aa7
