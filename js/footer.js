const countdownDate2 = new Date("February 26, 2025 00:00:00").getTime();

function updateCountdown2() {
    const now = new Date().getTime();
    const timeLeft = countdownDate2 - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days2").textContent = days;
    document.getElementById("hours2").textContent = hours;
    document.getElementById("minutes2").textContent = minutes;
    document.getElementById("seconds2").textContent = seconds;
}

setInterval(updateCountdown2, 1000);
