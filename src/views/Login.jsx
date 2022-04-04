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

  // Navigate for register button:
  function registerClick() {
    navigate("/register");
  }

  return (
    <>
      {/* <section> */}
      <Container>
        <Container className="text-center login-header-container">
          <h3>
            <FaSignInAlt /> Login
          </h3>
          <p>
            Please log in to see your courses, or click "Register" to create a
            new account.
          </p>
        </Container>

        <Container className="h-100 login-form-container">
          <Form onSubmit={onSubmit} className="text-center form-login">
            <img
              className="login-logo mb-4 mt-4"
              src={require("../images/proRepSampleWix.jpeg")}
              alt="ProRep Logo Icon"
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
            <div className="d-grid">
              <Button type="submit" className="mb-3 login-button">
                Login
              </Button>
              <p>
                Not Registered? Click the Register button below to create your
                FREE account.
              </p>

              <Button onClick={registerClick} className="mb-3 login-button">
                Register
              </Button>
            </div>
          </Form>
        </Container>
      </Container>
    </>
  );
};

export default Login;
