import React from 'react';
import { HStack, Center, VStack, Image, Pressable } from 'native-base';
import { dateFromNow } from '../../helpers';
import { Card } from 'react-native-shadow-cards';
import { CustomText } from '..';

export const CardNews = ({ navigation, data }) => {
  const { id, name, title, createdAt } = data;
  const date = dateFromNow(createdAt);

  return (
    <Pressable
      w="100%"
      onPress={() => navigation.navigate('NewsScreen', { id })}>
      <Card
        style={{
          marginBottom: 16,
          marginTop: 2,
          padding: 10,
          width: '100%',
          borderRadius: 5,
        }}>
        <HStack w="100%" space={4}>
          <Center>
            <Image
              resizeMode="cover"
              borderRadius={5}
              source={{
                uri: 'https://cdn.pixabay.com/photo/2022/07/31/07/52/northern-gannets-7355205_960_720.jpg',
              }}
              alt="Alternate Text"
              size="md"
            />
          </Center>
          <VStack justifyContent="space-between" w="70%" pl="1">
            <CustomText fontSize="md" semiBold>
              {title}
            </CustomText>
            <CustomText fontSize="xs" mb="2">
              {date}
            </CustomText>
          </VStack>
        </HStack>
      </Card>
    </Pressable>
  );
};
