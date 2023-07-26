export const getApexOptions = (
  categories: string[],
  rotate?: number
): ApexCharts.ApexOptions => {
  return {
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
        borderRadius: 5,
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
      offsetY: -24,
      style: {
        fontSize: "16px",
        colors: ["#304758"],
      },
    },
    xaxis: {
      categories,
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
      labels: {
        rotate: rotate ?? 0,
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
};
export const BarFakeOptions = (
  categories: string[],
  rotate?: number
): ApexCharts.ApexOptions => {
  return {
    xaxis: {
      categories,
      labels: {
        rotate: rotate ?? 0,
      },
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
    tooltip: {
      enabled: false,
    },
  };
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
export const optionsBarChart: ApexCharts.ApexOptions = getApexOptions([
  "Mo",
  "Tu",
  "We",
  "Th",
  "Fr",
  "Sa",
  "Su",
]);
export const optionsBarChartFake: ApexCharts.ApexOptions = BarFakeOptions([
  "Mo",
  "Tu",
  "We",
  "Th",
  "Fr",
  "Sa",
  "Su",
]);
export const BasicBarChart: ApexCharts.ApexOptions = getApexOptions([
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
]);
export const BasicBarChartFake: ApexCharts.ApexOptions = BarFakeOptions([
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
]);
export const optionsStepline: ApexCharts.ApexOptions = getApexOptions([
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
]);
export const optionsSteplineMobile: ApexCharts.ApexOptions = getApexOptions(
  [
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
  -90
);
export const optionsSteplineMobileFake: ApexCharts.ApexOptions = BarFakeOptions(
  [
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
  -90
);
