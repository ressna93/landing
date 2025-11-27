console.log("JS 연결 완료");

const modal = document.getElementById("modalcontent");
const openBtn = document.getElementById("openmodalbtn");
const okBtn = document.querySelector(".modal-ok");
const closeBtn = document.querySelector(".modal-close");

// Subscribe 버튼 → 모달 열기
openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

// OK 버튼 → 닫기
okBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// X 버튼 → 닫기
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// 오버레이 클릭 → 닫기
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});
