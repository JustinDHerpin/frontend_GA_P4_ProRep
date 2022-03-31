import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import CourseForm from "../components/CourseForm";
import coursesService from "../features/courses/coursesService";
import CoursesList from "../components/CoursesList";

function Dashboard() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <>
      {/* <Header /> */}
      {/* <NavBar /> */}

      <section>
        <h1>Welcome {user && user.name}</h1>
        <p>Course Dashboard</p>

        {/* <div> */}
        {/* {user.isAdmin && <CourseForm />} */}
        {/* <CourseForm /> */}
        <CoursesList />
        {/* {user.isAdmin ? {<CourseForm />} : null} */}
        {/* </div> */}
      </section>
    </>
  );
}

export default Dashboard;
