
export const SAVE_COACH = "SAVE_COACH";
export const SAVE_COACH_PROFILE_PIC = "SAVE_COACH_PROFILE_PIC";

export function saveCoach(coach) {
  return {
    type: SAVE_COACH,
    payload: coach,
  };
}

export function saveCoachProfilePic(coachUpdate) {
  return {
    type: SAVE_COACH_PROFILE_PIC,
    payload: coachUpdate,

import {
  getCoachInfo,
  getCoachList,
  coachRegister,
  coachSignIn,
} from "./coach/services";

export const GET_COACH = "GET_COACH";
export const GET_COACH_LIST = "GET_COACH_LIST";
export const CREATE_NEW_COACH = "CREATE_NEW_COACH";
export const COACH_SIGN_IN = "COACH_SIGN_IN";

export function getCoach() {
  return async function (dispatch) {
    try {
      const { data } = await getCoachInfo();
      dispatch({
        type: GET_COACH,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
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

export function createNewCoach() {
  return async function (dispatch) {
    try {
      const { data } = await coachRegister();
      dispatch({
        type: CREATE_NEW_COACH,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function accessCoach(email, password, history) {
  return async function (dispatch) {
    try {
      const { data } = await coachSignIn(email, password);
      if (data.token) {
        localStorage.setItem("token", data.token);
        console.log("aqui");
        history.push("/MainCoach");
      }
      dispatch({
        type: COACH_SIGN_IN,
        payload: data.coach,
      });
    } catch (error) {
      console.log(error.message);
    }

  };
}

const initialState = {
  coach: {},
  coachList: {},

};

function reducer(state = initialState, action) {
  switch (action.type) {

    case SAVE_COACH: {
      return {
        ...state,
        coachLoad: action.payload,
      };
    }
      
    case SAVE_COACH_PROFILE_PIC: {
      return {
        ...state,
        coach: action.payload,
      };
    }
      
      

    case GET_COACH: {
      return {
        ...state,
        coach: action.payload,
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
    case COACH_SIGN_IN: {

      return {
        ...state,
        coach: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
