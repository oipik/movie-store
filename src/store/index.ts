import { configureStore } from '@reduxjs/toolkit'
import { moviesApi } from './movies/movies.api';

const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware)
})

export default store;
export type RootState = ReturnType<typeof store.getState>