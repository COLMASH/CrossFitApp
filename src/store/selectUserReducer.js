export const SAVE_USER = "SAVE_USER";
export const SAVE_PROFILE_PIC = "SAVE_PROFILE_PIC";

export function saveUser(user) {
  return {
    type: SAVE_USER,
    payload: user,
  };
}

export function saveProfilePic(userUpdate) {
  return {
    type: SAVE_PROFILE_PIC,
    payload: userUpdate,
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
    case SAVE_PROFILE_PIC: {
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
