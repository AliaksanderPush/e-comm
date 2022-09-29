import React from 'react';
import { colors } from '../../config';
import { View, Pressable, Text } from 'react-native';

export const Avatar = ({ login, setDrawer, size }) => {
  return (
    <Pressable onPress={setDrawer}>
      <View
        style={{
          width: size,
          height: size,
          borderRadius: 2 * size,
          backgroundColor: colors.common,
          marginRight: 15,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: colors.white,
            fontSize: 18,
            fontFamily: 'Monserrat-SemiBold',
          }}>
          {login ? login.slice(0, 1).toUpperCase() : ''}
        </Text>
      </View>
    </Pressable>
  );
};

/*
     <Pressable onPress={alert('ss')}>
      <View
        style={{
          width: size,
          height: size,
          borderRadius: 2 * size,
          backgroundColor: colors.common,
          marginRight: 15,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: colors.white,
            fontSize: 18,
            fontFamily: 'Monserrat-SemiBold',
          }}>
          {firstLetter}
        </Text>
      </View>
    </Pressable>
    */
/*
<Pressable {...props} onPress={() => alert('Worked')}>
      <View
        display="flex"
        align="center"
        justify="center"
        width={size}
        height={size}
        bg={colors.common}
        borderRadius={2 * size}>
        <CustomText white semiBold fontSize="xl">
          {firstLetter}
        </CustomText>
      </View>
    </Pressable>
    */
