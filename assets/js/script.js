var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

var incrementFunction = document.getElementById("increment");
var decrementFunction = document.getElementById("decrement");

incrementFunction.addEventListener("click", increment);
decrementFunction.addEventListener("click", decrement);

function increment() {
    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = "black";
    }

    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    if (currentNumber <= 0) {
        currentNumberWrapper.style.color = "red";
    }

    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}