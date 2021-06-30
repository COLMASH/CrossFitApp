import { admin } from "../data";

export const SELECT_ADMIN = "SELECT_ADMIN";

export function selectAdmin(email) {
  return {
    type: SELECT_ADMIN,
    payload: email,
  };
}

const initialState = {
  admin,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_ADMIN: {
      return {
        ...state,
        admin: admin.filter((u) => u.email === action.payload)[0],
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
