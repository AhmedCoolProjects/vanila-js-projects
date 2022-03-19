let count = 0;
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const countText = document.getElementById("counter-number");

// increment
incrementBtn.addEventListener("click", function () {
  count++;
  countText.textContent = count;
  changeCountTextColor();
});
// decrement
decrementBtn.addEventListener("click", function () {
  count--;
  countText.textContent = count;
  changeCountTextColor();
});
// reset
resetBtn.addEventListener("click", function () {
  count = 0;
  countText.textContent = count;
  changeCountTextColor();
});
// change countText color
function changeCountTextColor() {
  if (count === 0) countText.style.color = "black";
  else if (count > 0) countText.style.color = "green";
  else countText.style.color = "red";
}
