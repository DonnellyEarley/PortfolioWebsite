var darkMode = false;

window.onload = function () {
  var theme = localStorage.getItem("theme");
  var links = document.querySelectorAll(".links a");

  if (theme === "dark") {
    darkMode = true;
    toggleDarkMode();
  }

  links.forEach(function (link) {
    if (link.href === window.location.href) {
      link.style.borderBottom = `2px solid ${darkMode ? "white" : "#333"}`;
    }
  });
};

function toggleDarkMode() {
  darkMode = !darkMode;
  const themeImage = document.getElementById("theme-image");
  const links = document.querySelectorAll(".links a");
  const codeSquare = document.getElementById("code-square");

  if (darkMode) {
    localStorage.setItem("theme", "dark");

    //body change
    document.body.classList.add("dark-mode");

    //theme button toggle icon change
    themeImage.src = "img/sun-fill.svg";

    //nav bar links change
    links.forEach(function (link) {
      link.style.color = "white";
      if (link.parentElement.className === "current") {
        link.parentElement.style["border-bottom"] = "2px solid black";
      } else {
        link.parentElement.style["border-bottom"] = "none";
      }
    });

    //code square color change
    codeSquare.src = "img/code-square-light.svg";
  } else {
    localStorage.setItem("theme", "light");

    //body change
    document.body.classList.remove("dark-mode");

    //theme button toggle icon change
    themeImage.src = "img/moon-fill.svg";

    //nav bar links change
    links.forEach(function (link) {
      link.style.color = "#333";
      if (link.parentElement.className === "current") {
        link.parentElement.style["border-bottom"] = "2px solid #333";
      } else {
        link.parentElement.style["border-bottom"] = "none";
      }
    });

    //code square color change
    codeSquare.src = "img/code-square-dark.svg";
  }
}
