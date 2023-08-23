const dagarEl = document.getElementById("days");
const timarEl = document.getElementById("hours");
const minuterEl = document.getElementById("min");
const sekunderEl = document.getElementById("seconds");

const datetime = "1 Jan 2024";

function countdown() {
    const tiemdate = new Date (datetime);
    const nudate = new Date();

    const hellaseconds = new Date(tiemdate - nudate) / 1000;

    const dagar = Math.floor(hellaseconds / 3600/ 24);
    const timar = Math.floor(hellaseconds / 3600) % 24;
    const minuter= Math.floor(hellaseconds / 60) % 60;
    const sekunder = Math.floor(hellaseconds) % 60;
  
    dagarEl.innerHTML = dagar;
    timarEl.innerHTML = formatTime(timar);
    minuterEl.innerHTML = formatTime(minuter);
    sekunderEl.innerHTML = formatTime(sekunder);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countdown();

setInterval (countdown, 1000);
