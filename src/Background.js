const body = document.querySelector("body");
const image = [
  ["1.png", "#EAEAEA"],
  ["2.png", "#D0FFEB"],
  ["3.png", "#FFEBD0"],
  ["4.png", "#FFFFFF"]
];
const RanNumber = Math.floor(Math.random() * 3);
const chosen_image = image[RanNumber][0];
const chosen_Color = image[RanNumber][1];
console.log(chosen_image + "---" + chosen_Color);
const content = document.getElementById("context");

body.style.backgroundImage = `url('img/${chosen_image}')`;
content.style.backgroundColor = chosen_Color;
