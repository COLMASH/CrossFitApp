import axios from "axios";

export async function getUserList() {
  return await axios({
    method: "GET",
    baseURL: "http://localhost:8000",
    url: "/user/userList",
  });
}

export async function userSignIn(email, password) {
  return await axios({
    method: "POST",
    baseURL: "http://localhost:8000",
    url: "/user/signin",
    data: {
      email,
      password,
    },
  });
}

export async function getUserInfo(token) {
  return await axios({
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    url: `http://localhost:8000/user/userInfo`,
  });
}

export async function updateUserProfilePic(token, data) {
  return await axios({
    method: "PUT",
    baseURL: "http://localhost:8000",
    url: "/user/userProfilePic",
    data,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function userRegister(
  name,
  lastname,
  email,
  address,
  phone,
  password
) {
  try {
    return await axios({
      method: "POST",
      baseURL: "http://localhost:8000",
      url: "/user/signup",
      data: {
        name,
        lastname,
        email,
        address,
        phone,
        password,
      },
    });
  } catch {
    console.log("hola");
  }
}

export async function userUpdate(
  token,
  name,
  lastname,
  dniType,
  dni,
  address,
  neighborhood,
  phone,
  height,
  weight,
  birthday
) {
  return await axios({
    method: "PUT",
    baseURL: "http://localhost:8000",
    url: "/user/userUpdate",
    data: {
      name,
      lastname,
      dniType,
      dni,
      address,
      neighborhood,
      phone,
      height,
      weight,
      birthday,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function userSuscribe(token, wodId) {
  return await axios({
    method: "PUT",
    url: "http://localhost:8000/user/userSuscribeWods",
    data: {
      wodId,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function getUserWods(token) {
  return await axios({
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    url: `http://localhost:8000/user/userWodsList`,
  });
}
