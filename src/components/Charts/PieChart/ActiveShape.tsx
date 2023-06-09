import { optionsActiveShape, optionsActiveShapeFake } from "@/constant/charts";
import { labelRender } from "@/constant/components/ActiveShape";
import { RootState } from "@/store";
import { Spinner } from "flowbite-react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
interface ActiveShapeProps {
  className?: string;
  series: number[];
  col?: boolean;
}

export default function ActiveShape({
  className,
  series,
  col = false,
}: ActiveShapeProps) {
  const isFake =
    useSelector((state: RootState) => state.authentication.isFakeData) ||
    JSON.stringify(series) === JSON.stringify([0, 0, 0, 0]);

  const [fakeData, setFakeData] = useState<any>([0, 0, 0, 0]);
  useEffect(() => {
    if (isFake) {
      let interval = setInterval(() => {
        setFakeData([
          1 + Math.floor(Math.random() * 23),
          1 + Math.floor(Math.random() * 23),
          1 + Math.floor(Math.random() * 23),
          1 + Math.floor(Math.random() * 23),
        ]);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isFake, series]);

  return (
    <div className={` ${className} `}>
      <div>
        <h6 className="p-6">Quality Rating</h6>
        <Chart
          options={isFake ? optionsActiveShapeFake : optionsActiveShape}
          series={isFake ? fakeData : series}
          type="donut"
          height="300"
        />
        {col ? (
          <div className="flex flex-col gap-3 p-4">
            {labelRender.map((item, index) => {
              return (
                <div
                  className="flex items-center gap-2 justify-between"
                  key={index}
                >
                  <div className="flex gap-1 items-center">
                    <div
                      className={`w-2 h-2 ${item.bg} rounded-full mb-1`}
                    ></div>
                    <span className="font-semibold">{item.label}</span>
                  </div>
                  <span>
                    {isFake ? (
                      <Spinner aria-label="Info spinner example" color="info" />
                    ) : (
                      series[index] + "%"
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-4 grid grid-cols-2 gap-2">
            {labelRender.map((item, index) => {
              return (
                <div
                  className="flex justify-between items-center px-2"
                  key={index}
                >
                  <div className="flex gap-1 items-center">
                    <div
                      className={`w-2 h-2 ${item.bg} rounded-full mb-1`}
                    ></div>
                    <span className="font-semibold">{item.label} : </span>
                  </div>
                  <span>
                    {isFake ? (
                      <Spinner aria-label="Info spinner example" color="info" />
                    ) : (
                      series[index] + "%"
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
