import { userBox } from "../data";

export const SELECT_USER = "SELECT_USER";

export function selectUser(email) {
  return {
    type: SELECT_USER,
    payload: email,
  };
}

const initialState = {
  user: userBox,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_USER: {
      return {
        ...state,
        user: userBox.filter((u) => u.email === action.payload)[0],
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
