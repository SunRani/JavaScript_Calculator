document.addEventListener("click", handleClick);
var display = "";
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

    document.getElementById("eval").textContent = document
      .getElementById("eval")
      .textContent.replace(/(\.\d*)\./g, "$1");
    document.getElementById("eval").textContent = document
      .getElementById("eval")
      .textContent.replace(/0{2,}/g, "0");
    display = display.replace(/(\.\d*)\./g, "$1");
    display = display.replace(/0{2,}/g, "0");

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
    const lastOperatorIndex = findLastOperator(expression);

    if (lastOperatorIndex !== -1) {
      const lastOperator = expression[lastOperatorIndex];
      const operand1 = expression.substring(0, lastOperatorIndex);
      const operand2 = expression.substring(lastOperatorIndex + 1);

      // Evaluate the expression using the last operator and operands
      const result = safeEval(operand1 + lastOperator + operand2);
      //var result = safeEval(expression);

      if (result !== null) {
        document.getElementById("display").textContent = result;
        document.getElementById("eval").textContent = result;
      }
    }
  }
}

function findLastOperator(expression) {
  let lastOperatorIndex = -1;

  for (let i = expression.length - 1; i >= 0; i--) {
    if ("+-*/".includes(expression[i])) {
      // If lastOperatorIndex is -1 or the previous character is not an operator,
      // consider the current character as the last non-consecutive operator
      if (lastOperatorIndex === -1 || !"+-*/".includes(expression[i - 1])) {
        lastOperatorIndex = i;
        break;
      }
    }
  }

  return lastOperatorIndex;
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
