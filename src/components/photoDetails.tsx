import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Loader from './loader';
import { ImageType } from '../types';

type PhotoDetailsProps = {
  image: ImageType;
  status: string;
  error?: string;
};

const PhotoDetails = ({ image, status, error }: PhotoDetailsProps) => {
  return (
    <View style={styles.container}>
      {status === 'loading' && <Loader />}

      {error && <Text>Something went wrong! Try again later.</Text>}

      {status === 'succeeded' && (
        <View style={{ flex: 1, backgroundColor: image.color }}>
          <Image
            source={{
              uri: image.urls.regular,
            }}
            style={styles.image}
          />
          <Text>likes: {image.likes}</Text>
          <Text>autor: {image.user.name}</Text>
          <Text>{image.user.portfolio_url}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 'auto',
    height: 360,
    objectFit: 'cover',
  },
});

export default PhotoDetails;
