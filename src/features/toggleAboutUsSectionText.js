import { createSlice } from '@reduxjs/toolkit';

export const toggleAboutUsSectionTextSlice = createSlice({
  name: 'aboutUsSectionText',
  initialState: { isTextHidden: true },
  reducers: {
    toggleHidden(state) {
      state.isTextHidden = !state.isTextHidden;
    },
  },
});

export const { toggleHidden } = toggleAboutUsSectionTextSlice.actions;
export default toggleAboutUsSectionTextSlice.reducer;
