import { BASE_URI } from "../utils/api";
import axios from "axios";

export const openBlog = (data) => (dispatch) => new Promise((resolve, reject) => {
  axios.post(`${BASE_URI}/blog/open`, data)
    .then(res => {
      resolve(res.data.content);
    })
    .catch(err => {
      // console.log(err);
      reject("exist");
    });
})

export const openAllBlog = () => (dispatch) => new Promise((resolve, reject) => {
  axios.post(`${BASE_URI}/blog/openAll`)
    .then(res => {
      resolve(res.data);
    })
    .catch(err => {
      // console.log(err);
      reject("exist");
    });
})

export const insertBlog = (data) => (dispatch) => new Promise((resolve, reject) => {
  axios.post(`${BASE_URI}/blog/insert`, data)
    .then(res => {
      resolve("You are all set!");
    })
    .catch(err => {
      // console.log(err);
      reject("Sorry. Save failed");
    });
})

export const deleteBlog = (data) => (dispatch) => new Promise((resolve, reject) => {
  axios.post(`${BASE_URI}/blog/delete`, data)
    .then(res => {
      resolve("You are all set!");
    })
    .catch(err => {
      // console.log(err);
      reject("Sorry. Save failed");
    });
})