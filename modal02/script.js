// モーダルを開くボタン
const openModalBtn = document.getElementById("openModalBtn");

// モーダル自体
const modal = document.getElementById("myModal");

// モーダルを閉じるための要素
const span = document.getElementsByClassName("close")[0];

// モーダルを開く
openModalBtn.onclick = function () {
  modal.style.display = "block";
};

// モーダルを閉じる
span.onclick = function () {
  modal.style.display = "none";
};

// モーダルの外側をクリックしたときに閉じる
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
