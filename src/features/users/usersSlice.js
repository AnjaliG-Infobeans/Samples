import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { fname: "Mark", lname: "Otto", username: "mdo" }, 
    { fname: "Jacob", lname: "Jacob", username: "fat" },
  ],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, {payload}) => {
      state.users.push(payload);
    },
    deleteUser: (state, {payload}) => {
      state.users = state.users.filter((user) =>  user.username !== payload);
    },
  },
});

export const { addUser, deleteUser } = usersSlice.actions;

export const selectUsers = (state) => state.users.users;

export default usersSlice.reducer;
