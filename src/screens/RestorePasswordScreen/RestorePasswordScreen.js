import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { maxWidthFormCont, colors } from '../../config';
import { useForm, Controller } from 'react-hook-form';
import { Center, FormControl, WarningOutlineIcon, VStack } from 'native-base';
import { emailValidate } from '../../validation';
import { useDispatch, useSelector } from 'react-redux';
import {
  CustomButton,
  AuthLayout,
  CustomInput,
  CustomText,
} from '../../components';
import {
  getTokenForResCode,
  userError,
  loader,
  errorOff,
  fogotPassword,
} from '../../redux';

export const RestorePassword = ({ navigation }) => {
  const [allowRedirect, setAllowRedirect] = useState(false);
  const token = useSelector(getTokenForResCode);
  const err = useSelector(userError);
  const loading = useSelector(loader);
  const dispatch = useDispatch();
  const winWidth = Dimensions.get('window').width;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
  });

  const sendEmail = info => {
    const email = { email: info.email };
    dispatch(errorOff());
    dispatch(fogotPassword(email));
    setAllowRedirect(true);
  };

  useEffect(() => {
    if (!err && token?.token && allowRedirect) {
      navigation.navigate('VerifyCode');
      setAllowRedirect(false);
    }
  }, [token, err]);

  return (
    <AuthLayout
      loading={loading}
      error={err}
      withGoBack={true}
      navigation={navigation}
      title="Restore password"
      subTitle="Please enter your email address and we'll send you conformation code to reset your password">
      <Center flex={9 / 10}>
        <VStack
          w="100%"
          h="100%"
          pb="8"
          alignItems="center"
          justifyContent="space-between">
          <FormControl
            isInvalid={errors.email}
            maxW={winWidth * maxWidthFormCont}>
            <FormControl.Label
              _text={{
                color: errors.email ? colors.error : colors.textGray,
                fontFamily: 'Montserrat-SemiBold',
              }}>
              Email
            </FormControl.Label>
            <Controller
              control={control}
              rules={emailValidate}
              render={({ field: { onBlur, onChange, value } }) => (
                <CustomInput
                  value={value}
                  onChange={onChange}
                  placeHolder={'Enter your email'}
                  onBlur={onBlur}
                />
              )}
              name="email"
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              {errors.email && errors.email.message}
            </FormControl.ErrorMessage>
          </FormControl>
          {err && (
            <CustomText
              textAlign="center"
              mt="5"
              color={colors.error}
              fontSize="md">
              {err?.message}
            </CustomText>
          )}
          <CustomButton
            w={200}
            h={40}
            bg={true}
            fs="md"
            setValue={handleSubmit(sendEmail)}>
            Reset code
          </CustomButton>
        </VStack>
      </Center>
    </AuthLayout>
  );
};
