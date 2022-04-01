import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { register, reset } from "../features/auth/authSlice";
import Button from "react-bootstrap/Button";
import { Container, Form } from "react-bootstrap";
// import { isFulfilled } from "@reduxjs/toolkit";

function Register() {
  // const Register = () => {
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

  function loginClick() {
    navigate("/");
  }

  return (
    <>
      <Container>
        <Container className="text-center register-header-container">
          <h3>
            <FaUser /> Register
          </h3>
          <p>
            Please complete the form below and click 'Register' to create your
            new account.
          </p>
        </Container>

        <Container className="h-100 login-form-container">
          {/* <form onSubmit={onSubmit}> */}
          <Form onSubmit={onSubmit} className="text-center form-register">
            <img
              className="login-logo mb-4 mt-4"
              src={require("../images/proRepSampleWix.jpeg")}
              alt="ProRep Logo Icon"
            />

            <Form.Control
              className="mb-3"
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Please enter your name"
              onChange={onChange}
            />

            <Form.Control
              className="mb-3"
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Please enter your email"
              onChange={onChange}
            />

            <Form.Control
              className="mb-3"
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Please enter a password"
              onChange={onChange}
            />

            <Form.Control
              className="mb-3"
              type="password"
              id="verifyPassword"
              name="verifyPassword"
              value={verifyPassword}
              placeholder="Please verify your password"
              onChange={onChange}
            />

            <div className="d-grid">
              <Button type="submit" className="mb-3 login-button">
                Register
              </Button>

              <p>
                Already have an account? click the Login button below to sign
                in.
              </p>

              <Button onClick={loginClick} className="mb-3 login-button">
                Login
              </Button>
            </div>
            {/* <button type="submit">Submit</button> */}
          </Form>
          {/* </form> */}
        </Container>
      </Container>
      {/* </section> */}
    </>
  );
}

export default Register;
