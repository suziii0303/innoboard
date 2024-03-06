    
//swiper

const progressLine = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
const autoPlayBtn = document.querySelector('.autoplay-play-stop')

const swiper = new Swiper('.s__slide .swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false
  },
    
    // bullet
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
      type: "custom",
      renderCustom: function (swiper, current, total) {
          return (
              '<span class="current">' + 0 + (current) + '</span>' + '<span class="total">' + 0 + (total) + '</span>'
          );
      }
  },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
  // },
  on: { //프로그래스바(원형)
    autoplayTimeLeft(s, time, progress) {
      progressLine.style.setProperty("--progress", 1 - progress)
  }
  }
});
  
autoPlayBtn.addEventListener('click', (e) => {
  const btn = e.currentTarget
  if (btn.classList.contains('stop')) { //일시정지중일 경우
    swiper.autoplay.resume();
    btn.classList.remove('stop')
  } else { //재생중일경우
    swiper.autoplay.pause();
    btn.classList.add('stop')
  }

})

// link-list
const linkSwiper = new Swiper('.link-list .swiper', {
  // Optional parameters
  // direction: 'vertical',
  // loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 5,
  spaceBetween: 30,
  // centeredSlides: true,
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
// },
breakpoints: {
  360: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
  1400: {
    slidesPerView: 4,
  },
  1600: {
    slidesPerView: 5,
  },
},
});