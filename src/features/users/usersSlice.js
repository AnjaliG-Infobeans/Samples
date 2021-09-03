import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
      {
          fname: "Mark", lname: "Otto", username: "mdo"
      }, {
          fname: "Jacob", lname: "Jacob", username: "fat"
      },
  ],
  status: 'idle',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    increment: (state) => {

      state.value += 1;
    },
  },
});

export const { increment } = usersSlice.actions;

export const selectUsers = (state) => state.users.users;

export default usersSlice.reducer;
