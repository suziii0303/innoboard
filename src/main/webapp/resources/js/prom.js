// 처음시작하는 것이 title이면 옵션 숨기기
const firstProm = document.querySelector(".prom-tr");
const firstPromOption = document.querySelector(".prom-row01-title-option");
firstProm.classList.add("active-on");
if (firstPromOption && !firstProm.classList.contains("prom-tr-title")) {
  firstPromOption.classList.add("active-on");
}
if (firstPromOption && firstProm.parentNode.parentNode.closest(".prom-col01-tr")) {
    firstProm.parentNode.parentNode
    .closest(".prom-col01-tr")
    .classList.add("active-on-step2");
}
  
const PromList = document.querySelectorAll(".prom-tr");
const PromColList = document.querySelectorAll(".prom-col01-tr");
const nextBtn = document.querySelector(".prom-next");
const prevBtn = document.querySelector(".prom-prev");

function showOption() {
  if (firstPromOption) {
    //다지선다 타이틀 숨김 여부 결정
    if (
      !PromList[nowProm].classList.contains("prom-tr-title") &&
      !PromList[nowProm].classList.contains("prom-tr-text")
    ) {
      firstPromOption.classList.add("active-on");
    } else {
      firstPromOption.classList.remove("active-on");
    }
  }
}

let nowProm = 0;
nextBtn.addEventListener("click", () => { //다음문제 버튼 클릭
  PromList.forEach((e) => {
    e.classList.remove("active-on");
  });
  PromColList.forEach((e) => {
    e.classList.remove("active-on-step2");
  });
  nowProm += 1;
  PromList[nowProm].classList.add("active-on");
  if (PromList[nowProm].parentNode.parentNode.closest(".prom-col01-tr")) {
    PromList[nowProm].parentNode.parentNode
      .closest(".prom-col01-tr")
      .classList.add("active-on-step2");
  }
  if (nowProm + 1 == PromList.length) { //마지막 문제면 다음버튼 비활성화
    nextBtn.classList.add("prom-btn-disabled");
  }
  if (nowProm == 1) {//첫 문제가 아니면 문제 활성화
    prevBtn.classList.remove("prom-btn-disabled");
  }
  showOption();
});
prevBtn.addEventListener("click", () => { //이전문제 버튼 클릭
    PromList.forEach((e) => {
        e.classList.remove("active-on");
      });
      PromColList.forEach((e) => {
        e.classList.remove("active-on-step2");
      });
  nowProm -= 1;
  PromList[nowProm].classList.add("active-on");
  if (PromList[nowProm].parentNode.parentNode.closest(".prom-col01-tr")) {
    PromList[nowProm].parentNode.parentNode
      .closest(".prom-col01-tr")
      .classList.add("active-on-step2");
  }
  if (nowProm + 1 != PromList.length) {//마지막 문제가 아니면 다음버튼 활성화
    nextBtn.classList.remove("prom-btn-disabled");
  }
  if (nowProm == 0) {//첫 문제면 이전 버튼 비활성화
    prevBtn.classList.add("prom-btn-disabled");
  }
  showOption();
});
