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
    url: "/coaches/coachInfo",
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
