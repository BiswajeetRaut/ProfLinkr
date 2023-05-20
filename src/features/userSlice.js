import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    profile:false,
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    profchange:(state,action)=>{
      state.profile=action.payload.state;
    },
  },
});

export const { login, logout,profchange } = userSlice.actions;

//Selectors
export const selectUser = (state) => state.user.user;
export const selectProfile = (state)=> state.user.profile;
export default userSlice.reducer;
