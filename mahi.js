let timer;
let timeLeft = 25 * 60;
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const alarmSound = document.getElementById("alarm");

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
    const seconds = (timeLeft % 60).toString().padStart(2, '0');
    timerDisplay.textContent = `${minutes}:${seconds}`;
}

function setMode(minutes) {
    stopTimer();
    timeLeft = minutes * 60;
    updateDisplay();
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timer);
            alarmSound.play();
            isRunning = false;
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    timeLeft = 25 * 60;
    updateDisplay();
    pauseTimer();
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 0;
    updateDisplay();
}

updateDisplay();
