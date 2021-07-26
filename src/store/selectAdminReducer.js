import Swal from "sweetalert2";
import {
  getAdminInfo,
  getAdminList,
  adminRegister,
  adminSignIn,
  destroyAdmin,
  updateAdminProfilePic,
  adminUpdate,
  activityRegister,
  getActivityList,
  destroyActivity,
  modalityRegister,
  getModalityList,
  destroyModality,
  exerciseRegister,
  getExerciseList,
  destroyExercise,
  planRegister,
  getPlanList,
  destroyPlan,
  registrateNews,
  getNewsList,
  destroyNews,
} from "./admin/services";

export const GET_ADMIN = "GET_ADMIN";
export const GET_ADMIN_LIST = "GET_ADMIN_LIST";
export const CREATE_NEW_ADMIN = "CREATE_NEW_ADMIN";
export const ADMIN_SIGN_IN = "ADMIN_SIGN_IN";
export const ASSIGN_ADMIN_TO_DELETE = "ASSIGN_ADMIN_TO_DELETE";
export const REMOVE_ADMIN_DELETED = "REMOVE_ADMIN_DELETED";
export const SAVE_ADMIN_PROFILE_PIC = "SAVE_ADMIN_PROFILE_PIC";
export const UPDATE_ADMIN_PROFILE_INFO = "UPDATE_ADMIN_PROFILE_INFO";
export const CREATE_NEW_ACTIVITY = "CREATE_NEW_ACTIVITY";
export const GET_ACTIVITY_LIST = "GET_ACTIVITY_LIST";
export const ASSIGN_ACTIVITY_TO_DELETE = "ASSIGN_ACTIVITY_TO_DELETE";
export const REMOVE_ACTIVITY_DELETED = "REMOVE_ACTIVITY_DELETED";
export const CREATE_NEW_MODALITY = "CREATE_NEW_MODALITY";
export const GET_MODALITY_LIST = "GET_MODALITY_LIST";
export const ASSIGN_MODALITY_TO_DELETE = "ASSIGN_MODALITY_TO_DELETE";
export const REMOVE_MODALITY_DELETED = "REMOVE_MODALITY_DELETED";
export const CREATE_NEW_EXERCISE = "CREATE_NEW_EXERCISE";
export const GET_EXERCISE_LIST = "GET_EXERCISE_LIST";
export const ASSIGN_EXERCISE_TO_DELETE = "ASSIGN_EXERCISE_TO_DELETE";
export const REMOVE_EXERCISE_DELETED = "REMOVE_EXERCISE_DELETED";
export const CREATE_NEW_PLAN = "CREATE_NEW_PLAN";
export const GET_PLAN_LIST = "GET_PLAN_LIST";
export const ASSIGN_PLAN_TO_DELETE = "ASSIGN_PLAN_TO_DELETE";
export const REMOVE_PLAN_DELETED = "REMOVE_PLAN_DELETED";
export const CREATE_NEW = "CREATE_NEW";
export const GET_NEWS_LIST = "GET_NEWS_LIST";
export const ASSIGN_NEW_TO_DELETE = "ASSIGN_NEW_TO_DELETE";
export const REMOVE_NEW_DELETED = "REMOVE_NEW_DELETED";

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
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Admin has successfully deleted!`,
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
export function createNewActivity(activity) {
  return async function (dispatch) {
    try {
      const { data } = await activityRegister(activity);
      dispatch({
        type: CREATE_NEW_ACTIVITY,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Activity has successfully created!`,
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
export function getAllActivities() {
  return async function (dispatch) {
    try {
      const { data } = await getActivityList();
      dispatch({
        type: GET_ACTIVITY_LIST,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}
export function assignActivityToDelete(id) {
  return async function (dispatch) {
    dispatch({
      type: ASSIGN_ACTIVITY_TO_DELETE,
      payload: id,
    });
  };
}
export function deleteActivity(activityToDelete) {
  return async function (dispatch) {
    try {
      const { data } = await destroyActivity(activityToDelete);
      dispatch({
        type: REMOVE_ACTIVITY_DELETED,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Activity has successfully deleted!`,
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
export function createNewModality(modality) {
  return async function (dispatch) {
    try {
      const { data } = await modalityRegister(modality);
      dispatch({
        type: CREATE_NEW_MODALITY,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Modality has successfully created!`,
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
export function getAllModalities() {
  return async function (dispatch) {
    try {
      const { data } = await getModalityList();
      dispatch({
        type: GET_MODALITY_LIST,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}
export function assignModalityToDelete(id) {
  return async function (dispatch) {
    dispatch({
      type: ASSIGN_MODALITY_TO_DELETE,
      payload: id,
    });
  };
}
export function deleteModality(modalityToDelete) {
  return async function (dispatch) {
    try {
      const { data } = await destroyModality(modalityToDelete);
      dispatch({
        type: REMOVE_MODALITY_DELETED,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Modality has successfully deleted!`,
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
export function createNewExercise(exercise, unitMeasurement, video) {
  return async function (dispatch) {
    try {
      const { data } = await exerciseRegister(exercise, unitMeasurement, video);
      dispatch({
        type: CREATE_NEW_EXERCISE,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Exercise has successfully created!`,
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
export function getAllExercises() {
  return async function (dispatch) {
    try {
      const { data } = await getExerciseList();
      dispatch({
        type: GET_EXERCISE_LIST,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}
export function assignExerciseToDelete(id) {
  return async function (dispatch) {
    dispatch({
      type: ASSIGN_EXERCISE_TO_DELETE,
      payload: id,
    });
  };
}
export function deleteExercise(exerciseToDelete) {
  return async function (dispatch) {
    try {
      const { data } = await destroyExercise(exerciseToDelete);
      dispatch({
        type: REMOVE_EXERCISE_DELETED,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Exercise has successfully deleted!`,
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
export function createNewPlan(plan, validity, credits, price) {
  return async function (dispatch) {
    try {
      const { data } = await planRegister(plan, validity, credits, price);
      dispatch({
        type: CREATE_NEW_PLAN,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Plan has successfully created!`,
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
export function getAllPlans() {
  return async function (dispatch) {
    try {
      const { data } = await getPlanList();
      dispatch({
        type: GET_PLAN_LIST,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function assignPlanToDelete(id) {
  return async function (dispatch) {
    dispatch({
      type: ASSIGN_PLAN_TO_DELETE,
      payload: id,
    });
  };
}
export function deletePlan(planToDelete) {
  return async function (dispatch) {
    try {
      const { data } = await destroyPlan(planToDelete);
      dispatch({
        type: REMOVE_PLAN_DELETED,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Plan has successfully deleted!`,
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

export function uploadNews(file) {
  return async function (dispatch) {
    try {
      const form_data = new FormData();
      if (file) {
        form_data.append("news", file, file.name);
      }
      const { data } = await registrateNews(form_data);
      dispatch({
        type: CREATE_NEW,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Your news list has been updated successfully!`,
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

export function getAllNews() {
  return async function (dispatch) {
    try {
      const { data } = await getNewsList();
      dispatch({
        type: GET_NEWS_LIST,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function assignNewsToDelete(id) {
  return async function (dispatch) {
    dispatch({
      type: ASSIGN_NEW_TO_DELETE,
      payload: id,
    });
  };
}

export function deleteNews(newsToDelete) {
  return async function (dispatch) {
    try {
      const { data } = await destroyNews(newsToDelete);
      dispatch({
        type: REMOVE_NEW_DELETED,
        payload: data,
      });
      Swal.fire({
        title: "Confirmation",
        icon: "success",
        text: `Image has successfully deleted!`,
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
  activityList: {},
  activityToDelete: "",
  modalityList: {},
  modalityToDelete: "",
  exerciseList: {},
  exerciseToDelete: "",
  planList: {},
  planListToDelete: "",
  newsList: {},
  newsToDelete: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ADMIN: {
      return {
        ...state,
        admin: {
          ...action.payload,
          birthday: action.payload.birthday.substring(0, 10),
        },
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
        admin: {
          ...action.payload,
          birthday: action.payload.birthday.substring(0, 10),
        },
      };
    }
    case CREATE_NEW_ACTIVITY: {
      return {
        ...state,
        activityList: state.activityList.concat(action.payload),
      };
    }
    case GET_ACTIVITY_LIST: {
      return {
        ...state,
        activityList: action.payload,
      };
    }
    case ASSIGN_ACTIVITY_TO_DELETE: {
      return {
        ...state,
        activityToDelete: action.payload,
      };
    }
    case REMOVE_ACTIVITY_DELETED: {
      return {
        ...state,
        activityList: state.activityList.filter(
          (activity) => activity._id !== action.payload._id
        ),
      };
    }
    case CREATE_NEW_MODALITY: {
      return {
        ...state,
        modalityList: state.modalityList.concat(action.payload),
      };
    }
    case GET_MODALITY_LIST: {
      return {
        ...state,
        modalityList: action.payload,
      };
    }
    case ASSIGN_MODALITY_TO_DELETE: {
      return {
        ...state,
        modalityToDelete: action.payload,
      };
    }
    case REMOVE_MODALITY_DELETED: {
      return {
        ...state,
        modalityList: state.modalityList.filter(
          (modality) => modality._id !== action.payload._id
        ),
      };
    }
    case CREATE_NEW_EXERCISE: {
      return {
        ...state,
        exerciseList: state.exerciseList.concat(action.payload),
      };
    }
    case GET_EXERCISE_LIST: {
      return {
        ...state,
        exerciseList: action.payload,
      };
    }
    case ASSIGN_EXERCISE_TO_DELETE: {
      return {
        ...state,
        exerciseToDelete: action.payload,
      };
    }
    case REMOVE_EXERCISE_DELETED: {
      return {
        ...state,
        exerciseList: state.exerciseList.filter(
          (exercise) => exercise._id !== action.payload._id
        ),
      };
    }
    case CREATE_NEW_PLAN: {
      return {
        ...state,
        planList: state.planList.concat(action.payload),
      };
    }
    case GET_PLAN_LIST: {
      return {
        ...state,
        planList: action.payload,
      };
    }

    case ASSIGN_PLAN_TO_DELETE: {
      return {
        ...state,
        planToDelete: action.payload,
      };
    }
    case REMOVE_PLAN_DELETED: {
      return {
        ...state,
        planList: state.planList.filter(
          (plan) => plan._id !== action.payload._id
        ),
      };
    }
    case CREATE_NEW: {
      return {
        ...state,
        newsList: state.newsList.concat(action.payload),
      };
    }
    case GET_NEWS_LIST: {
      return {
        ...state,
        newsList: action.payload,
      };
    }
    case REMOVE_NEW_DELETED: {
      return {
        ...state,
        newsList: state.newsList.filter(
          (news) => news._id !== action.payload._id
        ),
      };
    }
    case ASSIGN_NEW_TO_DELETE: {
      return {
        ...state,
        newsToDelete: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
