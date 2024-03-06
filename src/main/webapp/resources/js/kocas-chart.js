// ----------------암생존자 헬스케어분야 기술 개발 현황----------------
var bodyChart = echarts.init(document.getElementById("bodyChart"));

let bodyChartData = [13, 6, 5, 2, 5, 12, 9];
let bodySetColor = ["#FFB6BD", "#F991A5", "#A3AFD1"]; // 색상 설정

for (let i = 0; i < bodyChartData.length; i++) {
  const c = bodyChartData[i];
  bodyChartData[i] = {
    value: c,
    itemStyle: { color: bodySetColor[0 + (i % 3)] },
  };
}
let bodyChartOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: "10",
    right: "10",
    top: "0",
    bottom: "0",
    containLabel: true, //여백없음
  },
  xAxis: [
    {
      type: "value", //타입 x, y축 바꾸면 가로 세로 바뀜

      axisTick: {
        //show: false, // x축 라벨선 제거
        alignWithLabel: true, // 선 가운데로 맞춤
      },
      //   axisLine: {
      //     show: false, // x축 선 제거
      //   },
      //   axisLabel: {
      //     show: false, // x축 라벨 제거
      //   },
    },
  ],
  yAxis: [
    {
      // axisLine: false, //축 데이터 삭제
      type: "category", //타입 x, y축 바꾸면 가로 세로 바뀜
      data: [
        "datadatadatadata",
        "data",
        "data",
        "data",
        "data",
        "data",
        "data",
      ],

      // show: false, // y축 제거
    },
  ],
  series: [
    {
      name: "암생존자 헬스케어분야 기술 개발 현황",
      type: "bar",
      //   barWidth: "60%", //바 넓이
      data: bodyChartData,
      itemStyle: {
        borderRadius: [0, 20, 20, 0],
      },
    },
  ],
};
bodyChart.setOption(bodyChartOption);
// --------------지역별 암 생존자 수------------------

const $mapList = $(".body-chart-map01 li"); //맵 리스트
//서울, 인천 충남, 세종, 전북, 광주, 전남, 제주, 강원, 경기, 충북, 대전, 대구, 울산, 부산, 경남, 경북 순서임
const mapData01 = [
  52, 24, 12, 41, 3, 21, 51, 2, 12, 3, 24, 12, 11, 7, 5, 23, 8,
];
let mapDataSum = 0; // 생존자 합계
mapData01.forEach((e) => {
  mapDataSum += e;
});
for (let i = 0; i < $mapList.length; i++) {
  const m = $mapList[i];

  $(m)
    .find(".body-chart-map01-val")
    .css("width", (mapData01[i] / mapDataSum) * 500 + "px");
  $(m)
    .find(".body-chart-map01-val")
    .css("height", (mapData01[i] / mapDataSum) * 500 + "px");
  $(m).find(".body-chart-map01-tool-tip p").append(mapData01[i]);
}

// ---------------연령대별 환자 성비-----------------

let surviveChart = echarts.init(document.getElementById("surviveChart"));
let surviveOption = {
  tooltip: {
    show: true,
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: [
    {
      show: false,
      top: "10%",
      left: "3.5%",
      width: "39%",
      bottom: "6%",
      containLabel: true,
    },
    {
      show: false,
      top: "10%",
      left: "51.7%",
      width: "0%",
      bottom: "10%",
    },
    {
      show: false,
      top: "10%",
      right: "3.5%",
      width: "39%",
      bottom: "6%",
      containLabel: true,
    },
  ],
  xAxis: [
    {
      type: "value",
      inverse: true,
      axisLabel: {
        show: true,
        color: "#949AA8",
        margin: 0,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#E0E0E0",
          type: "dashed",
        },
      },
      minInterval: 10000,
    },
    {
      gridIndex: 1,
      show: false,
    },
    {
      gridIndex: 2,
      type: "value",
      axisLabel: {
        show: true,
        color: "#949AA8",
        margin: 0,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#E0E0E0",
          type: "dashed",
        },
      },
      minInterval: 10000,
    },
  ],
  yAxis: [
    {
      type: "category",
      inverse: true,
      position: "right",
      data: [
        "20~29세",
        "30~39세",
        "40~49세",
        "50~59세",
        "60~69세",
        "70세 이상",
        "20세 미만",
      ],
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#E0E0E0",
        },
      },
      axisTick: {
        show: false,
      },
    },
    {
      gridIndex: 1,
      type: "category",
      inverse: true,
      position: "center",
      data: [
        "20~29세",
        "30~39세",
        "40~49세",
        "50~59세",
        "60~69세",
        "70세 이상",
        "20세 미만",
      ],
      axisLabel: {
        align: "center",
        fontSize: 12,
        color: "#262C41",
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
    },
    {
      gridIndex: 2,
      type: "category",
      inverse: true,
      position: "left",
      data: [
        "20~29세",
        "30~39세",
        "40~49세",
        "50~59세",
        "60~69세",
        "70세 이상",
        "20세 미만",
      ],
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#E0E0E0",
        },
      },
      axisTick: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: "남자",
      type: "bar",
      barWidth: 11,
      itemStyle: {
        color: "#01a6cb",
        barBorderRadius: [10, 0, 0, 10],
      },
      data: [10000, 20000, 30000, 20000, 40000, 10000, 5000],
    },
    {
      xAxisIndex: 2,
      yAxisIndex: 2,
      name: "여자",
      type: "bar",
      barWidth: 11,
      itemStyle: {
        color: "#e98edb",
        barBorderRadius: [0, 10, 10, 0],
      },
      data: [5000, 10000, 20000, 30000, 20000, 40000, 10000],
    },
  ],
};

