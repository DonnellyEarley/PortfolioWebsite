const theme = localStorage.getItem("theme");
var darkMode = false;

if(theme === 'dark'){
  darkMode = !darkMode;
}

function toggleDarkMode() {
  const themeImage = document.getElementById("theme-image");
  const links = document.querySelectorAll(".links a");
  const codeSquare = document.getElementById("code-square");

  if (darkMode) {
    localStorage.setItem("theme", "light");

    //dark mode local variable change
    darkMode = false;

    //body change
    document.body.classList.remove("dark-mode");

    //theme button toggle icon change
    themeImage.src = 'img/moon-fill.svg';

    //nav bar links change
    links.forEach(function (link) {
      link.style.color = "#333";
      link.style['border-bottom'] = '2px solid #333';
    });

    //code square color change
    codeSquare.src = "img/code-square-dark.svg";
  } else {
    localStorage.setItem("theme", "dark");

    //dark mode local variable change
    darkMode = true;

    //body change
    document.body.classList.add("dark-mode");

    //theme button toggle icon change
    themeImage.src = "img/sun-fill.svg";

    //nav bar links change
    links.forEach(function (link) {
      link.style.color = "white";
      link.style['border-bottom'] = '2px solid white';
    });

    //code square color change
    codeSquare.src = "img/code-square-light.svg";
  }
}
