const buttonOpen = document.querySelector(".js-modalOpen");
const modal = document.querySelector(".js-easyModal");
const buttonClose = document.querySelector(".js-modalClose");
console.log(buttonOpen);

// モーダルを開くボタンを押すとモーダルが開かれる;
buttonOpen.addEventListener("click", () => {
  modal.style.display = "block";
});

// モーダルを閉じるボタンを押すとモーダルが閉じられる
buttonClose.addEventListener("click", () => {
  modal.style.display = "none";
});

// モーダルの外側（背景）をクリックするとモーダルが閉じられる
addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
