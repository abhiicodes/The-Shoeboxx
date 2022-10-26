import { LOGIN, SIGNUP } from "./actions";
const initState = { status: false, name: "A", token: null, user_id: "1" };

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
