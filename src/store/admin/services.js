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
