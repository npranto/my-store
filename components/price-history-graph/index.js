import React from "react";
import dynamic from "next/dynamic";
import { XAxis, YAxis, CartesianGrid, Tooltip, Area } from "recharts";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const AreaChart = dynamic(
  () => import("recharts").then((recharts) => recharts.AreaChart),
  { ssr: false }
);

const data = [
  { month: "Apr", price: 110 },
  { month: "May", price: 115 },
  { month: "Jun", price: 118 },
  { month: "Jul", price: 33 },
  { month: "Aug", price: 130 },
  { month: "Sep", price: 234 },
  { month: "Oct", price: 140 },
  { month: "Nov", price: 313 },
  { month: "Dec", price: 150 },
  { month: "Jan", price: 155 },
  { month: "Feb", price: 130 },
  { month: "Mar", price: 95 },
];

const capitalizeFirstLetterOfEachWord = (str) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export default function PriceHistoryGraph() {
  const tooltipFormatter = (value, name) => {
    return [`${capitalizeFirstLetterOfEachWord(name)}: $${value}`];
  };

  return (
    <section className="py-4 w-full" data-component-id="price-history-graph">
      <h2 className="font-manrope font-bold text-2xl text-black mb-8 text-left">
        Price History
      </h2>
      <div className="min-h-[250px]">
        <AreaChart
          className="max-w-[100%] min-h-[175px]"
          width={700}
          height={250}
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
        >
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis dataKey="price" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip
            formatter={tooltipFormatter}
            itemStyle={{ color: "gray", fontWeight: "lighter" }}
          />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPrice)"
          />
        </AreaChart>
      </div>
    </section>
  );
}
