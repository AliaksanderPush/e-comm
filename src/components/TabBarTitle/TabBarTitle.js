import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '../../config';

export const TabBarTitle = ({ color, text }) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 4,
      }}>
      <View>
        <Text
          style={{
            color: color,
            fontSize: 12,
            fontFamily: 'Montserrat-Medium',
          }}>
          {text}
        </Text>
      </View>

      <View
        style={{
          marginTop: 2,
          width: 3,
          height: 3,
          borderRadius: 6,
          backgroundColor: color === colors.menu ? color : colors.white,
        }}></View>
    </View>
  );
};
