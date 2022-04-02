import React from "react";
import coursesService from "../features/courses/coursesService";
// import CoursesList from "../components/CoursesList";
import {
  getUserCourses,
  getAllCourses,
} from "../features/courses/coursesSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Button, Col, Row, Nav, Navbar } from "react-bootstrap";
// import CourseForm from "../components/CourseForm";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { userCourses, courses, isError, isSuccess, message } = useSelector(
    (state) => state.courses
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/");
    }
    dispatch(getUserCourses());
    dispatch(getAllCourses());
  }, [user, navigate, dispatch, isError, message]);

  // if (isLoading) {
  //   return <Spinner />
  // }
  console.log(userCourses);
  return (
    // <Container fluid className="dashboard-main">
    <Container fluid className="dashboard-main p=0">
      <Row className="dashboard-main-row">
        <Col className="dashboard-column-left">
          <Nav defaultActiveKey="/home" className="flex-sm-column">
            <Navbar.Brand>My Courses:</Navbar.Brand>
            {courses[0]?.map((course) => {
              return (
                <Nav.Link className="navlink" href={`/${course._id}`}>
                  {course.name}
                </Nav.Link>
              );
            })}
            <Navbar.Brand>Course Catalog:</Navbar.Brand>
            {courses[0]?.map((course) => {
              return (
                <Nav.Link className="navlink" href={`/${course._id}`}>
                  {course.name}
                </Nav.Link>
              );
            })}

            <Nav.Link className="navlink" href="/home">
              Active
            </Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav>
        </Col>

        <Col xs={9}>
          <Container className="p-0">
            {courses[0]?.map((course) => {
              return (
                <Row key={course._id}>
                  <Button
                    key={course.lessons.map}
                    className="all-courses-button-right"
                  >
                    {course.name}
                  </Button>
                </Row>
              );
            })}
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

//
//   <section>
//         <h1>Welcome {user && user.name}</h1>
//         <p>Course Dashboard</p>

//         <div>
//         {user.isAdmin && <CourseForm />}
//         <CourseForm />
//         <CoursesList />
//         {user.isAdmin ? {<CourseForm />} : null}
//          </div>
//       </section> */
//

// if(userCourses[0]? !== [])
//             {userCourses?.map((course) => {
//               return (
//                 <Button key={course._id} className="all-courses-button">
//                   {course.name}
//                 </Button>
//               );
//             })}
//             else {<p>No Courses Added</p>}
//

export default Dashboard;
