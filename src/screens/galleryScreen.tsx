import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types';
import GalleryContainer from '../components/galleryContainer';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Gallery'>;

const GalleryScreen = ({ navigation, route }: ScreenProps) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <GalleryContainer navigation={navigation} route={route} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GalleryScreen;
