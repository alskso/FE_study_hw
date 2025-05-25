// // 공감 버튼
// const voteButton = document.getElementById("vote_button");
// const voteCount = document.querySelector(".vote_count");

// let isVoted = false;

// voteButton.addEventListener("click", () => {
//   let countV = Number(voteCount.textContent); //parseInt는 문자열에서 앞쪽 숫자만 파싱함
//   // Number는 문자열에 숫자만 있을 때만 사용이 가능하다
//   if (!isVoted) {
//     //공감버튼을 눌렀을 때
//     voteCount.textContent = countV + 1;
//     isVoted = true;
//   } else {
//     voteCount.textContent = countV - 1;
//     isVoted = false;
//   }
//   3;
// });
// //---------------------------------------------------
// // 스크랩 버튼
// const starButton = document.getElementById("star_button");
// const starCount = document.querySelector(".star_count");
// const starText = document.querySelector(".star_text");

// let isScrapped = false;

// starButton.addEventListener("click", () => {
//   let countS = Number(starCount.textContent);

//   if (!isScrapped) {
//     starCount.textContent = countS + 1;
//     starText.textContent = "스크랩 취소";
//     isScrapped = true;
//   } else {
//     starCount.textContent = countS - 1;
//     starText.textContent = "스크랩";
//     isScrapped = false;
//   }
// });
// // ---------------
// // 댓글을 입력했을 때 댓글창 띄우기
// const submitBtn = document.getElementById("submit_comment");

// submitBtn.addEventListener("click", () => {
//   const input = document.querySelector(".comment_input");
//   const inputText = input.value.trim();
//   if (inputText === "") return;

//   const commentBox = document.createElement("div");
//   commentBox.className = "comment_box";
//   commentBox.style.display = "block";

//   commentBox.innerHTML = `
//     <div class="comment_title">
//       <div class="comment_profile">
//         <img src="/everytime/img/anonymous.profile.png" alt="profile">
//         <p class="comment_name">익명</p>
//       </div>
//       <ul class="comment_etc">
//         <li><a href="#" class="new_comment">대댓글</a></li>
//         <li><a href="#">공감</a></li>
//         <li><a href="#">쪽지</a></li>
//         <li><a href="#">신고</a></li>
//       </ul>
//     </div>
//     <p class="comment_content">${inputText}</p>
//     <div class="time">방금 전</div>
//   `;

//   const commentArea = document.getElementById("comment_area");
//   commentArea.appendChild(commentBox);

//   input.value = "";
// });

// // 대댓글을 클릭했을 때 입력창 나오기

// // 대댓글 입력창 생성 (이벤트 위임 사용)
// document.getElementById("comment_area").addEventListener("click", (e) => {
//   if (e.target && e.target.classList.contains("new_comment")) {
//     const commentBox = e.target.closest(".comment_box");

//     // 이미 입력창이 있으면 또 생성하지 않음
//     if (commentBox.querySelector(".replay_box2")) return;

//     const replayBox2 = document.createElement("div");
//     replayBox2.className = "replay_box2";
//     replayBox2.style.display = "block";

//     replayBox2.innerHTML = `
//       <form class="replay_write">
//         <input type="text" placeholder=" 대댓글을 입력하세요" class="replay_comment_input">
//         <ul class="right">
//           <li class="no_name">
//             <input type="checkbox" id="anonymous" />
//             <label for="anonymous">익명</label>
//           </li>
//           <button type="button" id="replay_submit_comment">
//             <img src="/everytime/img/container.articles.write.submit.png" alt="입력">
//           </button>
//         </ul>
//       </form>
//     `;

//     commentBox.appendChild(replayBox2);
//   }
// });

// // 대댓글을 입력했을 때 댓글창 띄우기
// const replay_submitBtn = document.getElementById("replay_submit_comment");

// replay_submitBtn.addEventListener("click", () => {
//   const replay_input = document.querySelector(".replay_comment_input");
//   const replay_inputText = replay_input.value.trim();
//   if (replay_inputText === "") return;

//   const replay_commentBox = document.createElement("div");
//   replay_commentBox.className = "replay_comment_box";
//   replay_commentBox.style.display = "block";

//   replay_commentBox.innerHTML = `
//     <div class="comment_title">
//       <div class="comment_profile">
//         <img src="/everytime/img/anonymous.profile.png" alt="profile">
//         <p class="comment_name">익명</p>
//       </div>
//       <ul class="comment_etc">
//         <li><a href="#">공감</a></li>
//         <li><a href="#">쪽지</a></li>
//         <li><a href="#">신고</a></li>
//       </ul>
//     </div>
//     <p class="comment_content">${replay_inputText}</p>
//     <div class="time">방금 전</div>
//   `;

