"use client";

import {
  Bar,
  BarChart,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const data = [
  { name: "NRMA", uv: 400, change: -0.02 },
  { name: "AAMI", uv: 300, change: 0.03 },
  { name: "Allianz", uv: 300, change: 0.01 },
  { name: "Youi", uv: 200, change: -0.01 },
  { name: "BD", uv: 278, change: 0.04 },
  { name: "Suncorp", uv: 189, change: 0.02 },
  { name: "RACV", uv: 189, change: -0.01 },
  { name: "Other", uv: 189, change: 0.0 },
];

type RechartsTooltip = {
  active?: boolean;
  payload?: Array<{ payload?: { uv?: number; change?: number } }>;
};

const CustomTooltip = ({ active, payload }: RechartsTooltip) => {
  if (active && payload && payload.length) {
    const item = payload?.[0]?.payload;
    const uv = item?.uv ?? 0;
    const change = item?.change ?? 0;
    const isPositive = change >= 0;

    return (
      <div className="bg-white rounded-xl shadow-lg p-3 flex items-center gap-4 min-w-45">
        <div className={`p-3 rounded-lg ${isPositive ? "bg-green-50" : "bg-red-50"}`}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${isPositive ? "text-green-500" : "text-red-500"} w-6 h-6`}
            aria-hidden
          >
            <path d="M3 16l4-8 4 6 6-10 4 8" />
          </svg>
        </div>

        <div>
          <p className="text-2xl font-bold text-black">{uv}</p>
          <p className={`${isPositive ? "text-green-600" : "text-red-600"} font-medium text-sm`}>
            {`${Math.abs(Math.round((change || 0) * 100))}% `}
            <span className="text-gray-500 font-normal">vs Last Month</span>
          </p>
        </div>
      </div>
    );
  }

  return null;
};

const RechartsComponent = () => {
  return (
    <div className="pt-10 md:pt-28 flex flex-col gap-4 md:gap-16 md:pb-28">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl lg:text-[40px] font-semibold">
          Insurer <span className="text-brand">Insights</span>
        </h2>
        <p className="default-list-text max-w-2xl">
          Most asked-about insurers (last 30 days). Based on Claimly submissions. Not affiliated with any insurer.
        </p>
      </div>

      <div className="w-full h-96 md:h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 30, right: 0, left: 0, bottom: 25 }}
            barCategoryGap="10%"
            barGap={0}

          >
            <XAxis
              dataKey="name"
              padding={{ left: 0, right: 0 }}
              tick={{
                fontSize: 14,
                fontWeight: 700,
                fill: "#000",
              }}
              axisLine={{ stroke: "#2563EB" }}
            />

            <Tooltip content={<CustomTooltip />} cursor={false} />

            <Bar
              dataKey="uv"
              fill="#2563EB"
              radius={[8, 8, 0, 0]}
              activeBar={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RechartsComponent;
