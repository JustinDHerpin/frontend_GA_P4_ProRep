import Button from "react-bootstrap/Button";
import React from "react";
import { useState, useEffect } from "react";
// import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
// import {  useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import {
  getUserCourses,
  getAllCourses,
} from "../features/courses/coursesSlice";
// import coursesService from "../features/courses/coursesService";

function CoursesList() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [courses, setCourses] = useState([]);

  const { user } = useSelector((state) => state.auth);

  const { userCourses, courses, isError, isSuccess, message } = useSelector(
    (state) => state.courses
  );

  function addCourse() {}

  useEffect(() => {
    dispatch(getAllCourses());
    // console.log(courses);
  }, [dispatch]);

  return (
    <div>
      <h2>CoursesList</h2>

      {/* {userCourses[0]?.map((course) => {
        return <h3>{course.name}</h3>;
      })} */}
      {courses[0]?.map((course) => {
        return (
          <div>
            <h3 key={course._id}>{course.name}</h3>
            <Button onClick={addCourse()}>Add Course</Button>
          </div>
        );
      })}
    </div>
  );
}

export default CoursesList;
