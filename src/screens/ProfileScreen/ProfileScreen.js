import React, { useEffect, useState } from 'react';
import { usersAuth } from '../../redux';
import { Box, HStack, VStack } from 'native-base';
import { useSelector } from 'react-redux';
import { Card } from 'react-native-shadow-cards';
import { colors } from '../../config';
import {
  CustomInput,
  CustomText,
  UserIcon,
  EmailIcon,
  PayIcon,
  CalendarIcon,
  PercentageIcon,
  CommonLinGradient,
} from '../../components';

export const ProfileScreen = () => {
  const userData = useSelector(usersAuth);

  const [userLogin, setUserLogin] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userCommissionType, setUserCommissionType] = useState('');
  const [userCommission, setUserCommission] = useState('');

  useEffect(() => {
    if (userData) {
      setUserLogin(userData.username);
      setUserEmail(userData.email);
    }
  }, [userData]);

  return (
    <CommonLinGradient
      style={{
        display: 'flex',
        flex: 1,
        width: '100%',
        padding: 14,
        alignItems: 'center',
      }}>
      <HStack
        w="100%"
        p="1"
        space={3}
        alignItems="center"
        justifyContent="flex-start">
        <UserIcon size={22} color={colors.text}></UserIcon>
        <CustomText semiBold fontSize="lg">
          User's Login
        </CustomText>
      </HStack>
      <Card>
        <CustomInput
          isDisabled={true}
          white={colors.white}
          value={userLogin}
          onChange={setUserLogin}
        />
      </Card>
      <HStack
        w="100%"
        p="1"
        mt="3"
        space={3}
        alignItems="center"
        justifyContent="flex-start">
        <EmailIcon size={22} color={colors.text}></EmailIcon>
        <CustomText semiBold fontSize="lg">
          User's email
        </CustomText>
      </HStack>
      <Card>
        <CustomInput
          white={colors.white}
          value={userEmail}
          onChange={setUserEmail}
        />
      </Card>
      <HStack w="100%" p="1" my="3" justifyContent="flex-start">
        <CustomText semiBold fontSize="lg">
          Payment program
        </CustomText>
      </HStack>
      <Box width="100%" height="0.5" background={colors.text}></Box>
      <HStack
        w="100%"
        p="1"
        mt="3"
        space={3}
        alignItems="center"
        justifyContent="flex-start">
        <PayIcon size={22} color={colors.text} />
        <CustomText semiBold fontSize="lg">
          Commission type
        </CustomText>
      </HStack>
      <Card>
        <CustomInput
          white={colors.white}
          value={userCommissionType}
          onChange={setUserCommissionType}
        />
      </Card>
      <HStack
        w="100%"
        p="1"
        mt="3"
        space={3}
        alignItems="center"
        justifyContent="flex-start">
        <PercentageIcon size={22} color={colors.text} />
        <CustomText semiBold fontSize="lg">
          Commission
        </CustomText>
      </HStack>
      <Card>
        <CustomInput
          white={colors.white}
          value={userCommission}
          onChange={setUserCommission}
        />
      </Card>

      <HStack
        px="1"
        w="100%"
        alignItems="center"
        justifyContent="space-between">
        <VStack w="45%">
          <HStack
            w="100%"
            mt="3"
            space={3}
            alignItems="center"
            justifyContent="flex-start">
            <CalendarIcon size={22} color={colors.text} />
            <CustomText semiBold fontSize="lg">
              Start date
            </CustomText>
          </HStack>
          <Card style={{ width: '100%' }}>
            <CustomInput
              white={colors.white}
              value={userCommission}
              onChange={setUserCommission}
            />
          </Card>
        </VStack>

        <VStack w="45%">
          <HStack
            mt="3"
            space={3}
            alignItems="center"
            justifyContent="flex-start">
            <CalendarIcon size={22} color={colors.text} />
            <CustomText semiBold fontSize="lg">
              End date
            </CustomText>
          </HStack>
          <Card style={{ width: '100%' }}>
            <CustomInput
              white={colors.white}
              value={userCommission}
              onChange={setUserCommission}
            />
          </Card>
        </VStack>
      </HStack>
    </CommonLinGradient>
  );
};
