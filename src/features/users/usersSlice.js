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
    editCurrUser: (state, {payload}) => {
      state.users.find((user, i) => {
      if (user.username === payload.username) {
        state.users[i] = payload;
        return true;
      }
      return null;
    });
    },
    deleteUser: (state, {payload}) => {
      state.users = state.users.filter((user) =>  user.username !== payload);
    },
  },
});

export const { addUser, deleteUser, editCurrUser } = usersSlice.actions;

// export const editCurrUser = (amount) => (dispatch, getState) => {
//   const currentUser = selectCount(getState());
//   if (currentUser % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export const selectUsers = (state) => state.users.users;

export default usersSlice.reducer;
