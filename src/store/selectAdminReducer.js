import { admin } from "../data";

export const SELECT_ADMIN = "SELECT_ADMIN";
export const SAVE_ADMIN = "SAVE_ADMIN";

export function selectAdmin(email) {
  return {
    type: SELECT_ADMIN,
    payload: email,
  };
}
export function saveAdmin(admin) {
  return {
    type: SAVE_ADMIN,
    payload: admin,
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
    case SAVE_ADMIN: {
      return {
        ...state,
        adminLoad: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
