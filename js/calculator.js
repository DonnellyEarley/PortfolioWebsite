// Get the display element
const display = document.getElementById("display");

// Get all the button elements
const buttons = document.querySelectorAll("button");

// Initialize the display value
let currentValue = "";
let previousExpression = "";

// Add event listeners to each button
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonText = e.target.textContent;

    // Handle number buttons
    if (!isNaN(buttonText)) {
      currentValue += buttonText;
      display.value = currentValue;
    }

    // Handle operator buttons
    else if (
      buttonText === "+" ||
      buttonText === "-" ||
      buttonText === "*" ||
      buttonText === "/"
    ) {
      currentValue += buttonText;
      display.value = currentValue;
    }

    // Handle equals button
    else if (buttonText === "=") {
      try {
        const result = eval(currentValue);
        display.value = result;
        currentValue = result;
        previousExpression = currentValue; // store the previous expression
      } catch (error) {
        display.value = "Error";
        currentValue = "";
      }
    }

    // Handle decimal button
    else if (buttonText === ".") {
      if(!currentValue.includes('.')){
          currentValue += buttonText;
      }
      display.value = currentValue;
    }

    // Handle clear button
    else if (buttonText === "C") {
      currentValue = "";
      display.value = "";
    }
  });
});

// Add event listener for key presses
document.addEventListener("keydown", (e) => {
  const keyValue = e.key;

  // Handle number keys
  if (!isNaN(keyValue)) {
    currentValue += keyValue;
    display.value = currentValue;
  }

  // Handle operator keys
  else if (keyValue === "+" || keyValue === "-" || keyValue === "*" || keyValue === "/") {
    if (previousExpression !== "") {
      currentValue = previousExpression + keyValue; // apply the previous expression
    } else {
      currentValue += keyValue;
    }
    display.value = currentValue;
  }

  // Handle equals key
  else if (keyValue === "=" || keyValue === "Enter") {
    try {
      const result = eval(currentValue);
      display.value = result;
      currentValue = result;
      previousExpression = currentValue; // store the previous expression
    } catch (error) {
      display.value = "Error";
      currentValue = "";
    }
  }

  // Handle decimal key
  else if (keyValue === ".") {
    if (!currentValue.includes(".")) {
      currentValue += ".";
    }
    display.value = currentValue;
  }

  // Handle clear key
  else if (keyValue === "Delete" || keyValue === "c" || keyValue === "Escape") {
    currentValue = "";
    display.value = "";
  }
});
