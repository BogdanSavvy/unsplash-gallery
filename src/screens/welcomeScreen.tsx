import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

import { RootStackParamList } from '../types';
import MainButton from '../components/button';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const WelcomeScreen = ({ navigation }: ScreenProps) => {
  const goToGallery = () => {
    navigation.navigate('Gallery');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/images/welcome_bg.jpg')}
        style={styles.background}
      >
        <View style={styles.greeting}>
          <View>
            <Text style={styles.text_main}>Welcome to Unsplash Gallery</Text>
            <Text style={styles.text_secondary}>by BSVN-DEV</Text>
          </View>
          <MainButton
            title="Explore 💫"
            onPress={goToGallery}
            style={styles.button}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  greeting: {
    paddingVertical: 35,
    paddingHorizontal: 15,
    display: 'flex',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  text_main: {
    fontSize: 42,
    textAlign: 'center',
    color: '#000',
    fontWeight: '600',
    marginBottom: 15,
  },
  text_secondary: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    alignSelf: 'flex-end',
    borderRadius: 10,
  },
  button: {
    alignSelf: 'center',
  },
});

export default WelcomeScreen;
