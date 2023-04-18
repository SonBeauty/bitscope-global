import React from "react";
import dynamic from "next/dynamic";
import DatePicker from "../PageComponents/Dashboard/DatePicker";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
export default function PieChartsSimpleDonut() {
  const series = [44, 55, 41, 17, 15];
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "donut",
    },
    legend: {
      position: "bottom",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };
  return (
    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8 flex flex-col items-center justify-bet">
      <span className="text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">
        Income Breakdown
      </span>
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        width={470}
      />
      <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-2 dark:border-gray-700 sm:pt-5 w-full">
        <DatePicker />
        <div className="shrink-0">
          <a
            href="#"
            className="inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700 sm:text-sm"
          >
            Sales Report
            <svg
              className="ml-1 h-4 w-4 sm:h-5 sm:w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
