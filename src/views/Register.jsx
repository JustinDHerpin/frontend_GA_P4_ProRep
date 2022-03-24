import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { register, reset } from "../features/auth/authSlice";
import { isFulfilled } from "@reduxjs/toolkit";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    verifyPassword: "",
  });

  const { name, email, password, verifyPassword } = formData;

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

    if (password !== verifyPassword) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  return (
    <>
      <section>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="Please enter your name"
            onChange={onChange}
          />

          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Please enter your email"
            onChange={onChange}
          />

          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Please enter a password"
            onChange={onChange}
          />

          <input
            type="password"
            id="verifyPassword"
            name="verifyPassword"
            value={verifyPassword}
            placeholder="Please verify your password"
            onChange={onChange}
          />

          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
};

export default Register;
