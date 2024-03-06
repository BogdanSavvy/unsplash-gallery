import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppDispatch } from '../redux/store';
import { RootStackParamList } from '../types';
import {
  fetchImages,
  selectGalleryErrors,
  selectGalleryImages,
  selectGalleryStatus,
  selectGalleryPageNumber,
} from '../redux/slices/gallerySlice';
import { fetchPhoto } from '../redux/slices/photoSlice';
import Gallery from './gallery';

const GalleryContainer = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, 'Gallery'>) => {
  const dispatch = useDispatch<AppDispatch>();

  const images = useSelector(selectGalleryImages);
  const status = useSelector(selectGalleryStatus);
  const error = useSelector(selectGalleryErrors);
  const pageNumber = useSelector(selectGalleryPageNumber);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchImages(pageNumber));
    }
  }, [status, dispatch]);

  const goToPickedPhoto = (imageId: string) => {
    navigation.navigate('Photo');
    dispatch(fetchPhoto(imageId));
  };

  const loadMoreImages = () => {
    try {
      dispatch(fetchImages(pageNumber));
    } catch (error) {
      console.log('ERROR - func: loadMoreImages', error);
    }
  };

  return (
    <Gallery
      images={images}
      status={status}
      error={error}
      goToPickedPhoto={goToPickedPhoto}
      loadMoreImages={loadMoreImages}
    />
  );
};

export default GalleryContainer;
