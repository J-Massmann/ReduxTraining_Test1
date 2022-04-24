import { createSlice } from '@reduxjs/toolkit';

export const loadMoreBurgerRestaurantsSlice = createSlice({
  name: 'loadMoreBurgerRestaurants',
  initialState: {
    value: 3,
  },
  reducers: {
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
  },
});

export const { incrementByAmount } = loadMoreBurgerRestaurantsSlice.actions;
export default loadMoreBurgerRestaurantsSlice.reducer;
