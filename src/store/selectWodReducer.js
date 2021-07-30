import {
  getWodList,
  getWodInfo,
  wodCreation,
  wodUpdate,
  destroyWod,
} from "./Wod/services";
import Swal from "sweetalert2";
export const GET_WOD = "GET_WOD";
export const GET_WOD_LIST = "GET_WOD_LIST";
export const UPDATE_WOD_INFO = "UPDATE_WOD_INFO";
export const CREATE_NEW_WOD = "CREATE_NEW_WOD";
export const REMOVE_WOD_DELETED = "REMOVE_WOD_DELETED";
export const ASSIGN_WOD_TO_DELETE = "ASSIGN_WOD_TO_DELETE";
export const ASSIGN_WOD_TO_UPDATE = "ASSIGN_WOD_TO_UPDATE";
export const CLEAR_WOD_TO_UPDATE = "CLEAR_WOD_TO_UPDATE";
export const CLEAR_WOD_TO_DELETE = "CLEAR_WOD_TO_DELETE";

const initialState = {
  wod: {},
  wodList: {},
  wodToDelete: "",
  wodToUpdate: "",
};

export function getWod() {
  return async function (dispatch) {
    try {
      let authorizationToken = localStorage.getItem("token");
      const { data } = await getWodInfo(authorizationToken);
      dispatch({
        type: GET_WOD,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getAllWod() {
  return async function (dispatch) {
    try {
      const { data } = await getWodList();
      dispatch({
        type: GET_WOD_LIST,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function assignWodToUpdate(id) {
  return async function (dispatch) {
    try {
      dispatch({
        type: ASSIGN_WOD_TO_UPDATE,
        payload: id,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function clearWodToUpdate() {
  return async function (dispatch) {
    try {
      dispatch({
        type: CLEAR_WOD_TO_UPDATE,
        payload: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}
export function clearWodToDelete() {
  return async function (dispatch) {
    try {
      dispatch({
        type: CLEAR_WOD_TO_DELETE,
        payload: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function updateWodInfo(
  wodToUpdate,
  activity,
  modality,
  exercice1,
  exercice2,
  exercice3,
  repetition1,
  repetition2,
  repetition3,
  capacity,
  startDate,
  endDate,
  notes
) {
  return async function (dispatch) {
    try {
      const { data: dataUpdate } = await wodUpdate(
        wodToUpdate,
        activity,
        modality,
        exercice1,
        exercice2,
        exercice3,
        repetition1,
        repetition2,
        repetition3,
        capacity,
        startDate,
        endDate,
        notes
      );
      dispatch({
        type: UPDATE_WOD_INFO,
        payload: dataUpdate,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Your Wod information has been updated successfully! 💾`,
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

export function createNewWod(
  activity,
  modality,
  exercice1,
  exercice2,
  exercice3,
  repetition1,
  repetition2,
  repetition3,
  capacity,
  startDate,
  endDate,
  notes
) {
  return async function (dispatch) {
    try {
      const authorizationToken = localStorage.getItem("token");
      const { data } = await wodCreation(
        authorizationToken,
        activity,
        modality,
        exercice1,
        exercice2,
        exercice3,
        repetition1,
        repetition2,
        repetition3,
        capacity,
        startDate,
        endDate,
        notes
      );
      dispatch({
        type: CREATE_NEW_WOD,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Your Wod has been successfully created! 🤸‍♀️`,
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

export function assignWodToDelete(id) {
  return async function (dispatch) {
    try {
      dispatch({
        type: ASSIGN_WOD_TO_DELETE,
        payload: id,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function deleteWod(wodToDelete) {
  return async function (dispatch) {
    try {
      const { data } = await destroyWod(wodToDelete);
      dispatch({
        type: REMOVE_WOD_DELETED,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Wod has been successfully removed! 🗑`,
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

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_WOD: {
      return {
        ...state,
        wod: action.payload,
      };
    }
    case GET_WOD_LIST: {
      return {
        ...state,
        wod: action.payload,
      };
    }
    case CREATE_NEW_WOD: {
      return {
        ...state,
        wod: action.payload,
      };
    }
    case UPDATE_WOD_INFO: {
      return {
        ...state,
        wod: action.payload,
      };
    }
    case ASSIGN_WOD_TO_DELETE: {
      return {
        ...state,
        wodToDelete: action.payload,
      };
    }
    case ASSIGN_WOD_TO_UPDATE: {
      return {
        ...state,
        wodToUpdate: action.payload,
      };
    }
    case CLEAR_WOD_TO_UPDATE: {
      return {
        ...state,
        wodToUpdate: action.payload,
      };
    }
    case CLEAR_WOD_TO_DELETE: {
      return {
        ...state,
        wodToDelete: action.payload,
      };
    }
    case REMOVE_WOD_DELETED: {
      return {
        ...state,
        wod: state.wod.filter((wod) => wod._id !== action.payload._id),
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
