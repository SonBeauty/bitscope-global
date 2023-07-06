export const optionsBarChart: ApexCharts.ApexOptions = {
  chart: {
    height: 350,
    type: "bar",
    toolbar: {
      tools: {
        download: false,
      },
    },
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 500,
      animateGradually: {
        enabled: true,
        delay: 400,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 400,
      },
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "";
    },
    offsetY: -20,
    style: {
      fontSize: "16px",
      colors: ["#304758"],
    },
  },
  xaxis: {
    categories: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    position: "bottom",
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      fill: {
        type: "gradient",
        gradient: {
          colorFrom: "#A1E3CB",
          colorTo: "#A1E3CB",
          stops: [0, 100],
          opacityFrom: 0.4,
          opacityTo: 0.5,
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: true,
      formatter: function (val) {
        return val + "";
      },
    },
  },
};
export const optionsActiveShapeTW: ApexCharts.ApexOptions = {
  labels: ["Maybe KOL", "Good Follower", "Full Info", "Miss Info"],
  dataLabels: {
    enabled: true,
  },
  colors: ["#BAEDBD", "#005AE2", "#FCCA4A", "#E92D3B"],
  legend: {
    show: false,
  },
  chart: {
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 600,
      animateGradually: {
        enabled: true,
        delay: 500,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 500,
      },
    },
  },
  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        labels: {
          show: true,
          value: {
            show: true,
            fontFamily: "Poppins",
            color: "#475569",
            formatter(val: any) {
              return `${parseInt(val)}%`;
            },
          },
        },
      },
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
export const optionsActiveShapeTE: ApexCharts.ApexOptions = {
  labels: ["Active in groups", "High-Quality mem", "Sketchy info", "Spammer"],
  dataLabels: {
    enabled: true,
  },
  colors: ["#BAEDBD", "#005AE2", "#FCCA4A", "#E92D3B"],
  legend: {
    show: false,
  },
  chart: {
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 600,
      animateGradually: {
        enabled: true,
        delay: 500,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 500,
      },
    },
  },
  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        labels: {
          show: true,
          value: {
            show: true,
            fontFamily: "Poppins",
            color: "#475569",
            formatter(val: any) {
              return `${parseInt(val)}%`;
            },
          },
        },
      },
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
export const optionsActiveShapeFake: ApexCharts.ApexOptions = {
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  colors: ["#BAEDBD", "#005AE2", "#FCCA4A", "#E92D3B"],
  legend: {
    show: false,
  },
  chart: {
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 600,
      animateGradually: {
        enabled: true,
        delay: 500,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 500,
      },
    },
  },
  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        labels: {
          show: false,
          value: {
            show: false,
          },
        },
      },
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};
export const optionsBarChartFake: ApexCharts.ApexOptions = {
  chart: {
    type: "bar",
    height: 350,
    toolbar: {
      tools: {
        download: false,
      },
    },
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 500,
      animateGradually: {
        enabled: true,
        delay: 400,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 400,
      },
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      borderRadius: 5,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: false,
    width: 2,
    colors: ["transparent"],
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    enabled: false,
    y: {
      formatter: function (val) {
        return val + "";
      },
    },
  },
  xaxis: {
    categories: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
  },
};
export const BasicBarChart: ApexCharts.ApexOptions = {
  chart: {
    type: "bar",
    height: 350,
    toolbar: {
      tools: {
        download: false,
      },
    },
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 500,
      animateGradually: {
        enabled: true,
        delay: 400,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 400,
      },
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      borderRadius: 5,
      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    enabled: true,
    offsetY: -24,
    style: {
      fontSize: "12px",
      colors: ["#304758"],
    },
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
    ],
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "";
      },
    },
  },
};
export const BasicBarChartFake: ApexCharts.ApexOptions = {
  xaxis: {
    categories: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
    ],
  },
  chart: {
    type: "bar",
    height: 350,
    toolbar: {
      tools: {
        download: false,
      },
    },
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 500,
      animateGradually: {
        enabled: true,
        delay: 400,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 400,
      },
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      borderRadius: 5,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: false,
    width: 2,
    colors: ["transparent"],
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    enabled: false,
    y: {
      formatter: function (val) {
        return val + "";
      },
    },
  },
};
export const optionsStepline: ApexCharts.ApexOptions = {
  labels: [
    "0h",
    "1h",
    "2h",
    "3h",
    "4h",
    "5h",
    "6h",
    "7h",
    "8h",
    "9h",
    "10h",
    "11h",
    "12h",
    "13h",
    "14h",
    "15h",
    "16h",
    "17h",
    "18h",
    "19h",
    "20h",
    "21h",
    "22h",
    "23h",
  ],

  chart: {
    toolbar: {
      tools: {
        download: false,
      },
    },
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 500,
      animateGradually: {
        enabled: true,
        delay: 400,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 400,
      },
    },
  },
  stroke: {
    curve: "stepline",
  },
  dataLabels: {
    enabled: true,
    offsetY: -24,
    style: {
      fontSize: "12px",
      colors: ["#304758"],
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#475569",
        fontFamily: "Inter",
      },
    },
  },
  grid: {
    show: true,
    borderColor: "#e2e8f0",
    position: "back",
  },
  legend: {
    labels: {
      colors: "#475569",
    },
  },
  xaxis: {
    labels: {
      style: {
        colors: "#475569",
        fontFamily: "Inter",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  markers: {
    hover: {
      sizeOffset: 4,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      borderRadius: 5,
      dataLabels: {
        position: "top",
      },
    },
  },
};
export const optionsSteplineMobile: ApexCharts.ApexOptions = {
  labels: [
    "0 h",
    "1 h",
    "2 h",
    "3 h",
    "4 h",
    "5 h",
    "6 h",
    "7 h",
    "8 h",
    "9 h",
    "10 h",
    "11 h",
    "12 h",
    "13 h",
    "14 h",
    "15 h",
    "16 h",
    "17 h",
    "18 h",
    "19 h",
    "20 h",
    "21 h",
    "22 h",
    "23 h",
  ],

  chart: {
    toolbar: {
      tools: {
        download: false,
      },
    },
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 500,
      animateGradually: {
        enabled: true,
        delay: 400,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 400,
      },
    },
  },
  stroke: {
    curve: "stepline",
  },
  dataLabels: {
    enabled: true,
    offsetY: -24,
    style: {
      fontSize: "12px",
      colors: ["#304758"],
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#475569",
        fontFamily: "Inter",
      },
    },
  },
  grid: {
    show: true,
    borderColor: "#e2e8f0",
    position: "back",
  },
  legend: {
    labels: {
      colors: "#475569",
    },
  },
  xaxis: {
    labels: {
      rotate: -90,
      style: {
        colors: "#475569",
        fontFamily: "Inter",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  markers: {
    hover: {
      sizeOffset: 4,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      borderRadius: 5,
      dataLabels: {
        position: "top",
      },
    },
  },
};
export const optionsSteplineMobileFake: ApexCharts.ApexOptions = {
  labels: [
    "0 h",
    "1 h",
    "2 h",
    "3 h",
    "4 h",
    "5 h",
    "6 h",
    "7 h",
    "8 h",
    "9 h",
    "10 h",
    "11 h",
    "12 h",
    "13 h",
    "14 h",
    "15 h",
    "16 h",
    "17 h",
    "18 h",
    "19 h",
    "20 h",
    "21 h",
    "22 h",
    "23 h",
  ],

  chart: {
    toolbar: {
      show: false,
    },
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 500,
      animateGradually: {
        enabled: true,
        delay: 400,
      },
      dynamicAnimation: {
        enabled: true,
        speed: 400,
      },
    },
  },
  stroke: {
    curve: "stepline",
  },
  dataLabels: {
    enabled: false,
    offsetY: -24,
    style: {
      fontSize: "0px",
      colors: ["#304758"],
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#475569",
        fontFamily: "Inter",
      },
    },
  },
  grid: {
    show: true,
    borderColor: "#e2e8f0",
    position: "back",
  },
  legend: {
    labels: {
      colors: "#475569",
    },
  },
  xaxis: {
    labels: {
      rotate: -90,
      style: {
        colors: "#475569",
        fontFamily: "Inter",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  markers: {
    hover: {
      sizeOffset: 4,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      borderRadius: 5,
      dataLabels: {
        position: "top",
      },
    },
  },
};
