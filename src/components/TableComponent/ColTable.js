import React, { useState, useEffect } from 'react';
import { colors } from '../../config/colors';
import { CountButton } from '../../components';
import { useWindowDimensions } from 'react-native';
import { findItem } from '../../helpers';
import { Box, HStack, Checkbox } from 'native-base';
import { CustomText } from '../UI/CustomText/CustomText';
import { useSelector, useDispatch } from 'react-redux';
import RenderHTML from 'react-native-render-html';
import {
  getAddInventories,
  getOrderRunnLow,
  incRunnLow,
  addSellingInv,
  removeSellingInv,
  getSellingInv,
} from '../../redux';

export const ColTable = ({ data, index, titles, tableName, id, colLength }) => {
  //const { width } = useWindowDimensions();

  const [orderRunnLow, setOrderRunnLow] = useState(null);
  const [addInventories, setAddInventories] = useState(null);
  const orderInventories = useSelector(getAddInventories);
  const allOrderRunnLow = useSelector(getOrderRunnLow);
  const sellingInv = useSelector(getSellingInv);
  const dispatch = useDispatch();
  const isRunLow = tableName === 'Running low';
  //console.log('OrderRunLow==>', allOrderRunnLow);
  //console.log('OrderInv==>', addInventories);
  const { quantity } = data;

  const changeBgInventoryTable = () => {
    const color = index % 2 === 0 ? colors.lightGray : colors.white;
    if (isRunLow) {
      if (orderRunnLow?.quantity >= 1) {
        return '#F6FFEC';
      } else if (0 < quantity < 3) {
        return '#FFECEC';
      } else {
        return color;
      }
    } else {
      return color;
    }
  };

  const showCountInvent = () => {
    if (orderRunnLow?.quantity) {
      return data?.quantity + orderRunnLow?.quantity;
    } else if (!orderRunnLow) {
      return data?.quantity;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    if (incRunnLow && allOrderRunnLow?.length) {
      const runningLow = findItem(id, allOrderRunnLow);
      if (runningLow) {
        setOrderRunnLow(runningLow);
      }
    } else {
      setOrderRunnLow(null);
    }

    if (orderInventories?.length) {
      const addInv = findItem(id, orderInventories);
      if (addInv) {
        setAddInventories(addInv);
      }
    } else {
      setAddInventories(null);
    }
  }, [allOrderRunnLow, orderInventories]);

  return (
    <HStack
      alignItems="center"
      justifyContent="space-around"
      py="1.5"
      pl="0.5"
      w="100%"
      borderBottomRadius={index === colLength ? 'md' : 0}
      borderBottomWidth={0.5}
      borderColor={colors.text}
      bg={changeBgInventoryTable()}>
      {titles &&
        titles.map((prod, index) => {
          return (
            prod !== 'id' && (
              <Box
                key={prod + index}
                w={titles.length === 5 ? '25%' : '33.33%'}
                display="flex"
                justifyContent="center"
                alignItems={prod === 'name' ? 'flex-start' : 'center'}
                _text={{
                  fontSize: 'sm',
                  color: colors.text,
                  fontFamily:
                    prod === 'mount'
                      ? 'Montserrat-SemiBold'
                      : 'Montserrat-Medium',
                  textAlign: prod === 'name' ? 'left' : 'center',
                }}>
                {tableName !== 'My inventory' && prod === 'quantity' ? (
                  <CountButton
                    counter={
                      isRunLow
                        ? showCountInvent()
                        : addInventories
                        ? addInventories.quantity
                        : 0
                    }
                    tableName={tableName}
                    data={data}
                  />
                ) : (
                  data[prod]
                )}
              </Box>
            )
          );
        })}
    </HStack>
  );
};

/*
<RenderHTML
                      contentWidth={width * 0.25}
                      source={{ html: data[prod] }}
                    />

<CustomText
                  semiBold={prod === 'mount' && true}
                  textAlign={prod === 'name' ? 'left' : 'center'}
                  fontSize="sm"
                  color={colors.text}>
 </CustomText>


                    */
