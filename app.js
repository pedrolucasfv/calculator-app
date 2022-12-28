const toggle = document.querySelector(".toggleButton");
const numbers = document.querySelectorAll("#number");
const screen = document.getElementById("screen");
const themeOne = document.getElementById("theme-one");
const themeTwo = document.getElementById("theme-two");
const themeThree = document.getElementById("theme-three");

let memory1;
let memory2;
let op;

function resultOp() {
  memory2 = screen.innerText;
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
  screen.innerText = result;
}

themeOne.addEventListener("click", function (event) {
  if (toggle.classList.contains("togglePosition2"))
    toggle.classList.remove("togglePosition2");
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
});
themeThree.addEventListener("click", function (event) {
  if (toggle.classList.contains("togglePosition1"))
    toggle.classList.remove("togglePosition1");
  else if (toggle.classList.contains("togglePosition2"))
    toggle.classList.remove("togglePosition2");
  toggle.classList.add("togglePosition3");
});

document.querySelectorAll(".key").forEach(function (key) {
  key.addEventListener("click", function (event) {
    const id = event.target.id;
    if (id == "number") {
      if (screen.innerText == 0) screen.innerText = event.target.innerText;
      else screen.innerText = screen.innerText + event.target.innerText;
    } else if (id == "dot") {
      screen.innerText = screen.innerText + event.target.innerText;
    } else if (id == "sum") {
      memory1 = screen.innerText;
      screen.innerText = 0;
      op = "sum";
    } else if (id == "sub") {
      memory1 = screen.innerText;
      screen.innerText = 0;
      op = "sub";
    } else if (id == "div") {
      memory1 = screen.innerText;
      screen.innerText = 0;
      op = "div";
    } else if (id == "mult") {
      memory1 = screen.innerText;
      screen.innerText = 0;
      op = "mult";
    } else if (id == "del") {
      let aux = screen.innerText.split("");
      aux.pop();
      if (aux.length == 0 || op == "result") {
        screen.innerText = 0;
      } else screen.innerText = aux.join("");
    } else if (id == "equal") {
      resultOp();
    } else if (id == "reset") {
      screen.innerText = 0;
      op = "reset";
    }
  });
});
