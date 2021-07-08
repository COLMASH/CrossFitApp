export const SAVE_USER = "SAVE_USER";

export function saveUser(user) {
  return {
    type: SAVE_USER,
    payload: user,
  };
}

const initialState = {
  user: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
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
