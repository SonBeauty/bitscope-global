import {
  optionsStepline,
  optionsSteplineMobile,
  optionsSteplineMobileFake,
} from "@/constant/charts";
import useWidth from "@/hooks/useWidth";
import { RootState } from "@/store";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const StepLineChart = (series: any) => {
  const { width, breakpoints } = useWidth();
  const [options, setOptions] = useState(optionsStepline);
  const isFake = useSelector(
    (state: RootState) => state.authentication.isFakeData
  );
  const [fakeData, setFakeData] = useState<any>();
  useEffect(() => {
    if (isFake) {
      let interval = setInterval(() => {
        setFakeData(
          Array(24)
            .fill("")
            .map((_, index) => {
              return 1 + Math.floor(Math.random() * 50);
            })
        );
      }, 1500);
      return () => clearInterval(interval);
    }
    return setFakeData(series.series);
  }, [isFake, series.series]);
  useEffect(() => {
    if (width < breakpoints.md) {
      setOptions(isFake ? optionsSteplineMobileFake : optionsSteplineMobile);
    }
  }, [breakpoints.md, isFake, width]);
  return (
    <ReactApexChart
      options={options}
      series={[
        {
          name: "value",
          data: fakeData,
        },
      ]}
      type="bar"
      height="350"
    />
  );
};

export default StepLineChart;
