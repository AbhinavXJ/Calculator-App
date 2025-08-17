// ---------------- Functions ----------------
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate(operator, firstNumber, secondNumber) {
    if (operator === "+") return add(firstNumber, secondNumber);
    if (operator === "-") return subtract(firstNumber, secondNumber);
    if (operator === "*") return multiply(firstNumber, secondNumber);
    if (operator === "/") {
        if (secondNumber === 0) {
            alert("Error: Division by 0!");
            return NaN;
        }
        return divide(firstNumber, secondNumber);
    }
    return NaN;
}

// ---------------- DOM Elements ----------------
let disp = document.querySelector(".disp");
let numButtons = document.querySelectorAll(".num");
let opButtons = document.querySelectorAll(".operator");
let equalBtn = document.querySelector(".equal");
let clearBtn = document.querySelector(".clear");

// ---------------- State ----------------
let arru = [];              // stores numbers & operators
let currentNumber = "";     // digits being typed

// ---------------- Event Listeners ----------------
numButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        currentNumber += btn.value;            // build number
        disp.textContent += btn.value;         // update display
    });
});

opButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (currentNumber !== "") {
            arru.push(Number(currentNumber));  // push last number
            currentNumber = "";
        }
        if (typeof arru[arru.length - 1] === "string") {
            // prevent double operator press
            arru[arru.length - 1] = btn.value;
        } else {
            arru.push(btn.value);
        }
        disp.textContent += " " + btn.value + " ";
    });
});

equalBtn.addEventListener("click", () => {
    if (currentNumber !== "") {
        arru.push(Number(currentNumber));  // push last number
        currentNumber = "";
    }

    // Evaluate left to right
    let result = arru[0];
    for (let i = 1; i < arru.length; i += 2) {
        let operator = arru[i];
        let nextNumber = arru[i + 1];
        result = operate(operator, result, nextNumber);
    }

    disp.textContent = result;
    arru = [result];  // allow chaining results
});

clearBtn.addEventListener("click", () => {
    disp.textContent = "";
    arru = [];
    currentNumber = "";
});
