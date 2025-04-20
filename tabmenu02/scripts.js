const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");
const indicator = document.querySelector(".tabIndicator");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    contents.forEach((content) => {
      content.classList.remove("active");
    });
    tab.classList.add("active");
    contents[index].classList.add("active");

    // 動くインジケーター
    indicator.style.left = `${index * 33.33}%`;
  });
});
