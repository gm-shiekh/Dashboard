import React from "react";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,

} from "recharts";

const productPerformanceData = [
  { name: "Exam 1", Pending: 40, Pass: 24, Fail: 24 },
  { name: "Exam 2", Pending: 30, Pass: 13, Fail: 22 },
  { name: "Exam 3", Pending: 20, Pass: 98, Fail: 22 },
//   { name: "Exam 4", sales: 27, revenue: 39, profit: 20 },

];
const VerticalBars = () => {
  return (
    <div className="p-8 bg-white rounded-lg  pl-0">
      <h2 className="text-xl font-semibold text-black-100 mb-4 pl-8">
        Exams Score
      </h2>
      <div style={{ width: "100%", height: 250 }}>
        <ResponsiveContainer>
          <BarChart data={productPerformanceData} barSize={26}  barGap={10}>
            <CartesianGrid  strokeDasharray="8 8" stroke="#d7dade"  vertical={false}   />
            <XAxis dataKey="name" stroke="#9CA3AF" tickLine={false}  />
            <YAxis stroke="#9CA3AF" axisLine={false} tickLine={false}/>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
              labelStyle={{color:"#E5E7EB",fontWeight:700}}
            />
            <Legend iconType="circle" iconSize={10}/>
            
            <Bar dataKey="Pass" fill="#00C49F" radius={[10, 10, 0, 0]}/>
            <Bar dataKey="Pending" fill="#FFBB28"  radius={[10, 10, 0, 0]}/>
            <Bar dataKey="Fail" fill="#F2383A" radius={[10, 10, 0, 0]}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VerticalBars;
