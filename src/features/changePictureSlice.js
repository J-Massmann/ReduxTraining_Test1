import { createSlice } from '@reduxjs/toolkit';

const changePictureSlice = createSlice({
  name: 'changePicture',
  initialState: {
    initialIndex: 0,
  },
  reducers: {
    changeToNextPicture: (state, action) => {
      const currentPicture = action.payload;
      state.initialIndex = currentPicture + 1;
    },
    changeToPreviousPicture: (state, action) => {
      const currentPicture = action.payload;
      state.initialIndex = currentPicture - 1;
    },
  },
});

export const { changeToNextPicture, changeToPreviousPicture } =
  changePictureSlice.actions;
export default changePictureSlice.reducer;
