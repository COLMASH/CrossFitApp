import axios from "axios";

export async function getAdminInfo(token) {
  return await axios({
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    baseURL: "http://localhost:8000",
    url: "/admin/adminInfo",
  });
}

export async function getAdminList() {
  return await axios({
    method: "GET",
    baseURL: "http://localhost:8000",
    url: "/admin/adminList",
  });
}

export async function adminRegister(
  name,
  lastname,
  dniType,
  dni,
  email,
  phone,
  birthday,
  password
) {
  return await axios({
    method: "POST",
    baseURL: "http://localhost:8000",
    url: "/admin/create",
    data: {
      name,
      lastname,
      dniType,
      dni,
      email,
      phone,
      birthday,
      password,
    },
  });
}

export async function adminSignIn(email, password) {
  return await axios({
    method: "POST",
    baseURL: "http://localhost:8000",
    url: "/admin/signin",
    data: {
      email,
      password,
    },
  });
}

export async function destroyAdmin(adminId) {
  return await axios({
    method: "DELETE",
    baseURL: "http://localhost:8000",
    url: "/admin/adminDelete",
    data: { adminId },
  });
}

export async function updateAdminProfilePic(token, data) {
  return await axios({
    method: "PUT",
    baseURL: "http://localhost:8000",
    url: "/admin/adminProfilePic",
    data,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function adminUpdate(
  token,
  name,
  lastname,
  dniType,
  dni,
  phone,
  birthday
) {
  return await axios({
    method: "PUT",
    baseURL: "http://localhost:8000",
    url: "/admin/adminUpdate",
    data: {
      name,
      lastname,
      dniType,
      dni,
      phone,
      birthday,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function activityRegister(activity) {
  return await axios({
    method: "POST",
    baseURL: "http://localhost:8000",
    url: "/activity/create",
    data: {
      activity,
    },
  });
}

export async function getActivityList() {
  return await axios({
    method: "GET",
    baseURL: "http://localhost:8000",
    url: "/activity/activityList",
  });
}

export async function destroyActivity(activityId) {
  return await axios({
    method: "DELETE",
    baseURL: "http://localhost:8000",
    url: "/activity/activityDelete",
    data: { activityId },
  });
}

export async function modalityRegister(modality) {
  return await axios({
    method: "POST",
    baseURL: "http://localhost:8000",
    url: "/modality/create",
    data: {
      modality,
    },
  });
}

export async function getModalityList() {
  return await axios({
    method: "GET",
    baseURL: "http://localhost:8000",
    url: "/modality/modalityList",
  });
}

export async function destroyModality(modalityId) {
  return await axios({
    method: "DELETE",
    baseURL: "http://localhost:8000",
    url: "/modality/modalityDelete",
    data: { modalityId },
  });
}

export async function exerciseRegister(exercise, unitMeasurement, video) {
  return await axios({
    method: "POST",
    baseURL: "http://localhost:8000",
    url: "/exercise/create",
    data: {
      exercise,
      unitMeasurement,
      video,
    },
  });
}
export async function getExerciseList() {
  return await axios({
    method: "GET",
    baseURL: "http://localhost:8000",
    url: "/exercise/exerciseList",
  });
}

export async function destroyExercise(exerciseId) {
  return await axios({
    method: "DELETE",
    baseURL: "http://localhost:8000",
    url: "/exercise/exerciseDelete",
    data: { exerciseId },
  });
}

export async function planRegister(plan, validity, credits, price) {
  return await axios({
    method: "POST",
    baseURL: "http://localhost:8000",
    url: "/plan/create",
    data: {
      plan,
      validity,
      credits,
      price,
    },
  });
}

export async function getPlanList() {
  return await axios({
    method: "GET",
    baseURL: "http://localhost:8000",
    url: "/plan/planList",
  });
}

export async function destroyPlan(planId) {
  return await axios({
    method: "DELETE",
    baseURL: "http://localhost:8000",
    url: "/plan/planDelete",
    data: { planId },
  });
}