surviveChart.setOption(surviveOption);

// ---------------생존기 구분별 암생존자 추세-----------------
let trendChart = echarts.init(document.getElementById("trendChart"));
let trendColor = ["#03bbff", "#685dff", "#ffbe13", "#29cb96"];
var trendOffsetColor = ["#d6ecff", "#b7b2ff", "#ffebb8", "#a3f8dc"];
let trendOption = {
  tooltip: {
    trigger: "item",
  },
  grid: {
    left: "10",
    right: "10",
    top: "0",
    bottom: "0",
    containLabel: true, //여백없음
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "80%"],
      data: [
        { value: 1048, name: "Search Engine" },
        { value: 735, name: "Direct" },
        { value: 580, name: "Email" },
        { value: 484, name: "Union Ads" },
        { value: 300, name: "Video Ads" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};

trendChart.setOption(trendOption);
// --------------암종별 암 생존자 수------------------
var cencerSurviveChart = echarts.init(
  document.getElementById("cencerSurviveChart")
);

let cencerSurviveData = [15, 6, 5, 2, 4];
let cencerSurviveChartColor = [
  "#B2BFBD",
  "#98E8DE",
  "#0EDAC0",
  "#2ABCEB",
  "#3587E6",
]; // 색상 설정
let cencerSurviveChartImg = [
  "/image/img_cencerSurviveData01.png",
  "/image/img_cencerSurviveData02.png",
  "/image/img_cencerSurviveData03.png",
  "/image/img_cencerSurviveData04.png",
  "/image/img_cencerSurviveData05.png",
]; // 색상 설정

for (let i = 0; i < cencerSurviveData.length; i++) {
  const c = cencerSurviveData[i];
  cencerSurviveData[i] = {
    value: c,
    itemStyle: { color: cencerSurviveChartColor[0 + (i % 5)] },
    label: {
      normal: {
        show: true,
        position: ["93%", "-10"],
        formatter: function (val) {
          return "{img|}";
        },
        rich: {
          img: {
            backgroundColor: {
              image: cencerSurviveChartImg[i],
            },
            height: 50,
            width: 50,
          },
        },
      },
    },
  };
}
let cencerSurviveOption = {
  grid: {
    left: "30",
    right: "20%",
    bottom: "0",
    top: "30%",
  },
  xAxis: {
    show: false,
  },
  yAxis: {
    show: false,
  },
  // xAxis: [
  //   {
  //     type: "value", //타입 x, y축 바꾸면 가로 세로 바뀜

  //     axisTick: {
  //       //show: false, // x축 라벨선 제거
  //       alignWithLabel: true, // 선 가운데로 맞춤
  //     },
  //     //   axisLine: {
  //     //     show: false, // x축 선 제거
  //     //   },
  //     //   axisLabel: {
  //     //     show: false, // x축 라벨 제거
  //     //   },
  //   },
  // ],
  // yAxis: [
  //   {
  //     type: "category", //타입 x, y축 바꾸면 가로 세로 바뀜
  //     data: ["식도암", "대장암", "폐암", "난소암", "췌장암"],

  //     // show: false, // y축 제거
  //   },
  // ],
  series: [
    {
      type: "scatter",
      symbolSize: 150,
      data: [[1.2, 2.2]],
      label: {
        show: true,
        formatter: "식도암\n13,211",
        fontSize: 17,
        fontWeight: "bold",
        color: "black",
      },
      itemStyle: {
        color: "#B4D4FF",
      },
    },
    {
      type: "scatter",
      symbolSize: 120,
      data: [[2, 2.8]],
      label: {
        show: true,
        formatter: "대장암\n11,321",
        fontSize: 17,
        fontWeight: "bold",
        color: "black",
      },
      itemStyle: {
        color: "#F6ECA9",
      },
    },
    {
      type: "scatter",
      symbolSize: 100,
      data: [[2.4, 2]],
      label: {
        show: true,
        formatter: "폐암\n10,152",
        fontSize: 17,
        fontWeight: "bold",
        color: "black",
      },
      itemStyle: {
        color: "#fdbd32",
      },
    },
    {
      type: "scatter",
      symbolSize: 90,
      data: [[2.9, 2.6]],
      label: {
        show: true,
        formatter: "난소암\n8,324",
        fontSize: 17,
        fontWeight: "bold",
        color: "black",
      },
      itemStyle: {
        color: "#D2E3C8",
      },
    },
    {
      type: "scatter",
      symbolSize: 70,
      data: [[3.5, 2.4]],
      label: {
        show: true,
        formatter: "췌장암\n5,231",
        fontSize: 17,
        fontWeight: "bold",
        color: "black",
      },
      itemStyle: {
        color: "#A1EEBD",
      },
    },
  ],
};
cencerSurviveChart.setOption(cencerSurviveOption);

// --------------------------------

var chartDom04 = document.getElementById("myChart04");
var myChart04 = echarts.init(chartDom04);
let setColor04 = ["#52D3D8", "#3887BE", "#38419D", "#3559E0", "#7BD3EA"];
let chartData04 = [5, 4, 6, 2, 16, 1, 7, 8, 8];
for (let i = 0; i < chartData04.length; i++) {
  const c = chartData04[i];
  chartData04[i] = { value: c, itemStyle: { color: setColor04[0 + (i % 5)] } };
}
var option04;
option04 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true, //여백없음
  },
  xAxis: [
    {
      type: "category", //타입 x, y축 바꾸면 가로 세로 바뀜
      data: [
        "여성암",
        "위암",
        "신장암",
        "유전성암",
        "고형암",
        "식도암",
        "방광암",
        "대장암",
        "구강암",
      ],

      axisTick: {
        //show: false, // x축 라벨선 제거
        alignWithLabel: true, // 선 가운데로 맞춤
      },
      //   axisLine: {
      //     show: false, // x축 선 제거
      //   },
      //   axisLabel: {
      //     show: false, // x축 라벨 제거
      //   },
    },
  ],
  yAxis: [
    {
      type: "value", //타입 x, y축 바꾸면 가로 세로 바뀜

      // show: false, // y축 제거
    },
  ],
  series: [
    {
      name: "PROM 도구 개수",
      type: "bar",
      //   barWidth: "60%", //바 넓이
      data: chartData04,
    },
  ],
};
myChart04.setOption(option04);
// --------------------------------

