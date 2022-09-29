import React, { useEffect, useRef, useState } from 'react';
import { Box, ScrollView, HStack, Select, Flex, VStack } from 'native-base';
import { Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Card } from 'react-native-shadow-cards';
import { innerRadPieChart, outRadPieChart, colors } from '../../config';
import { getCommonStatistics, loadCommonStatistics } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';
import {
  serializeTableData,
  serializeCategory,
  serializeCategoryTable,
  renderSalary,
} from '../../helpers';
import {
  CustomText,
  PieChartComponent,
  Table,
  HalfDoughnutChart,
  CategoryInfo,
  CommonLinGradient,
} from '../../components';

export const StatisticsScreen = () => {
  const [service, setService] = useState('');
  const dispatch = useDispatch();

  const statistics = useSelector(getCommonStatistics);
  const { categoriesStat, totalSum, leaders } = statistics;
  // console.log('statistica=>', statistics);
  const wind = Dimensions.get('window').width;
  const outRad = wind * outRadPieChart;
  const innerRad = outRad / innerRadPieChart;

  useEffect(() => {
    dispatch(loadCommonStatistics());
  }, [dispatch]);

  const tableLeader = serializeTableData(leaders);
  const categories = serializeCategory(categoriesStat);
  const categoryTable = serializeCategoryTable(categoriesStat);

  return (
    <CommonLinGradient style={{ paddingBottom: 50 }}>
      <Card style={{ width: '100%', paddingHorizontal: 14 }}>
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
          accessibilityLabel="Jule 2020"
          placeholder="Jule 2020"
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
          mb={3}
          onValueChange={itemValue => setService(itemValue)}>
          <Select.Item label="1 Jill $3500" value="3500" />
          <Select.Item label="2 Kelly $3500" value="3500" />
          <Select.Item label="3 Jill $4200" value="4200" />
          <Select.Item label="4 JKelly $100" value="100" />
        </Select>
      </Card>
      <ScrollView bg={colors.white} px="3">
        <HalfDoughnutChart salary={totalSum}>
          <HStack
            w="100%"
            justifyContent="center"
            position="absolute"
            top="180">
            <CustomText bottom={70} semiBold fontSize="5xl">
              $ {renderSalary(totalSum)}
            </CustomText>
          </HStack>
          <CustomText position="absolute" top={176} left={39} fontSize="lg">
            0
          </CustomText>
          <CustomText position="absolute" top={176} left={320} fontSize="lg">
            10 000
          </CustomText>

          <CustomText
            semiBold
            position="absolute"
            top={230}
            left={3}
            fontSize="lg">
            Leader board
          </CustomText>

          <Card
            style={{
              width: '100%',
              position: 'absolute',
              top: 280,
            }}>
            <Table data={tableLeader} tableName={'leaderBoard'} />
          </Card>
        </HalfDoughnutChart>

        <Box mt="12">
          <CustomText mt="5" semiBold fontSize="lg">
            My Sales by Category
          </CustomText>
          <HStack w={wind} mt="5" justifyContent="flex-start">
            <Flex justify="center" align="center" position="relative">
              {categories && (
                <PieChartComponent
                  categories={categories}
                  radius={outRad}
                  innerRadius={innerRad}
                />
              )}
              <CustomText position="absolute" semiBold fontSize="2xl">
                $ {renderSalary(totalSum)}
              </CustomText>
            </Flex>

            <VStack
              w="34%"
              ml="3"
              h={outRad}
              space={1}
              alignItems="flex-start"
              justifyContent="center">
              {categories?.map((item, index) => {
                return <CategoryInfo key={index} item={item} />;
              })}
            </VStack>
          </HStack>
          <Card style={{ width: '100%', marginVertical: 20 }}>
            <Table data={categoryTable} tableName={'categorySales'} />
          </Card>
        </Box>
      </ScrollView>
    </CommonLinGradient>
  );
};
