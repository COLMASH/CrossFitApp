import axios from "axios";

export async function getCoachInfo(token) {
  return await axios({
    method: "GET",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/coaches/coachInfo",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getCoachList() {
  return await axios({
    method: "GET",
    baseURL: process.env.REACT_APP_SERVER_URL,
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
    baseURL: process.env.REACT_APP_SERVER_URL,
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
    baseURL: process.env.REACT_APP_SERVER_URL,
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
    baseURL: process.env.REACT_APP_SERVER_URL,
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
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/coaches/signin",
    data: {
      email,
      password,
    },
  });
}

export async function updateCoachProfilePic(token, data) {
	return await axios({
		method: "PUT",
		baseURL: process.env.REACT_APP_SERVER_URL,
		url: "/coaches/coachProfilePic",
		data,
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "multipart/form-data",
		},
	});
}
