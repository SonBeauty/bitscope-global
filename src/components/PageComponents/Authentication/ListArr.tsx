import OdometerNumber from "@/components/Odometer";
import Card from "@/components/ui/Card";
import { ArrRender } from "@/interface/page/Authentication";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Player } from "@lottiefiles/react-lottie-player";
const CountUp = dynamic(() => import("react-countup"), {
  ssr: false,
});
interface ListArrProps {
  arrRender: ArrRender[];
  className?: string;
  col: number;
  bg?: string;
  bgs?: string;
  cols?: number;
}
export default function ListArr({
  arrRender,
  className,
  col,
  bgs,
  cols = 4,
}: ListArrProps) {
  const [zero, setZero] = useState<boolean>(true);
  const convert = (chuoi: string) => {
    if (chuoi.includes(".") && !chuoi.includes("K")) {
      return parseFloat(chuoi);
    }
    let chuois = chuoi.replace(/\D/g, "");

    if (chuoi.slice(-1) === "K") {
      return parseInt(chuois) * 100;
    } else if (chuoi.slice(-1) === "M") {
      return parseInt(chuois) * 100000;
    } else if (chuoi.slice(-1) === "B") {
      return parseInt(chuois) * 100000000;
    }
    return parseInt(chuois);
  };
  const data = arrRender.map((item) => {
    return item.count;
  });
  useEffect(() => {
    if (
      JSON.stringify(data) === JSON.stringify([0, 0, "0", 0]) ||
      JSON.stringify(data) === JSON.stringify([0, 0, 0, 0]) ||
      JSON.stringify(data) === JSON.stringify([0, 0, 0])
    ) {
      return setZero(true);
    }
    return setZero(false);
  }, [data]);
  return (
    <Card
      bodyClass={`${className ? className : "bg-background"}`}
      className="shadow-none"
    >
      <div
        className={`grid bg-[#F7F9FB] ${
          col === 4 ? "md:grid-cols-4" : "md:grid-cols-3"
        } col-span-1 gap-6 ${bgs}`}
      >
        {arrRender.map((item: ArrRender, i: number) => (
          <div className={`py-8 px-4 rounded-lg shadow-md ${item?.bg}`} key={i}>
            <div className="flex items-center justify-between">
              <div className="flex items-start flex-col h-full rtl:space-x-reverse gap-2">
                <div className="flex flex-col justify-center items-start">
                  <div className="text-slate-800 mb-4 text-center dark:text-white text-base font-semibold left-5">
                    {item?.title}
                  </div>
                  <div className="text-slate-900 mt-4 dark:text-white text-3xl font-medium ">
                    {item.title === "Positive Time Frame" ? (
                      zero ? (
                        <OdometerNumber num={i + 1} className="" run={zero} />
                      ) : (
                        item.count
                      )
                    ) : zero ? (
                      <OdometerNumber num={i + 1} className="" run={zero} />
                    ) : (
                      <CountUp start={0} end={convert(`${item?.count}`)} />
                    )}
                  </div>
                </div>
              </div>
              {item.icon
                ? zero && (
                    <Player
                      autoplay
                      loop
                      src="/assets/jsonGif/searching.json"
                      style={{ height: "100px", width: "100px" }}
                      className="p-0"
                    ></Player>
                  )
                : item?.icon && <div className="block ">{item.icon}</div>}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
