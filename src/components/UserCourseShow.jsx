import React from "react";
import { useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import {
  deleteCourse,
  deleteUserCourse,
} from "../features/courses/coursesSlice";
import { useSelector, useDispatch } from "react-redux";

function UserCourseShow(props) {
  let { course } = props;
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { userCourses, courses, isError, isSuccess, message } = useSelector(
    (state) => state.courses
  );
  course = course[0];
  console.log(course);

  function updateHomeworkDone(courseID, lessonID) {
    console.log(courseID);
    console.log(lessonID);

    // let course = courses[0].filter((item) => item._id === id);
    // let courseData = userCourses{ item };
    // console.log(courseData.lessons);
    //   if (userCourses.id)
  }

  return (
    <>
      <Container fluid className="course-show-title">
        <h4>Course:&nbsp;&nbsp;{course.name}</h4>
        <Button onClick={() => dispatch(deleteUserCourse(course._id))}>
          Delete Course
        </Button>
      </Container>

      {course.lessons.map((lesson) => {
        return (
          <Container className="course-show-content hvr-grow">
            <h5>Lesson:&nbsp;&nbsp;&nbsp;&nbsp;{lesson.lessonName}</h5>

            <a
              href={lesson.lessonLink}
              alt={lesson.lessonName}
              target="_blank"
              rel="noreferrer noopener"
            >
              <p>
                Go to Lesson Mark Down:&nbsp;&nbsp;&nbsp;&nbsp;
                {lesson.lessonName}
              </p>
            </a>

            <a
              href={lesson.labLink}
              alt={lesson.labName}
              target="_blank"
              rel="noreferrer noopener"
            >
              <p>
                Download and Complete the lab(s): &nbsp;&nbsp;&nbsp;&nbsp;
                {lesson.labName}
              </p>
            </a>

            <a
              href={lesson.homeworkLink}
              alt={lesson.homeworkName}
              target="_blank"
              rel="noreferrer noopener"
            >
              <p>
                Homework:&nbsp;&nbsp;&nbsp;&nbsp;{lesson.homeworkName}
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Due
                By:&nbsp;&nbsp;&nbsp;&nbsp;{lesson.homeworkDue}
              </p>
            </a>

            {lesson.homeworkDone === false ? (
              <Button
                className="btn-hw-status"
                variant="danger"
                // onClick={() => dispatch(updateUserCourse(course._id))}
                onClick={() => updateHomeworkDone(course._id, lesson._id)}
              >
                Incomplete
              </Button>
            ) : (
              <Button variant="success">Completed!</Button>
            )}

            <a
              href={lesson.recordingLink}
              alt="Lesson Recording Link"
              target="_blank"
              rel="noreferrer noopener"
            >
              <p>
                Click Here to Watch the Video &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp; Recording
                Password:&nbsp;&nbsp;&nbsp;&nbsp;
                {lesson.recordingPassword}
              </p>
            </a>
          </Container>
        );
      })}
    </>
  );
}

export default UserCourseShow;
