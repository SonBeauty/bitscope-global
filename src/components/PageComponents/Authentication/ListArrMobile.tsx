import OdometerNumber from "@/components/Odometer";
import Card from "@/components/ui/Card";
import { ArrRender } from "@/interface/page/Authentication";
import { Player } from "@lottiefiles/react-lottie-player";
import dynamic from "next/dynamic";
const CountUp = dynamic(() => import("react-countup"), {
  ssr: false,
});
interface ListArrMobileProps {
  className?: string;
  col: number;
  arrRender: any;
  zero: boolean;
  dataStart: any;
  convert: any;
}
export default function ListArrMobile({
  className,
  arrRender,
  zero,
  dataStart,
  convert,
}: ListArrMobileProps) {
  return (
    <Card
      bodyClass={`${
        className ? className : "bg-background"
      } flex flex-col gap-[12px]`}
      className="shadow-none "
    >
      <div
        className={`grid bg-[#F7F9FB] md:grid-cols-3 grid-cols-2 gap-[14px]`}
      >
        <div
          className={`p-[15px] md:p-[23px] rounded-md shadow-md ${arrRender[0]?.bg}`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-start flex-col h-full w-full gap-2">
              <div className="flex flex-col justify-between items-start w-full">
                <div className="flex gap-[0.73rem] items-center w-full">
                  <span className="text-[#1C1C1C] text-start dark:text-white text-base leading-5 font-normal">
                    {arrRender[0]?.title}
                  </span>
                </div>
                <div className="text-slate-900 mt-4 dark:text-white text-3xl font-medium flex w-full items-center justify-between">
                  {zero ? (
                    <OdometerNumber
                      num={1 + Math.floor(Math.random() * 4)}
                      className=""
                      run={zero}
                    />
                  ) : (
                    <CountUp
                      start={dataStart ? dataStart[0]?.count : 0}
                      end={convert(`${arrRender[0]?.count}`)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`p-[15px] md:p-[23px] rounded-md shadow-md ${arrRender[1]?.bg}`}
        >
          <div className="flex items-center justify-between h-full">
            <div className="flex items-start flex-col h-full w-full gap-2">
              <div className="flex flex-col justify-between items-start w-full h-full">
                <div className="flex gap-[0.73rem] items-center w-full">
                  <span className="text-[#1C1C1C] text-start dark:text-white text-base leading-5 font-normal">
                    {arrRender[1]?.title}
                  </span>
                </div>
                <div className="text-slate-900 dark:text-white text-3xl font-medium flex w-full items-center justify-between">
                  {zero ? (
                    <OdometerNumber
                      num={1 + Math.floor(Math.random() * 4)}
                      className=""
                      run={zero}
                    />
                  ) : (
                    <CountUp
                      start={dataStart ? dataStart[1]?.count : 0}
                      end={convert(`${arrRender[1]?.count}`)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`grid bg-[#F7F9FB] grid-cols-1`}>
        <div
          className={`p-[15px] md:p-[23px] rounded-md shadow-md ${arrRender[2]?.bg}`}
        >
          <div className="flex flex-col items-center justify-center">
            <span className="text-[#1C1C1C] text-center dark:text-white text-base leading-5 font-normal">
              {arrRender[2]?.title}
            </span>
            <div className="text-slate-900 mt-4 dark:text-white text-3xl font-medium flex w-full items-center justify-center">
              {zero ? (
                <OdometerNumber
                  num={1 + Math.floor(Math.random() * 4)}
                  className=""
                  run={zero}
                />
              ) : (
                <CountUp
                  start={dataStart ? dataStart[2]?.count : 0}
                  end={convert(`${arrRender[2]?.count}`)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
