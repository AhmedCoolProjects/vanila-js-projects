// -------------------- data --------------------
/**
 * @description users array
 */
let users = [
  {
    id: "123456789",
    createdDate: "2021-01-06T00:00:00.000Z",
    status: "En validation",
    firstName: "Mohamed",
    lastName: "Taha",
    userName: "mtaha",
    registrationNumber: "2584",
  },
  {
    id: "987654321",
    createdDate: "2021-07-25T00:00:00.000Z",
    status: "Validé",
    firstName: "Hamid",
    lastName: "Orrich",
    userName: "horrich",
    registrationNumber: "1594",
  },
  {
    id: "852963741",
    createdDate: "2021-09-15T00:00:00.000Z",
    status: "Rejeté",
    firstName: "Rachid",
    lastName: "Mahidi",
    userName: "rmahidi",
    registrationNumber: "3576",
  },
];
/**
 * @description users html table
 */
let users_table = document
  .getElementById("table-users")
  .getElementsByTagName("tbody")[0];
/**
 * @description form modal to add new user
 */
let form = document.getElementById("modal-form");
// ---------------------functions---------------------
/**
 * @param {Array<any>} local_users
 * @param {HTMLElement} local_users_table
 * @description add local_users array to html local_users_table
 */
function addUsersToTable(local_users, local_users_table) {
  local_users_table.innerHTML = "";
  local_users.forEach((user) => {
    let row = document.createElement("tr");
    row.setAttribute("data-id", user.id);
    row.innerHTML = `
    <td>${user.id}</td>
    <td>${new Date(user.createdDate).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })}</td>
    <td>
      <p class="status-cell ${
        user.status === "En validation"
          ? "on-validation"
          : user.status === "Rejeté"
          ? "rejected"
          : "valide"
      }">
        ${user.status}
      </p>
    </td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.userName}</td>
    <td>${user.registrationNumber}</td>
    <td data-id="${user.id}">
      <a onclick='deleteRow(${user.id})'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fill="none" fill-rule="evenodd" stroke="#4A4A4A">
            <path
              d="M5.5 7.5V20A1.5 1.5 0 0 0 7 21.5h11a1.5 1.5 0 0 0 1.5-1.5V7.5h-14z"
            />
            <path
              stroke-linecap="round"
              d="M8.5 10.41v8.18M12.5 10.41v8.18M16.5 10.41v8.18M9 4.333V3.244C9 2.557 9.627 2 10.4 2h4.2c.773 0 1.4.557 1.4 1.244v1.09"
            />
            <rect width="18" height="3" x="3.5" y="4.5" rx="1.5" />
          </g>
        </svg>
      </a>
    </td>
    `;
    local_users_table.appendChild(row);
  });
}
/**
 * @description generate id for new user
 * @returns {string} id
 */
function generateId() {
  let ids_list = users.map((user) => user.id);
  let id = Math.max(...ids_list) + 1;
  return id.toString();
}
/**
 * @param {HTMLElement} form
 * @description add new user to users array from data in the form param
 */
function addUserToTable(form) {
  let user = {
    id: generateId(),
    createdDate: new Date(form.elements["created-at"].value).toISOString(),
    status: form.elements["etat"].value,
    firstName: form.elements["nom"].value,
    lastName: form.elements["prenom"].value,
    userName: form.elements["username"].value,
    registrationNumber: form.elements["matricule"].value,
  };
  users.push(user);
  addUsersToTable(users, users_table);
}
/**
 * @param {String} id
 * @description delete user from users array and then build the html table with the new user array
 */
function deleteRow(id) {
  users = users.filter((user) => user.id != id);
  addUsersToTable(users, users_table);
}
/**
 * @description this will listen to the submit button in the form modal, then run
 */
form.addEventListener("submit", function (event) {
  event.preventDefault();
  addUserToTable(form);
  form.reset();
  closeModal();
});
// ---------------------run default functions---------------------
addUsersToTable(users, users_table);
