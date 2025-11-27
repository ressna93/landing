const modal = document.getElementById("modalcontent");
const subscribeBtn = document.getElementById("openmodalbtn");
const okBtn = document.querySelector(".modal-ok");
const closeBtn = document.querySelector(".modal-close");

// 1. Subscribe 버튼 클릭 시 모달 표시
subscribeBtn.addEventListener("click", function (event) {
  event.preventDefault(); // 폼 제출 방지
  modal.classList.remove("hidden");
});

// 2. 닫기 버튼 클릭 시 모달 숨김
okBtn.addEventListener("click", function () {
  modal.classList.add("hidden");
});
closeBtn.addEventListener("click", function () {
  modal.classList.add("hidden");
});

// 3. 오버레이 클릭 시 모달 숨김
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});
