document.addEventListener("click", handleClick);
var display = "";
var mathExpressionRegex =
  /^(0|[1-9][0-9]*)([+\-*/]?(\d+(\.\d+)?(?!.*\.{2,})\d*)?)*$/;

function handleClick(event) {
  const value = event.target.textContent;
  switch (value) {
    case "=":
      calculate();
      break;
    case "AC":
      clearDisplay();
      break;
    default:
      updateDisplay(value);
  }
}

function updateDisplay(value) {
  var expression = value;
  if (expression.length == 1) {
    document.getElementById("eval").textContent += expression;
    display += expression;
    console.log(document.getElementById("eval").textContent.length);
    if (expression == "+") {
      document.getElementById("display").textContent = "+";
      display = "";
    } else if (expression == "-") {
      document.getElementById("display").textContent = "-";
      display = "";
    } else if (expression == "*") {
      document.getElementById("display").textContent = "*";
      display = "";
    } else if (expression == "/") {
      document.getElementById("display").textContent = "/";
      display = "";
    } else {
      document.getElementById("display").textContent = display;
    }
  }
}

function calculate() {
  console.log(document.getElementById("eval").textContent);
  if (document.getElementById("eval").innerHTML == "&nbsp;") {
    clearDisplay();
  } else {
    const expression = document.getElementById("eval").textContent;
    var result = safeEval(expression);

    if (result !== null) {
      document.getElementById("display").textContent = result;
      document.getElementById("eval").textContent = result;
    } else {
      alert("Give a valid expression");
    }
  }
}

function clearDisplay() {
  document.getElementById("eval").innerHTML = "&nbsp;";
  document.getElementById("display").textContent = 0;
  display = "";
}

function safeEval(expression) {
  try {
    return eval(expression);
  } catch (error) {
    return null;
  }
}
