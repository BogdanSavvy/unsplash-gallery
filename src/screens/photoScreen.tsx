import React from 'react';
import { StyleSheet, View } from 'react-native';

import { RootStackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import PhotoDetailsContainer from '../components/photoDetailsContainer';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Photo'>;

const PhotoScreen = () => {
  return (
    <View style={styles.container}>
      <PhotoDetailsContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PhotoScreen;
