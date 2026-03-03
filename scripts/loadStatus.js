async function loadStatus() {
  try {
    const response = await fetch(
      "https://gist.githubusercontent.com/formalParrot/17f5ade178e5c4a3002c00152f66148a/raw/status.json?nocache=" +
        Date.now(),
    );
    const data = await response.json();
    document.getElementById("status-text").textContent = data.status;
  } catch (error) {
    document.getElementById("status-text").textContent = "Status unavailable";
  }
}

loadStatus();
