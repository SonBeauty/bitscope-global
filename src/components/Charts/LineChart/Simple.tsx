import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface SimpleProps {
  className?: string;
  data: any;
}
export default function Simple({ className, data }: SimpleProps) {
  return (
    <>
      <h6 className="font-semibold text-sm leading-5 pb-8">
        Active time frame
      </h6>
      <div className="relative">
        <ResponsiveContainer
          width="100%"
          height={300}
          className={`${className} animate-pulse`}
        >
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 0,
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
        <h2 className="absolute animate-pulse text-9xl font-black text-slate-200 top-1/4 left-1/3">
          Loading...
        </h2>
      </div>
    </>
  );
}
