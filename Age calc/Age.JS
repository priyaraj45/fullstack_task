function calculateAge(){

    let dob = new Date(
        document.getElementById("dob").value
    );

    let today = new Date();

    let age =
        today.getFullYear() -
        dob.getFullYear();

    let monthDiff =
        today.getMonth() -
        dob.getMonth();

    if(
        monthDiff < 0 ||
        (
            monthDiff === 0 &&
            today.getDate() < dob.getDate()
        )
    ){
        age--;
    }

    let diff = today - dob;

    let days =
        Math.floor(
            diff /
            (1000 * 60 * 60 * 24)
        );

    let hours =
        Math.floor(
            diff /
            (1000 * 60 * 60)
        );

    let minutes =
        Math.floor(
            diff /
            (1000 * 60)
        );

    let dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    let bornDay =
        dayNames[dob.getDay()];

    let date =
        dob.getDate();

    let month =
        dob.getMonth() + 1;

    

    let nextBirthday =
        new Date(
            today.getFullYear(),
            dob.getMonth(),
            dob.getDate()
        );

    if(today > nextBirthday){
        nextBirthday.setFullYear(
            today.getFullYear() + 1
        );
    }

    let daysLeft =
        Math.ceil(
            (nextBirthday - today) /
            (1000 * 60 * 60 * 24)
        );

    document.getElementById(
        "result"
    ).innerHTML =

    `
    <div class="result-box">

    <h3>📊 Personal Age Report</h3>

    <p>📅 <b>Date of Birth:</b> ${document.getElementById("dob").value}</p>

    <p>🎈 <b>Born On:</b> ${bornDay}</p>

    <p>🎂 <b>Age:</b> ${age} Years</p>

    <p>📅 <b>Days Lived:</b> ${days}</p>

    <p>⏰ <b>Hours Lived:</b> ${hours}</p>

    <p>⏱ <b>Minutes Lived:</b> ${minutes}</p>

    <p>🎉 <b>Days Left for Next Birthday:</b> ${daysLeft}</p>

    </div>
    `;
}