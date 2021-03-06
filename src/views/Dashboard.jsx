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
import UserCourseShow from "../components/UserCourseShow";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [availCourse, setAvailCourse] = useState({});
  const [navItemClicked, setNavItemClicked] = useState(false);
  const [userCourse, setUserCourse] = useState({});
  const [userItemClicked, setUserItemClicked] = useState(false);

  let clickedCourseID;
  let clickedCourseName;
  let clickedCourseToAddID;

  const { user } = useSelector((state) => state.auth);
  const { userCourses, courses, isError, isSuccess, message } = useSelector(
    (state) => state.courses
  );

  // function getAddedCourse(e) {
  //   clickedCourseToAddID = e.target.attributes[0].nodeValue;
  //   console.log(clickedCourseToAddID);
  //   // clickedCourseName = e.target.attributes[1].nodeValue;
  //   // pushAvailCourse(clickedCourseID);
  // }

  function getUserCourse(e) {
    clickedCourseID = e.target.attributes[0].nodeValue;
    clickedCourseName = e.target.attributes[1].nodeValue;
    console.log(clickedCourseID);
    pushUserCourse(clickedCourseID);
  }

  function pushUserCourse(clickedCourseID) {
    // console.log(courses[0]);
    console.log(userCourses[0]);
    let item = userCourses[0].filter((item) => item._id === clickedCourseID);
    // let item = userCourses[0].find((item) => item._id === clickedCourseID);
    console.log(item);
    setUserCourse(item);
    setNavItemClicked(false);
    setUserItemClicked(true);
    console.log(userItemClicked);
    console.log(clickedCourseID);
  }

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
    setUserItemClicked(false);
    console.log(navItemClicked);
    // console.log(clickedCourseID);
  }

  let refresh = () => {
    dispatch(getUserCourses());
    // dispatch(getAllCourses());
  };

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
                  onClick={getUserCourse}
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
            {navItemClicked ? (
              <CourseShow course={availCourse} refresh={refresh} />
            ) : (
              ""
            )}
            {userItemClicked ? (
              <UserCourseShow
                course={userCourse}
                setUserCourse={setUserCourse}
              />
            ) : (
              ""
            )}
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
