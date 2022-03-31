import React from "react";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { FaRemoveFormat, FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

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
      email,
      password,
    };

    dispatch(login(userData));
  };

  function registerClick() {
    navigate("/register");
  }

  return (
    <>
      {/* <section> */}
      <Container>
        <h3>
          <FaSignInAlt /> Login
        </h3>
        <p>
          Please log in to see your courses, or click "Register" to create a new
          account.
        </p>
      </Container>
      {/* </section> */}

      {/* <section> */}
      <Container>
        {/* <form onSubmit={onSubmit}> */}
        <Form onSubmit={onSubmit} className="text-center form-login">
          <img
            className="login-logo mb-3 mt-3"
            src={require("../images/proRepSampleWix.jpeg")}
            alt="ProRep Logo Icon"
          />
          {/* <input */}
          <Form.Control
            className="mb-3"
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Please enter your email"
            onChange={onChange}
          />

          {/* <input */}
          <Form.Control
            className="mb-3"
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Please enter a password"
            onChange={onChange}
          />

          <Button type="submit" className="mb-3">
            Login
          </Button>
          <p>
            Not Registered? Click the Register button below to create your FREE
            account.
          </p>
          <Button onClick={registerClick} className="mb-3">
            Register
          </Button>
          {/* <button variant="primary" type="submit">
            Submit
          </button> */}
        </Form>
        {/* </form> */}
      </Container>
      {/* </section> */}
    </>
  );
};

export default Login;
