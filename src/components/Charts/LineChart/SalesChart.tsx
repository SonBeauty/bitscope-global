import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
export default function SalesChart() {
  const options: ApexCharts.ApexOptions = {
    stroke: {
      curve: "smooth",
    },
    chart: {
      type: "area",
      foreColor: "#6B7280",
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      style: {
        fontSize: "14px",
      },
    },
    grid: {
      show: true,
      borderColor: "#F3F4F6",
      strokeDashArray: 1,
      padding: {
        left: 35,
        bottom: 15,
      },
    },
    markers: {
      size: 5,
      strokeColors: "#ffffff",
      hover: {
        size: undefined,
        sizeOffset: 3,
      },
    },
    xaxis: {
      categories: [
        "01 Feb",
        "02 Feb",
        "03 Feb",
        "04 Feb",
        "05 Feb",
        "06 Feb",
        "07 Feb",
      ],
      labels: {
        style: {
          colors: ["#6B7280"],
          fontSize: "14px",
          fontWeight: 500,
        },
      },
      axisBorder: {
        color: "#6B7280",
      },
      axisTicks: {
        color: "#6B7280",
      },
      crosshairs: {
        show: true,
        position: "back",
        stroke: {
          color: "#6B7280",
          width: 1,
          dashArray: 10,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: ["#6B7280"],
          fontSize: "14px",
          fontWeight: 500,
        },
        formatter: function (value) {
          return "" + value;
        },
      },
    },
    legend: {
      fontSize: "14px",
      fontWeight: 500,
      labels: {
        colors: ["#6B7280"],
      },
      itemMargin: {
        horizontal: 10,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          xaxis: {
            labels: {
              show: false,
            },
          },
        },
      },
    ],
  };
  const series = [
    {
      name: "Revenue",
      data: [6356, 6218, 6156, 6526, 6356, 6256, 6056],
      color: "#1A56DB",
    },
  ];

  return <Chart height={300} options={options} series={series} type="area" />;
}
