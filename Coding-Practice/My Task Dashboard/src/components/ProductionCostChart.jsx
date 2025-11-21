import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", actual: 1200, planned: 1000 },
  { month: "Feb", actual: 1300, planned: 1100 },
  { month: "Mar", actual: 900, planned: 950 },
  { month: "Apr", actual: 1000, planned: 1050 }
];

export default function ProductionCostChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow h-80">
      <h2 className="font-semibold mb-2">Production costs over time</h2>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="actual" fill="#d9534f" />
          <Bar dataKey="planned" fill="#5bc0de" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
