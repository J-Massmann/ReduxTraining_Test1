import { createSlice } from '@reduxjs/toolkit';

export const toggleAboutUsSectionTextSlice = createSlice({
  name: 'aboutUsSectionText',
  initialState: { isTextHidden: {} },
  reducers: {
    toggleHidden(state, action) {
      const id = action.payload;
      state.isTextHidden[id] = !state.isTextHidden[id];
    },
  },
});

export const { toggleHidden } = toggleAboutUsSectionTextSlice.actions;
export default toggleAboutUsSectionTextSlice.reducer;
