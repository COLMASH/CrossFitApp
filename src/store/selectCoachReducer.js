import { coach } from "../data";

export const SELECT_COACH = "SELECT_COACH";

export function selectCoach(email) {
  return {
    type: SELECT_COACH,
    payload: email,
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
    default: {
      return state;
    }
  }
}

export default reducer;
