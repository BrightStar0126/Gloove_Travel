import { BASE_URI } from "../utils/api";
import axios from "axios";

export const openUser = (data) =>  (dispatch) => new Promise((resolve, reject) => {
  axios.post(`${BASE_URI}/running/openUser`, data)
    .then(res => {
      resolve(res.data.user);
    })
    .catch(err => {
      // console.log(err);
      reject("no");
    });
})

export const openWalletAmount = (data) =>  (dispatch) => new Promise((resolve, reject) => {
  axios.post(`${BASE_URI}/running/openWallet`, data)
    .then(res => {
      resolve(res.data.user);
    })
    .catch(err => {
      // console.log(err);
      reject("no");
    });
})

export const openAllUser = () =>  (dispatch) => new Promise((resolve, reject) => {
  axios.post(`${BASE_URI}/running/openAllUser`)
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      // console.log(err);
      reject("no");
    });
})

export const updatePosibility = (data) =>  (dispatch) => new Promise((resolve, reject) => {
  axios.post(`${BASE_URI}/running/updatePosibility`, data)
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      // console.log(err);
      reject("no");
    });
})

export const updateAllPosibility = (data) =>  (dispatch) => new Promise((resolve, reject) => {
  console.log("updateAllPosibility");
  axios.post(`${BASE_URI}/running/updateAllPosibility`, data)
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      // console.log(err);
      reject("no");
    });
})

export const updateWalletAmount = (data) =>  (dispatch) => new Promise((resolve, reject) => {
  console.log("updateWallet");
  axios.post(`${BASE_URI}/running/updateWallet`, data)
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      reject("no");
    });
})

export const addWalletAmount = (data) =>  (dispatch) => new Promise((resolve, reject) => {
  console.log("addWallet");
  axios.post(`${BASE_URI}/running/addWallet`, data)
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      reject("no");
    });
})