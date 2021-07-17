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
    url: "/admin/adminInfo",
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
export async function updateProfilePic(token, data) {
  try {
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
  } catch (error) {
    console.log(error.message);
  }
}
