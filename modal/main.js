const buttonOpen = document.getElementById("modalOpen");
const modal = document.getElementById("easyModal");
const buttonClose = document.getElementsByClassName("modalClose")[0];

// モーダルを開くボタンを押すとモーダルが開かれる
buttonOpen.addEventListener("click", modalOpen);
function modalOpen() {
  modal.style.display = "block";
}

// モーダルを閉じるボタンを押すとモーダルが閉じられる
buttonClose.addEventListener("click", modalClose);
function modalClose() {
  modal.style.display = "none";
}

// モーダルの外側（背景）をクリックするとモーダルが閉じられる
addEventListener("click", outsideClose);
function outsideClose(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
