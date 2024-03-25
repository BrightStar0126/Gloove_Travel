import { BASE_URI } from "../utils/api";
import axios from "axios";

export const openAllRequest = () => (dispatch) => new Promise((resolve, reject) => {
  axios.post(`${BASE_URI}/request/openAll`)
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      // console.log(err);
      reject("exist");
    });
})

export const sendRequest = (data) => (dispatch) => new Promise((resolve, reject) => {
  axios.post(`${BASE_URI}/request/send`, data)
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      // console.log(err);
      reject("exist");
    });
})

export const approveRequest = (data) => (dispatch) => new Promise((resolve, reject) => {
  axios.post(`${BASE_URI}/request/approve`, data)
    .then(res => {
      resolve("Success!");
    })
    .catch(err => {
      // console.log(err);
      reject("Failed");
    });
})

export const rejectRequest = (data) => (dispatch) => new Promise((resolve, reject) => {
  axios.post(`${BASE_URI}/request/reject`, data)
    .then(res => {
      resolve("You are all set!");
    })
    .catch(err => {
      // console.log(err);
      reject("Sorry. Save failed");
    });
})