import React from 'react';
import { Logo } from '..';
import { CustomSpinner, GoBackIcon, CustomText } from '..';
import { ImageBackground } from 'react-native';
import { colors } from '../../config';
import {
  Center,
  Box,
  Pressable,
  Flex,
  KeyboardAvoidingView,
} from 'native-base';

export const AuthLayout = ({
  children,
  loading,
  title,
  subTitle,
  withGoBack,
  navigation,
}) => {
  let goBack = withGoBack || false;

  return (
    <KeyboardAvoidingView>
      <Center w="100%" h="100%" position="relative" justifyContent="center">
        <ImageBackground
          source={require('../../../assets/images/bg1.png')}
          resizeMode="cover"
          style={{ width: '100%', height: '100%' }}>
          <Center h="32%" position="absolute" top="0" left="0" w="100%">
            <Logo />
          </Center>
          {!loading ? (
            <Box
              alignItems="center"
              justifyContent="space-around"
              h="70%"
              position="absolute"
              bottom="0"
              zIndex="100"
              left="0"
              w="100%"
              borderTopLeftRadius={20}
              borderTopRightRadius={20}
              bg={colors.white}>
              <Center w="100%" mt={goBack ? '5' : '3'}>
                {goBack && (
                  <Flex w="100%" mb="1" align="flex-start">
                    <Pressable onPress={() => navigation.goBack()} ml="5">
                      <GoBackIcon color={colors.heading} size={24} />
                    </Pressable>
                  </Flex>
                )}
                <CustomText
                  textAlign="center"
                  color={colors.header}
                  semiBold
                  fontSize="2xl">
                  {title}
                </CustomText>

                <CustomText
                  textAlign="center"
                  color={colors.header}
                  mt="13"
                  px="4"
                  fontSize="md">
                  {subTitle}
                </CustomText>
              </Center>

              {children}
            </Box>
          ) : (
            <CustomSpinner
              colorText={colors.white}
              colorSpinner={colors.white}
            />
          )}
        </ImageBackground>
      </Center>
    </KeyboardAvoidingView>
  );
};
