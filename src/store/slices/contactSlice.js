import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  allContacts: [],
};
export const cartSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    createContact: (state, action) => {
      state.allContacts = [...state.allContacts, action.payload];
      console.log(state.allContacts, "contact");
    },
  },
});

export const { createContact } = cartSlice.actions;
export default cartSlice.reducer;
