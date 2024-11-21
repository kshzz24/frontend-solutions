let hr = document.getElementById("hour");
let min = document.getElementById("minutes");
let sec = document.getElementById("seconds");

const displayTime = () => {
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hourRotation = 30 * hh + mm / 2;
  let minutesRotation = 6 * mm;
  let secondsRotation = 6 * ss;

  hr.style.transform = `rotate(${hourRotation}deg)`;
  min.style.transform = `rotate(${minutesRotation}deg)`;
  sec.style.transform = `rotate(${secondsRotation}deg)`;
};

setInterval(displayTime, 1000);