var chartDom03 = document.getElementById("myChart03");
var myChart03 = echarts.init(chartDom03);
var option03;

let chartData03 = [13, 6, 5, 2, 5, 12, 9];
let setColor03 = ["#B2BFBD", "#98E8DE", "#0EDAC0", "#2ABCEB", "#3587E6"]; // 색상 설정

for (let i = 0; i < chartData03.length; i++) {
  const c = chartData03[i];
  chartData03[i] = { value: c, itemStyle: { color: setColor03[0 + (i % 5)] } };
}
option03 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true, //여백없음
  },
  xAxis: [
    {
      type: "value", //타입 x, y축 바꾸면 가로 세로 바뀜

      axisTick: {
        //show: false, // x축 라벨선 제거
        alignWithLabel: true, // 선 가운데로 맞춤
      },
      //   axisLine: {
      //     show: false, // x축 선 제거
      //   },
      //   axisLabel: {
      //     show: false, // x축 라벨 제거
      //   },
    },
  ],
  yAxis: [
    {
      type: "category", //타입 x, y축 바꾸면 가로 세로 바뀜
      data: ["삶의질", "정신건강", "미충족필요", "???", "???", "???", "???"],

      // show: false, // y축 제거
    },
  ],
  series: [
    {
      name: "PROM 도구 개수",
      type: "bar",
      //   barWidth: "60%", //바 넓이
      data: chartData03,
    },
  ],
};
myChart03.setOption(option03);
// --------------------------------

