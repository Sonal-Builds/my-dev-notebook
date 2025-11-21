import React from "react";
import KPICard from "./components/KPICard";
import ProductionCostChart from "./components/ProductionCostChart";
import OrderTrackingChart from "./components/OrderTrackingChart";

export default function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Manufacturing operations analytics dashboard
      </h1>

      <div className="grid grid-cols-5 gap-4 mb-6">
        <KPICard title="Produced quantity" value="2,022,840" prev="3,602,625" variation="42.25%" />
        <KPICard title="Production quality" value="98.00%" prev="5 errors" variation="Good" />
        <KPICard title="Production cost" value="1,026,794" prev="1,628,101" variation="-36%" />
        <KPICard title="Cost efficiency" value="100%" prev="992,784" variation="100% consumed" />
        <KPICard title="Production fulfilment" value="90%" prev="100%" variation="On time" />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <ProductionCostChart />
        <OrderTrackingChart />
      </div>
    </div>
  );
}
