import store from "./../Redux/store";
import axios from "axios";
export const instance = axios.create({
  baseURL: "https://localhost:8078/",
  timeout: 5000,
  headers: { authorization: "Bearer " + store.getState().authReducer.token },
});
