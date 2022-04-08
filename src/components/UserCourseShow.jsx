import React from "react";
import { useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import {
  deleteUserCourse,
  getUserCourses,
  updateUserCourse,
} from "../features/courses/coursesSlice";
import { useSelector, useDispatch } from "react-redux";

function UserCourseShow(props) {
  let { course, setUserCourse } = props;

  // const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [courseData, setCourseData] = useState({});

  useEffect(() => {
    setCourseData(course);
    console.log(courseData);
  }, [courseData]);

  //   const { userCourses, courses, isError, isSuccess, message } = useSelector(
  //     (state) => state.courses
  //   );
  console.log(course);
  course = course[0];
  // console.log(course);

  function updateHomeworkDone(courseID, lessonID, index) {
    console.log(course.lessons[index]);
    console.log(courseData);

    // let lessonToUpdate = course.lessons.filter(
    //   (lesson) => lesson._id === lessonID
    // );
    // console.log(lessonToUpdate);
    // let homeworkToUpdate = lessonToUpdate[0].homeworkDone;
    // console.log(homeworkToUpdate);
    // homeworkToUpdate = !homeworkToUpdate;
    // console.log(homeworkToUpdate);
    // let lessons = courseData.lessons.map((l, i) => {
    // courseData.lessons[0].homeworkDone = true;

    // setCourseData({ ...courseData }, homeworkToUpdate);
    // if (i === index) l.homeworkDone = true;
    // if (i === index) l.homeworkDone = !l.homeworkDone;

    dispatch(
      updateUserCourse({
        ...courseData,

        lessons: courseData.lessons.map((l, i) => {
          if (i === index) {
            return { ...l, homeworkDone: !l.homeworkDone };
          }
          return l;
        }),
      })
    );

    setUserCourse([
      {
        ...courseData,

        lessons: course.lessons.map((l, i) => {
          if (i === index) {
            return { ...l, homeworkDone: !l.homeworkDone };
          }
          return l;
        }),
      },
    ]);

    // setCourseData((prevCourseData) => {
    //   let lessons = [
    //     courseData.lessons.map((l) => {
    //       return { ...l };
    //     }),
    //   ];
    //   return {
    //     ...prevCourseData,
    //     lessons: lessons.map((l, i) => {
    //       console.log(l);
    //       if (i === index) l.homeworkDone = !l.homeworkDone;
    //       return l;
    //     }),
    //   };
    // });

    console.log(courseData);
    // setCourseData({ ...courseData }, homeworkToUpdate);
    // console.log(courseData);
    // let course = courses[0].filter((item) => item._id === courseID);
    // let courseData = userCourses{ item };
    // console.log(courseData.lessons);
    //   if (userCourses.id)
  }

  return (
    <>
      <Container fluid className="course-show-title">
        <h4>Course:&nbsp;&nbsp;{course.name}</h4>
        <Button
          onClick={() => {
            dispatch(deleteUserCourse(course._id));
            dispatch(getUserCourses());
          }}
        >
          Delete Course
        </Button>
      </Container>

      {course.lessons.map((lesson, index) => {
        return (
          <Container key={index} className="course-show-content hvr-grow">
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
                onClick={() =>
                  updateHomeworkDone(course._id, lesson._id, index)
                }
              >
                Incomplete
              </Button>
            ) : (
              <Button
                variant="success"
                onClick={() =>
                  updateHomeworkDone(course._id, lesson._id, index)
                }
              >
                Completed!
              </Button>
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
