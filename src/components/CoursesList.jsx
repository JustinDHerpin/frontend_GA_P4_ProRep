import React from "react";
import { useState, useEffect } from "react";
// import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createCourse, reset } from "../features/courses/coursesSlice";
// import cours

function CoursesList() {
  const navigate = useNavigate();
  const dispathch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  return <div>CoursesList</div>;
}

export default CoursesList;
