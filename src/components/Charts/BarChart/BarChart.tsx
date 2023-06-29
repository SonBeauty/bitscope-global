import { optionsBarChart, optionsBarChartFake } from "@/constant/charts";
import { RootState } from "@/store";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
interface BarChartProps {
  className?: string;
  series: any;
}
const BarChart = ({ className, series }: BarChartProps) => {
  const isFake = useSelector(
    (state: RootState) => state.authentication.isFakeData
  )
  const [fakeData, setFakeData] = useState<any>([
    {
      name: "Activities",
      type: "bar",
      data: [
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
            name: "Activities",
            type: "bar",
            data: [
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
    <div className={`${className} bg-background rounded-md w-full`}>
      <h6 className="md:py-[3px] py-[13px] px-[22px] font-Inter font-semibold md:text-base text-xl leading-5">Activities of the week</h6>
      {isFake ? (
        <Chart
          options={optionsBarChartFake}
          series={fakeData}
          type="bar"
          height={350}
          className="apex-charts py-[34px]"
        />
      ) : (
        <Chart
          options={optionsBarChart}
          series={series}
          type="bar"
          height={350}
          className="apex-charts py-[34px]"
        />
      )}
    </div>
  );
};
export default BarChart;
