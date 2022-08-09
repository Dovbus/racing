import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { horsesApi } from './api';

export const store = configureStore({
  reducer: {
    [horsesApi.reducerPath]: horsesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(horsesApi.middleware),
});

setupListeners(store.dispatch);
