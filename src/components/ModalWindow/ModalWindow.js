import React from 'react';
import { Box, VStack, ScrollView, HStack, Pressable } from 'native-base';
import { CustomButton, CustomText } from '../../components';
import { colors, modalWindWidth } from '../../config';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Dimensions } from 'react-native';

const ModalWindow = ({ setClose, ...props }) => {
  const winWidth = Dimensions.get('window').width;
  return (
    <Box {...props}>
      <VStack
        rounded="lg"
        borderWidth={1}
        borderRadius={10}
        bg={colors.white}
        py="18"
        alignItems="center"
        w={winWidth * modalWindWidth}
        position="relative"
        maxHeight={winWidth}>
        <Pressable onPress={setClose} position="absolute" top="3" right="3">
          <AntDesign name="close" size={30} color="#5C5C5C" />
        </Pressable>
        <CustomText fontSize="lg" semiBold>
          Order new Items
        </CustomText>
        <CustomText my="2" fontSize="md">
          Do you really want to order:{' '}
        </CustomText>
        <ScrollView
          my="3"
          w="80%"
          _contentContainerStyle={{
            pr: '6',
            mb: '4',
            minW: '72',
            color: colors.common,
          }}>
          <HStack borderBottomWidth={0.5} py="2" justifyContent="space-between">
            <CustomText fontSize="sm">Irish Cream</CustomText>
            <CustomText fontSize="sm">$245.00</CustomText>
            <CustomText fontSize="sm">2 unit</CustomText>
          </HStack>
          <HStack borderBottomWidth={0.5} py="2" justifyContent="space-between">
            <CustomText fontSize="sm">Irish Cream</CustomText>
            <CustomText fontSize="sm">$245.00</CustomText>
            <CustomText fontSize="sm">2 unit</CustomText>
          </HStack>
          <HStack borderBottomWidth={0.5} py="2" justifyContent="space-between">
            <CustomText fontSize="sm">Irish Cream</CustomText>
            <CustomText fontSize="sm">$245.00</CustomText>
            <CustomText fontSize="sm">2 unit</CustomText>
          </HStack>
          <HStack borderBottomWidth={0.5} py="2" justifyContent="space-between">
            <CustomText fontSize="sm">Irish Cream</CustomText>
            <CustomText fontSize="sm">$245.00</CustomText>
            <CustomText fontSize="sm">2 unit</CustomText>
          </HStack>
        </ScrollView>
        <CustomButton w={200} h={40} bg={true} fs="sm">
          Order
        </CustomButton>
      </VStack>
    </Box>
  );
};
