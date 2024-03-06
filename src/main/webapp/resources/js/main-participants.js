$(document).ready(function () {
  $.get("../연구참여자/header.html", function (data1) {
    $.get("../연구참여자/footer.html", function (data2) {
      // 헤더푸터
      $("#s__header").html(data1);
      $("#s__footer").html(data2);

      // 플로팅배너
      $(".btn-option-more").on("click", function () {
        $(this).toggleClass("on");
      });

      
      // 사이트 확대/축소
      let zoomData = 1;
      $(".btn-make-big").on("click", function () {
        if (zoomData < 1.2) {
          zoomData += 0.1;
          $("body").css("zoom", zoomData);
        }
      });
      $(".btn-make-small").on("click", function () {
        if (zoomData > 1) {
          zoomData -= 0.1;
          $("body").css("zoom", zoomData);
        }
      });
      
      // 로그인 이후 이름 클릭
      $(document).on("click", "#loginName", function (e) {
        e.stopPropagation();
        $(this).parent().toggleClass("active-on");
      });

      $(document).on("click", function (e) {
        if (!$(e.target).closest("#loginName").length) {
          // 클릭된 요소가 #loginName이 아닌 경우
          $("#loginName").parent().removeClass("active-on");
        }
      });
      // 아코디언
      const accordionAList = document.querySelectorAll(".table-accordion tr a");
      const accordionList = document.querySelectorAll(".table-accordion tr");
      accordionAList.forEach((e) => {
        const thisAccordionName =
          e.parentNode.parentNode.parentNode.dataset.accordion;
        e.addEventListener("click", () => {
          if (
            e.parentNode.parentNode.parentNode.classList.contains("active-on")
          ) {
            e.parentNode.parentNode.parentNode.classList.remove("active-on");
          } else {
            accordionList.forEach((t) => {
              if (t.dataset.accordion === thisAccordionName) {
                t.classList.remove("active-on");
              }
            });
            e.parentNode.parentNode.parentNode.classList.add("active-on");
          }
        });
      });

      // 탭
      const tabList = document.querySelectorAll(".s__tab01-box");
      tabList.forEach((e) => {
        const thisTabName = e.dataset.tab;
        e.addEventListener("click", () => {
          tabList.forEach((t) => {
            if (t.dataset.tab === thisTabName) {
              t.classList.remove("active-on");
            }
          });
          e.classList.add("active-on");
        });
      });
      // 탭2
      const tabList02 = document.querySelectorAll(".s__tab02-title");
      const tabContents02 = document.querySelectorAll(".s__teb-contents");
      tabList02.forEach((e) => {
        const thisTabName = e.dataset.tab;
        e.addEventListener("click", () => {
          tabList02.forEach((t) => {
            t.classList.remove("active-on");
          });
          tabContents02.forEach((t) => {
            t.classList.remove("active-on");
          });
          e.classList.add("active-on");
          document.getElementById(thisTabName).classList.add("active-on");
        });
      });
      //사이트맵
      $(".s__site-map").on("click", function () {
        $(".site-map").css("display", "block");
        $("html").css("height", "100%");
        $("html").css("overflow", "hidden");
      });
      $(".btn-site-map-close").on("click", function () {
        $(".site-map").css("display", "none");
        $("html").css("height", "auto");
        $("html").css("overflow", "auto");
      });

      //pc메뉴
      let pcMenuBtn = document.querySelectorAll(".pc-menu__step1");
      let pcMenuBtnStep2 = document.querySelectorAll(
        ".pc-menu__step2 > ul > li"
      );
      let pcMenuBtnList = document.querySelectorAll(".pc-menu__step1 + ul");
      let preMenu = document.querySelector(".s__logo"); //pc메뉴의 이전요소
      let nextMenu = document.querySelector(".new_data"); //pc메뉴의 다음요소

      //스탭1
      for (let i = 0; i < pcMenuBtn.length; i++) {
        const p = pcMenuBtn[i];
        p.addEventListener("mouseenter", () => {
          pcMenuBtn.forEach((e) => {
            e.classList.remove("active");
          });
          p.classList.add("active");
        });
        p.addEventListener("focusin", () => {
          pcMenuBtn.forEach((e) => {
            e.classList.remove("active");
          });
          p.classList.add("active");
        });
        p.addEventListener("mouseleave", () => {
          pcMenuBtn.forEach((e) => {
            e.classList.remove("active");
          });
        });
      }
      preMenu.addEventListener("focusin", () => {
        pcMenuBtn.forEach((e) => {
          e.classList.remove("active");
        });
      });
      nextMenu.addEventListener("focusin", () => {
        pcMenuBtn.forEach((e) => {
          e.classList.remove("active");
        });
      });

      // 스탭2
      for (let i = 0; i < pcMenuBtnStep2.length; i++) {
        const p = pcMenuBtnStep2[i];
        p.addEventListener("mouseenter", () => {
          pcMenuBtnStep2.forEach((e) => {
            e.classList.remove("active");
          });
          p.classList.add("active");
        });
        p.addEventListener("focusin", () => {
          pcMenuBtnStep2.forEach((e) => {
            e.classList.remove("active");
          });
          p.classList.add("active");
        });
      }

      //mobile 메뉴
      let menuBtn = document.querySelectorAll(".mobile-menu__step1");
      let menuBtnStep2 = document.querySelectorAll(".mobile-menu__step2");
      let mobileMenuBtn = document.querySelector(".menu");
      let mobileMenuList = document.querySelector(".mobile-menu__list");

      for (let i = 0; i < menuBtn.length; i++) {
        const m = menuBtn[i];
        m.addEventListener("click", () => {
          menuBtn.forEach((e) => {
            if (e == m) {
              e.classList.toggle("menu-on");
            } else {
              e.classList.remove("menu-on");
            }
          });
        });
      }
      for (let i = 0; i < menuBtnStep2.length; i++) {
        const m = menuBtnStep2[i];
        m.addEventListener("click", () => {
          menuBtnStep2.forEach((e) => {
            if (e == m) {
              e.classList.toggle("menu-on");
            } else {
              e.classList.remove("menu-on");
            }
          });
        });
      }

      mobileMenuBtn.addEventListener("click", () => {
        if (mobileMenuList.classList.contains("menu-on")) {
          menuBtn.forEach((e) => {
            e.classList.remove("menu-on");
          });
        }
        mobileMenuList.classList.toggle("menu-on");
        mobileMenuBtn.classList.toggle("menu-on");
        if(mobileMenuBtn.classList.contains("menu-on")){
          $("html").css("height", "100%");
          $("html").css("overflow", "hidden");
        }else {
          $("html").css("height", "auto");
          $("html").css("overflow", "auto");
        }
      });

      // link-list
      const linkSwiper = new Swiper(".link-list .swiper", {
        // Optional parameters
        // direction: 'vertical',
        // loop: true,

        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 5,
        spaceBetween: 30,
        // centeredSlides: true,
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
        breakpoints: {
          200: {
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

      // 체크박스
      const checkTotalBtns = document.querySelectorAll(".s__checkbox-total");
      const checkBtns = document.querySelectorAll(".s__checkbox-ck");

      function handlerAgrTotal() {
        const totalArea = this.closest(".s__checkbox-wrap");
        const checkboxList = totalArea.querySelectorAll(".s__checkbox-ck");

        checkboxList.forEach((ckbox) => {
          if (this.checked) {
            ckbox.checked = true;
            ckbox.value = "Y";
          } else {
            ckbox.checked = false;
            ckbox.value = "N";
          }
        });
      }

      function handlerAgrCheck() {
        const totalArea = this.closest(".s__checkbox-wrap");
        const total = totalArea.querySelector(".s__checkbox-total");
        const checkboxes = totalArea.querySelectorAll(".s__checkbox-ck");
        const checkboxSelect = totalArea.querySelectorAll(
          ".s__checkbox-ck:checked"
        );

        if (checkboxes.length === checkboxSelect.length) {
          total.checked = true;
          total.value = "Y";
        } else {
          total.checked = false;
          total.value = "N";
        }
      }

      checkTotalBtns.forEach((total) => {
        total.addEventListener("click", handlerAgrTotal);
      });

      checkBtns.forEach((ck) => {
        ck.addEventListener("click", handlerAgrCheck);
      });
    });
  });
});
