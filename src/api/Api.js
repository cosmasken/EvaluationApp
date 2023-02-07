// api.js
import axios from 'axios';

const baseURL = 'https://evaluationapi.riolabz.com/';
//login
const loginURL = `${baseURL}v1/auth/login`;
//fetch profile
const profileURL = `${baseURL}v1/auth/profile`;

//admin registration
const admin = `${baseURL}v1/auth/profile`;

//employee registration
const employeeregistration = `${baseURL}v1/auth/profile`;
//fetch employees
const fetchemployees = `${baseURL}v1/auth/profile`;
//fetch employee
const fetchemployee = `${baseURL}v1/auth/profile`;

//create employee type
const createemployeetype = `${baseURL}v1/auth/profile`;

//fetch employee types
const fetchemployeetypes = `${baseURL}v1/auth/profile`;
//fetch employee type
const fetchemployeetype = `${baseURL}v1/auth/profile`;
//update employee type
const updateemployeetype = `${baseURL}v1/auth/profile`;
//update employee
const updateemployee = `${baseURL}v1/auth/profile`;

//create make
const createmake = `${baseURL}v1/auth/profile`;
//fetch make
const fetchmake = `${baseURL}v1/auth/profile`;
//fetch make by id
const fetchmakebyid = `${baseURL}v1/auth/profile`;
//update make
const updatemake = `${baseURL}v1/auth/profile`;

const uploadUrl= `${baseURL}v1/filemanager/images/upload`;

const login = async (body) => {
  try {
    const response = await axios.post(loginURL, body);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const getProfile = async () => {
  try {
    const response = await axios.get(profileURL);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const upload = async (body) => {
    try {
      const response = await axios.post(loginURL, body);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
export { login, getProfile };
