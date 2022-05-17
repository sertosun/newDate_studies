function new_clock() {
  const d = new Date();
  let hours = d.getHours();
  let text = d.toLocaleTimeString();

  let actTime = document.getElementById("actTime");
  actTime.innerHTML = text;

  let box = document.getElementById("box");

  if (hours >= 0 && hours <= 6) {
    let subTit = document.getElementById("subTit");
    box.style.backgroundColor = "blue";
    subTit.style.color = "yellow";
  } else if (hours >= 6 && hours <= 12) {
    box.style.backgroundColor = "yellow";
    subTit.style.color = "red";
  } else if (hours >= 12 && hours <= 18) {
    box.style.backgroundColor = "red";
    subTit.style.color = "yellow";
  } else {
    box.style.backgroundColor = "black";
    subTit.style.color = "white";
  }

  setTimeout(new_clock, 1000);
}

new_clock();
