import axios from "axios";

const API_URL = "http://localhost:5000/api/v1/courses/";

// Create new Course
const createCourse = async (courseData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, courseData, config);

  return response.data;
};

// Get User's Courses
const getUserCourses = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

// Get all Courses available to user:
const getAllCourses = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + "all", config);

  return response.data;
};

const coursesService = {
  createCourse,
  getUserCourses,
  getAllCourses,
};

export default coursesService;
