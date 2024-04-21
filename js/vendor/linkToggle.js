document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".links li a");

  links.forEach(function (link) {
    if (link.href === window.location.href) {
      link.parentElement.classList.add("current");
    }
  });
});
