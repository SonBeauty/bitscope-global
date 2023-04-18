import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "0h",
    user: 2400,
  },
  {
    name: "1h",
    user: 1398,
  },
  {
    name: "2h",
    user: 9800,
  },
  {
    name: "3h",
    user: 3908,
  },
  {
    name: "4h",
    user: 4800,
  },
  {
    name: "5h",
    user: 3800,
  },
  {
    name: "6h",
    user: 4300,
  },
  {
    name: "7h",
    user: 4400,
  },
  {
    name: "8h",
    user: 4350,
  },
  {
    name: "9h",
    user: 3300,
  },
  {
    name: "10h",
    user: 4000,
  },
  {
    name: "11h",
    user: 4300,
  },
  {
    name: "12h",
    user: 4300,
  },
  {
    name: "13h",
    user: 4300,
  },
  {
    name: "14h",
    user: 4300,
  },
  {
    name: "15h",
    user: 4300,
  },
  {
    name: "16h",
    user: 4300,
  },
  {
    name: "17h",
    user: 4300,
  },
  {
    name: "18h",
    user: 4300,
  },
  {
    name: "19h",
    user: 4300,
  },
  {
    name: "20h",
    user: 4300,
  },
  {
    name: "21h",
    user: 4300,
  },
  {
    name: "22h",
    user: 4300,
  },
  {
    name: "23h",
    user: 4300,
  },
];
export default function Simple({ className }) {
  return (
    <ResponsiveContainer width="100%" height={300} className={className}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="user"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
