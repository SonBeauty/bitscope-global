import React from "react";

export const CustomTooltip = (data: any) => {
  return (
    <div className="bg-slate-900 text-white p-3 rounded-md">
      <p className=" text-white font-semibold text-base border-b border-slate-700 -mx-3  mb-3  pb-3 px-3 ">
        {data.label}
      </p>

      <div className="active">
        {data.payload.map((i: any) => {
          return (
            <div className=" items-center flex space-x-2" key={i.dataKey}>
              <span
                className="text-white inline-block w-3 h-3 rounded-full"
                style={{
                  backgroundColor: i.fill,
                }}
              ></span>
              <span className=" text-white capitalize text-sm">
                {i.dataKey} : {i.payload[i.dataKey]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
