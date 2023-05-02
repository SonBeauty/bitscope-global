import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
export default function BarChartsBasic() {
  const series = [
    {
      data: [400, 430, 1200, 1380],
    },
  ];
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["Direct", "Refernal", "Social Media", "Twetter"],
    },
  };
  return (
    <div className="rounded-lg bg-white p-4 shadow dark:bg-gray-800 sm:p-6 xl:p-8">
      <span className="text-xl font-bold leading-none text-gray-900 dark:text-white sm:text-3xl">
        Visitor Report
      </span>
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
      <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-2 dark:border-gray-700 sm:pt-5">
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