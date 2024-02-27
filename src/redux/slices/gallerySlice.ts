import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import type { ImageType } from '../../types';
export { getPhotos } from '../../api/unsplashApi';
import { getPhotos } from './gallerySlice';
import { RootState } from '../store';

export interface GalleryState {
  images: ImageType[];
  status: string;
  error?: string;
}

const initialState: GalleryState = {
  images: [],
  status: 'idle', // 'loading', 'succeeded', 'failed',
  error: undefined,
};

export const fetchImages = createAsyncThunk('gallery/fetchPhotos', async () => {
  try {
    const response = await getPhotos();
    return response.data;
  } catch (error: any) {
    return error.message;
  }
});

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchImages.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.status = 'succeeded';
      const loadedImages = action.payload.map((image: ImageType) => {
        return {
          id: image.id,
          color: image.color,
          description: image.description,
          urls: {
            full: image.urls.full,
            regular: image.urls.regular,
            thumb: image.urls.thumb,
            small: image.urls.small,
          },
          likes: image.likes,
          user: {
            id: image.user.id,
            name: image.user.name,
            portfolio_url: image.user.portfolio_url,
            bio: image.user.bio,
            profile_image: {
              medium: image.user.profile_image,
            },
          },
        };
      });
      state.images = state.images.concat(loadedImages);
    });
    builder.addCase(fetchImages.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

export const selectGalleryImages = (state: RootState) => state.gallery.images;
export const selectGalleryStatus = (state: RootState) => state.gallery.status;
export const selectGalleryErrors = (state: RootState) => state.gallery.error;

export const {} = gallerySlice.actions;

export default gallerySlice.reducer;
