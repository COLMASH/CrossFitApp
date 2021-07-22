import Swal from "sweetalert2";
import {
  getAdminInfo,
  getAdminList,
  adminRegister,
  adminSignIn,
  destroyAdmin,
  updateAdminProfilePic,
  adminUpdate,
} from "./admin/services";

export const GET_ADMIN = "GET_ADMIN";
export const GET_ADMIN_LIST = "GET_ADMIN_LIST";
export const CREATE_NEW_ADMIN = "CREATE_NEW_ADMIN";
export const ADMIN_SIGN_IN = "ADMIN_SIGN_IN";
export const ASSIGN_ADMIN_TO_DELETE = "ASSIGN_ADMIN_TO_DELETE";
export const REMOVE_ADMIN_DELETED = "REMOVE_ADMIN_DELETED";
export const SAVE_ADMIN_PROFILE_PIC = "SAVE_ADMIN_PROFILE_PIC";
export const UPDATE_ADMIN_PROFILE_INFO = "UPDATE_ADMIN_PROFILE_INFO";

export function getAdmin() {
  return async function (dispatch) {
    try {
      let authorizationToken = localStorage.getItem("token");
      const { data } = await getAdminInfo(authorizationToken);
      dispatch({
        type: GET_ADMIN,
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
      const { data } = await getAdminList();
      dispatch({
        type: GET_ADMIN_LIST,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function createNewAdmin(
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
      const { data } = await adminRegister(
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
        type: CREATE_NEW_ADMIN,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Admin ${email} has successfully registered!`,
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

export function accessAdmin(email, password, history) {
  return async function (dispatch) {
    try {
      const { data } = await adminSignIn(email, password);
      if (data.token) {
        localStorage.setItem("token", data.token);
        history.push("/MainAdmin");
      }
      dispatch({
        type: ADMIN_SIGN_IN,
        payload: data.admin,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function assignAdminToDelete(id) {
  return async function (dispatch) {
    dispatch({
      type: ASSIGN_ADMIN_TO_DELETE,
      payload: id,
    });
  };
}

export function deleteAdmin(adminToDelete) {
  return async function (dispatch) {
    try {
      const { data } = await destroyAdmin(adminToDelete);
      dispatch({
        type: REMOVE_ADMIN_DELETED,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function updateImage(file) {
  return async function (dispatch) {
    try {
      const form_data = new FormData();
      if (file) {
        form_data.append("profilePicture", file, file.name);
      }
      let authorizationToken = localStorage.getItem("token");
      const { data } = await updateAdminProfilePic(
        authorizationToken,
        form_data
      );
      dispatch({
        type: SAVE_ADMIN_PROFILE_PIC,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Your profile picture has been updated successfully!`,
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

export function updateAdminProfileInfo(
  name,
  lastname,
  dniType,
  dni,
  phone,
  birthday
) {
  return async function (dispatch) {
    try {
      const authorizationToken = localStorage.getItem("token");
      const { data } = await adminUpdate(
        authorizationToken,
        name,
        lastname,
        dniType,
        dni,
        phone,
        birthday
      );
      dispatch({
        type: UPDATE_ADMIN_PROFILE_INFO,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Your information has been updated successfully!`,
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

const initialState = {
  admin: {},
  adminList: {},
  adminToDelete: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ADMIN: {
      return {
        ...state,
        admin: action.payload,
      };
    }
    case GET_ADMIN_LIST: {
      return {
        ...state,
        adminList: action.payload,
      };
    }
    case CREATE_NEW_ADMIN: {
      return {
        ...state,
        adminList: state.adminList.concat(action.payload),
      };
    }
    case ADMIN_SIGN_IN: {
      return {
        ...state,
        admin: action.payload,
      };
    }
    case ASSIGN_ADMIN_TO_DELETE: {
      return {
        ...state,
        adminToDelete: action.payload,
      };
    }
    case REMOVE_ADMIN_DELETED: {
      return {
        ...state,
        adminList: state.adminList.filter(
          (admin) => admin._id !== action.payload._id
        ),
      };
    }
    case SAVE_ADMIN_PROFILE_PIC: {
      return {
        ...state,
        admin: action.payload,
      };
    }
    case UPDATE_ADMIN_PROFILE_INFO: {
      return {
        ...state,
        admin: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}

export default reducer;
