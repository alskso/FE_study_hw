const userInput = document.getElementById("userid");
const passInput = document.getElementById("password");
const loginBtn = document.getElementById("loginstart");

function okInput() {
  const idFilled = userInput.value.trim() !== "";
  const passFilled = passInput.value.length >= 8;

  if (idFilled && passFilled) {
    loginBtn.classList.add("active");
    loginBtn.disabled = false;
  } else {
    loginBtn.classList.remove("active");
    loginBtn.disabled = true;
  }
}

userInput.addEventListener("input", okInput);
passInput.addEventListener("input", okInput);
