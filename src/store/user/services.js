import axios from "axios";

export function userSignIn(email, password, typeUser) {
  return axios({
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
    url: "http://localhost:8000/user/signin",
    data: {
      email,
      password,
      typeUser,
    },
  })
    .then((response) => response)
    .catch((error) => error);
}

export function getUserInfo(id) {
  return axios({
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
    url: `http://localhost:8000/user/${id}`,
  })
    .then((response) => response)
    .catch((error) => error);
}
