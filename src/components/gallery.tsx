import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import type { ImageType } from '../types';
import Loader from './loader';

type GalleryProps = {
  images: ImageType[];
  status: string;
  error?: string;
  onPress: (imageId: string) => void;
};

const Gallery = ({ images, status, error, onPress }: GalleryProps) => {
  return (
    <View style={styles.container}>
      {status === 'loading' && <Loader />}

      {error && <Text>Something went wrong! Try again later.</Text>}

      {images.map((image: ImageType) => {
        return (
          <TouchableOpacity onPress={() => onPress(image.id)} key={image.id}>
            <View>
              <Image
                source={{
                  uri: image.urls.small,
                }}
                width={110}
                height={120}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 5,
  },
  loading: {
    fontSize: 32,
    marginTop: 150,
  },
});

export default Gallery;
