var darkMode = false;

window.onload = async function () {
  DarkReader.auto({brightness:95, contrast:90, sepia:0});
};

function toggleDarkMode(){
  darkMode = !darkMode;
  if(darkMode){
    DarkReader.enable({ brightness: 95, contrast: 90, sepia: 0 });
  }else{
    DarkReader.disable();
  }
}

function goToGitRepo(){
  window.open("https://github.com/DonnellyEarley/PortfolioWebsite", "_blank");
}
