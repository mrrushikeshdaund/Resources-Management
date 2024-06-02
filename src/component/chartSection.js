import React from "react";
import { Chart } from "react-google-charts";

const ChartSection = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Watch TV", 2],
    ["Watch TV", 2],
    ["Watch TV", 2],
    ["Watch TV", 2],
    ["Watch TV", 2],
    ["Watch TV", 2],
    ["Watch TV", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  return (
    <div style={{display:'flex',gap:'1rem'}}>
      <Chart
        chartType="PieChart"
        data={data}
        width="100%"
        height="250px"
        legendToggle
      />
      <Chart
        chartType="PieChart"
        data={data}
        width="100%"
        height="250px"
        legendToggle
      />
      <Chart
        chartType="PieChart"
        data={data}
        width="100%"
        height="250px"
        legendToggle
      />
    </div>
  );
};

export default ChartSection;
