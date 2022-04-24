import { createSlice } from '@reduxjs/toolkit';

export const toggleLikeSlice = createSlice({
  name: 'likeBurgerRestaurants',
  initialState: { statusListOfLikes: {} },
  reducers: {
    toggleLike(state, action) {
      const id = action.payload;
      state.statusListOfLikes[id] = !state.statusListOfLikes[id];
    },
  },
});

export const { toggleLike } = toggleLikeSlice.actions;
export default toggleLikeSlice.reducer;
