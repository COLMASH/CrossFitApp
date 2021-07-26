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
  exercice1,
  exercice2,
  exercice3,
  repetition1,
  repetition2,
  repetition3,
  capacity,
  startDate,
  endDate,
  notes
) {
  try {
    return await axios({
      method: "POST",
      url: "http://localhost:8000/wod/wodCreate",
      data: {
        activity,
        modality,
        exercice1,
        exercice2,
        exercice3,
        repetition1,
        repetition2,
        repetition3,
        capacity,
        startDate,
        endDate,
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
  wodId,
  activity,
  modality,
  exercice1,
  exercice2,
  exercice3,
  repetition1,
  repetition2,
  repetition3,
  capacity,
  startDate,
  endDate,
  notes
) {
  try {
    return await axios({
      method: "PUT",
      url: "http://localhost:8000/wod/wodUpdate",
      data: {
        wodId,
        activity,
        modality,
        exercice1,
        exercice2,
        exercice3,
        repetition1,
        repetition2,
        repetition3,
        capacity,
        startDate,
        endDate,
        notes,
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
