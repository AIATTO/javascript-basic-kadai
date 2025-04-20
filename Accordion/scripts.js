document.querySelectorAll(".panel-header").forEach((trigger) => {
  trigger.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const panel = this.closest(".panel");

    document.querySelectorAll(".panel-header").forEach((otherTrigger) => {
      if (otherTrigger !== this) {
        otherTrigger.classList.remove("active");
        const otherContent = otherTrigger.nextElementSibling;
        otherContent.style.height = "0";
      }
    });

    this.classList.toggle("active");

    if (this.classList.contains("active")) {
      const body = content.querySelector(".panel-body");
      content.style.height = body.offsetHeight + "px";
    } else {
      content.style.height = "0";
    }
  });
});
