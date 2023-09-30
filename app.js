const color = document.getElementById("color");
const hex = document.getElementById("hex");
const color_boxes = document.querySelector(".color_boxes");

let colorArray = localStorage.getItem("item")
  ? JSON.parse(localStorage.getItem("item"))
  : [];

colorArray.forEach(divMaker);

function divMaker(text) {
  const div = document.createElement("div");
  div.className = "box";
  div.style.background = text.hex_code;
  div.innerHTML =
    `<h2> ${text.color_name} </h2>` + `<h2> ${text.hex_code} </h2>`;
  color_boxes.appendChild(div);
}

function Add() {
  let color_info = {
    color_name: color.value,
    hex_code: hex.value,
  };
  colorArray.push(color_info);
  localStorage.setItem("item", JSON.stringify(colorArray));
  divMaker(colorArray[colorArray.length - 1]);
  color.value = "";
  hex.value = "";
}

function Del() {
  localStorage.clear();
  colorArray = [];
  color_boxes.innerHTML = "";
}
