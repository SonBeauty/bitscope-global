import useWidth from "@/hooks/useWidth";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const RadialsChart = () => {
  const { width, breakpoints } = useWidth();
  const series = [44, 55, 67, 83];
  const options: ApexCharts.ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
            color:"#475569",
          },
          value: {
            fontSize: "16px",
            color:"#475569",
          },
          total: {
            show: true,
            label: "Total",
            color:"#475569",
          },
        },
        track: {
          background: "#E2E8F0",
          strokeWidth: "97%",
        },
      },
    },
    labels: ["A", "B", "C", "D"],
    colors: ["#4669FA", "#FA916B", "#50C793", "#0CE7FA"],
  };
  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="radialBar"
        height={width > breakpoints.md ? 375 : 250} 
      />
    </div>
  );
};
export default RadialsChart;