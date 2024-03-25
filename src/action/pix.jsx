import { BASE_URI } from "../utils/api";
import axios from "axios";

export const create_customer = (data) => (dispatch) => new Promise((resolve, reject) => {
  axios.post(`${BASE_URI}/pix/create_customer`, data)
    .then(res => {
      resolve(res.data.content);
    })
    .catch(err => {
      // console.log(err);
      reject("exist");
    });
})

export const create_payment = (data) => (dispatch) => new Promise((resolve, reject) => {
  axios.post(`${BASE_URI}/pix/create_payment`, data)
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      // console.log(err);
      reject("exist");
    });
})