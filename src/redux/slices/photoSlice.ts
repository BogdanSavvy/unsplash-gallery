import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import type { ImageType } from '../../types';
import { getPhotoById } from '../../api/unsplashApi';
import { RootState } from '../store';

export interface PhotoState {
  currentImage: ImageType | null;
  status: string;
  error?: string;
}

const initialState: PhotoState = {
  currentImage: null,
  status: 'idle', // 'loading', 'succeeded', 'failed',
  error: undefined,
};

export const fetchPhoto = createAsyncThunk(
  'photo/fetchPhoto',
  async (photoId: string) => {
    try {
      const response = await getPhotoById(photoId);
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  },
);

export const PhotoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPhoto.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchPhoto.fulfilled, (state, action) => {
      state.status = 'succeeded';
      const loadedImage = action.payload;
      state.currentImage = loadedImage;
    });
    builder.addCase(fetchPhoto.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const selectCurrentImage = (state: RootState) =>
  state.photo.currentImage;
export const selectImageStatus = (state: RootState) => state.photo.status;
export const selectImageErrors = (state: RootState) => state.photo.error;

export const {} = PhotoSlice.actions;

export default PhotoSlice.reducer;
