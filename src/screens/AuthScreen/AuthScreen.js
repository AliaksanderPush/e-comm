import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { loginValidate, passwordValidate } from '../../validation';
import { useDispatch, useSelector } from 'react-redux';
import { userError, fetchUser, loaderOff, loader } from '../../redux';
import { colors, maxWidthFormCont } from '../../config';
import {
  CustomText,
  CustomButton,
  AuthLayout,
  CustomInput,
} from '../../components';
import {
  FormControl,
  WarningOutlineIcon,
  Pressable,
  Center,
  KeyboardAvoidingView,
} from 'native-base';

export const AuthScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const err = useSelector(userError);
  const loading = useSelector(loader);
  let winWidth = Dimensions.get('window').width;
  console.log('err=>', err);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = info => {
    dispatch(fetchUser(info));
  };

  useEffect(() => {
    if (err) {
      dispatch(loaderOff());
    }
  }, [err, dispatch]);

  return (
    <AuthLayout
      loading={loading}
      title="Welcome back!"
      subTitle="Please enter your details below!">
      <Center w="100%" mb="3">
        <KeyboardAvoidingView>
          <FormControl
            isInvalid={errors.username}
            maxW={winWidth * maxWidthFormCont}>
            <FormControl.Label
              _text={{
                color: errors.username ? colors.error : colors.header,
                fontFamily: 'Montserrat-SemiBold',
              }}>
              Name
            </FormControl.Label>
            <Controller
              control={control}
              rules={loginValidate}
              render={({ field: { onBlur, onChange, value } }) => (
                <CustomInput
                  value={value}
                  onChange={onChange}
                  placeHolder={'Enter your name'}
                  onBlur={onBlur}
                />
              )}
              name="username"
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              {errors.username && errors.username.message}
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={errors.password}
            maxW={winWidth * maxWidthFormCont}>
            <FormControl.Label
              mt="5"
              _text={{
                color: errors.password ? colors.error : colors.header,
                fontFamily: 'Montserrat-SemiBold',
              }}>
              Password
            </FormControl.Label>
            <Controller
              control={control}
              rules={passwordValidate}
              render={({ field: { onBlur, onChange, value } }) => (
                <CustomInput
                  value={value}
                  onChange={onChange}
                  placeHolder={'Enter your password'}
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
          {err && (
            <CustomText
              textAlign="center"
              mt="5"
              color={colors.error}
              fontSize="md">
              {err?.message}
            </CustomText>
          )}
        </KeyboardAvoidingView>
      </Center>

      <Center mt="5">
        <CustomButton
          w={200}
          h={40}
          bg={true}
          fs="md"
          setValue={handleSubmit(onSubmit)}>
          Log in
        </CustomButton>
        <Pressable
          mt="5"
          onPress={() => navigation.navigate('RestorePassword')}>
          <CustomText color={colors.textGray} underline>
            Restore password
          </CustomText>
        </Pressable>
      </Center>
    </AuthLayout>
  );
};
