const pen = document.getElementById("pencil");
const inputWrite = document.getElementById("input-write");
const question = document.getElementById("question");
const postInput = document.querySelector(".post_input");


pen.addEventListener("click", () => {
  inputWrite.style.display = "none";
  postInput.style.display = "block";
});

const quecheck = document.getElementById("question");
const questionInfo = document.getElementById("question_info");

question.addEventListener("change", () => {
  if (quecheck.checked) {
    questionInfo.style.display = "block";
  } else {
    questionInfo.style.display = "none";
  }
});