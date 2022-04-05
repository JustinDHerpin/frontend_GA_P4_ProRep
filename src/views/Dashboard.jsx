import React from "react";
// import coursesService from "../features/courses/coursesService";
import {
  getUserCourses,
  getAllCourses,
  reset,
} from "../features/courses/coursesSlice";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Button, Col, Row, Nav, Navbar } from "react-bootstrap";
import CourseShow from "../components/CourseShow";
import { render } from "@testing-library/react";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [availCourse, setAvailCourse] = useState({});
  const [navItemClicked, setNavItemClicked] = useState(false);
  const [userItemClicked, setUserItemClicked] = useState(false);

  let clickedCourseID;
  let clickedCourseName;
  let clickedCourseToAddID;

  const { user } = useSelector((state) => state.auth);
  const {
    userCourses,
    // showAvailCourse,
    // showUserCourse,
    courses,
    isError,
    isSuccess,
    message,
  } = useSelector((state) => state.courses);

  // console.log("userCourses: " + userCourses);
  // console.log("courses: " + courses[1]);

  // function getAddedCourse(e) {
  //   clickedCourseToAddID = e.target.attributes[0].nodeValue;
  //   console.log(clickedCourseToAddID);
  //   // clickedCourseName = e.target.attributes[1].nodeValue;
  //   // pushAvailCourse(clickedCourseID);
  // }

  function getAvailCourse(e) {
    clickedCourseID = e.target.attributes[0].nodeValue;
    clickedCourseName = e.target.attributes[1].nodeValue;
    pushAvailCourse(clickedCourseID);
  }

  function pushAvailCourse(clickedCourseID) {
    console.log(courses[0]);
    let item = courses[0].filter((item) => item._id === clickedCourseID);

    setAvailCourse(item);
    setNavItemClicked(true);
    console.log(navItemClicked);
    // console.log(clickedCourseID);
  }

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/");
    }
    dispatch(reset());
    dispatch(getUserCourses());
    dispatch(getAllCourses());
  }, [user, navigate, dispatch, isError, message]);

  // useEffect(() => {
  //  showAvailCourse(); // will be to send data and display on page here

  // }, [user, isError, message, navigate, dispatch, , showAvailCourse, clickedCourseID]);
  // }, [dispatch, showAvailCourse, clickedCourseID]);
  // }, [dispatch, clickedCourseID]);

  // if (isLoading) {
  //   return <Spinner />
  // }

  console.log(availCourse);
  console.log(navItemClicked);
  return (
    <Container fluid className="dashboard-main p=0">
      <Row className="dashboard-main-row">
        <Col className="dashboard-column-left">
          <Nav defaultActiveKey="/home" className="flex-sm-column">
            <Navbar.Brand>My Courses:</Navbar.Brand>
            {userCourses[0]?.map((course) => {
              return (
                // <Nav.Link className="navlink" href={`/dashboard/${course._id}`}>
                <Nav.Link
                  value={course._id}
                  name={course.name}
                  onClick={getAvailCourse}
                  className="navlink"
                  // href={`/dashboard/${course._id}`}
                >
                  {course.name}
                </Nav.Link>
              );
            })}
            <Navbar.Brand>Course Catalog:</Navbar.Brand>
            {courses[0]?.map((course) => {
              return (
                <Nav.Link
                  value={course._id}
                  name={course.name}
                  onClick={getAvailCourse}
                  className="navlink"
                >
                  {course.name}
                </Nav.Link>
              );
            })}
          </Nav>
        </Col>

        <Col xs={9}>
          <Container className="p-0">
            {navItemClicked ? <CourseShow course={availCourse} /> : ""}
            {/* {userItemClicked ? <CourseShow course={userCourse} /> : ""} */}
            {/* {availCourse !== {} && <CourseShow {...availCourse} />} */}

            {/* {
              if (availCourse !== {}) {
                <CourseShow {...availCourse} />
              }
            } */}
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
