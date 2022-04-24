import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { burgerRestaurantsApi } from '../services/burgerRestaurants.js';
import LoadMoreBurgerRestaurantsReducer from '../features/loadMoreBurgerRestaurantsSlice.js';
import ToggleLikeReducer from '../features/toggleLikeSlice.js';
import ChangePictureReducer from '../features/changePictureSlice.js';
import ToggleAboutUsSectionTextReducer from '../features/toggleAboutUsSectionText.js';

const store = configureStore({
  reducer: {
    [burgerRestaurantsApi.reducerPath]: burgerRestaurantsApi.reducer,
    numberOfBurgerRestaurantsLoaded: LoadMoreBurgerRestaurantsReducer,
    toggleLike: ToggleLikeReducer,
    changePicture: ChangePictureReducer,
    toggleHideText: ToggleAboutUsSectionTextReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(burgerRestaurantsApi.middleware),
});

setupListeners(store.dispatch);

export default store;
