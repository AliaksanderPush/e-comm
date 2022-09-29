import React, { useEffect, useState } from 'react';
import { NumberScreen } from '..';
import { HStack, Pressable } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { fetchInventories } from '../../redux';
import { useDispatch } from 'react-redux';
import { limit, colors } from '../../config';

const Pagination = ({ allInventories, value }) => {
  const [arrOfCurrScreens, setArrOfCurrScreens] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const allPages = Math.ceil(allInventories / limit);
  const dispatch = useDispatch();

  const numberOfscreens = [];
  for (let i = 1; i <= allPages; i++) {
    numberOfscreens.push(i);
  }

  useEffect(() => {
    let tempNumberOfScreens = [...arrOfCurrScreens];
    let dotsInitial = '...';
    let dotsLeft = '... ';
    let dotsRight = ' ...';

    if (currentPage >= 1 && currentPage <= 3 && numberOfscreens.length > 4) {
      tempNumberOfScreens = [1, 2, 3, 4, dotsInitial, numberOfscreens.length];
    } else if (numberOfscreens.length <= 4) {
      tempNumberOfScreens = numberOfscreens;
    } else if (currentPage === 4) {
      const sliced = numberOfscreens.slice(0, 5);
      tempNumberOfScreens = [...sliced, dotsInitial, numberOfscreens.length];
    } else if (currentPage > 4 && currentPage < numberOfscreens.length) {
      const sliced1 = numberOfscreens.slice(currentPage - 2, currentPage);
      const sliced2 = numberOfscreens.slice(currentPage, currentPage + 1);
      tempNumberOfScreens = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        numberOfscreens.length,
      ];
    } else if (currentPage > numberOfscreens.length - 3) {
      const sliced = numberOfscreens.slice(numberOfscreens.length - 4);
      tempNumberOfScreens = [1, dotsLeft, ...sliced];
    } else if (currentPage === dotsInitial) {
      setCurrentPage(arrOfCurrScreens[arrOfCurrScreens.length - 3] + 1);
    } else if (currentPage === dotsRight) {
      setCurrentPage(arrOfCurrScreens[3] + 2);
    } else if (currentPage === dotsLeft) {
      setCurrentPage(arrOfCurrScreens[3] - 2);
    }

    setArrOfCurrScreens(tempNumberOfScreens);
    setCurrentPage(currentPage);
  }, [currentPage, allInventories]);

  useEffect(() => {
    if (!value) {
      dispatch(fetchInventories({ limit, page: currentPage }));
    }
  }, [currentPage, dispatch, value]);

  return (
    <HStack
      mb="2"
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      h={35}>
      <Pressable
        onPress={() => setCurrentPage(prev => (prev === 1 ? prev : prev - 1))}>
        <AntDesign name="left" size={15} color={colors.heading} />
      </Pressable>
      <HStack w="50%" justifyContent="center">
        {arrOfCurrScreens.map((item, index) => {
          return (
            <NumberScreen
              key={index}
              num={item}
              setValue={setCurrentPage}
              page={currentPage}
            />
          );
        })}
      </HStack>
      <Pressable
        onPress={() =>
          setCurrentPage(prev =>
            prev === numberOfscreens.length ? prev : prev + 1,
          )
        }>
        <AntDesign name="right" size={15} color="black" />
      </Pressable>
    </HStack>
  );
};

export default React.memo(Pagination);
