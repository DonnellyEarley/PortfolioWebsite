const theme = localStorage.getItem("theme");
var darkMode = false;

function toggleDarkMode() {
  const themeImage = document.getElementById("theme-image");
  const links = document.querySelectorAll(".links a");
  const codeSquare = document.getElementById("code-square");

  if (darkMode) {
    //dark mode local variable change
    darkMode = false;

    //body change
    document.body.classList.remove("dark-mode");

    //theme button toggle icon change
    themeImage.src = 'img/moon-fill.svg';

    //nav bar links change
    links.forEach(function (link) {
      link.style.color = "#333";
    });

    //code square color change
    codeSquare.src = "img/code-square-dark.svg";
  } else {
    //dark mode local variable change
    darkMode = true;

    //body change
    document.body.classList.add("dark-mode");

    //theme button toggle icon change
    themeImage.src = "img/sun-fill.svg";

    //nav bar links change
    links.forEach(function (link) {
      link.style.color = "white";
    });

    //code square color change
    codeSquare.src = "img/code-square-light.svg";
  }
}
