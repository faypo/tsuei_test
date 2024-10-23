import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // 嘗試使用 bundle 來確保依賴項正確加載
import 'swiper/css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import AOS from 'aos';
import 'aos/dist/aos.css';

document.addEventListener("DOMContentLoaded", function() {
  AOS.init({
    duration: 800
  });
  
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 8,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });

  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  var swiper3 = new Swiper(".mySwiper3", {
    autoplay:true,
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  document.getElementById("down").addEventListener("click", function () {
    console.log("test");
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
    if (document.getElementById("myNumber").value <= 1) {
      document.getElementById("myNumber").value = 1;
    }
  });

  document.getElementById("up").addEventListener("click", function () {
    console.log("test");
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
  });
});
