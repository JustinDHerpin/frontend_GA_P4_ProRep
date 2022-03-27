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

const coursesService = {
  createCourse,
};

export default coursesService;
