import React from 'react';
import { HStack, Center, Pressable, VStack } from 'native-base';
import { LogoutIcon, CustomText, Avatar } from '..';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux';
import { ImageBackground } from 'react-native';
import { colors } from '../../config';

export const CustomDrawer = props => {
  const dispatch = useDispatch();
  const closeDrawer = () => {
    props.navigation.navigate('Profile');
  };

  const userLogout = () => {
    dispatch(logout());
  };

  return (
    <ImageBackground
      source={require('../../../assets/images/bg2.png')}
      resizeMode="cover"
      style={{ flex: 1 }}>
      <Center py="10" display="flex" h="100%" justifyContent="space-between">
        <VStack>
          <Avatar setDrawer={closeDrawer} login={props.login} size={60} />
          <CustomText color={colors.white} mt="3" fontSize="md" semiBold white>
            Hi, {props.login}!
          </CustomText>
        </VStack>
        <Pressable onPress={() => userLogout()}>
          <HStack alignItems="center">
            <LogoutIcon size={40} color={colors.white} />
            <CustomText
              color={colors.white}
              pl="2"
              fontSize="md"
              semiBold
              white>
              Log Out
            </CustomText>
          </HStack>
        </Pressable>
      </Center>
    </ImageBackground>
  );
};
