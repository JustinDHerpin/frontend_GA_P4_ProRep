import React from "react";
import { useState, useEffect } from "react";
// import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";

function CourseForm() {
  // const [name, setName] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    students: [],
    owner: "",
  });

  const { name, students, owner } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/dashboard");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name,
      students,
      owner,
    };

    dispatch(login(userData));
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
              onChange={(e) => setFormData.name(e.target.value)}
            ></input>
          </div>
        </form>
      </section>
    </>
  );
}

export default CourseForm;
