import React from 'react';
import { PieChart } from 'react-native-svg-charts';
import { colors } from '../../config';

export const PieChartComponent = ({ categories, radius, innerRadius }) => {
  /*
  const getPieChartData = data => {
    return data.map((item, index) => {
      return {
        key: item.category + index,
        value: item.percent,
        svg: { fill: colors[item.category] },
      };
    });
  };

  const pieChartData = getPieChartData(categories);
  */
  console.log('cat->', categories);
  return (
    <PieChart
      style={{ width: radius, height: radius }}
      innerRadius={innerRadius}
      data={categories}
      padAngle={0}
      sort={(a, b) => b.key - a.key}
    />
  );
};
