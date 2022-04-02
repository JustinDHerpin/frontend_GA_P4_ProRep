import React from "react";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { Container } from "react-bootstrap";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
      {user ? (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <img
              className="navImage"
              src={require("../images/proRepSampleWix.jpeg")}
              alt="ProRep Logo Icon"
              width="50"
              height="50"
            />
            <Navbar.Brand>ProRep</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
              </Nav>
              <Nav>
                <Navbar.Text>
                  <p className="p-0 m-0">Signed in as: {user.name + ""}</p>
                  {/* Signed in as: <a href="#login">{user.name}</a> */}
                </Navbar.Text>
                {/* <Nav.Link href="/" eventKey={2}>
                Log Out
              </Nav.Link> */}
                <Form>
                  {/* <button>Log Out</button> */}
                  <Button onClick={onLogout} className="nav-logout-button">
                    Log Out
                  </Button>
                </Form>
                {/* <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
                {/* <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <img
              className="navImage"
              src={require("../images/proRepSampleWix.jpeg")}
              alt="ProRep Logo Icon"
              width="50"
              height="50"
            />
            <Navbar.Brand>ProRep</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
              </Nav>
              <Nav>
                <Navbar.Text>
                  <p>Sign in or Register: </p>
                </Navbar.Text>

                <Nav.Link href="/" eventKey={2}>
                  LogIn
                </Nav.Link>

                <Nav.Link href="/register" eventKey={2}>
                  Register
                </Nav.Link>
                {/* <Form>
                  <button>Log Out</button>
                  <Button onClick={onLogout} className="nav-logout-button">
                    Log Out
                  </Button>
                </Form> */}
                {/* <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
                {/* <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
}

export default NavBar;
