import { RootState } from "@/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
  const isFake =
    useSelector((state: RootState) => state.authentication.isFakeData) ||
    Number.isNaN(series[0].data[0].value);
  const [fakeData, setFakeData] = useState<any>(
    series.map((item) => {
      return {
        name: item.name,
        data: item.data.map((item) => {
          return {
            category: item.category,
            value: 1 + Math.floor(Math.random() * 50),
          };
        }),
      };
    })
  );
  useEffect(() => {
    if (isFake) {
      let interval = setInterval(() => {
        setFakeData(
          series.map((item) => {
            return {
              name: item.name,
              data: item.data.map((item) => {
                return {
                  category: item.category,
                  value: 1 + Math.floor(Math.random() * 50),
                };
              }),
            };
          })
        );
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isFake, series]);
  return (
    <ResponsiveContainer width="100%" height={300} className="">
      <LineChart width={500} height={300} className="-ml-5">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="category"
          type="category"
          allowDuplicatedCategory={false}
        />
        <YAxis dataKey="value" />
        <Tooltip />
        <Legend />
        {isFake
          ? fakeData.map((s: any) => (
              <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
            ))
          : series.map((s) => (
              <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
            ))}
      </LineChart>
    </ResponsiveContainer>
  );
}
