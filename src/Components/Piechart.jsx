import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  
  { name: "Pass", value: 300 },
  { name: "Pending", value: 300 },
  { name: "Fail", value: 100 },
];

const COLORS = ["#00C49F", "#FFBB28",'#F2383A'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const Piechart = () => {
  return (
    <div className="bg-white p-8 lg:w-[350px] rounded-lg w-auto">
      <h2 className="text-lg font-medium mb-4 text-black-100">Exams Ratio</h2>
      <div className="h-60">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
             <Tooltip
                          contentStyle={{
                            backgroundColor: "rgba(31, 41, 55, 0.8)",
                            borderColor: "#4B5563",
                          }}
                          itemStyle={{ color: "#E5E7EB" }}
                        />
            <Legend verticalAlign="middle" layout="vertical" align="right" iconSize={10}/>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Piechart;
