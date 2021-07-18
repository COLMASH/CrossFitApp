import axios from "axios";

export async function getUserInfo(token) {
  return await axios({
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    baseURL: "http://localhost:8000",
    url: "/user/userInfo",
  });
}

export async function getUserList() {
  return await axios({
    method: "GET",
    baseURL: "http://localhost:8000",
    url: "/user/userInfo",
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
  } catch (error) {
    console.log(error.message);
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
    method: "POST",
    baseURL: "http://localhost:8000",
    url: "/user/signup",
    data: {
      name,
      lastname,
      dniType,
      dni,
      email,
      address,
      neighborhood,
      phone,
      height,
      weight,
      birthday,
      password,
    },
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

export async function updateProfilePic(token, data) {
  try {
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
  } catch (error) {
    console.log(error.message);
  }
}
