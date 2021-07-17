import {
  getAdminInfo,
  getAdminList,
  adminRegister,
  adminSignIn,
} from "./admin/services";

export const GET_ADMIN = "GET_ADMIN";
export const GET_ADMIN_LIST = "GET_ADMIN_LIST";
export const CREATE_NEW_ADMIN = "CREATE_NEW_ADMIN";
export const ADMIN_SIGN_IN = "ADMIN_SIGN_IN";
export const SAVE_ADMIN_PROFILE_PIC = "SAVE_ADMIN_PROFILE_PIC";

export function getAdmin() {
  return async function (dispatch) {
    try {
      const { data } = await getAdminInfo();
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

export function createNewAdmin() {
  return async function (dispatch) {
    try {
      const { data } = await adminRegister();
      dispatch({
        type: CREATE_NEW_ADMIN,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
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

export function saveAdminProfilePic(adminUpdate) {
  return {
    type: SAVE_ADMIN_PROFILE_PIC,
    payload: adminUpdate,
  };
}

const initialState = {
  admin: {},
  adminList: {},
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
    case SAVE_ADMIN_PROFILE_PIC: {
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
