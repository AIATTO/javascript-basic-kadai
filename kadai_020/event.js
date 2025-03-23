const btn = document.getElementById("btn");
const message = document.getElementById("message");
const parentList = document.getElementById("parent-list");

btn.addEventListener("click", () => {
  const childList = document.createElement("li");
  childList.innerHTML = "<strong>ボタンをクリックしました</strong>";
  parentList.appendChild(childList);
});
