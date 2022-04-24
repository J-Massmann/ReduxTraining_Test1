import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { burgerRestaurantsApi } from '../services/burgerRestaurants.js';
import LoadMoreBurgerRestaurantsReducer from '../features/loadMoreBurgerRestaurantsSlice.js';
import ToggleLikeReducer from '../features/toggleLikeSlice.js';

const store = configureStore({
  reducer: {
    [burgerRestaurantsApi.reducerPath]: burgerRestaurantsApi.reducer,
    numberOfBurgerRestaurantsLoaded: LoadMoreBurgerRestaurantsReducer,
    toggleLike: ToggleLikeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(burgerRestaurantsApi.middleware),
});

setupListeners(store.dispatch);

export default store;
