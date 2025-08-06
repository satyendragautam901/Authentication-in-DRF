// first get axios instance
import axios from 'axios'

const BASE_URL = "http://127.0.0.1:8000/basic-auth"

const auth = {
    username: "satye",
    password: "Pass@12345",
};

const headers = {
  "Content-Type": "application/json",
};

export const getStudents = ()=>{
    return axios.get(`${BASE_URL}/student/`, {auth});
};

export const getStudent = (id) =>{
    return axios.get(`${BASE_URL}/student/${id}`, {auth});
};



export const createStudent = (data) => {
  return axios.post(`${BASE_URL}/student/`, data, {
    auth,
    headers, // make sure this is added
  });
};

export const updateStudent = (id, data) => {
  return axios.put(`${BASE_URL}/students/${id}/`, data, { auth });
};

export const deleteStudent = (id) => {
  return axios.delete(`${BASE_URL}/students/${id}/`, { auth });
};

