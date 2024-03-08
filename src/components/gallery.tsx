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
                style={styles.image}
              />
              <Text style={[styles.imageDetails, { top: 0, left: 0 }]}>
                {image.user.name}
              </Text>
              <Text
                style={[
                  styles.imageDetails,
                  { bottom: 0, right: 0, textAlign: 'right' },
                ]}
              >
                🤍 {image.likes}
              </Text>
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
  image: {
    minWidth: 110,
    maxWidth: 150,
    height: 120
  },
  imageDetails: {
    width: '100%',
    position: 'absolute',
    color: '#000',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 5,
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
