const textElement = document.getElementById("text");

btn.addEventListener("click", () => {
  console.log("ボタンをクリックしました");
  textElement.textContent = "ボタンをクリックしました";
});
