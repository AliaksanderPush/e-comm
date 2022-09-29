import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { maxWidthFormCont, colors } from '../../config';
import {
  getTokenForChangePassword,
  loader,
  userError,
  errorOn,
  errorOff,
  changePassword,
  clearUserTokens,
} from '../../redux';
import {
  Center,
  FormControl,
  WarningOutlineIcon,
  VStack,
  View,
} from 'native-base';
import { passwordValidate } from '../../validation';
import {
  CustomButton,
  AuthLayout,
  CustomInput,
  CustomText,
  CustomPopap,
} from '../../components';

export const NewPassword = ({ navigation }) => {
  const [showPopap, setShowPopap] = useState(false);
  const tokenForChangePass = useSelector(getTokenForChangePassword);
  const err = useSelector(userError);
  const loading = useSelector(loader);
  const dispatch = useDispatch();
  //console.log('errDisp=>', err);
  const winWidth = Dimensions.get('window').width;

  //const { colorMode, toggleColorMode } = useColorMode();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      confirmPassword: '',
      password: '',
    },
  });

  const onChangePass = async info => {
    const { password, confirmPassword } = info;
    dispatch(errorOff());
    if (password === confirmPassword) {
      try {
        await changePassword({
          token: tokenForChangePass.token,
          newPassword: password,
        });
        setShowPopap(true);
      } catch (e) {
        console.log('err=>', e);
        showAndCleanError(e);
      }
    } else {
      dispatch(errorOn('Sorry, passwords do not match'));
      return;
    }
  };

  const handleRedirectToLogin = () => {
    console.log('work!');
    dispatch(clearUserTokens());
    setShowPopap(false);
    setTimeout(() => {
      navigation.navigate('Auth');
    }, 500);
  };

  return (
    <View
      flex="1"
      borderWidth={3}
      position="relative"
      zIndex={1000}
      _dark={{ backgroundColor: 'blue.100', borderColor: 'danger.700' }}>
      <AuthLayout
        loading={loading}
        error={err}
        withGoBack={true}
        navigation={navigation}
        title="Restore password"
        subTitle="To change the current password, enter the new password in both fields">
        <Center flex={9 / 10}>
          <VStack
            w="100%"
            h="100%"
            pb="8"
            alignItems="center"
            justifyContent="space-between">
            <Center>
              <FormControl
                isInvalid={errors.password}
                w="100%"
                maxW={winWidth * maxWidthFormCont}>
                <FormControl.Label
                  mt="5"
                  _text={{
                    color: errors.password ? colors.error : colors.header,
                    fontFamily: 'Montserrat-SemiBold',
                  }}>
                  New Password
                </FormControl.Label>
                <Controller
                  control={control}
                  rules={passwordValidate}
                  render={({ field: { onBlur, onChange, value } }) => (
                    <CustomInput
                      value={value}
                      onChange={onChange}
                      placeHolder={'Enter new password'}
                      passw={true}
                      onBlur={onBlur}
                    />
                  )}
                  name="password"
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  {errors.password && errors.password.message}
                </FormControl.ErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={errors.confirmPassword}
                w="100%"
                maxW={winWidth * maxWidthFormCont}>
                <FormControl.Label
                  mt="5"
                  _text={{
                    color: errors.confirmPassword
                      ? colors.error
                      : colors.header,
                    fontFamily: 'Montserrat-SemiBold',
                  }}>
                  Confirm new password
                </FormControl.Label>
                <Controller
                  control={control}
                  rules={passwordValidate}
                  render={({ field: { onBlur, onChange, value } }) => (
                    <CustomInput
                      value={value}
                      onChange={onChange}
                      placeHolder={'Confirm new password'}
                      passw={true}
                      onBlur={onBlur}
                    />
                  )}
                  name="confirmPassword"
                />
                <FormControl.ErrorMessage
                  leftIcon={<WarningOutlineIcon size="xs" />}>
                  {errors.confirmPassword && errors.confirmPassword.message}
                </FormControl.ErrorMessage>
                {!!err && (
                  <CustomText
                    mt="5"
                    textAlign="center"
                    color={colors.error}
                    fontSize="md">
                    {err}
                  </CustomText>
                )}
              </FormControl>
            </Center>

            {showPopap && (
              <CustomPopap
                title="Password changet successfully!"
                subTitle="Please, login to your email acount again"
                setValue={handleRedirectToLogin}
                setClose={setShowPopap}
                showModal={showPopap}
              />
            )}

            <CustomButton
              mt="5"
              w={200}
              h={40}
              bg={true}
              fs="md"
              setValue={handleSubmit(onChangePass)}>
              Change Password
            </CustomButton>
          </VStack>
        </Center>
      </AuthLayout>
    </View>
  );
};
