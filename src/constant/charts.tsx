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
export const optionsActiveShape: ApexCharts.ApexOptions = {
  labels: [
    "Hight Quality",
    "Normal Quality",
    "Low Quality",
    "BOT, Bad Quality",
  ],
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
  labels: [
    "Hight Quality",
    "Normal Quality",
    "Low Quality",
    "BOT, Bad Quality",
  ],
  dataLabels: {
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
    enabled: false,
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
      enabled: false,
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
      show: false,
    },
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
    offsetY: -22,
    style: {
      fontSize: "16px",
      colors: ["#304758"],
    },
  },
  stroke: {
    show: false,
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
  yaxis: {
    title: {
      text: "Followers Quality Graph",
    },
    labels: {
      show: true,
    },
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
  yaxis: {
    title: {
      text: "Followers Quality Graph",
    },
    labels: {
      show: false,
    },
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
