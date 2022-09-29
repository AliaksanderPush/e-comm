import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  userError,
  loader,
  getTokenForResCode,
  errorOff,
  fogotPassword,
  sendResetCode,
  getTokenForChangePassword,
  userEmail,
} from '../../redux';
import { sendCodeValidate } from '../../validation';
import { maxWidthFormCont } from '../../config';
import {
  AuthLayout,
  CustomInput,
  CustomButton,
  CustomText,
} from '../../components';
import { colors } from '../../config/colors';
import {
  FormControl,
  WarningOutlineIcon,
  Center,
  VStack,
  Pressable,
} from 'native-base';

export const VerifyCodeScreen = ({ navigation }) => {
  const [allowRedirect, setAllowRedirect] = useState(false);
  const winWidth = Dimensions.get('window').width;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      code: '',
    },
  });
  const userToken = useSelector(getTokenForResCode);
  const tokenForChangePass = useSelector(getTokenForChangePassword);
  const err = useSelector(userError);
  const loading = useSelector(loader);
  const emailForResend = useSelector(userEmail);
  const dispatch = useDispatch();

  const sendCode = info => {
    const data = {
      code: Number(info.code),
      token: userToken.token,
    };
    dispatch(errorOff());
    dispatch(sendResetCode(data));
    setAllowRedirect(true);
  };

  console.log('token=>', userToken);

  const handleResenCode = () => {
    if (emailForResend) {
      dispatch(fogotPassword(emailForResend));
    } else {
      navigation.navigate('RestorePassword');
    }
  };

  useEffect(() => {
    if (!err && tokenForChangePass && allowRedirect) {
      navigation.navigate('NewPassword');
      setAllowRedirect(false);
    }
  }, [tokenForChangePass, err]);

  return (
    <AuthLayout
      loading={loading}
      withGoBack={true}
      navigation={navigation}
      title="Enter confirmation code"
      subTitle="Enter the confirmation code we sent to your email">
      <Center flex={9 / 10}>
        <VStack
          w="100%"
          h="100%"
          pb="8"
          alignItems="center"
          justifyContent="space-between">
          <FormControl
            isInvalid={errors.code}
            maxW={winWidth * maxWidthFormCont}>
            <FormControl.Label
              _text={{
                color: errors.code ? colors.error : colors.header,
                fontFamily: 'Montserrat-SemiBold',
              }}>
              Conformation code
            </FormControl.Label>
            <Controller
              control={control}
              rules={sendCodeValidate}
              render={({ field: { onBlur, onChange, value } }) => (
                <CustomInput
                  value={value}
                  onChange={onChange}
                  placeHolder={'Enter conformation code'}
                  onBlur={onBlur}
                />
              )}
              name="code"
            />

            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              {errors.code && errors.code.message}
            </FormControl.ErrorMessage>
            <Pressable
              onPress={handleResenCode}
              mt="4"
              fontSize="md"
              color={colors.textGray}>
              <CustomText textAlign="center" underline>
                Resend code
              </CustomText>
            </Pressable>
            {err && (
              <CustomText
                textAlign="center"
                mt="5"
                color={colors.error}
                fontSize="md">
                {err?.message}
              </CustomText>
            )}
          </FormControl>

          <CustomButton
            mt="5"
            w={200}
            h={40}
            bg={true}
            fs="md"
            setValue={handleSubmit(sendCode)}>
            Submit
          </CustomButton>
        </VStack>
      </Center>
    </AuthLayout>
  );
};
