import React, { useState, useEffect } from 'react';
import { HStack, IconButton } from 'native-base';
import { useDispatch } from 'react-redux';
import { CustomText } from '..';
import Entypo from 'react-native-vector-icons/Entypo';
import { CustomPopap } from '..';
import { colors } from '../../config/colors';
import {
  addInventories,
  decrementInventories,
  incRunnLow,
  decrementIRunnLow,
} from '../../redux';

export const CountButton = ({ data, tableName, counter }) => {
  const { name, price, max, quantity, id } = data;
  const [showPopaps, setShowPopaps] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const dispatch = useDispatch();
  const isRunLow = tableName === 'Running low';

  const handleIncrement = id => {
    setIsTouch(true);
    if (isRunLow) {
      dispatch(incRunnLow({ id, name, price }));
    } else {
      dispatch(addInventories({ id, name, price }));
    }
  };

  const handleDecrement = id => {
    setIsTouch(true);
    if (isRunLow) {
      dispatch(decrementIRunnLow(id));
    } else {
      dispatch(decrementInventories(id));
    }
  };

  const handleClosePopap = () => {
    setShowPopaps(false);
  };

  const changeColorCounInv = () => {
    if (quantity === 0) {
      return colors.text;
    } else if (counter > 2) {
      return colors.inaf;
    } else {
      return colors.litle;
    }
  };

  const isDisabledBottum = () => {
    if (isRunLow) {
      if (max === 0 || max < counter) {
        return true;
      } else {
        return max === counter;
      }
    } else {
      return counter === quantity && isTouch;
    }
  };

  useEffect(() => {
    if (isRunLow) {
      if (isTouch && isDisabledBottum()) {
        setShowPopaps(true);
      }
    } else if (isDisabledBottum()) {
      setShowPopaps(true);
    }
  }, [counter]);

  return (
    <>
      <HStack
        w="70"
        justifyContent="space-between"
        borderColor="black"
        alignItems="center">
        <IconButton
          padding="1"
          size="sm"
          onPress={() => handleDecrement(id)}
          bg={counter === 0 || quantity === 0 ? colors.opacity : colors.common}
          borderRadius={0}
          disabled={counter === 0 || quantity === 0 ? true : false}
          icon={<Entypo name="minus" color={colors.white} />}
        />
        <CustomText
          color={isRunLow ? changeColorCounInv() : colors.text}
          semiBold>
          {counter}
        </CustomText>
        <IconButton
          padding="1"
          size="sm"
          onPress={() => handleIncrement(id)}
          bg={isDisabledBottum() ? colors.opacity : colors.common}
          borderRadius={0}
          disabled={isDisabledBottum()}
          icon={<Entypo name="plus" color={colors.white} />}
        />
      </HStack>
      <CustomPopap
        setClose={setShowPopaps}
        setValue={handleClosePopap}
        showModal={showPopaps}
        twoButtoms={false}
        title="Sorry"
        subTitle="The quantity of the inventories is no more !"
      />
    </>
  );
};
