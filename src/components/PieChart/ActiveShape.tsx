import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
interface ActiveShapeProps {
  className?: string;
  series: number[];
}
export default function ActiveShape({ className, series }: ActiveShapeProps) {
  const options: ApexCharts.ApexOptions = {
    labels: [
      "Hight Quality",
      "Normal Quality",
      "Low Quality",
      "BOT or Bad quality",
    ],
    dataLabels: {
      enabled: true,
    },
    colors: ["rgb(59,130,246)", "#50C793", "#F1595C", "#FBBF24"],
    legend: {
      position: "bottom",
      fontSize: "16px",
      fontFamily: "Poppins",
      fontWeight: 400,
      labels: {
        colors: "#475569",
      },
    },

    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "26px",
              fontWeight: "bold",
              fontFamily: "Poppins",
              color: "#475569",
            },
            value: {
              show: true,
              fontFamily: "Poppins",
              color: "#475569",

              formatter(val: any) {
                return `${parseInt(val)}%`;
              },
            },
            total: {
              show: true,
              fontSize: "1.5rem",
              color: "#475569",
              label: "Total",
              formatter() {
                return "100%";
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
  return (
    <div className={`flex items-center justify-center ${className} `}>
      <div>
        <Chart options={options} series={series} type="donut" height="650" />
      </div>
    </div>
  );
}
