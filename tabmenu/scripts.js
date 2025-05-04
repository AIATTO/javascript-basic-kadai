const tabMenuButton = document.querySelectorAll(".js-tab");
const tabMenuContents = document.querySelectorAll(".js-content");
const tabMenuActive = "active";

tabMenuButton.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabMenuButton.forEach((tab) => {
      tab.classList.remove(tabMenuActive);
    });
    tabMenuContents.forEach((content) => {
      content.classList.remove(tabMenuActive);
    });
    tab.classList.add(tabMenuActive);
    tabMenuContents[index].classList.add(tabMenuActive);
  });
});
