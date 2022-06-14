import { configureStore } from '@reduxjs/toolkit';
import photosReducer from './media/media';

export const store = configureStore({
  reducer: {
    photos: photosReducer,
  },
});

export default store;
