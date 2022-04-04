import React from "react";
import { useParams } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "react-bootstrap";

// function CourseShow({ name, lessons }) {
// const CourseShow = (props) => {
function CourseShow(props) {
  console.log(props);
  let course = props;
  console.log(course);
  console.log(course[0].name);
  // console.log(courseToMap);
  return (
    <>
      <h2>CourseShowComponent</h2>
      {/* <h2>{course[0].name}</h2> */}
      {/* <p>{course[0].lessons}</p> */}
    </>

    //     <>
    //       { course[0]?.lesson.map}
    //       <Container>

    //       </Container>
    //     </>

    //     <>
    //       <Card style={{ width: "18rem" }}>
    //         <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
    //         <Card.Body>
    //           <Card.Title>Card Title</Card.Title>
    //           <Card.Text>
    //             Some quick example text to build on the card title and make up the
    //             bulk of the card's content.
    //           </Card.Text>
    //         </Card.Body>
    //         <ListGroup className="list-group-flush">
    //           <ListGroupItem>Cras justo odio</ListGroupItem>
    //           <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    //           <ListGroupItem>Vestibulum at eros</ListGroupItem>
    //         </ListGroup>
    //         <Card.Body>
    //           <Card.Link href="#">Card Link</Card.Link>
    //           <Card.Link href="#">Another Link</Card.Link>
    //         </Card.Body>
    //       </Card>
    //     </>
  );
}

export default CourseShow;
