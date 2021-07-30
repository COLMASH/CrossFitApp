import axios from "axios";

export async function getWodList() {
  return await axios({
    method: "GET",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/wod/wodList",
  });
}

export async function getWodInfo(token) {
  return await axios({
    method: "GET",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/wod/wodInfo",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
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
  return await axios({
    method: "POST",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/wod/wodCreate",
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
  return await axios({
    method: "PUT",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/wod/wodUpdate",
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
}

export async function destroyWod(wodId) {
  return await axios({
    method: "DELETE",
    baseURL: process.env.REACT_APP_SERVER_URL,
    url: "/wod/wodDelete",
    data: { wodId },
  });
}
