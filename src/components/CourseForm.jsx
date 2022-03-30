import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createCourse, reset } from "../features/courses/coursesSlice";

function CourseForm() {
  // const [name, setName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    students: [],
    owner: "",
  });

  const { name, students, owner } = formData;

  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { courses, isError, isSuccess, message } = useSelector(
    (state) => state.courses
  );

  // useEffect(() => {
  //   if (isError) {
  //     toast.error(message);
  //   }

  //   if (isSuccess || user) {
  //     navigate("/dashboard");
  //   }

  //   dispatch(reset());
  // }, [user, courses, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      owner: user,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const courseData = {
      name,
      students,
      owner,
    };

    dispatch(createCourse(courseData));
    setFormData({
      name: "",
      students: [],
      owner: "",
    });
  };

  return (
    <>
      <section>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="name">Course</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={onChange}
            ></input>
          </div>

          <div>
            <button type="submit">Add Course</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default CourseForm;
