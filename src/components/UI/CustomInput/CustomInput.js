import React, { useState } from 'react';
import { Input, Pressable } from 'native-base';
import { HidePassword } from '../Icons/HidePassword';
import { ViewPassword } from '../Icons/ViewPassword';
import { colors } from '../../../config';

export const CustomInput = ({
  value,
  onChange,
  placeHolder,
  passw,
  onBlur,
  w,
  white,
  ...props
}) => {
  const [show, setShow] = useState(false);
  let password = passw || false;
  let widthInp = w || '100%';
  let whiteBg = white || colors.lightGray;
  return (
    <Input
      {...props}
      width={widthInp}
      h={{
        base: '40px',
      }}
      _text={{ fontSize: '16' }}
      _focus={{
        borderColor: colors.common,
      }}
      type={password ? (show ? 'text' : 'password') : 'text'}
      InputRightElement={
        password && (
          <Pressable mr="2" onPress={() => setShow(!show)}>
            {!show ? (
              <HidePassword
                size={19}
                color={colors.icon}
                name={show ? 'visibility' : 'visibility-off'}
              />
            ) : (
              <ViewPassword
                size={19}
                color={colors.icon}
                name={!show ? 'visibility' : 'visibility-off'}
              />
            )}
          </Pressable>
        )
      }
      borderRadius={5}
      borderWidth={1}
      fontFamily="Montserrat-Medium"
      borderColor={colors.lightGray}
      backgroundColor={whiteBg}
      placeholder={placeHolder}
      onChangeText={onChange}
      value={value}
      onBlur={onBlur}
    />
  );
};
