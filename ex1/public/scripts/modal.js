// ------------------data-------------------
/**
 * @description get modal, (the biggest one)
 */
const modal = document.getElementById("modal");
/**
 * @description get modal container, (inside the modal)
 */
const modal_container = document.getElementById("modal-form-container");
/**
 * @description btn to open the modal, to add new user
 */
const add_user_btn = document.getElementById("add-user-btn-container");
// ------------------functions-------------------
/**
 * @description open the modal
 */
add_user_btn.addEventListener("click", function () {
  modal.style.display = "flex";
});
/**
 * @description close the model function when clicking on it, (not on the modal_container)
 */
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
/**
 * @description close the model function
 */
function closeModal() {
  modal.style.display = "none";
}
