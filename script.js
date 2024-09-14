let hours = prompt('Enter time', '10:00');
let ampm = prompt('Enter AM or PM', 'pm');
let numH = hours.slice(0, 2);
let numMin = hours.slice(3);


let convertTime = (hours, mins) => {
    let d = new Date();
    let options = { hour: "2-digit", minute: "2-digit"};

   ///// Setting hours according to am/pm  /////
    if (ampm.toUpperCase() === "PM" && hours <= 12) {
        d.setHours(parseInt(hours) + 12);
    } else {
        d.setHours(hours);
    } 

    d.setMinutes(mins);
    return d.toLocaleTimeString('en-GB', options);
}


let time = convertTime(numH, numMin);
console.log(time);
