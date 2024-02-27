import { configureStore } from '@reduxjs/toolkit';

import gallerySlice from './slices/gallerySlice';
import photoSlice from './slices/photoSlice';

export const store = configureStore({
  reducer: {
    gallery: gallerySlice,
    photo: photoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
