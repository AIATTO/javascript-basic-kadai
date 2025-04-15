// モーダルを開くボタン
const openModalBtn = document.getElementById("openModalBtn");

// モーダル自体
const modal = document.getElementById("myModal");

// モーダルを閉じるための要素
const span = document.getElementsByClassName("close")[0];

// モーダルを開く
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// モーダルを閉じる
span.addEventListener("click", () => {
  modal.style.display = "none";
});

// モーダルの外側をクリックしたときに閉じる
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});
