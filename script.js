const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const button = document.getElementById("notify-button");
const closeButton = document.getElementsByClassName("close")[0];
const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const inputSubmit = document.getElementById("input-submit");
const successMessage = document.getElementById("submit-success");
const infoMessage = document.getElementById("info");

function resetModal() {
  modal.style.display = "none";
  emailInput.value = "";
  emailError.innerHTML = "";
  setTimeout(function () {
    infoMessage.style.display = "block";
    form.style.display = "block";
    successMessage.style.display = "none";
    modalContent.style.display = "block";
  }, 500);
}

button.onclick = function () {
  modal.style.display = "flex";
};

closeButton.onclick = function () {
  resetModal();
};

window.onclick = function (event) {
  if (event.target == modal) {
    resetModal();
  }
};

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // check if email is valid
  const email = emailInput.value;
  const emailPattern = /\S+@\S+\.\S+/;
  if (!emailPattern.test(email)) {
    emailError.innerHTML = "* Please enter a valid email address.";
    return;
  }

  // submit form
  modalContent.style = { display: "flex", flexDirection: "column" };
  infoMessage.style.display = "none";
  successMessage.style.display = "flex";
  form.style.display = "none";
});
