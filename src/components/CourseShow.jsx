import React from "react";
import { useParams } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "react-bootstrap";

// function CourseShow({ name, lessons }) {
// const CourseShow = (props) => {
function CourseShow(props) {
  console.log(props);
  let { course } = props;
  // console.log(course[0].name);
  course = course[0];
  // console.log(JSONcourse[0].name);
  // console.log(course[0].name);
  // console.log(courseToMap);
  // let course = {
  //   name: "HTML",

  //   lessons: [
  //     {
  //       lessonName: "Intro to HTML",
  //       lessonLink:
  //         "https://git.generalassemb.ly/Flex-928/html-and-css/blob/master/readme.md",
  //       labName: "HTML/CSS Lab",
  //       labLink: "https://git.generalassemb.ly/Flex-928/fashion-blog",
  //       homeworkName: "Haiku",
  //       homeworkLink:
  //         "https://git.generalassemb.ly/Flex-928/haiku/blob/master/README.md",
  //       homeworkDue: "10/12/22",
  //       recordingLink:
  //         "https://generalassembly.zoom.us/rec/share/pMlBU_PMomveo47HA-WclLZHDCAYvSE3RhRvQP04zR1NjNAKE898v41Uyl-7WkYC.CiEOwVrTA8oO-oOA",
  //       recordingPassword: "N.Ram7xE",
  //     },
  //   ],
  // };

  return (
    <>
      <Container fluid className="course-show-title">
        <h4>Course:&nbsp;&nbsp;{course.name}</h4>
        <Button>Add Course</Button>
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

export default CourseShow;
