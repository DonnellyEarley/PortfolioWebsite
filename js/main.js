var darkMode = false;

window.onload = function () {
  var theme = localStorage.getItem("theme");
  var links = document.querySelectorAll(".links a");

  if (theme === "dark") {
    toggleDarkMode();
  }

  links.forEach((link) => {
    //if the current page is the link, add a border to the link
    if (link.href === window.location.href) {
        link.classList.add(darkMode ? "darkmode" : "normal");
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

    //code square color change
    codeSquare.src = "img/code-square-light.svg";

    //nav bar links change
    links.forEach(function (link) {
      link.style.color = "white";
      if (link.href === window.location.href) {
        link.classList.remove('normal');
        link.classList.add('darkmode');
      } else {
        link.classList.remove();
      }
    });
  } else {
    localStorage.setItem("theme", "light");

    //body change
    document.body.classList.remove("dark-mode");

    //theme button toggle icon change
    themeImage.src = "img/moon-fill.svg";

    //code square color change
    codeSquare.src = "img/code-square-dark.svg";

    //nav bar links change
    links.forEach(function (link) {
      link.style.color = "black";
      if (link.href === window.location.href) {
        link.classList.add("normal");
        link.classList.remove("darkmode");
      } else {
        link.classList.remove();
      }
    });
  }
}
