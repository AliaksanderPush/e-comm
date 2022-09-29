import React from 'react';
import { Box, HStack } from 'native-base';
import { Dimensions } from 'react-native';
import { CustomText } from '..';

export const CategoryInfo = ({ item }) => {
  const { category, color, value } = item;
  let size = 5;
  let borRad = 10;

  if (Dimensions.get('window').width > 600) {
    size = 10;
    borRad = 20;
  }

  return (
    <HStack w="100%" alignItems="center" justifyContent="flex-start">
      <Box bg={color} w={size} h={size} borderRadius={borRad} mr="2"></Box>
      <CustomText fontSize="sm" maxWidth="72%">
        {category} ({value}%)
      </CustomText>
    </HStack>
  );
};
