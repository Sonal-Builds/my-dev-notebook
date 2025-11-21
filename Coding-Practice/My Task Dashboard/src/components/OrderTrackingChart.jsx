import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", complete: 40 },
  { month: "Feb", complete: 50 },
  { month: "Mar", complete: 35 },
  { month: "Apr", complete: 60 }
];

export default function OrderTrackingChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow h-80">
      <h2 className="font-semibold mb-2">Monthly order tracking</h2>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="complete" fill="#5cb85c" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
