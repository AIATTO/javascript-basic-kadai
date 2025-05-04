const swiper = new Swiper(".swiper", {
  loop: true, // ループさせる
  pagination: {
    el: ".swiper-pagination", // ページネーションを指定
    clickable: true, // クリック可能に
  },
  navigation: {
    nextEl: ".swiper-button-next", // 次へボタン
    prevEl: ".swiper-button-prev", // 前へボタン
  },
  autoplay: {
    delay: 3000, // 3秒ごとに自動再生
    disableOnInteraction: false, // ユーザー操作後も自動再生続行
  },
});
