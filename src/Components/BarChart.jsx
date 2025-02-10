import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
  ReferenceLine
} from "recharts";

const data = [
  { name: "Fail", value: 20 },
  { name: "Pending", value: 40 },
  { name: "Pass", value: 70 },
];

const COLORS = ["#F2383A", "#FFBB28", "#00C49F"];
const CustomizedLabel = ({ x, y, fill, width, value }) => {
  return (
    <text
      x={x + width / 2} // Position the label in the middle of the bar
      y={y + 20}
      fontSize="16"
      fontFamily="sans-serif"
      fill={"#ffff"}
      textAnchor="middle"
    >
      {value}%
    </text>
  );
};

const Barchart = () => {




  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-lg font-medium mb-4 text-black-100">Success Ratio</h2>

      <div className="h-60">
        <ResponsiveContainer>
          <BarChart data={data} layout="vertical" barSize={30}>
            <XAxis type="number" tickLine={false} domain={[0, 100]} />
            <YAxis
              type="category"
              dataKey="name"
              axisLine={false}
              tickLine={false}
            />

<ReferenceLine y="Fail" stroke="#666"  position="bottom" />
  <ReferenceLine y="Pending" stroke="#666" position="bottom"  />
  <ReferenceLine y="Pass" stroke="#666" position="bottom"  />

            <Bar
              dataKey="value"
              label={<CustomizedLabel />}
              radius={[0, 10, 10, 0]}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>

            
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Barchart;
