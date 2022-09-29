import React from 'react';
import { Box } from 'native-base';
import { colors } from '../../config/colors';
import { Pressable } from 'react-native';

export const NumberScreen = ({ num, setValue, page }) => {
  return (
    <Pressable onPress={() => setValue(num)}>
      <Box
        p="0"
        mx="2"
        bg={page == num ? colors.common : null}
        borderRadius={page == num ? '12' : null}
        w="6"
        h="6"
        _text={{
          color: page == num ? colors.white : colors.heading,
          fontSize: '15',
          textAlign: 'center',
          lineHeight: '24',
          fontFamily: 'Montserrat-SemiBold',
        }}>
        {num}
      </Box>
    </Pressable>
  );
};
