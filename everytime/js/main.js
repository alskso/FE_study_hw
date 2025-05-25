// document.getElementById("pencil").addEventListener("click", async () => {
//   const container = document.getElementById("input-write");
//   const response = await fetch("post.html");
//   const html = await response.text();

//   container.style.display = "none";

//   let div_container = document.createElement("div");
//   div_container.innerHTML = html;

//   const formContainer = document.getElementById("form-container");
//   // formContainer.innerHTML = "";
//   formContainer.appendChild(div_container);

//   const questionCheckbox = div_container.querySelector("#question");
//   const guideText = div_container.querySelector("#question_info");
//   const questText = div_container.querySelector("#question_text");

//   if (questionCheckbox && guideText && questText) {
//     guideText.style.display = "none";

//     questionCheckbox.addEventListener("click", () => {
//       const isChecked = questionCheckbox.checked;

//       guideText.style.display = isChecked ? "block" : "none";

//       questionCheckbox.classList.toggle("question_box_style", isChecked);
//       questText.classList.toggle("question_text_style", isChecked);
//     });
//   }
// });

document.getElementById("pencil").addEventListener("click", () => {
  const inputContainer = document.getElementById("input-write");
  inputContainer.style.display = "none";

  const html = `
        <div class="post_board">
      <form type="submit" class="post_input">
        <p><input type="text" placeholder="글 제목" class="title" /></p>
        <p>
          <textarea
            placeholder="에브리타임은 누구나 기분 좋게 참여할 수 있는 커뮤니티를 만들기 위해 커뮤니티 이용규칙을 제정하여 운영하고 있습니다. 위반 시 게시물이 삭제되고 서비스 이용이 일정 기간 제한될 수 있습니다. 

아래는 이 게시판에 해당하는 핵심 내용에 대한 요약 사항이며, 게시물 작성 전 커뮤니티 이용규칙 전문을 반드시 확인하시기 바랍니다. 
        
※ 정치·사회 관련 행위 금지 
- 국가기관, 정치 관련 단체, 언론, 시민단체에 대한 언급 혹은 이와 관련한 행위 
- 정책·외교 또는 정치·정파에 대한 의견, 주장 및 이념, 가치관을 드러내는 행위 
- 성별, 종교, 인종, 출신, 지역, 직업, 이념 등 사회적 이슈에 대한 언급 혹은 이와 관련한 행위 
- 위와 같은 내용으로 유추될 수 있는 비유, 은어 사용 행위 
* 해당 게시물은 시사·이슈 게시판에만 작성 가능합니다. 
        
※ 홍보 및 판매 관련 행위 금지 
- 영리 여부와 관계 없이 사업체·기관·단체·개인에게 직간접적으로 영향을 줄 수 있는 게시물 작성 행위 
- 위와 관련된 것으로 의심되거나 예상될 수 있는 바이럴 홍보 및 명칭·단어 언급 행위 
* 해당 게시물은 홍보게시판에만 작성 가능합니다. 
        
※ 불법촬영물 유통 금지
불법촬영물등을 게재할 경우 전기통신사업법에 따라 삭제 조치 및 서비스 이용이 영구적으로 제한될 수 있으며 관련 법률에 따라 처벌받을 수 있습니다. 
        
※ 그 밖의 규칙 위반 
- 타인의 권리를 침해하거나 불쾌감을 주는 행위 
- 범죄, 불법 행위 등 법령을 위반하는 행위 
- 욕설, 비하, 차별, 혐오, 자살, 폭력 관련 내용을 포함한 게시물 작성 행위 
- 음란물, 성적 수치심을 유발하는 행위 
- 스포일러, 공포, 속임, 놀라게 하는 행위 "
          ></textarea>
        </p>
        <div id="question_info">
          <p>
            질문 글을 작성하면 게시판 상단에 일정 기간 동안 노출되면, 더욱
            빠르게 답변을 얻을 수 있게 됩니다<br />또한, 다른 학우들이 정성껏
            작성한 답변을 유지하기 위해, 댓글이 달린 이후에는 글을 수정 및
            삭제할 수 없습니다.
          </p>
        </div>

        <ul class="post_option">
          <li class="post_left">
            <a href=""
              ><img
                src="/everytime/img/container.articles.write.hashtag.png"
                alt="해시태그"
                class="hashtag"
            /></a>
            <a href=""
              ><img
                src="/everytime/img/container.articles.write.attach.png"
                alt="파일첨부"
                class="file"
            /></a>
          </li>

          <li class="post_right">
            <input type="checkbox" id="question" />
            <label for="question" id="question_text">질문</label>

            <input type="checkbox" id="anonymous" />
            <label for="anonymous">익명</label>

            <button type="submit">
              <img
                src="/everytime/img/container.articles.write.submit.png"
                id="pencil_input"
                alt="입력"
              />
            </button>
          </li>
        </ul>
      </form>
    </div>
  `;

  const cotainer = document.createElement("div");
  cotainer.innerHTML = html;

  const formContainer = document.getElementById("form_container");
  const postForm = cotainer.querySelector(".post_input");

  formContainer.innerHTML = "";
  formContainer.appendChild(postForm);

  const questionCheckbox = postForm.querySelector("#question");
  const guideInfo = postForm.querySelector("#question_info");
  const questText = postForm.querySelector("#question_text");

  if (questionCheckbox && guideInfo && questText) {
    guideInfo.style.display = "none";

    questionCheckbox.addEventListener("click", () => {
      const isChecked = questionCheckbox.checked;

      guideInfo.style.display = isChecked ? "block" : "none";
      questionCheckbox.classList.toggle("question_box_style", isChecked);
      questText.classList.toggle("question_text_style", isChecked);
    });
  }
});