// $('img[usemap]').rwdImageMaps();

// 암 mouseleave 시 hover 클래스 제거
$(".cancer_map").on("mouseleave", function () {
  $(".cancer-img").removeClass("hover");
  $(".cancer_info_area").removeClass("hover");
});
// 암 마우스오버 시 hover 클래스 추가
$(".cancer_map1").on("mouseover", function () {
  $(".cancer01").addClass("hover");
  $(".cancer_info_area1").addClass("hover");
});
$(".cancer_map2").on("mouseover", function () {
  $(".cancer02").addClass("hover");
  $(".cancer_info_area2").addClass("hover");
});
$(".cancer_map3").on("mouseover", function () {
  $(".cancer03").addClass("hover");
  $(".cancer_info_area3").addClass("hover");
});
$(".cancer_map4").on("mouseover", function () {
  $(".cancer04").addClass("hover");
  $(".cancer_info_area4").addClass("hover");
});
$(".cancer_map5").on("mouseover", function () {
  $(".cancer05").addClass("hover");
  $(".cancer_info_area5").addClass("hover");
});
$(".cancer_map6").on("mouseover", function () {
  $(".cancer06").addClass("hover");
  $(".cancer_info_area6").addClass("hover");
});
$(".cancer_map7").on("mouseover", function () {
  $(".cancer07").addClass("hover");
  $(".cancer_info_area7").addClass("hover");
});
$(".cancer_map8").on("mouseover", function () {
  $(".cancer08").addClass("hover");
  $(".cancer_info_area8").addClass("hover");
});
$(".cancer_map9").on("mouseover", function () {
  $(".cancer09").addClass("hover");
  $(".cancer_info_area9").addClass("hover");
});
$(".cancer_map10").on("mouseover", function () {
  $(".cancer10").addClass("hover");
  $(".cancer_info_area10").addClass("hover");
});
$(".cancer_map11").on("mouseover", function () {
  $(".cancer11").addClass("hover");
  $(".cancer_info_area11").addClass("hover");
});
// 암 마우스오버 시 click 클래스 추가
$(".cancer_map1").on("click", function () {
  //갑상선암
  $(".cancer-img").removeClass("clicked");
  $(".cancer01").addClass("clicked");
  $(".body-titile").text("갑상선암");
});
$(".cancer_map2").on("click", function () {
  //유방암
  $(".cancer-img").removeClass("clicked");
  $(".cancer02").addClass("clicked");
  $(".body-titile").text("유방암");
});
$(".cancer_map3").on("click", function () {
  //폐암
  $(".cancer-img").removeClass("clicked");
  $(".cancer03").addClass("clicked");
  $(".body-titile").text("폐암");
});
$(".cancer_map4").on("click", function () {
  //간암
  $(".cancer-img").removeClass("clicked");
  $(".cancer04").addClass("clicked");
  $(".body-titile").text("간암");
});
$(".cancer_map5").on("click", function () {
  //위암
  $(".cancer-img").removeClass("clicked");
  $(".cancer05").addClass("clicked");
  $(".body-titile").text("위암");
});
$(".cancer_map6").on("click", function () {
  //담도암
  $(".cancer-img").removeClass("clicked");
  $(".cancer06").addClass("clicked");
  $(".body-titile").text("담도암");
});
$(".cancer_map7").on("click", function () {
  //췌장암
  $(".cancer-img").removeClass("clicked");
  $(".cancer07").addClass("clicked");
  $(".body-titile").text("췌장암");
});
$(".cancer_map8").on("click", function () {
  //신장암
  $(".cancer-img").removeClass("clicked");
  $(".cancer08").addClass("clicked");
  $(".body-titile").text("신장암");
});
$(".cancer_map9").on("click", function () {
  //대장암
  $(".cancer-img").removeClass("clicked");
  $(".cancer09").addClass("clicked");
  $(".body-titile").text("대장암");
});
$(".cancer_map10").on("click", function () {
  //자궁암
  $(".cancer-img").removeClass("clicked");
  $(".cancer10").addClass("clicked");
  $(".body-titile").text("자궁암");
});
$(".cancer_map11").on("click", function () {
  //전립선암
  $(".cancer-img").removeClass("clicked");
  $(".cancer11").addClass("clicked");
  $(".body-titile").text("전립선암");
});
$(window).resize(function () {
  bodyChart.resize();
  surviveChart.resize();
  trendChart.resize();
  cencerSurviveChart.resize();
  myChart03.resize();
  myChart04.resize();
});
