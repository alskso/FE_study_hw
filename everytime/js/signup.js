const userInput = document.getElementById("user");
const useridInput = document.getElementById("userid");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");
const repassInput = document.getElementById("repassword");
const loginBtn = document.getElementById("newlogin");

function okInput() {
  const allFilled =
    userInput.value.trim() !== "" &&
    useridInput.value.trim() !== "" &&
    emailInput.value.trim() !== "" &&
    repassInput.value.trim() !== "";

  const passFilled = passInput.value.length >= 8;

  if (allFilled && passFilled) {
    loginBtn.classList.add("active");
    loginBtn.disabled = false; // true
  } else {
    loginBtn.classList.remove("active");
    loginBtn.disabled = true; // false
  }
}

userInput.addEventListener("input", okInput);
passInput.addEventListener("input", okInput);