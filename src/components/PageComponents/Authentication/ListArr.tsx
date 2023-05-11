import Card from "@/components/ui/Card";
import { ArrRender } from "@/interface/page/Authentication";
import React from "react";
interface ListArrProps {
  arrRender: ArrRender[];
  className?: string;
  col: number;
}
export default function ListArr({ arrRender, className, col }: ListArrProps) {
  return (
    <Card bodyClass={`${className ? className : "bg-slate-50"}`}>
      <div
        className={`grid ${
          col === 4 ? "md:grid-cols-4" : "md:grid-cols-3"
        } col-span-1 gap-4`}
      >
        {arrRender.map((item: ArrRender, i: number) => (
          <div className={`py-8 px-4 rounded-[6px] ${item.bg}`} key={i}>
            <div className="flex items-center flex-col h-full rtl:space-x-reverse gap-2">
              {item.icon && <div className="block basis-1/3">{item.icon}</div>}
              <div className="flex-1 flex flex-col justify-center items-center">
                <div className="text-slate-800 text-center dark:text-slate-300 text-lg mb-1 font-medium basis-1/3">
                  {item.title}
                </div>
                <div className="text-slate-900 dark:text-white text-2xl font-medium basis-1/3">
                  {item.count}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
