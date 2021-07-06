import { coach } from "../data";

export const SELECT_COACH = "SELECT_COACH";
export const SAVE_COACH = "SAVE_COACH";

export function selectCoach(email) {
  return {
    type: SELECT_COACH,
    payload: email,
  };
}

export function saveCoach(coach) {
  return {
    type: SAVE_COACH,
    payload: coach,
  };
}

const initialState = {
  coach,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_COACH: {
      return {
        ...state,
        coach: coach.filter((u) => u.email === action.payload)[0],
      };
    }
    case SAVE_COACH: {
      return {
        ...state,
        coachLoad: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
