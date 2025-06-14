// -----------------------------------------------------
// 공감 버튼
const voteButton = document.getElementById("vote_button");
const voteCount = document.querySelector(".vote_count");

let isVoted = false;

voteButton.addEventListener("click", () => {
  const countV = parseInt(voteCount.textContent, 10);
  voteCount.textContent = isVoted ? countV - 1 : countV + 1;
  isVoted = !isVoted;
});

// -----------------------------------------------------
// 스크랩 버튼
const starButton = document.getElementById("star_button");
const starCount = document.querySelector(".star_count");
const starText = document.querySelector(".star_text");

let isScrapped = false;

starButton.addEventListener("click", () => {
  const countS = parseInt(starCount.textContent, 10);
  isScrapped = !isScrapped;
  starCount.textContent = isScrapped ? countS + 1 : countS - 1;
  starText.textContent = isScrapped ? "스크랩 취소" : "스크랩";
});

// ------------------------------------
// 댓글 수 증가
function increaseCommentCount() {
  const countSpan = document.querySelector(".comment_count");
  if (countSpan) {
    const current = parseInt(countSpan.textContent, 10);
    countSpan.textContent = current + 1;
  }
}

// ------------------------------------
// 댓글 작성
const submitBtn = document.getElementById("submit_comment");
const commentArea = document.getElementById("comment_area");

submitBtn.addEventListener("click", () => {
  const input = document.querySelector(".comment_input");
  const text = input.value.trim();
  if (!text) return;

  const template = document.getElementById("comment_template");
  const clone = template.content.cloneNode(true);
  clone.querySelector(".comment_content").textContent = text;

  commentArea.appendChild(clone);
  input.value = "";

  increaseCommentCount();
});

// ------------------------------------
// 대댓글 입력창 띄우기
commentArea.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("new_comment")) {
    const commentBox = e.target.closest(".comment_box");

    // 이미 입력창이 있으면 추가 생성 안 함
    if (commentBox.querySelector(".recomment_area")) return;

    const replyTemplate = document.getElementById("reply_input_template");
    const replyClone = replyTemplate.content.cloneNode(true);
    commentBox.appendChild(replyClone);
  }
});

// ------------------------------------
// 대댓글 작성
document.addEventListener("click", (e) => {
  if (e.target.closest(".recomment_submit")) {
    const form = e.target.closest(".recomment_area");
    const input = form.querySelector(".recomment_input");
    const text = input.value.trim();
    if (!text) return;

    const rereTemplate = document.getElementById("rerecomment_template");
    const rereClone = rereTemplate.content.cloneNode(true);
    rereClone.querySelector(".rerecomment_content").textContent = text;

    const commentBox = form.closest(".comment_box");
    commentBox.appendChild(rereClone);

    form.remove();

    increaseCommentCount();
  }
});