//   commentArea.appendChild(replay_commentBox);

//   replay_input.value = "";
// });
// -----------------------------------------------------
// 공감 버튼
const voteButton = document.getElementById("vote_button");
const voteCount = document.querySelector(".vote_count");

let isVoted = false;

voteButton.addEventListener("click", () => {
  let countV = Number(voteCount.textContent);
  if (!isVoted) {
    voteCount.textContent = countV + 1;
    isVoted = true;
  } else {
    voteCount.textContent = countV - 1;
    isVoted = false;
  }
});

// -----------------------------------------------------
// 스크랩 버튼
const starButton = document.getElementById("star_button");
const starCount = document.querySelector(".star_count");
const starText = document.querySelector(".star_text");

let isScrapped = false;

starButton.addEventListener("click", () => {
  let countS = Number(starCount.textContent);
  if (!isScrapped) {
    starCount.textContent = countS + 1;
    starText.textContent = "스크랩 취소";
    isScrapped = true;
  } else {
    starCount.textContent = countS - 1;
    starText.textContent = "스크랩";
    isScrapped = false;
  }
});

// -----------------------------------------------------
// 댓글 입력 기능
const submitBtn = document.getElementById("submit_comment");

submitBtn.addEventListener("click", () => {
  const input = document.querySelector(".comment_input");
  const inputText = input.value.trim();
  if (inputText === "") return;

  const commentBox = document.createElement("div");
  commentBox.className = "comment_box";
  commentBox.style.display = "block";

  commentBox.innerHTML = `
    <div class="comment_title">
      <div class="comment_profile">
        <img src="/everytime/img/anonymous.profile.png" alt="profile">
        <p class="comment_name">익명</p>
      </div>
      <ul class="comment_etc">
        <li><a href="#" class="new_comment">대댓글</a></li>
        <li><a href="#">공감</a></li>
        <li><a href="#">쪽지</a></li>
        <li><a href="#">신고</a></li>
      </ul>
    </div>
    <p class="comment_content">${inputText}</p>
    <div class="time">방금 전</div>
  `;

  const commentArea = document.getElementById("comment_area");
  commentArea.appendChild(commentBox);
  input.value = "";
});

// -----------------------------------------------------
// 대댓글 입력창 띄우기
document.getElementById("comment_area").addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("new_comment")) {
    const commentBox = e.target.closest(".comment_box");

    if (commentBox.querySelector(".replay_box2")) return;

    const replayBox2 = document.createElement("div");
    replayBox2.className = "replay_box2";
    replayBox2.style.display = "block";

    replayBox2.innerHTML = `
      <form class="replay_write">
        <input type="text" placeholder=" 대댓글을 입력하세요" class="replay_comment_input">
        <ul class="right">
          <li class="no_name">
            <input type="checkbox"/>
            <label for="anonymous">익명</label>
          </li>
          <button type="button" id="replay_submit_comment">
            <img src="/everytime/img/container.articles.write.submit.png" alt="입력">
          </button>
        </ul>
      </form>
    `;

    commentBox.appendChild(replayBox2);
  }
});

// -----------------------------------------------------
// 대댓글 입력 받는 부분
document.addEventListener("click", (e) => {
  if (e.target.closest("#replay_submit_comment")) {
    const replayBox = e.target.closest(".replay_box2");
    const replay_input = replayBox.querySelector(".replay_comment_input");
    const replay_inputText = replay_input.value.trim();
    if (replay_inputText === "") return;

    const replay_commentBox = document.createElement("div");
    replay_commentBox.className = "replay_comment_box";
    replay_commentBox.style.display = "block";

    replay_commentBox.innerHTML = `
      <div class="comment_title">
        <div class="comment_profile">
          <img src="/everytime/img/anonymous.profile.png" alt="profile">
          <p class="comment_name">익명</p>
        </div>
        <ul class="comment_etc">
          <li><a href="#">공감</a></li>
          <li><a href="#">쪽지</a></li>
          <li><a href="#">신고</a></li>
        </ul>
      </div>
      <p class="comment_content">${replay_inputText}</p>
      <div class="time">방금 전</div>
    `;

    // 대댓글 입력창 바로 아래에
    replayBox.insertAdjacentElement("afterend", replay_commentBox);

    replay_input.value = "";
    replayBox.remove(); // 입력창 제거
  }
});
