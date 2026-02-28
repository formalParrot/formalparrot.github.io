function updateClock() {
  const now = new Date();

  // Format the time for a specific timezone
  const options = {
    timeZone: "Asia/Tbilisi", // Set desired timezone
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  const timeString = formatter.format(now);

  // Update the HTML element
  document.getElementById("clock-display").textContent = timeString;
}

// Run immediately, then every second
updateClock();
setInterval(updateClock, 1000);
