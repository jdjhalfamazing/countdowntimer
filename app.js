const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const countdown = setInterval(() => {
  const targetDate = new Date("2023-05-01T00:00:00").getTime();
  const currentDate = new Date().getTime();
  const difference = targetDate - currentDate;

  const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutesLeft = Math.floor(
    (difference % (1000 * 60 * 60)) / (1000 * 60)
  );
  const secondsLeft = Math.floor((difference % (1000 * 60)) / 1000);

  days.innerHTML = `${daysLeft}d`;
  hours.innerHTML = `${hoursLeft}h`;
  minutes.innerHTML = `${minutesLeft}m`;
  seconds.innerHTML = `${secondsLeft}s`;

  if (difference < 0) {
    clearInterval(countdown);
    days.innerHTML = "0d";
    hours.innerHTML = "0h";
    minutes.innerHTML = "0m";
    seconds.innerHTML = "0s";
  }
}, 1000);
