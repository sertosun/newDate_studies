function new_clock() {
  const d = new Date();
  let hours = d.getHours();
  let text = d.toLocaleTimeString();

  let actTime = document.getElementById("actTime");
  actTime.innerHTML = text;

  let box = document.getElementById("box");

  let subTit = document.getElementById("subTit");

  if (hours >= 0 && hours <= 6) {
    box.style.backgroundColor = "blue";
  } else if (hours >= 6 && hours <= 12) {
    box.style.backgroundColor = "yellow";
  } else if (hours >= 12 && hours <= 18) {
    box.style.backgroundColor = "red";
  } else {
    box.style.backgroundColor = "black";
  }

  setTimeout(new_clock, 1000);
}

new_clock();
