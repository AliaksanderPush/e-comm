import React from 'react';
import { Center, VStack, Modal, Button, Pressable, HStack } from 'native-base';
import { CustomButton, CustomText } from '../../';
import { colors, modalWindHight, modalWindWidth } from '../../../config';
import { Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const CustomPopap = ({
  setClose,
  setValue,
  handleCancelOrder,
  showModal,
  title,
  subTitle,
  err,
  twoButtoms,
}) => {
  return (
    <Center>
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
            px="3"
            maxWidth="350"
            maxH="300"
            alignItems="center"
            position="relative">
            <Pressable onPress={setClose} position="absolute" top="3" right="3">
              <AntDesign name="close" size={30} color="#5C5C5C" />
            </Pressable>
            <CustomText
              textAlign="center"
              mt="5"
              color={err ? colors.error : colors.text}
              fontSize="lg"
              semiBold>
              {title}
            </CustomText>
            <CustomText
              textAlign="center"
              color={colors.text}
              my="2"
              fontSize="md">
              {subTitle}
            </CustomText>
            {twoButtoms ? (
              <HStack space={3}>
                <Button
                  onPress={handleCancelOrder}
                  mt="3"
                  mb="1"
                  w={120}
                  h={10}
                  bg="#999999"
                  _pressed={{ bg: '#999999' }}>
                  YES
                </Button>
                <CustomButton
                  setValue={setValue ? () => setValue() : () => setClose(false)}
                  mt="3"
                  mb="1"
                  w={120}
                  h={40}
                  bg={true}
                  fs="sm">
                  NO
                </CustomButton>
              </HStack>
            ) : (
              <CustomButton
                setValue={setValue ? () => setValue() : () => setClose(false)}
                mt="3"
                mb="1"
                w={200}
                h={40}
                bg={true}
                fs="sm">
                OK
              </CustomButton>
            )}
          </VStack>
        </Modal.Content>
      </Modal>
    </Center>
  );
};
