const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade", // フェード切り替えでオシャレに
  speed: 1000, // 切り替え速度
  autoplay: {
    delay: 3000,
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
