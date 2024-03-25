import { BASE_URI } from "../utils/api";
import axios from "axios";

export const signup = (data) =>  (dispatch) => new Promise((resolve, reject) => {
  axios.post(`${BASE_URI}/user/signup`, data)
    .then(res => {
      // console.log(res.data);
      resolve("success");
    })
    .catch(err => {
      // console.log(err);
      reject("exist");
    });
})

export const signin = (data) =>  (dispatch) => new Promise((resolve, reject) => {
  console.log("data", data);
  axios.post(`${BASE_URI}/user/signin`, data)
    .then(res => {
      console.log("success", res.data);
      resolve({role: res.data.role, username: res.data.username, id: res.data.id});
    })
    .catch(err => {
      // console.log(err);
      reject("no");
    });
})

export const recover = (data) =>  (dispatch) => new Promise((resolve, reject) => {
  console.log("data", data);
  axios.post(`${BASE_URI}/user/recover`, data)
    .then(res => {
      console.log(res.data);
      resolve("success");
    })
    .catch(err => {
      // console.log(err);
      reject("no");
    });
})

// export const openUser = (data) =>  (dispatch) => new Promise((resolve, reject) => {
//   axios.post(`${BASE_URI}/user/openUser`, data)
//     .then(res => {
//       resolve(res.data.user);
//     })
//     .catch(err => {
//       // console.log(err);
//       reject("no");
//     });
// })

// export const openWalletAmount = (data) =>  (dispatch) => new Promise((resolve, reject) => {
//   axios.post(`${BASE_URI}/user/openWallet`, data)
//     .then(res => {
//       resolve(res.data.user);
//     })
//     .catch(err => {
//       // console.log(err);
//       reject("no");
//     });
// })

// export const openAllUser = () =>  (dispatch) => new Promise((resolve, reject) => {
//   axios.post(`${BASE_URI}/user/openAllUser`)
//     .then(res => {
//       resolve(res.data);
//     })
//     .catch(err => {
//       // console.log(err);
//       reject("no");
//     });
// })

// export const updatePosibility = (data) =>  (dispatch) => new Promise((resolve, reject) => {
//   axios.post(`${BASE_URI}/user/updatePosibility`, data)
//     .then(res => {
//       resolve(res.data);
//     })
//     .catch(err => {
//       // console.log(err);
//       reject("no");
//     });
// })

// export const updateAllPosibility = (data) =>  (dispatch) => new Promise((resolve, reject) => {
//   console.log("updateAllPosibility");
//   axios.post(`${BASE_URI}/user/updateAllPosibility`, data)
//     .then(res => {
//       resolve(res.data);
//     })
//     .catch(err => {
//       // console.log(err);
//       reject("no");
//     });
// })

// export const updateWalletAmount = (data) =>  (dispatch) => new Promise((resolve, reject) => {
//   console.log("updateWallet");
//   axios.post(`${BASE_URI}/user/updateWallet`, data)
//     .then(res => {
//       resolve(res.data);
//     })
//     .catch(err => {
//       reject("no");
//     });
// })