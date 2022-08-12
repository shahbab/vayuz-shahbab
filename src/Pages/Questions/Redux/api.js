import Axios from "axios";
import { store } from "../../../Store/store";
import { questionAction } from "./slice";
Axios.defaults.baseURL = "https://meanapi-app.herokuapp.com";
Axios.defaults.headers.common[
  "Authorization"
] = `Bearer:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlcnJhLmFzcmlAYWRtaW4uY29tIiwiYWRtaW5pZCI6IjYyODIzNzQ5NmQ1ZmIzMWM3ZDkwNzM2OCIsImlhdCI6MTY1NTk1OTQzMiwiZXhwIjoxNjU2MDQ1ODMyfQ.8KMPSji_5xALUNKLvP_KhrYmV5pitgjTRhOwNBm4baU`;

export async function getquestion() {
  try {
    const res = await Axios.get(`/getQuestion`);
    if (res.data) {
      store.dispatch(questionAction.updatequestions(res?.data?.data));
      return res?.data?.data;
    }
    store.dispatch(questionAction.updatequestions([]));
    return [];
  } catch (error) {
    console.log(error);
    store.dispatch(questionAction.updatequestions([]));
    return [];
  }
}

export async function getquestionById(id) {
  try {
    const res = await Axios.get(`/getQuestionById/${id}`);
    if (res) {
      return res;
    }
    return {};
  } catch (error) {
    console.log(error);
    return {};
  }
}

export async function addquestion(payload) {
  try {
    const res = await Axios.post(`/addQuestion`, payload);
    if (res) {
      return "Data insert succesfully";
    }
    return "some thing went wrong";
  } catch (error) {
    console.log(error);
    return "some thing went wrong";
  }
}

export async function updatequestion(id, payload) {
  try {
    const res = await Axios.post(`/updateQuestion/${id}`, payload);
    if (res) {
      return "Data insert succesfully";
    }
    return "some thing went wrong";
  } catch (error) {
    console.log(error);
    return "some thing went wrong";
  }
}

export async function activequestion(id, payload) {
  try {
    const res = await Axios.post(`/editActiveQuestion/${id}`, payload);
    if (res) {
      return "Data insert succesfully";
    }
    return "some thing went wrong";
  } catch (error) {
    console.log(error);
    return "some thing went wrong";
  }
}

export async function editquestion(question) {
  store.dispatch(questionAction.updatequestion(question));
}
