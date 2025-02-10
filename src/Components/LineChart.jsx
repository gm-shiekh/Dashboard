import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,Legend } from "recharts";

const salesData = [
	{ name: "Jul", Score: 0 },
	{ name: "Aug", Score: 60 },
	{ name: "Sep", Score: 40 },
	{ name: "Oct", Score: 70 },
	{ name: "Nov", Score: 80 },
	
];

const Linechart = () => {
  return (
    <div className=' bg-white rounded-lg lg:w-[300px] pt-8 pb-8 w-auto'>
        <h2 className='text-lg font-medium mb-4 text-black-100 pl-4'>Exams Overview</h2>

<div className='h-60 pr-4'>
    <ResponsiveContainer width={"100%"} height={"100%"}>
        <LineChart data={salesData}>
            <CartesianGrid strokeDasharray='8 8' stroke="#d7dade"  />
            <XAxis dataKey={"name"} stroke='#9ca3af' tickLine={false}/>
            <YAxis stroke='#9ca3af' tickLine={false} axisLine={false} domain={[0, 100]}/>
            <Tooltip
                contentStyle={{
                    backgroundColor: "rgba(31, 41, 55, 0.8)",
                    borderColor: "#4B5563",
                }}
                itemStyle={{ color: "#E5E7EB" }}
                labelStyle={{color:"#E5E7EB",fontWeight:700}}
            />
            <Legend iconType="circle" iconSize={10}/>
            <Line
                type='monotone'
                dataKey='Score'
                stroke='#00C49F'
                strokeWidth={1}
                dot={{ fill: "#00C49F", strokeWidth: 1, r: 4 }}
                activeDot={{ r: 6, strokeWidth: 2 }}
            />
            
        </LineChart>
    </ResponsiveContainer>
</div>
    </div>
  )
}

export default Linechart