import { LOGIN, SIGNUP } from "./actions";
const initState = { status: false, name: "A", token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYS5jb20iLCJfaWQiOiI2MzU3OWY4YzIyN2Q4YzI5OGNjNzI4YWUiLCJpYXQiOjE2NjY3MDQ0ODd9.VKETOTkcdsaM5VLyubO4c49PdmYDfKHaf1Mlk19cLY0", user_id: "1" };

export const authReducer = (state = initState, { type, payload }) => {
  //
  switch (type) {
    case LOGIN:
      return {
        ...state,
        status: true,
        token: payload.token,
        name: payload.name,
      };
    case SIGNUP:
      return { ...state, user_id: payload };

    default:
      return state;
  }
};
