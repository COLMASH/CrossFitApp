import axios from "axios";

export async function getWodList() {
  return await axios({
    method: "GET",
    url: "http://localhost:8000/wod/wodList",
  });
}

export async function getWodInfo(token) {
  return await axios({
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    url: `http://localhost:8000/wod/wodInfo`,
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
}

export async function destroyWod(wodId) {
  return await axios({
    method: "DELETE",
    url: "http://localhost:8000/wod/wodDelete",
    data: { wodId },
  });
}
