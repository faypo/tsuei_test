import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

// console.log("Hello world!");

document.getElementById("down").addEventListener('click',function(){
    console.log('test');
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
    if (document.getElementById("myNumber").value <= 1) {
        document.getElementById("myNumber").value = 1;
    }
});

document.getElementById("up").addEventListener('click',function(){
    console.log('test');
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
});


//單項商品商品圖swiper
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 8,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });


  //單項商品-本月推薦swiper
  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 1, // 預設手機版顯示一個slide
    spaceBetween: 24,
    breakpoints: {
        // 當螢幕寬度大於等於640px時，顯示3個slide
        640: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

