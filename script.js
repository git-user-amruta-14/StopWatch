// use array destructer

let display = document.querySelector("#display");
let start = document
  .querySelector("#start")
  .addEventListener("click", startTimer);
let stop = document.querySelector("#stop").addEventListener("click", stopTimer);
let reset = document
  .querySelector("#reset")
  .addEventListener("click", resetTimer);

let timer;
let [hrs, mins, sec] = [0, 0, 0];

function updateDisplay() {
  let h = hrs < 10 ? "0" + hrs : hrs;
  let m = mins < 10 ? "0" + mins : mins;
  let s = sec < 10 ? "0" + sec : sec;
  display.innerText = `${h}:${m}:${s}`;
}
function startTimer() {
  if (timer) return;
  timer = setInterval(() => {
    sec++;
    if (sec === 60) {
      sec = 0;
      mins++;
      if (mins === 60) {
        mins = 0;
        hrs++;
      }
    }
    updateDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  [hrs, mins, sec] = [0, 0, 0];
  updateDisplay();
}
