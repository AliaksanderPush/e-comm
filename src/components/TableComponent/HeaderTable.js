import React, { useEffect, useState } from 'react';
import { colors } from '../../config/colors';
import { Text } from 'native-base';
import { capitalizeFirstLetter } from '../../helpers';
import LinearGradient from 'react-native-linear-gradient';

export const HeaderTable = ({ titles }) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#FFC3AB', '#FE814F']}
      style={{
        width: '100%',
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
      }}>
      {titles.length
        ? titles.map(item => {
            return (
              item !== 'id' && (
                <Text
                  w={titles.length === 5 ? '25%' : '33.33%'}
                  key={item}
                  color={colors.white}
                  fontSize="sm"
                  fontFamily="Montserrat-Medium"
                  textAlign="center">
                  {capitalizeFirstLetter(item)}
                </Text>
              )
            );
          })
        : ''}
    </LinearGradient>
  );
};
