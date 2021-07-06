import axios from "axios";

export async function coachSignIn(email, password) {
  try {
    return await axios({
    method: "POST",
    baseURL: "http://localhost:8000",
    url: "/coaches/signin",
    data: {
      email,
      password,
    },
    })
  } catch(err) {
      console.error( err.message );
    }
}

export async function getCoachInfo(token) {
	try {
		return await axios({
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			baseURL: "http://localhost:8000",
			url: "/coaches/coachInfo",
		});
	} catch (err) {
		console.error(err.message);
	}
}
