import React, { useEffect, useState, useRef } from 'react';
import { Card } from 'react-native-shadow-cards';
import { FlatList, Modal, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { getCurrentDate } from '../../helpers';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../../config';
import { Calendar } from 'react-native-calendars';
import { Center, Box, VStack, Input, HStack, Pressable } from 'native-base';
import {
  sendSellingInventories,
  getMyInventory,
  loadMyInventories,
  getFilterMyInventories,
  addSearchMyInv,
} from '../../redux';
import {
  CustomButton,
  CustomText,
  InventoryIcon,
  PriceIcon,
  GridIcon,
  ModalWindow,
  CommonLinGradient,
  CustomPopap,
  DateIcon,
} from '../../components';

export const SellingScreen = () => {
  const [itemName, setItemName] = useState('');
  const [itemId, setItemId] = useState(0);
  const [itemQuantity, setItemQuantity] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [maxQuantity, setMaxQuantity] = useState(1);
  const [itemPrice, setItemPrice] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showPopaps, setShowPopaps] = useState(false);
  const inputRef = useRef();
  const dispatch = useDispatch();
  const myInventories = useSelector(getMyInventory);
  const filterMyInv = useSelector(getFilterMyInventories);

  const handleSaveOrder = () => {
    if (
      itemId !== 0 &&
      itemName &&
      itemPrice &&
      !(Number(itemQuantity) <= 0) &&
      Number(itemQuantity) <= maxQuantity
    ) {
      const updateInv = [
        {
          inventoryId: Number(itemId),
          quantity: Number(itemQuantity),
          price: Number(itemPrice),
        },
      ];
      dispatch(sendSellingInventories(updateInv));
      clearSellingItemValue();
    } else {
      setShowPopaps(true);
    }
  };

  const handleSellingItemValue = item => {
    const { name, price, quantity, inventoryId } = item;
    setItemName(name);
    setItemId(inventoryId);
    setItemQuantity(String(quantity));
    setMaxQuantity(quantity);
    setItemPrice(String(price));
    setShowList(false);
  };

  const searchFilter = text => {
    if (text) {
      const needsInv = myInventories.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      dispatch(addSearchMyInv(needsInv));
      setItemName(text);
    } else {
      dispatch(addSearchMyInv(myInventories));
      setItemName(text);
    }
  };

  const clearSellingItemValue = () => {
    setItemName('');
    setItemId(0);
    setItemQuantity('');
    setItemPrice('');
    setCurrentDate('');
    setShowList(false);
  };

  const currDate = getCurrentDate(new Date());

  useEffect(() => {
    dispatch(loadMyInventories());
  }, [dispatch]);

  return (
    <>
      <CommonLinGradient
        style={{
          display: 'flex',
          flex: 1,
          width: '100%',
          padding: 14,
          justifyContent: 'space-between',
        }}>
        <Pressable
          onPress={() => setShowList(false)}
          width="100%"
          position="relative">
          {showList && (
            <Card
              style={{
                width: '100%',
                position: 'absolute',
                top: 95,
                left: 0,
                zIndex: 1000,
                backgroundColor: colors.white,
              }}>
              <VStack w="100%">
                <FlatList
                  data={filterMyInv}
                  renderItem={({ item }) => {
                    return (
                      <Pressable
                        _hover={{
                          borderWidth: 1,
                          borderColor: colors.common,
                        }}
                        _pressed={{ bg: colors.opacity }}
                        bg={colors.white}
                        onPress={() => handleSellingItemValue(item)}>
                        <HStack
                          w="100%"
                          px="2"
                          my="1"
                          _hover={{ bg: 'primary.700' }}
                          justifyContent="space-between"
                          alignItems="center">
                          <CustomText w="70%" ml="3" fontSize="md">
                            {item.name}
                          </CustomText>
                          <CustomText w="30%">{item.price} USD</CustomText>
                        </HStack>
                      </Pressable>
                    );
                  }}
                />
              </VStack>
            </Card>
          )}

          <CustomText my="3" semiBold fontSize="lg">
            Choose item from your inventory
          </CustomText>

          <Card
            style={{
              width: '100%',
              marginTop: 6,
              marginBottom: 12,
            }}>
            <Input
              w={{
                base: '100%',
                md: '25%',
              }}
              _focus={{
                borderColor: colors.common,
              }}
              fontFamily="Montserrat-Medium"
              onChangeText={text => searchFilter(text)}
              value={itemName}
              onFocus={() => setShowList(true)}
              _text={{ fontSize: 16 }}
              h={35}
              InputLeftElement={
                <Box ml="2">
                  <InventoryIcon size={20} color={colors.heading} />
                </Box>
              }
              InputRightElement={
                <Pressable pr="2" onPress={() => clearSellingItemValue()}>
                  <AntDesign name="close" size={20} color={colors.grey} />
                </Pressable>
              }
              placeholder="ComboBox"
              placeholderTextColor={colors.heading}
            />
          </Card>
          <CustomText zIndex="0" mt="5" semiBold fontSize="lg">
            Selling date
          </CustomText>

          <Card
            style={{
              width: '100%',
              marginTop: 6,
              marginBottom: 12,
            }}>
            <Input
              w={{
                base: '100%',
                md: '25%',
              }}
              onChangeText={text => setCurrentDate(text)}
              value={currentDate}
              _focus={{
                borderColor: colors.common,
              }}
              fontFamily="Montserrat-Medium"
              onFocus={() => setShowCalendar(true)}
              ref={inputRef}
              h={35}
              InputLeftElement={
                <Box ml="2">
                  <DateIcon size={20} color={colors.heading} />
                </Box>
              }
              placeholder="Choose date"
              placeholderTextColor={colors.heading}
            />
          </Card>
          <Modal visible={showCalendar} animationType="fade">
            <View
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 40,
              }}>
              <Card>
                <Calendar
                  onDayPress={date => {
                    setCurrentDate(date.dateString);
                    setShowCalendar(false);
                    inputRef.current.blur();
                  }}
                  theme={{
                    selectedDayBackgroundColor: colors.common,
                    textSectionTitleColor: colors.common,
                    arrowColor: colors.common,
                    todayTextColor: colors.common,
                  }}
                />
              </Card>
            </View>
          </Modal>

          <CustomText zIndex="0" mt="5" semiBold fontSize="lg">
            Choose quantity
          </CustomText>

          <Card
            style={{
              width: '100%',
              marginTop: 6,
              marginBottom: 12,
            }}>
            <Input
              w={{
                base: '100%',
                md: '25%',
              }}
              onChangeText={text => setItemQuantity(text)}
              value={itemQuantity}
              _focus={{
                borderColor: colors.common,
              }}
              fontFamily="Montserrat-Medium"
              h={35}
              InputLeftElement={
                <Box ml="2">
                  <GridIcon size={20} color={colors.heading} />
                </Box>
              }
              placeholder="Enter quantity"
              placeholderTextColor={colors.heading}
            />
          </Card>

          <CustomText mt="5" semiBold fontSize="lg">
            Choose price
          </CustomText>
          <Card
            style={{
              width: '100%',
              marginTop: 6,
              marginBottom: 12,
            }}>
            <Input
              w={{
                base: '100%',
                md: '25%',
              }}
              _focus={{
                borderColor: colors.common,
              }}
              onChangeText={text => setItemPrice(text)}
              value={itemPrice}
              fontFamily="Montserrat-Medium"
              h={35}
              InputLeftElement={
                <Box ml="2">
                  <PriceIcon size={20} color={colors.heading} />
                </Box>
              }
              placeholder="Enter price"
              placeholderTextColor={colors.heading}
            />
          </Card>
          {showModal && (
            <Center position="absolute" left={10} top={'50%'}>
              <ModalWindow
                _dark={{ bg: colors.white }}
                setValue={() => setShowModal(!showModal)}
              />
            </Center>
          )}
        </Pressable>

        <Center my="7">
          <CustomButton
            setValue={handleSaveOrder}
            mt="2"
            w={200}
            h={40}
            bg={true}
            fs="sm">
            Save
          </CustomButton>
        </Center>
      </CommonLinGradient>
      <CustomPopap
        setClose={setShowPopaps}
        setValue={() => setShowPopaps(false)}
        showModal={showPopaps}
        err
        title="Error!"
        subTitle="Check the entered data! The quantity may have been entered incorrectly"
      />
    </>
  );
};
