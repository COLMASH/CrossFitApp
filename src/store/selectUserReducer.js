import {
  getUserInfo,
  getUserList,
  userRegister,
  userSignIn,
} from "./user/services";

export const GET_USER = "GET_USER";
export const GET_USER_LIST = "GET_USER_LIST";
export const USER_SIGN_IN = "USER_SIGN_IN";
export const SAVE_PROFILE_PIC = "SAVE_PROFILE_PIC";
export const UPDATE_PROFILE_INFO = "UPDATE_PROFILE_INFO";

export const SAVE_USER = "SAVE_USER";

export function getUser() {
  return async function (dispatch) {
    try {
      const { data } = await getUserInfo();
      dispatch({
        type: GET_USER,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getAllAdmin() {
  return async function (dispatch) {
    try {
      const { data } = await getUserList();
      dispatch({
        type: GET_USER_LIST,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function accessUser(email, password, history) {
  return async function (dispatch) {
    try {
      const { data } = await userSignIn(email, password);
      if (data.token) {
        localStorage.setItem("token", data.token);
        history.push("/MainUser");
      }
      dispatch({
        type: USER_SIGN_IN,
        payload: data.user,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

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

export function updateProfileInfo(userUpdate) {
  return {
    type: UPDATE_PROFILE_INFO,
    payload: userUpdate,
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case USER_SIGN_IN: {
      return {
        ...state,
        user: action.payload,
      };
    }

    case SAVE_PROFILE_PIC: {
      return {
        ...state,
        userLoad: action.payload,
      };
    }
    case UPDATE_PROFILE_INFO: {
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
