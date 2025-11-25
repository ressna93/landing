// 필요한 요소 선택
const modal = document.getElementById("my-modal");
const subscribeBtn = document.getElementById("subscribe-btn");
const closeBtn = document.querySelector(".modal-close-btn");

// 1. Subscribe 버튼 클릭 시 모달 표시
subscribeBtn.addEventListener("click", function (event) {
  event.preventDefault(); // 폼 제출 방지
  modal.classList.remove("hidden");
});

// 2. 닫기 버튼 클릭 시 모달 숨김
closeBtn.addEventListener("click", function () {
  modal.classList.add("hidden");
});

// 3. 오버레이 클릭 시 모달 숨김
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});