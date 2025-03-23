const btn = document.getElementById("btn"); // 'Btn'を'btn'に修正
const text = document.getElementById("text");

btn.addEventListener("click", () => {
  text.textContent = "ボタンをクリックしました"; // text.textContent に変更
});
