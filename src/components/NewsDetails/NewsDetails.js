import React from 'react';
import { CustomText } from '..';
import LinearGradient from 'react-native-linear-gradient';
import { formatData } from '../../helpers';
import { Dimensions } from 'react-native';
import { commonPading, sizeFotoHeight } from '../../config';
import { Image } from 'native-base';
import { colors } from '../../config';

export const NewsDetails = ({ news }) => {
  const { title, createdAt, description } = news;

  const date = formatData(createdAt);
  const sizeScreen = Dimensions.get('window').width;
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={[colors.white, colors.bg]}
      style={{
        display: 'flex',
        flex: 1,
        width: '100%',
        padding: commonPading,
      }}>
      <Image
        resizeMode="cover"
        borderRadius={5}
        width={sizeScreen - 2 * commonPading}
        height={sizeScreen * sizeFotoHeight}
        source={{
          uri: 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        }}
        alt="Picture of a Flower"
      />

      <CustomText mt="5" semiBold fontSize="lg">
        {title}
      </CustomText>
      <CustomText mt="2" fontSize="sm">
        {date}
      </CustomText>
      <CustomText fontSize="md" mt="2">
        {description}
      </CustomText>
    </LinearGradient>
  );
};
