import axios from "axios";

export function userSignIn(email, password) {
  return axios({
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
    baseURL: "http://localhost:8000",
    url: "/user/signin",
    data: {
      email,
      password,
    },
  })
    .then((response) => response)
    .catch((error) => error);
}

export function getUserInfo(token) {
  return axios({
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${token}`,
    },
    url: `http://localhost:8000/user/userInfo`,
  })
    .then((response) => response)
    .catch((error) => error);
}
