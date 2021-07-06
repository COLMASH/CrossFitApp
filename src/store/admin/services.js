import axios from "axios";

export async function adminSignIn(email, password) {
  try {
    return await axios({
      method: "POST",
      baseURL: "http://localhost:8000",
      url: "/admin/signin",
      data: {
        email,
        password,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
}

export async function getAdminInfo(token) {
  try {
    return await axios({
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: `http://localhost:8000/admin/adminInfo`,
    });
  } catch (error) {
    console.log(error.message);
  }
}
