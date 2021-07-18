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
  };
}

const initialState = {
  coach: {},
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
        coachLoad: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
