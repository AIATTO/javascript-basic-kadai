document.querySelectorAll(".panel-header").forEach((trigger) => {
  trigger.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const panel = this.closest(".panel");

    // 他のパネルを閉じる
    document.querySelectorAll(".panel-header").forEach((otherTrigger) => {
      if (otherTrigger !== this) {
        otherTrigger.classList.remove("active");
        const otherContent = otherTrigger.nextElementSibling;
        otherContent.style.height = "0";
      }
    });

    // クリックしたパネルの処理
    this.classList.toggle("active");

    if (this.classList.contains("active")) {
      // 開く時は中身の高さを計算
      const body = content.querySelector(".panel-body");
      content.style.height = body.offsetHeight + "px";
    } else {
      // 閉じる時は0
      content.style.height = "0";
    }
  });
});
