// Make http request, send data back, setting data in localStorage
import axios from "axios";

// const API_URL = "http://localhost:5000/api/v1/users/";
// ----------------------working on deployment issues w url refused below -------

const API_URL =
  process.env.REACT_APP_ENV === "production"
    ? "https://prorep-backend.herokuapp.com/api/v1/users/"
    : "http://localhost:5000/api/v1/users/";

// -------------------------------------end-------------------

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + "register", userData, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
