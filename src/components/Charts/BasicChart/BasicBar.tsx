import { BasicBarChart, BasicBarChartFake } from "@/constant/charts";
import { RootState } from "@/store";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
interface BasicBarProps {
  series: any;
}
export default function BasicBar({ series }: BasicBarProps) {
  const isFake = useSelector(
    (state: RootState) => state.authentication.isFakeData
  );
  const [fakeData, setFakeData] = useState<any>([
    {
      name: "Quantity",
      data: [
        1 + Math.floor(Math.random() * 11),
        1 + Math.floor(Math.random() * 11),
        1 + Math.floor(Math.random() * 11),
        1 + Math.floor(Math.random() * 11),
        1 + Math.floor(Math.random() * 11),
        1 + Math.floor(Math.random() * 11),
        1 + Math.floor(Math.random() * 11),
        1 + Math.floor(Math.random() * 11),
        1 + Math.floor(Math.random() * 11),
        1 + Math.floor(Math.random() * 11),
        1 + Math.floor(Math.random() * 11),
        1 + Math.floor(Math.random() * 11),
        1 + Math.floor(Math.random() * 11),
        1 + Math.floor(Math.random() * 11),
        1 + Math.floor(Math.random() * 11),
        1 + Math.floor(Math.random() * 11),
        1 + Math.floor(Math.random() * 11),
        1 + Math.floor(Math.random() * 11),
      ],
    },
  ]);
  useEffect(() => {
    if (isFake) {
      let interval = setInterval(() => {
        setFakeData([
          {
            name: "Quantity",
            data: [
              1 + Math.floor(Math.random() * 11),
              1 + Math.floor(Math.random() * 11),
              1 + Math.floor(Math.random() * 11),
              1 + Math.floor(Math.random() * 11),
              1 + Math.floor(Math.random() * 11),
              1 + Math.floor(Math.random() * 11),
              1 + Math.floor(Math.random() * 11),
              1 + Math.floor(Math.random() * 11),
              1 + Math.floor(Math.random() * 11),
              1 + Math.floor(Math.random() * 11),
              1 + Math.floor(Math.random() * 11),
              1 + Math.floor(Math.random() * 11),
              1 + Math.floor(Math.random() * 11),
              1 + Math.floor(Math.random() * 11),
              1 + Math.floor(Math.random() * 11),
              1 + Math.floor(Math.random() * 11),
              1 + Math.floor(Math.random() * 11),
              1 + Math.floor(Math.random() * 11),
            ],
          },
        ]);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isFake]);
  return (
    <ReactApexChart
      options={isFake ? BasicBarChartFake : BasicBarChart}
      series={isFake ? fakeData : series}
      type="bar"
      height={350}
    />
  );
}
