import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const RadarChart = () => {
  const series = [67];
  const options: ApexCharts.ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: "22px",
            color: "#475569",
          },
          value: {
            fontSize: "16px",
            color: "#475569",
          },
          total: {
            show: true,
            label: "Total",
            color: "#475569",
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91],
      },
    },
    stroke: {
      dashArray: 4,
    },
    colors: ["#4669FA"],
  };
  return (
    <div>
      <Chart series={series} options={options} type="radialBar" height="320" />
    </div>
  );
};
export default RadarChart;