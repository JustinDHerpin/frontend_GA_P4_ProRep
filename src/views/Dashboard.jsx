import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CourseForm from "../components/CourseForm";

function Dashboard() {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <section>
        <h1>Welcome {user && user.name}</h1>
        <p>Course Dashboard</p>

        <CourseForm />
      </section>
    </>
  );
}

export default Dashboard;
