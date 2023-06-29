import useDarkMode from "@/hooks/useDarkMode";
import { RootState } from "@/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CustomTooltip } from "../componenets/CustomTooltip";
import StepLineChart from "./StepLineChart";

const AreaReChart = ({ series }: any) => {
  const [isDark] = useDarkMode();
  const isFake =
    useSelector((state: RootState) => state.authentication.isFakeData) ||
    Number.isNaN(series[0].data[0].value);
  const [fakeData, setFakeData] = useState<any>(
    series.map((item: any) => {
      return {
        name: item.name,
        data: item?.data?.map((item: any) => {
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
          series.map((item: any) => {
            return {
              name: item.name,
              data: item?.data?.map((item: any) => {
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
    <div>
      <ResponsiveContainer height={350}>
        <AreaChart height={300} data={fakeData[0].data}>
          <CartesianGrid
            strokeDasharray="1 1"
            stroke={isDark ? "#334155" : "#e2e8f0"}
          />
          <XAxis
            dataKey="category"
            tick={{ fill: isDark ? "#cbd5e1" : "#64748b" }}
            tickLine={{ stroke: isDark ? "#cbd5e1" : "#64748b" }}
            stroke={isDark ? "#334155" : "#e2e8f0"}
          />
          <YAxis
            tick={{ fill: isDark ? "#cbd5e1" : "#64748b" }}
            tickLine={{ stroke: isDark ? "#cbd5e1" : "#64748b" }}
            stroke={isDark ? "#334155" : "#e2e8f0"}
          />
          <Tooltip content={CustomTooltip} />
          <Area
            dataKey="value"
            stackId="value"
            stroke="0"
            fill="rgb(70, 105, 250)"
          />
        </AreaChart>
      </ResponsiveContainer>
    
    </div>
  );
};

export default AreaReChart;
