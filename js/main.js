let day = 1;
let hour = 1;
let minut = 0;
let second = 12;

let days = document.getElementById("days");       
let hours = document.getElementById("hours");       
let minuts = document.getElementById("minuts");        
let seconds = document.getElementById("seconds");

const loadSeconds = () => {
    let scnds;

    if(second < 0) second = 59;

    second < 10 ? scnds = `0${second}` : scnds = second;
    seconds.innerHTML = scnds;
    
    second--;
    loadMinuts(second);
}

const loadMinuts = second => {
    let mnts;
    
    if(second < 0) minut === 0 ? setTimeout(() => { minut = 59 }, 500)  : setTimeout(() => { minut-- }, 500);
    
    minut < 10 ? mnts = `0${minut}` : mnts = minut;
    minuts.innerHTML = mnts;
    
    loadHours(minut,second);
}

const loadHours = (minut, second) => {
    let hrs;
    
    if(second < 0 && minut === 0) hour === 0 ? setTimeout(() => { hour = 23 }, 500)  : setTimeout(() => { hour-- }, 500);
    
    hour < 10 ? hrs = `0${hour}` : hrs = hour;
    hours.innerHTML = hrs;
    
    loadDays(hour,minut,second);
}


const loadDays = (hour, minut, second) => {
    let dys;
    
    if(second < 0 && minut === 0 && hour === 0) day === 0 ? setTimeout(() => { day = 365 }, 500)  : setTimeout(() => { day-- }, 500);
    
    day < 10 ? dys = `0${day}` : dys = day;
    days.innerHTML = dys;
}

setInterval(loadSeconds, 1000);


