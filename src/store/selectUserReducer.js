import { userBox } from "../data";

export const SELECT_USER = "SELECT_USER";
export const SAVE_USER = "SAVE_USER";

export function selectUser(email) {
  return {
    type: SELECT_USER,
    payload: email,
  };
}

export function saveUser(user) {
  return {
    type: SAVE_USER,
    payload: user,
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
    case SAVE_USER: {
      return {
        ...state,
        userLoad: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
