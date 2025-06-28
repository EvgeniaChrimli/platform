const li = document.querySelectorAll(".body-right_item");

li.forEach((el) => {
  el.addEventListener("click", () => {
    li.forEach((itm) => itm.classList.remove("active-nav"));
    el.classList.add("active-nav");
  });
});

const burger = document.querySelector(".burger");
const nav = document.querySelector(".body-right_nav");
burger.addEventListener("click", () => {
  nav.classList.toggle("active-body");
});

// const swiper = new Swiper(".swiper", {
//   loop: true,

//   pagination: {
//     el: ".pagination",
//   },

//   navigation: {
//     nextEl: ".button-next",
//     prevEl: ".button-prev",
//   },

//   breakpoints: {
//     0: { slidesPerView: 1 },
//     1200: { slidesPerView: 3, spaceBetween: 22 },
//   },
// });
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  pagination: {
    el: ".pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    781: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
