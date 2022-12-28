const toggle = document.getElementsByClassName("toggleButton");
const numbers = document.querySelectorAll("#number");
const screen = document.getElementById("screen");
const del = document.getElementById("del");
let memory1;
let memory2;
let op;

function resultOp() {
    memory2 = screen.innerText
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

document.querySelectorAll(".key").forEach(function (key) {
  key.addEventListener("click", function (event) {
    const id = event.target.id;
    if (id == "number") {
      if (screen.innerText == 0) screen.innerText = event.target.innerText;
      else screen.innerText = screen.innerText + event.target.innerText;
    } else if (id == 'dot'){
        screen.innerText = screen.innerText + event.target.innerText;
    }
    else if (id == "sum") {
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
        op = 'reset';
    }
  });
});
