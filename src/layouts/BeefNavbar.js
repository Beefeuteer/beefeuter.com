import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BeefContact from "../pages/BeefContact";
import BeefHome from "../pages/BeefHome";
import BeefProjects from "../pages/BeefProjects";
import BeefResume from "../pages/BeefResume";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function BeefNavbar() {
  return (
    <BrowserRouter>
      <Navbar bg="transparent" expand="lg" fixed="sticky">
        <Container>
          <Navbar.Brand as={Link} to="home">
            Beefeuter
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="resume">
                Resume
              </Nav.Link>
              <Nav.Link as={Link} to="projects">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/home" element={<BeefHome />}>
          home
        </Route>
        <Route path="/resume" element={<BeefResume />}>
          resume
        </Route>
        <Route path="/projects" element={<BeefProjects />}>
          projects
        </Route>
        <Route path="/contact" element={<BeefContact />}>
          contact
        </Route>
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default BeefNavbar;
