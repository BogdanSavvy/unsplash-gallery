import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectImageErrors,
  selectImageStatus,
  selectCurrentImage,
} from '../redux/slices/photoSlice';

import PhotoDetails from './photoDetails';


const PhotoDetailsContainer = () => {
  const image = useSelector(selectCurrentImage);
  const status = useSelector(selectImageStatus);
  const error = useSelector(selectImageErrors);

  return <PhotoDetails image={image} status={status} error={error} />;
};



export default PhotoDetailsContainer;
