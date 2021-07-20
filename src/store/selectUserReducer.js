import {
  getUserInfo,
  getUserList,
  userRegister,
  userSignIn,
  userUpdate,
  updateUserProfilePic,
} from "./user/services";

export const GET_USER = "GET_USER";
export const GET_USER_LIST = "GET_USER_LIST";
export const USER_SIGN_IN = "USER_SIGN_IN";
export const UPDATE_USER_PROFILE_PIC = "UPDATE_PROFILE_PIC";
export const UPDATE_USER_PROFILE_INFO = "UPDATE_PROFILE_INFO";
export const CREATE_NEW_USER = "CREATE_NEW_USER";

const initialState = {
  user: {},
  userList: {},
};

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

export function updateUserProfileInfo(
  FirstName,
  LastName,
  DNIType,
  DNINumber,
  Address,
  Neighborhood,
  Phone,
  Height,
  Weight,
  Birthday
) {
  return async function (dispatch) {
    try {
      const authorizationToken = localStorage.getItem("token");
      const { data: dataUpdate } = await userUpdate(
        authorizationToken,
        FirstName,
        LastName,
        DNIType,
        DNINumber,
        Address,
        Neighborhood,
        Phone,
        Height,
        Weight,
        Birthday
      );
      dispatch({
        type: UPDATE_USER_PROFILE_INFO,
        payload: dataUpdate,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function createNewUser(
  name,
  lastname,
  dniType,
  dni,
  email,
  phone,
  birthday,
  password
) {
  return async function (dispatch) {
    try {
      const { data } = await userRegister(
        name,
        lastname,
        dniType,
        dni,
        email,
        phone,
        birthday,
        password
      );
      dispatch({
        type: CREATE_NEW_USER,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function updateProfilePic(file) {
  return async function (dispatch) {
    try {
      const data = new FormData();

      if (file) {
        data.append("profilePicture", file, file.name);
      }
      const authorizationToken = localStorage.getItem("token");
      const { data: dataUpdate } = await updateUserProfilePic(
        authorizationToken,
        data
      );
      dispatch({
        type: UPDATE_USER_PROFILE_PIC,
        payload: dataUpdate,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER: {
      return {
        ...state,
        userList: action.payload,
      };
    }
    case USER_SIGN_IN: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case CREATE_NEW_USER: {
      return {
        ...state,
        userList: state.userList.concat(action.payload),
      };
    }
    case UPDATE_USER_PROFILE_PIC: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case UPDATE_USER_PROFILE_INFO: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
