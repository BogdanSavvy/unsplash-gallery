import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import type { ImageType } from '../types';
import Loader from './loader';

type GalleryProps = {
  images: ImageType[];
  status: string;
  error?: string;
  goToPickedPhoto: (imageId: string) => void;
  loadMoreImages: () => void;
};

const Gallery = ({
  images,
  status,
  error,
  goToPickedPhoto,
  loadMoreImages,
}: GalleryProps) => {
  return (
    <View style={styles.container}>
      {status === 'loading' && <Loader />}

      {error && <Text>Something went wrong! Try again later.</Text>}

      {images.map((image: ImageType, index: number) => {
        return (
          <TouchableOpacity
            onPress={() => goToPickedPhoto(image.id)}
            key={index}
          >
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
      <View>
        <TouchableOpacity
          disabled={status === 'loading'}
          style={styles.loadMore}
          onPress={loadMoreImages}
        >
          <Text style={styles.loadMoreText}>⬇ click to load more images ⬇</Text>
        </TouchableOpacity>
      </View>
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
  loadMore: {
    paddingVertical: 15,
  },
  loadMoreText: {
    textTransform: 'uppercase',
    color: '#000',
  },
});

export default Gallery;
