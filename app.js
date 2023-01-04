const toggleButton = document.querySelector(".toggleButton");
const toggleBackground = document.querySelector(".toggleBackground")
const numbers = document.querySelectorAll("#number");
const themeOne = document.getElementById("theme-one");
const themeTwo = document.getElementById("theme-two");
const themeThree = document.getElementById("theme-three");

const screenId = document.getElementById("screen");
const screenClass = document.querySelector(".screen");

const header = document.querySelector('.header');
const keypad = document.querySelector('.keypad');
const keys = document.querySelectorAll('.key');
const body = document.querySelector('body');

let memory1;
let memory2;
let op;

function toggleTheme(theme, toggle) {
  if(toggle == 'add'){
  keypad.classList.add(theme)
  keys.forEach(function(key) {
    key.classList.add(theme)
  })
  screenClass.classList.add(theme)
  header.classList.add(theme)
  toggleBackground.classList.add(theme)
  body.classList.add(theme)
}
  if(toggle == 'remove'){
    keypad.classList.remove(theme)
    keys.forEach(function(key) {
      key.classList.remove(theme)
    })
    screenClass.classList.remove(theme)
    header.classList.remove(theme)
    toggleBackground.classList.remove(theme)
    body.classList.remove(theme)
  }
}

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
  if (toggleButton.classList.contains("togglePosition2")){
    toggleButton.classList.remove("togglePosition2");
    toggleTheme('theme2', 'remove')
  }

  else if (toggle.classList.contains("togglePosition3")){
  toggleButton.classList.remove("togglePosition3");
  toggleTheme('theme3', 'remove')
  }
  toggleButton.classList.add("togglePosition1");
  toggleTheme('theme1', 'add')
});

themeTwo.addEventListener("click", function (event) {
  if (toggleButton.classList.contains("togglePosition1")){
  toggleButton.classList.remove("togglePosition1");
  toggleTheme('theme1', 'remove')
  }
  else if (toggleButton.classList.contains("togglePosition3")){
  toggleButton.classList.remove("togglePosition3");
  toggleTheme('theme3', 'remove')
  }
  toggleButton.classList.add("togglePosition2");
  toggleTheme('theme2', 'add')
});

themeThree.addEventListener("click", function (event) {
  if (toggleButton.classList.contains("togglePosition1")){
     toggleButton.classList.remove("togglePosition1");
     toggleTheme('theme1', 'remove')
  }
  else if (toggleButton.classList.contains("togglePosition2")){
     toggleButton.classList.remove("togglePosition2");
    toggleTheme('theme2', 'remove')
  }
  toggleButton.classList.add("togglePosition3");
  toggleTheme('theme3', 'add')
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
