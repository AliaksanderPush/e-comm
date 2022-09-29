
import React, { useState } from 'react';
import {
  Center,
  Box,
  Select,
  VStack,
  Input,
  useColorMode,
  HStack,
  Pressable,
} from 'native-base';
import { Card } from 'react-native-shadow-cards';
import {
  sendSellingInventories,
  getSellingInv,
  clearSellingCart,
} from '../../Redux';
import {
  CustomButton,
  CustomText,
  InventoryIcon,
  PriceIcon,
  GridIcon,
  ModalWindow,
  CommonLinGradient,
} from '..';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../../config/colors';

export const SellingScreen = () => {
  const [service, setService] = useState('');
  const [itemsValue, setItemsValue] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showList, setShowList] = useState(false);
  const dispatch = useDispatch();
  const sellingInv = useSelector(getSellingInv);
  const gap = '                       ';
  console.log('selling->', sellingInv);
  console.log('choose=>', showList);
  const handleSaveOrder = () => {
    dispatch(clearSellingCart());
  };

  const handleSellingItemValue = item => {
    console.log('priletelo->', item);
    setService(item['name']);
    setItemsValue(item);
  };

  return (
    <CommonLinGradient
      style={{
        display: 'flex',
        flex: 1,
        width: '100%',
        padding: 14,
        justifyContent: 'space-between',
      }}>
      <Box width="100%">
        <CustomText my="3" semiBold fontSize="lg">
          Choose item from your inventory
        </CustomText>

        <Card style={{ width: '100%' }}>
          <HStack
            w="100%"
            h="35px"
            px="2"
            justifyContent="space-between"
            alignItems="center">
            <HStack>
              <InventoryIcon size={20} color={colors.heading} />
              <CustomText ml="3" fontSize="md">
                ComboBox
              </CustomText>
            </HStack>
            <Pressable mr="1" onPress={() => setShowList(!showList)}>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color={colors.text}
              />
            </Pressable>
          </HStack>
          <VStack maxHeight="300">
            <HStack w="100%" justifyContent="space-around">
              <CustomText>ComboBox</CustomText>
              <CustomText>100 USD</CustomText>
            </HStack>
          </VStack>
        </Card>
)
}