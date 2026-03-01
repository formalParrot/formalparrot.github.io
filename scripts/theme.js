document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const toggleBtn = document.getElementById("themeToggle");

  const images = [
    {
      element: document.getElementById("icons1"),
      base: "https://skillicons.dev/icons?i=html,css,js,py&perline=4",
    },
    {
      element: document.getElementById("icons2"),
      base: "https://skillicons.dev/icons?i=discord,github&perline=4",
    },
    {
      element: document.getElementById("icons3"),
      base: "https://skillicons.dev/icons?i=vscode,bash,sqlite&perline=4",
    },
    {
      element: document.getElementById("icons4"),
      base: "https://skillicons.dev/icons?i=apple,raspberrypi,linux,ubuntu&perline=4",
    },
  ];

  let theme =
    localStorage.getItem("theme") ||
    (html.classList.contains("dark") ? "dark" : "light");

  applyTheme(theme);

  toggleBtn.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", theme);
    applyTheme(theme);
  });

  function applyTheme(currentTheme) {
    html.classList.toggle("dark", currentTheme === "dark");

    images.forEach((img) => {
      img.element.src = `${img.base}&theme=${currentTheme}`;
    });
  }
});
