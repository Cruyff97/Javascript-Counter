let counterDisplayElem = document.querySelector(".counter-display");
let counterMinusElem = document.querySelector(".counter-minus");
let counterPlusElem = document.querySelector(".counter-plus");

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click", () => {
  count++;
  //test
  updateDisplay();
});

counterMinusElem.addEventListener("click", () => {
  count--;
  updateDisplay();
});

function updateDisplay() {
  counterDisplayElem.innerHTML = count;
}

document.addEventListener("keydown", (e) => {
  if (e.key == "-") {
    count--;
    updateDisplay();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key == "+") {
    count++;
    updateDisplay();
  }
});
