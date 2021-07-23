import axios from "axios";

export async function getWodList() {
  return await axios({
    method: "GET",
    url: "http://localhost:8000/wod/wodList",
  });
}

export async function getWodInfo(token) {
  try {
    return await axios({
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      url: `http://localhost:8000/wod/wodInfo`,
    });
  } catch (error) {
    console.log(error.message);
  }
}

export async function wodCreation(
  token,
  activity,
  modality,
  exercices,
  repetitions,
  date,
  notes
) {
  try {
    return await axios({
      method: "POST",
      url: "http://localhost:8000/wod/wodCreate",
      data: {
        activity,
        modality,
        exercices,
        repetitions,
        date,
        notes,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
}

export async function wodUpdate(
  token,
  activity,
  modality,
  exercices,
  repetitions,
  date,
  notes
) {
  try {
    return await axios({
      method: "PUT",
      url: "http://localhost:8000/wod/wodUpdate",
      data: {
        activity,
        modality,
        exercices,
        repetitions,
        date,
        notes,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
}

export async function destroyWod(wodId) {
  return await axios({
    method: "DELETE",
    url: "http://localhost:8000/wod/wodDelete",
    data: { wodId },
  });
}
