const colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink"];
const btn = document.getElementById("btn");
const textColor = document.querySelector(".bg-color");

btn.addEventListener("click", function () {
  // get random color from colors array
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  // set background body color
  document.body.style.backgroundColor = randomColor;
  // set text color
  textColor.textContent = randomColor;
});
