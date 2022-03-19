const hexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colorText = document.querySelector(".bg-color");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let hexColor = "#";
  // loop through hexArray and get random hex value
  for (let i = 0; i < 6; i++) {
    hexColor += hexArray[Math.floor(Math.random() * hexArray.length)];
  }
  // set background color
  document.body.style.backgroundColor = hexColor;
  // set text color
  colorText.textContent = hexColor;
});
