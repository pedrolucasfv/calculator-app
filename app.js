const toggle = document.getElementsByClassName("toggleButton");
const numbers = document.querySelectorAll("#number");
const screen = document.getElementById("screen");
const del = document.getElementById("del");
let memory;

document.querySelectorAll(".key").forEach(function (key) {
  key.addEventListener("click", function (event) {
    const id = event.target.id;
    if (id == "number") {
      if (screen.innerText == 0) screen.innerText = event.target.innerText;
      else screen.innerText = screen.innerText + event.target.innerText;
    } else if (id == "reset") screen.innerText = 0;
    else if (id == "del") {
      let aux = screen.innerText.split("");
      aux.pop();
      if (aux.length == 0) {
        screen.innerText = 0;
      } else screen.innerText = aux.join("");
    }
  });
});
