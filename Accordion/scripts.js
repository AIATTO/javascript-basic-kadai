const panels = document.querySelectorAll(".panel-header");

panels.forEach((trigger) => {
  trigger.addEventListener("click", function () {
    const content = trigger.nextElementSibling;

    // panels.querySelectorAll(".panel-header").forEach((otherTrigger) => {
    //   if (otherTrigger !== trigger) {
    //     otherTrigger.classList.remove("active");
    //     const otherContent = otherTrigger.nextElementSibling;
    //     otherContent.style.height = "0";
    //   }
    // });

    trigger.classList.toggle("active");

    if (trigger.classList.contains("active")) {
      const body = content.querySelector(".panel-body");
      content.style.height = body.offsetHeight + "px";
    } else {
      content.style.height = "0";
    }
  });
});
