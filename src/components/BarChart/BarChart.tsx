import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};
const labes = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];
const labels = [
  { value: 450000 },
  { value: 500000 },
  { value: 460000 },
  { value: 610000 },
  { value: 280000 },
  { value: 600000 },
  { value: 390000 },
];
export const data = {
  labels: labes,
  datasets: [
    {
      label: "Week",
      data: labels.map((item) => item.value),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
interface BarChartProps {
  className: string;
}
export default function BarChart({ className }: BarChartProps) {
  return (
    <div className={`${ className } bg-background rounded-2xl w-full`}>
      <Bar options={options} data={data} className="h-full w-full p-6" />
    </div>
  );
}