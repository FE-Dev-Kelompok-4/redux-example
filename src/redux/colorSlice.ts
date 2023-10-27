import { createSlice } from '@reduxjs/toolkit';

const colorSlice = createSlice({
  name: 'color',
  initialState: {
    blueDivColor: 'blue',
  },
  reducers: {
    setBlueDivRed: (state) => {
      state.blueDivColor = state.blueDivColor === 'blue' ? 'red': state.blueDivColor;
    },
    toggleBlueDivColor: (state) => {
      state.blueDivColor = state.blueDivColor === 'red' ? 'blue' : state.blueDivColor;
    }
  }
});

export const { setBlueDivRed, toggleBlueDivColor } = colorSlice.actions;
export default colorSlice.reducer;