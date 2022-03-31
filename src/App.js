import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar.jsx";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Register from "./views/Register";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Router>
        {/* <div> */}
        <NavBar />
        {/* <Container className="d-grid h-100 text-center"> */}
        {/* <Header /> */}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        {/* </Container> */}
        {/* </div> */}
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
