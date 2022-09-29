import React, { useEffect } from 'react';
import { NewsDetails } from '../../components';
import { fetchNewsById, getNewsById } from '../../redux';
import { ScrollView, Box } from 'native-base';
import { useDispatch, useSelector } from 'react-redux';

export const NewsDetailsScreen = ({ route }) => {
  const { id } = route.params;
  const newsSingle = useSelector(getNewsById);
  const dispatch = useDispatch();
  console.log('id=>', id);
  console.log('post=>', newsSingle);

  useEffect(() => {
    dispatch(fetchNewsById(id));
  }, [dispatch]);

  if (!newsSingle) {
    return <Box></Box>;
  }
  return (
    <ScrollView>
      <NewsDetails news={newsSingle} />
    </ScrollView>
  );
};
