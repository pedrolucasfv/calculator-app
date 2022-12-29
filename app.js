const toggle = document.querySelector(".toggleButton");
const numbers = document.querySelectorAll("#number");
const themeOne = document.getElementById("theme-one");
const themeTwo = document.getElementById("theme-two");
const themeThree = document.getElementById("theme-three");

const screenId = document.getElementById("screen");
const screenClass = document.querySelector(".screen");

const header = document.querySelector('.header');
const keypad = document.querySelector('.keypad');
const keys = document.querySelectorAll('.key');

let memory1;
let memory2;
let op;

function resultOp() {
  memory2 = screenId.innerText;
  let result;
  switch (op) {
    case "sum":
      result = parseFloat(memory1) + parseFloat(memory2);
      op = "result";
      break;
    case "sub":
      result = parseFloat(memory1) - parseFloat(memory2);
      op = "result";
      break;
    case "mult":
      result = parseFloat(memory1) * parseFloat(memory2);
      op = "result";
      break;
    case "div":
      result = parseFloat(memory1) / parseFloat(memory2);
      op = "result";
      break;
    default:
      result = 0;
      break;
  }
  screenId.innerText = result;
}

themeOne.addEventListener("click", function (event) {
  if (toggle.classList.contains("togglePosition2")){
    toggle.classList.remove("togglePosition2");
    keypad.classList.remove("theme2")
  }

  else if (toggle.classList.contains("togglePosition3"))
    toggle.classList.remove("togglePosition3");
  toggle.classList.add("togglePosition1");
});
themeTwo.addEventListener("click", function (event) {
  if (toggle.classList.contains("togglePosition1"))
    toggle.classList.remove("togglePosition1");
  else if (toggle.classList.contains("togglePosition3"))
    toggle.classList.remove("togglePosition3");
  toggle.classList.add("togglePosition2");
  keypad.classList.add("theme3")
  keys.forEach(function(key) {
    key.classList.add("theme3")
  })
  screenClass.classList.add("theme3")
  header.classList.add("theme3")
});
themeThree.addEventListener("click", function (event) {
  if (toggle.classList.contains("togglePosition1"))
    toggle.classList.remove("togglePosition1");
  else if (toggle.classList.contains("togglePosition2"))
    toggle.classList.remove("togglePosition2");
  toggle.classList.add("togglePosition3");
});

keys.forEach(function (key) {
  key.addEventListener("click", function (event) {
    const id = event.target.id;
    if (id == "number") {
      if (screenId.innerText == 0) screenId.innerText = event.target.innerText;
      else screenId.innerText = screenId.innerText + event.target.innerText;
    } else if (id == "dot") {
      screenId.innerText = screenId.innerText + event.target.innerText;
    } else if (id == "sum") {
      memory1 = screenId.innerText;
      screenId.innerText = 0;
      op = "sum";
    } else if (id == "sub") {
      memory1 = screenId.innerText;
      screenId.innerText = 0;
      op = "sub";
    } else if (id == "div") {
      memory1 = screenId.innerText;
      screenId.innerText = 0;
      op = "div";
    } else if (id == "mult") {
      memory1 = screenId.innerText;
      screenId.innerText = 0;
      op = "mult";
    } else if (id == "del") {
      let aux = screenId.innerText.split("");
      aux.pop();
      if (aux.length == 0 || op == "result") {
        screenId.innerText = 0;
      } else screenId.innerText = aux.join("");
    } else if (id == "equal") {
      resultOp();
    } else if (id == "reset") {
      screenId.innerText = 0;
      op = "reset";
    }
  });
});
