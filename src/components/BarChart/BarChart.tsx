import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
interface BarChartProps {
  className?: string;
}
const BarChart = ({ className }: BarChartProps) => {
  const series = [
    {
      name: "Column",
      type: "column",
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
    },
    {
      name: "Area",
      type: "area",
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
    },
    {
      name: "Line",
      type: "line",
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
    },
  ];
  const options: ApexCharts.ApexOptions = {
    chart: {
      stacked: false,
      toolbar: {
        show: false,
      },
    },

    stroke: {
      width: [0, 2, 5],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
      },
    },

    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: [
      "01/01/2003",
      "02/01/2003",
      "03/01/2003",
      "04/01/2003",
      "05/01/2003",
      "06/01/2003",
      "07/01/2003",
      "08/01/2003",
      "09/01/2003",
      "10/01/2003",
      "11/01/2003",
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          colors: "#475569",
          fontFamily: "Poppins",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      labels: {
        style: {
          colors: "#475569",
          fontFamily: "Poppins",
        },
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    legend: {
      labels: {
        useSeriesColors: true,
      },
    },
    grid: {
      show: true,
      borderColor: "#e2e8f0",
      position: "back",
    },
    colors: ["#4669FA", "#50C793", "#0CE7FA"],
  };
  return (
    <div className={`${className} bg-background rounded-2xl w-full`}>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default BarChart;
