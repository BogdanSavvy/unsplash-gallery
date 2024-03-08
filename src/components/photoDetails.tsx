import React from 'react';
import {
  Alert,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Loader from './loader';
import { ImageType } from '../types';

type PhotoDetailsProps = {
  image: ImageType | null;
  status: string;
  error?: string;
};

const handlePress = async (url?: string) => {
  if (url) {
    await Linking.openURL(url);
  } else {
    Alert.alert(`Can't open this URL: ${url}`);
  }
};

const PhotoDetails = ({ image, status, error }: PhotoDetailsProps) => {
  return (
    <View style={styles.container}>
      {status === 'loading' && <Loader />}

      {error && <Text>Something went wrong! Try again later.</Text>}

      {image && (
        <View style={{ flex: 1, backgroundColor: image.color }}>
          <Image
            source={{
              uri: image.urls.regular,
            }}
            style={styles.mainImage}
          />
          <View style={styles.cards}>
            <View style={[styles.card, styles.cardHalph]}>
              <Text style={styles.cardTitle}>likes:</Text>
              <Text style={styles.cardDescription}>🤍 {image.likes}</Text>
            </View>

            <View style={[styles.card, styles.cardHalph]}>
              <Image
                style={styles.userImage}
                source={{
                  uri: image.user.profile_image.medium,
                }}
              />
            </View>

            <View style={[styles.card, styles.cardHalph]}>
              <Text style={styles.cardTitle}>Autor:</Text>
              <Text style={styles.cardDescription}>{image.user.name}</Text>
            </View>

            {image.user.portfolio_url && (
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Portfilio URL:</Text>
                <TouchableOpacity
                  onPress={() => handlePress(image.user.portfolio_url)}
                >
                  <Text style={styles.cardDescription}>
                    {image.user.portfolio_url}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainImage: {
    flex: 1,
    width: 'auto',
    height: 'auto',
  },
  userImage: {
    width: 65,
    height: 65,
    objectFit: 'cover',
    borderRadius: 50,
    alignSelf: 'center',
  },
  cards: {
    padding: 5,
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  card: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '100%',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(250, 250, 250, 0.4)',
    padding: 10,
  },
  cardHalph: {
    flexBasis: 'auto',
    alignSelf: 'stretch',
  },
  cardTitle: {
    color: '#000',
    marginBottom: 10,
    fontSize: 18,
    textTransform: 'capitalize',
  },
  cardDescription: {
    fontSize: 16,
    fontWeight: '700',
  },
});

export default PhotoDetails;
