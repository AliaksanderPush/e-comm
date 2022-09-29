import React, { Children } from 'react';
import { ProgressCircle } from 'react-native-svg-charts';
import { Text } from 'native-base';
import { colors } from '../../config';

export const HalfDoughnutChart = ({ children, salary }) => {
  const maxSalary = 10000;

  const calculateSalaryForProgress = (salary, maxSalary) => {
    if (salary > 10000) {
      return 1;
    }
    return salary / maxSalary;
  };

  const calculatedProgress = calculateSalaryForProgress(salary, maxSalary);

  return (
    <ProgressCircle
      style={{
        height: 350,
        position: 'relative',
      }}
      progress={calculatedProgress}
      progressColor="#FE814F"
      backgroundColor="#ECECEC"
      cornerRadius={0}
      strokeWidth={50}
      startAngle={-Math.PI / 2}
      endAngle={Math.PI / 2}>
      {children}
    </ProgressCircle>
  );
};
