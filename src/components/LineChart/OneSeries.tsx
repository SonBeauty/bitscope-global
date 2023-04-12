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
const series = [
  {
    name: "Followers Quality",
    data: [
      { category: "Jan", value: 15000 },
      { category: "Feb", value: 10000 },
      { category: "March", value: 5000 },
      { category: "April", value: 10000 },
      { category: "May", value: 10000 },
      { category: "June", value: 15000 },
      { category: "July", value: 15000 },
      { category: "August", value: 5000 },
      { category: "Sep", value: 1000 },
      { category: "Oct", value: 10000 },
      { category: "Nov", value: 5000 },
      { category: "Dec", value: 1000 },
    ],
  },
];
export default function OneSeries() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart width={500} height={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="category"
          type="category"
          allowDuplicatedCategory={false}
        />
        <YAxis dataKey="value" />
        <Tooltip />
        <Legend />
        {series.map((s) => (
          <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}