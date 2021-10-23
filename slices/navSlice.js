import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

export const selectOrigin = (state) => state.origin;

// export const selectOrigin = (state) => {
//   return {
//     location: {
//       lat: 37.784001,
//       lng: -122.4321,
//     },
//     description: "Test",
//   };
// };

export const selectDestination = (state) => state.destination;
// export const selectDestination = (state) => {
//   return {
//     location: {
//       lat: 37.77583088487748,
//       lng: -122.39359148326271,
//     },
//     description: "Test",
//   };
// };

export const selectTravelTimeInformation = (state) =>
  state.travelTimeInformation;

export default navSlice.reducer;
