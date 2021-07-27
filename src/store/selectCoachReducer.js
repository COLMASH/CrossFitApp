import Swal from "sweetalert2";
import {
  getCoachInfo,
  getCoachList,
  coachRegister,
  destroyCoach,
  coachSignIn,
  coachUpdate,
  updateCoachProfilePic,
} from "./coach/services";

export const SAVE_COACH_PROFILE_PIC = "SAVE_COACH_PROFILE_PIC";
export const UPDATE_COACH_PROFILE_INFO = "UPDATE_COACH_PROFILE_INFO";
export const GET_COACH = "GET_COACH";
export const GET_COACH_LIST = "GET_COACH_LIST";
export const CREATE_NEW_COACH = "CREATE_NEW_COACH";
export const ASSIGN_COACH_TO_DELETE = "ASSIGN_COACH_TO_DELETE";
export const REMOVE_COACH_DELETED = "REMOVE_COACH_DELETED";
export const COACH_SIGN_IN = "COACH_SIGN_IN";

export function updateImageProfilePic(file) {
  return async function (dispatch) {
    try {
      const form_data = new FormData();
      if (file) {
        form_data.append("profilePicture", file, file.name);
      }
      let authorizationToken = localStorage.getItem("token");
      const { data } = await updateCoachProfilePic(
        authorizationToken,
        form_data
      );
      dispatch({
        type: SAVE_COACH_PROFILE_PIC,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Your profile picture has been updated successfully!`,
        button: "OK",
      });
    } catch (err) {
      console.log(err.message);
      Swal.fire({
        title: "Alert",
        icon: "error",
        text: `Something went wrong!`,
        button: "OK",
      });
    }
  };
}

export function updateCoachProfileInfo(
  name,
  lastName,
  dniType,
  dni,
  phone,
  birthday
) {
  return async function (dispatch) {
    try {
      const authorizationToken = localStorage.getItem("token");
      const { data } = await coachUpdate(
        authorizationToken,
        name,
        lastName,
        dniType,
        dni,
        phone,
        birthday
      );
      dispatch({
        type: UPDATE_COACH_PROFILE_INFO,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Your personal information has been updated successfully!`,
        button: "OK",
      });
    } catch (err) {
      console.log(err.message);
      Swal.fire({
        title: "Alert",
        icon: "error",
        text: `Something went wrong!`,
        button: "OK",
      });
    }
  };
}

export function getCoach() {
  return async function (dispatch) {
    try {
      let authorizationToken = localStorage.getItem("token");
      const { data } = await getCoachInfo(authorizationToken);
      dispatch({
        type: GET_COACH,
        payload: data,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
}

export function getAllCoach() {
  return async function (dispatch) {
    try {
      const { data } = await getCoachList();
      dispatch({
        type: GET_COACH_LIST,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function createNewCoach(
  name,
  lastname,
  dniType,
  dni,
  email,
  phone,
  birthday,
  password,
  active
) {
  return async function (dispatch) {
    try {
      const { data } = await coachRegister(
        name,
        lastname,
        dniType,
        dni,
        email,
        phone,
        birthday,
        password,
        active
      );
      dispatch({
        type: CREATE_NEW_COACH,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Coach ${email} has successfully registered!`,
        button: "OK",
      });
    } catch (err) {
      console.log(err.message);
      Swal.fire({
        title: "Alert",
        icon: "error",
        text: `Something went wrong!`,
        button: "OK",
      });
    }
  };
}

export function assignCoachToDelete(id) {
  return async function (dispatch) {
    dispatch({
      type: ASSIGN_COACH_TO_DELETE,
      payload: id,
    });
  };
}

export function deleteCoach(coachToDelete) {
  return async function (dispatch) {
    try {
      const { data } = await destroyCoach(coachToDelete);
      dispatch({
        type: REMOVE_COACH_DELETED,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Coach has successfully deleted!`,
        button: "OK",
      });
    } catch (error) {
      console.log(error.message);
      Swal.fire({
        title: "Alert",
        icon: "error",
        text: `Something went wrong`,
        button: "OK",
      });
    }
  };
}

export function accessCoach(email, password, history) {
  return async function (dispatch) {
    try {
      const { data } = await coachSignIn(email, password);
      if (data.token) {
        localStorage.setItem("token", data.token);
        history.push("/MainCoach");
      }
      dispatch({
        type: COACH_SIGN_IN,
        payload: data.coach,
      });
    } catch (err) {
      console.log(err.message);
      Swal.fire({
        title: "Ooops!",
        icon: "warning",
        text: `Invalid password or email.`,
        button: "OK",
      });
    }
  };
}

const initialState = {
  coach: {},
  coachList: {},
  coachToDelete: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_COACH_PROFILE_PIC: {
      return {
        ...state,
        coach: action.payload,
      };
    }
    case GET_COACH: {
      return {
        ...state,
        coach: {
          ...action.payload,
          birthday: action.payload.birthday.substring(0, 10),
        },
      };
    }
    case GET_COACH_LIST: {
      return {
        ...state,
        coachList: action.payload,
      };
    }
    case CREATE_NEW_COACH: {
      return {
        ...state,
        coachList: state.coachList.concat(action.payload),
      };
    }
    case ASSIGN_COACH_TO_DELETE: {
      return {
        ...state,
        coachToDelete: action.payload,
      };
    }
    case REMOVE_COACH_DELETED: {
      return {
        ...state,
        coachList: state.coachList.filter(
          (coach) => coach._id !== action.payload._id
        ),
      };
    }
    case COACH_SIGN_IN: {
      return {
        ...state,
        coach: action.payload,
      };
    }
    case UPDATE_COACH_PROFILE_INFO: {
      return {
        ...state,
        coach: {
          ...action.payload,
          birthday: action.payload.birthday.substring(0, 10),
        },
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
