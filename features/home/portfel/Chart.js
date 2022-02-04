import React from "react";
import {
  XAxis,
  CartesianGrid,
  Area,
  YAxis,
  Tooltip,
  AreaChart,
} from "recharts";
function Charts() {
  const data = [
    {
      xDataKey: "24.09",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      xDataKey: "25.09",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      xDataKey: "26.09",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      xDataKey: "27.09",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      xDataKey: "27.09",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      xDataKey: "27.09",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      xDataKey: "28.09",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <React.Fragment>
      <AreaChart
        width={570}
        height={200}
        data={data}
        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#158AD8" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#095597" stopOpacity={1} />
          </linearGradient>
        </defs>
        <XAxis dataKey="xDataKey" fontSize={12} tickLine={false} />
        <YAxis fontSize={12} tickLine={false} />
        <CartesianGrid
          strokeDasharray="3 3"
          horizontal={false}
          vertical={false}
        />
        <Tooltip />
        <Area
          type="monotone"
          dot={{ stroke: "#158AD8", strokeWidth: 3 }}
          activeDot={false}
          dataKey="amt"
          stroke="#158AD8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </React.Fragment>
  );
}

export default Charts;
