// ボタンの要素を取得
const btn = document.getElementById("btn");

// テキスト要素を取得
const text = document.getElementById("text");

// ボタンにクリックイベントを追加
btn.addEventListener("click", () => {
  // 2秒後にテキスト内容を変更
  setTimeout(() => {
    text.textContent = "ボタンをクリックしました";
  }, 2000);
});
