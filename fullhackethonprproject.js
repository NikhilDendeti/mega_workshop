const endDate = new Date();
endDate.setDate(endDate.getDate() + 7);

// Function to update the timer
function updateTimer() {
    const now = new Date();
    const timeDifference = endDate - now;

    if (timeDifference <= 0) {
        // Timer expired
        document.getElementById('timer').innerHTML = "Timer expired!";
    } else {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
    }
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to set up the timer
updateTimer();


let plusIconEl = document.getElementById("plusIcon");


plusIconEl.addEventListener("click", () => {
    plusIconEl.classList.toggle("rotate");
});