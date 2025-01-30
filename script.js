// Set the date that I want to count down to
const countdownDate = new Date("June 16, 2025 00:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(() => {
  // Get today's date and time
  const now = new Date().getTime();

  // Calculate the time remaining
  const timeRemaining = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // If the countdown is over, display a message
  if (timeRemaining < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "slep can now appeal!";
  }
}, 1000);
