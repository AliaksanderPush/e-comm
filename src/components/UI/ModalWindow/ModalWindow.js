import React from 'react';
import {
  Button,
  Modal,
  Center,
  VStack,
  Pressable,
  ScrollView,
  HStack,
} from 'native-base';
import { CustomButton } from '../CustomButton/CustomButton';
import { CustomText } from '../CustomText/CustomText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { colors } from '../../../config';

export const ModalWindow = ({ setClose, showModal, data, setSubmit }) => {
  return (
    <Center>
      <Button onPress={() => setClose(true)}>Button</Button>
      <Modal
        isOpen={showModal}
        onClose={() => setClose(false)}
        _backdrop={{
          _dark: {
            bg: colors.grey,
          },
          bg: colors.grey,
        }}>
        <Modal.Content>
          <VStack
            rounded="lg"
            borderRadius="lg"
            bg={colors.white}
            py="18"
            maxWidth="350"
            maxH="300"
            alignItems="center"
            position="relative">
            <Pressable onPress={setClose} position="absolute" top="3" right="3">
              <AntDesign name="close" size={30} color="#5C5C5C" />
            </Pressable>
            <CustomText color={colors.text} fontSize="lg" semiBold>
              Order new Items
            </CustomText>
            <CustomText color={colors.text} my="2" fontSize="md">
              Do you really want to order:{' '}
            </CustomText>
            <ScrollView
              w="230"
              color={colors.common}
              _contentContainerStyle={{
                pr: '1',
                color: colors.common,
              }}>
              {data &&
                data.map(item => {
                  return (
                    <HStack
                      w="100%"
                      py="1"
                      key={item.id}
                      borderBottomWidth={0.5}
                      justifyContent="space-between">
                      <CustomText textAlign="left" w="50%" fontSize="sm">
                        {item.name}
                      </CustomText>
                      <CustomText textAlign="center" w="25%" fontSize="sm">
                        {item.price}
                      </CustomText>
                      <CustomText textAlign="center" w="25%" fontSize="sm">
                        {item.quantity} units
                      </CustomText>
                    </HStack>
                  );
                })}
            </ScrollView>

            <CustomButton
              setValue={setSubmit}
              mt="3"
              mb="1"
              w={200}
              h={40}
              bg={true}
              fs="sm">
              Order
            </CustomButton>
          </VStack>
        </Modal.Content>
      </Modal>
    </Center>
  );
};
