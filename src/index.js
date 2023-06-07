const t3 = document.querySelector(".theme-3");
const t2 = document.querySelector(".theme-2");
const t1 = document.querySelector(".theme-1");
const container = document.querySelector(".container");
const toggle = document.querySelector(".toggle-container");
const screen = document.querySelector(".screen");

function toggleOne() {
  container.classList.remove("theme2");
  toggle.classList.remove("theme-two");
  container.classList.remove("theme3");
  toggle.classList.remove("theme-three");
}

function toggleTwo() {
  container.classList.add("theme2");
  toggle.classList.add("theme-two");
}

function toggleThree() {
  container.classList.add("theme3");
  toggle.classList.add("theme-three");
  container.classList.remove("theme2");
  toggle.classList.remove("theme-two");
}

function reset() {
  screen.textContent = "";
}

function add(value) {
  screen.textContent += value;
}

function del() {
  screen.textContent = screen.textContent.slice(
    0,
    screen.textContent.length - 1
  );
}

function calcu() {
  if (eval(screen.textContent)) {
    if (eval(screen.textContent) == "Infinity") {
      screen.textContent = "error";
    } else {
      screen.textContent = eval(screen.textContent);
    }
  } else if (eval(screen.textContent) == 0) {
    screen.textContent = eval(screen.textContent);
  } else {
    screen.textContent = "error";
  }
}
