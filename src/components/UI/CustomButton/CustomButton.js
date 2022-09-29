import React from 'react';
import { Text, Pressable } from 'native-base';
import { colors } from '../../../config/colors';
import LinearGradient from 'react-native-linear-gradient';

export const CustomButton = ({
  children,
  setValue,
  fs,
  w,
  h,
  bg,
  ...props
}) => {
  const fontsize = fs || 12;

  return (
    <Pressable {...props} onPress={setValue}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={bg ? ['#FFC3AB', '#FE814F'] : ['#fff', '#fff']}
        style={{
          width: w,
          height: h,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          color={bg ? colors.white : colors.heading}
          fontFamily="Montserrat-SemiBold"
          fontSize={fontsize}>
          {children}
        </Text>
      </LinearGradient>
    </Pressable>
  );
};
