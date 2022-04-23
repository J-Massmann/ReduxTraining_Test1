import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { burgerRestaurantsApi } from '../services/burgerRestaurants.js';
import loadMoreBurgerRestaurantsReducer from '../features/loadMoreBurgerRestaurantsSlice.js';

export const store = configureStore({
  reducer: {
    [burgerRestaurantsApi.reducerPath]: burgerRestaurantsApi.reducer,
    numberOfBurgerRestaurantsLoaded: loadMoreBurgerRestaurantsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(burgerRestaurantsApi.middleware),
});

setupListeners(store.dispatch);
