import React, { useState, useCallback } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Card } from 'react-native-shadow-cards';
import { getPathnameInUrl } from '../../helpers';
import { CustomText } from '..';

export const CardVideo = props => {
  const { id, title, name, link } = props;
  const [playing, setPlaying] = useState(false);

  const youTobeId = getPathnameInUrl(link);
  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
    }
    if (state === 'playing') {
      setPlaying(true);
    }
    if (state === 'paused') {
      setPlaying(false);
    }
  }, []);
  return (
    <Card
      style={{
        width: '100%',
        borderRadius: 8,
        marginTop: 16,
        position: 'relative',
      }}>
      {props ? (
        <YoutubePlayer
          height={230}
          width="100%"
          play={playing}
          videoId={youTobeId}
          onChangeState={onStateChange}
          volume={100}
        />
      ) : (
        ''
      )}
      <CustomText semiBold fontsize="md" p="2">
        {title}
      </CustomText>
    </Card>
  );
};
