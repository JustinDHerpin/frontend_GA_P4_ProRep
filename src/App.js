import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Register from "./views/Register";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
