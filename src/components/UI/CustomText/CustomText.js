import React from 'react';
import { Text } from 'native-base';
import { colors } from '../../../config/colors';

export const CustomText = ({ semiBold, white, children, ...props }) => {
  return (
    <Text
      {...props}
      fontFamily={!semiBold ? 'Montserrat-Medium' : 'Montserrat-SemiBold'}>
      {children}
    </Text>
  );
};
