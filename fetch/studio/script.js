//TODO: Add Your Code Below

function init() {
    let url = "https://handlers.education.launchcode.org/static/astronauts.json"
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        let astronauts = data;
        document.getElementById('totalCrew').innerHTML += astronauts.length;
        // Sorts astronauts by time in space before they are added to HTML
        astronauts.sort(function(a, b) {
            return parseFloat(a.hoursInSpace) - parseFloat(b.hoursInSpace);
        });
        for (crewMember in astronauts) {

            let firstName = astronauts[crewMember].firstName;
            let lastName = astronauts[crewMember].lastName;
            let hoursInSpace = astronauts[crewMember].hoursInSpace;
            let active = astronauts[crewMember].active;

            // Changes active status to green
            let status;

            if (astronauts[crewMember].active === true) {
                status = `<li id="active">Active: ${active}</li>`
            } else {
                status = `<li>Active: ${active}</li>`
            }

            let skills = astronauts[crewMember].skills.join(", ");
            let picture = astronauts[crewMember].picture;
            
            let newCrewMember = `
            <div class="astronaut">
                <div class="bio">
                    <h3>${firstName} ${lastName}</h3>
                    <ul>
                        <li>Hours in space: ${hoursInSpace}</li>
                        ${status}
                        <li>Skills: ${skills}</li>
                    </ul>
                </div>
                <img class="avatar" src="${picture}">
            </div>
            `
            document.getElementById('container').innerHTML += newCrewMember;
        }
    })
}

window.addEventListener('load', init);
