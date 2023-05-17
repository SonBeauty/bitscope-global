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

interface DataCateProps {
  category: number;
  value: number;
}
interface SeriProps {
  name: string;
  data: DataCateProps[];
}
interface OneSeriesProps {
  series: SeriProps[];
}
export default function OneSeries({ series }: OneSeriesProps) {
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
