import axios from "axios";

export async function getCoachInfo(token) {
  return await axios({
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    baseURL: "http://localhost:8000",
    url: "/coaches/coachInfo",
  });
}

export async function getCoachList() {
  return await axios({
    method: "GET",
    baseURL: "http://localhost:8000",
    url: "/coaches/coachList",
  });
}

export async function coachRegister(
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
  return await axios({
    method: "POST",
    baseURL: "http://localhost:8000",
    url: "/coaches/create",
    data: {
      name,
      lastname,
      dniType,
      dni,
      email,
      phone,
      birthday,
      password,
      active,
    },
  });
}

export async function destroyCoach(coachId) {
  return await axios({
    method: "DELETE",
    baseURL: "http://localhost:8000",
    url: "/coaches/coachDelete",
    data: { coachId },
  });
}

export async function coachUpdate(
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
      url: "/coaches/coachUpdate",
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

export async function coachSignIn(email, password) {
  return await axios({
    method: "POST",
    baseURL: "http://localhost:8000",
    url: "/coaches/signin",
    data: {
      email,
      password,
    },
  });
}

export async function updateCoachProfilePic(token, data) {
  try {
    return await axios({
      method: "PUT",
      baseURL: "http://localhost:8000",
      url: "/coaches/coachProfilePic",
      data,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    console.log(error.message);
  }
}
