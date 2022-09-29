import React, { useEffect, useState } from 'react';
import { Box, HStack, Select } from 'native-base';
import { Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Card } from 'react-native-shadow-cards';
import { renderSalary } from '../../helpers';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../../config';
import {
  CustomText,
  CommonLinGradient,
  PriceIcon,
  Table,
} from '../../components';
import {
  getHistoryStatistics,
  loadHistoryStatistics,
  getCommonStatistics,
  loadCommonStatistics,
} from '../../redux';

export const MainScreen = () => {
  const [service, setService] = useState('');
  const history = useSelector(getHistoryStatistics);
  const common = useSelector(getCommonStatistics);
  const dispatch = useDispatch();
  //console.log('history=> ', history);
  const salesHeader = [
    {
      id: '3232',
      mount: 'June 2022',
      sales: '$4600',
      rate: '20%',
      'per Event': '$5 500',
    },
    {
      id: '3239',
      mount: 'May 2022',
      sales: '$4600',
      rate: '20%',
      'per Event': '$5 500',
    },
  ];
  const historyHeader = [
    {
      id: '32329',
      mount: 'June 2022',
      sales: '$4600',
      rate: '20%',
      commission: '$5 500',
    },
    {
      id: '32325',
      mount: 'May 2022',
      sales: '$4600',
      rate: '20%',
      commission: '$5 500',
    },
    {
      id: '32327',
      mount: 'April 2022',
      sales: '$4600',
      rate: '20%',
      commission: '$5 500',
    },
  ];

  useEffect(() => {
    dispatch(loadHistoryStatistics());
    //dispatch(loadCommonStatistics());
  }, []);

  return (
    <CommonLinGradient style={{ width: '100%', paddingHorizontal: 14 }}>
      <CustomText semiBold fontSize="lg">
        Commission
      </CustomText>
      <HStack mt="3" justifyContent="space-between">
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          colors={['#FFC3AB', '#FE814F']}
          style={styles.gradient}>
          <Box
            borderRadius={56}
            w={28}
            h={28}
            bg={colors.white}
            justifyContent="center"
            alignItems="center">
            <PriceIcon size={15} color={colors.common} />
          </Box>
          <CustomText semiBold color={colors.white} fontSize="2xl">
            $ {renderSalary(3500)}
          </CustomText>
          <CustomText w="50%" color={colors.white} fontSize="xs">
            You current sales
          </CustomText>
        </LinearGradient>

        <LinearGradient
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          colors={['#FFC3AB', '#FE814F']}
          style={styles.gradient}>
          <Box
            borderRadius={56}
            w={28}
            h={28}
            bg={colors.white}
            justifyContent="center"
            alignItems="center">
            <Feather name="percent" size={15} color={colors.common} />
          </Box>
          <CustomText semiBold color={colors.white} fontSize="2xl">
            $ 525(%15)
          </CustomText>
          <CustomText w="50%" color={colors.white} white fontSize="xs">
            You current commission
          </CustomText>
        </LinearGradient>
      </HStack>
      <CustomText mt="3" semiBold fontSize="md">
        Remaining this month
      </CustomText>
      <CustomText mt="20" semiBold fontSize="md">
        If you increase your sales by
      </CustomText>
      <Card
        style={{
          width: '100%',
          marginTop: '4%',
        }}>
        <Table data={historyHeader} tableName={'history'} />
      </Card>

      <HStack mt="3" alignItems="center" justifyContent="space-between">
        <CustomText semiBold fontSize="lg">
          History
        </CustomText>
        <Card style={{ maxWidth: Dimensions.get('window').width * 0.45 }}>
          <Select
            selectedValue={service}
            minWidth="150"
            w={{
              base: '100%',
              md: '25%',
            }}
            h={{
              base: '35px',
            }}
            bg={colors.white}
            accessibilityLabel="Commission Plan"
            placeholder="Commission Plan"
            fontFamily="Montserrat-Medium"
            _selectedItem={{
              bg: colors.opacity,
              endIcon: (
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={5}
                  color="black"
                />
              ),
            }}
            mt={1}
            onValueChange={itemValue => setService(itemValue)}>
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select>
        </Card>
      </HStack>
      <Card
        style={{
          width: '100%',
          marginVertical: '4%',
        }}>
        <Table data={historyHeader} tableName="history" />
      </Card>
    </CommonLinGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    justifyContent: 'space-around',
    borderRadius: 5,
    width: Dimensions.get('window').width / 2.2,
    height: Dimensions.get('window').width / 3,
    paddingLeft: '5%',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
