import React from 'react';
import { Text, Spinner, VStack, Heading } from 'native-base';

export const CustomSpinner = ({ colorSpinner, colorText }) => {
  return (
    <VStack
      w="20%"
      h="20%"
      position="absolute"
      alignItems="center"
      justifyContent="center"
      top="40%"
      left="40%">
      <Spinner color={colorSpinner} size="lg" />
      <Text
        mt="2"
        textAlign="center"
        fontFamily="Montserrat-SemiBold"
        color={colorText}
        fontSize="sm">
        Loading...
      </Text>
    </VStack>
  );
};
