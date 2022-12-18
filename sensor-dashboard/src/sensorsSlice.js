import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
}

export const sensorsSlice = createSlice({
  name: 'sensors',
  initialState,
  reducers: {
    getSensors: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    getSensor: (state) => {
      state.value -= 1
    },
    getAbout: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { getSensors, getSensor, getAbout } = sensorsSlice.actions

export default sensorsSlice.reducer