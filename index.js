//here we  have created an array where secs mins and hrs are 0 0 0
let [seconds, minutes, hours] = [0, 0, 0];

let displayTime = document.getElementById("displayTime");
let timer = null;

// this function is when the timer is @60 update and change it to 1 for seconds and minutes

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = o;
      hours++;
    }
  }
  // for adding 0 for the first 9 seconds,minutes and hours respectively
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  // to show the updated time 
  displayTime.innerHTML = h + ":" + m + ":" + s;
}

//to execute the above function every second we have used javascript time interval

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}

// this function stops the timer
function watchStop() {
  clearInterval(timer);
}

// this function resets the timer
function watchReset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00:00:00";
}
