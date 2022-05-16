const d = new Date();
let hours = d.getHours();
let text = d.toLocaleTimeString();

let demo = document.getElementById("demo");
demo.innerHTML = text;

let box = document.getElementById("box");

if (hours >= 0 && hours <= 6) {
  box.style.backgroundColor = "blue";
} else if (hours >= 18 && hours <= 23) {
  box.style.backgroundColor = "black";
}
