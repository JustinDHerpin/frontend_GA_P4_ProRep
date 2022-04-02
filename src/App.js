import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Register from "./views/Register";
// import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar.jsx";
import CourseCard from "./components/CourseCard";
function App() {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/dashboard/course/:id" element={<CourseCard />} /> */}
          {/* <Route path="/dashboard/course/:id" element={<CourseCard />} />
          </Route> */}
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
