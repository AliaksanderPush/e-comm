import React, { useEffect, useState } from 'react';
import { Center } from 'native-base';
import { Dimensions, FlatList, ActivityIndicator, View } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import { headerNewsBtn, limitVideo, colors } from '../../config';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllVideo,
  fetchVideo,
  fetchNews,
  getAllNews,
  loader,
  getVideoCount,
} from '../../redux';
import {
  CardVideo,
  CardNews,
  CustomButton,
  CommonLinGradient,
} from '../../components';

export const NewsScreen = ({ navigation }) => {
  const [tab, setTab] = useState('News');
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const youTobeVideo = useSelector(getAllVideo);
  const posts = useSelector(getAllNews);
  const countVideo = useSelector(getVideoCount);
  const loading = useSelector(loader);

  console.log('video=>', youTobeVideo);

  const renderLoader = () => {
    return (
      <View>
        <ActivityIndicator size="large" color={colors.common} />
      </View>
    );
  };

  const loadMoreItems = () => {
    const pages = Math.ceil(countVideo / limitVideo);
    console.log(currentPage <= pages);
    console.log('popali');
    if (currentPage <= pages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    dispatch(fetchVideo({ page: currentPage, limit: limitVideo }));
    dispatch(fetchNews({ page: 1, limit: 3 }));
  }, [currentPage]);

  return (
    <CommonLinGradient
      style={{
        display: 'flex',
        flex: 1,
        width: '100%',
      }}>
      <Center mx="2" mt="0.5">
        <Card
          style={{
            width: '100%',
            borderRadius: 8,
          }}>
          <Center flexDirection="row" width="100%">
            {headerNewsBtn.length &&
              headerNewsBtn.map((item, index) => {
                return (
                  <CustomButton
                    key={item + index}
                    w={Math.ceil(Dimensions.get('window').width - 16) / 2}
                    h={35}
                    bg={tab === item ? true : false}
                    setValue={() => setTab(item)}>
                    {item}
                  </CustomButton>
                );
              })}
          </Center>
        </Card>
      </Center>
      <Center mt="5" w="100%">
        {tab === 'News' ? (
          <FlatList
            style={{ width: '100%', padding: 10, marginBottom: 35 }}
            data={posts}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <CardNews data={item} navigation={navigation} />
            )}
          />
        ) : (
          <FlatList
            style={{ width: '100%', padding: 10, marginBottom: 35 }}
            data={youTobeVideo}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <CardVideo {...item} />}
            onEndReached={loadMoreItems}
            onEndReachedThreshold={0}
          />
        )}
      </Center>
    </CommonLinGradient>
  );
};
