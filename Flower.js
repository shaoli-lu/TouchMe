var element = document.createElement("img");
element.src = "Flower.jpg";
document.body.appendChild(element);
element.style.opacity = 0;
element.style.transition = "opacity 10s";

function act() {
  let bw = document.getElementById('bw')
  bw.innerHTML = "";
  element.style.opacity = 1;
}