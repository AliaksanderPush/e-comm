import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../../config';

export const CommonLinGradient = ({ children, ...props }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      {...props}
      colors={[colors.white, colors.bg]}>
      {children}
    </LinearGradient>
  );
};
