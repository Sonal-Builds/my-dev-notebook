import React from "react";

export default function KPICard({ title, value, prev, variation }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-sm font-semibold text-gray-600">{title}</h2>
      <p className="text-xl font-bold">{value}</p>
      <p className="text-xs text-gray-500">Previous: {prev}</p>
      <p className="text-xs text-blue-600">Variation: {variation}</p>
    </div>
  );
}
