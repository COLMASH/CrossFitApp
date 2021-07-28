import {
  getUserInfo,
  getUserList,
  userRegister,
  userSignIn,
  userUpdate,
  updateUserProfilePic,
} from "./user/services";
import Swal from "sweetalert2";
export const GET_USER = "GET_USER";
export const GET_USER_LIST = "GET_USER_LIST";
export const USER_SIGN_IN = "USER_SIGN_IN";
export const UPDATE_USER_PROFILE_PIC = "UPDATE_PROFILE_PIC";
export const UPDATE_USER_PROFILE_INFO = "UPDATE_PROFILE_INFO";
export const CREATE_NEW_USER = "CREATE_NEW_USER";
export const ASSIGN_USER_TO_FIND = "ASSIGN_USER_TO_FIND";
export const SHOW_USER_TO_COACH = "SHOW_USER_TO_COACH";

const initialState = {
  user: {},
  userList: {},
  userToShow: {},
};

export function getUser() {
  return async function (dispatch) {
    try {
      let authorizationToken = localStorage.getItem("token");
      const { data } = await getUserInfo(authorizationToken);
      dispatch({
        type: GET_USER,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getAllUser() {
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
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Your personal information has been updated successfully! 💾`,
        button: "OK",
      });
    } catch (error) {
      Swal.fire({
        title: "Oops...",
        icon: "error",
        text: "Something went wrong",
        button: "OK",
      });
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
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `User ${name} ${lastname} has been successfully registered! Please check your email 📩`,
        button: "OK",
      });
    } catch (error) {
      Swal.fire({
        title: "Oops...",
        icon: "error",
        text: "Something went wrong",
        button: "OK",
      });
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
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `User profile picture has been updated successfully! 🙋‍♂️`,
        button: "OK",
      });
    } catch (error) {
      Swal.fire({
        title: "Oops...",
        icon: "error",
        text: "Something went wrong",
        button: "OK",
      });
      console.log(error.message);
    }
  };
}

export function assignUserToFind(userId) {
  return async function (dispatch) {
    dispatch({
      type: ASSIGN_USER_TO_FIND,
      payload: userId,
    });
  };
}

export function findUserToShow(userId) {
  return async function (dispatch) {
    dispatch({
      type: SHOW_USER_TO_COACH,
      payload: userId,
    });
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
    case GET_USER_LIST: {
      return {
        ...state,
        userList: action.payload,
      };
    }
    case GET_USER_LIST: {
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
        user: action.payload,
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
    case ASSIGN_USER_TO_FIND: {
      return {
        ...state,
        userToFind: action.payload,
      };
    }
    case SHOW_USER_TO_COACH: {
      return {
        ...state,
        userToShow: state.userList.filter(
          (user) => user._id === action.payload
        ),
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
