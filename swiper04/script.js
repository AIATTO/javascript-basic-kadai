const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade", // フェード切り替え
  speed: 1500, // ふんわり感を演出
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
