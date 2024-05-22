import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PerformanceChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="area" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="score" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PerformanceChart;
