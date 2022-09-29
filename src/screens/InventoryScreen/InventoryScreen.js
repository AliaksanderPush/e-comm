import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../components/Pagination/Pagination';
import { findeSumm } from '../../helpers';
import { colors, headerInventoryTab, delaySearchTime } from '../../config';
import { Box, Input, Center, Pressable } from 'native-base';
import { useDebounceHook } from '../../hooks';
import {
  searchInventories,
  getInventories,
  viewAllPages,
  loadMyInventories,
  getMyInventory,
  getRunningLow,
  loadRunningLow,
  getCurrentPage,
  fetchInventories,
  getAddInventories,
  saveOrderedInventories,
  getOrderRunnLow,
  cleanOrderedInventory,
} from '../../redux';
import {
  Table,
  CommonLinGradient,
  CustomPopap,
  CustomButton,
  ModalWindow,
} from '../../components';

const InventoryScreen = () => {
  const [tab, setTab] = useState('My inventory');
  const [value, setValue] = useState('');
  const [totalOrderInv, setTotalOrderInv] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showPopaps, setShowPopaps] = useState(false);

  const dispatch = useDispatch();
  const inventories = useSelector(getInventories);
  const myInventories = useSelector(getMyInventory);
  const allInventories = useSelector(viewAllPages);
  const runningLow = useSelector(getRunningLow);
  const currentPage = useSelector(getCurrentPage);
  const orderInventory = useSelector(getAddInventories);
  const allOrderRunnLow = useSelector(getOrderRunnLow);

  let myInv = tab === 'My inventory';
  let runLow = tab === 'Running low';
  let general = tab === 'General';
  const winWidth = Dimensions.get('window').width;
  //console.log('my inventory=>', myInventories);
  //console.log('ruunLow=>', runningLow);
  //console.log('order=>', orderInventory);
  //console.log('ordered runLow=>', allOrderRunnLow);
  const searchValue = useDebounceHook(value, delaySearchTime);
  console.log('inputDelay =>', searchValue);
  console.log('input =>', value);

  const handleSubmitMyInv = () => {
    if (general && orderInventory.length) {
      const isRunnLow = false;
      dispatch(saveOrderedInventories(orderInventory, isRunnLow));
    } else if (runLow && allOrderRunnLow.length) {
      const isRunnLow = true;
      dispatch(saveOrderedInventories(allOrderRunnLow, isRunnLow));
    }
    setShowModal(false);
  };

  const renderCurrentTab = () => {
    if (myInv) {
      dispatch(loadMyInventories());
    } else if (runLow) {
      dispatch(loadRunningLow());
    }
  };
  const handleCancelOrder = () => {
    dispatch(cleanOrderedInventory(false));
    setShowPopaps(false);
  };

  useEffect(() => {
    if (searchValue) {
      const req = {
        limit: 5,
        page: 1,
        search: searchValue,
      };
      dispatch(searchInventories(req));
    }
  }, [searchValue]);

  useEffect(() => {
    renderCurrentTab();
  }, [tab]);

  useEffect(() => {
    if (general && orderInventory.length) {
      const summ = findeSumm(orderInventory);
      setTotalOrderInv(summ);
    } else if (runLow && allOrderRunnLow.length) {
      const summ = findeSumm(allOrderRunnLow);
      setTotalOrderInv(summ);
    } else {
      setTotalOrderInv(0);
    }
  }, [orderInventory, allOrderRunnLow]);

  return (
    <>
      <CommonLinGradient
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 14,
          position: 'relative',
        }}>
        <Center>
          <Card
            style={{
              width: '100%',
              marginBottom: 12,
            }}>
            <Center flexDirection="row" width="100%">
              {headerInventoryTab &&
                headerInventoryTab.map((item, index) => {
                  return (
                    <CustomButton
                      key={item + index}
                      w={Math.ceil((winWidth - 28) / 3)}
                      h={35}
                      bg={tab === item ? true : false}
                      setValue={() => setTab(item)}>
                      {item}
                    </CustomButton>
                  );
                })}
            </Center>
          </Card>

          <Card
            elevation={3}
            opacity={0.1}
            style={{
              width: '100%',
              marginTop: 6,
              marginBottom: 12,
            }}>
            <Input
              w={{
                base: '100%',
                md: '25%',
              }}
              _focus={{
                borderColor: colors.common,
              }}
              _text={{ fontFamily: 'Montserrat-Medium' }}
              h={35}
              onChangeText={text => setValue(text)}
              value={value}
              InputLeftElement={
                <Box ml="2">
                  <AntDesign name="search1" size={26} color={colors.grey} />
                </Box>
              }
              InputRightElement={
                <Pressable pr="1" onPress={() => setValue('')}>
                  <AntDesign name="close" size={20} color={colors.grey} />
                </Pressable>
              }
              placeholder="Search..."
              placeholderTextColor={colors.grey}
            />
          </Card>

          <Card
            style={{
              width: '100%',
            }}>
            <Table
              data={myInv ? myInventories : runLow ? runningLow : inventories}
              tableName={tab}
            />
          </Card>
        </Center>

        {!myInv && (
          <CustomButton
            setValue={() =>
              setShowModal(
                orderInventory.length || allOrderRunnLow.length ? true : false,
              )
            }
            w={200}
            h={40}
            bg={true}
            fs="sm">
            {runLow
              ? `Order(${totalOrderInv})`
              : `Add to my Inventary(${totalOrderInv})`}
          </CustomButton>
        )}

        <Pagination
          allInventories={
            myInv
              ? myInventories.length
              : runLow
              ? runningLow.length
              : allInventories
          }
          value={value}
        />
      </CommonLinGradient>
      <ModalWindow
        setClose={setShowModal}
        data={runLow ? allOrderRunnLow : orderInventory}
        showModal={showModal}
        setSubmit={handleSubmitMyInv}
      />
      <CustomPopap
        setClose={setShowPopaps}
        showModal={showPopaps}
        twoButtoms={true}
        handleCancelOrder={() => handleCancelOrder()}
        title="Cancel the order"
        subTitle="Are you sure you want to cancel this order?"
      />
    </>
  );
};

export default React.memo(InventoryScreen);
