import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { SiProducthunt } from "react-icons/si";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
const Navbaar = () => {
  let navigate = useNavigate();
  const handleClick = () => {
    localStorage.clear();
    
    navigate("/");
  };
  return (
    <>
      <Navbar expand="lg" sticky="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">
            <SiProducthunt /> React-Products
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {localStorage.getItem("session") ? (
              <>
                <Nav className="me-auto" >
                  {/* <Link
                    className="me-2 nav"
                    style={{ textDecoration: "none", color: "white" }}
                    to="/home"
                  >
                    Home
                  </Link> */}

                  <Link
                    className="me-4 nav"
                    style={{ textDecoration: "none", color: "white" }}
                    to="/products"
                  >
                    Products 
                  </Link>
                  <Link
                    className="me-4 nav"
                    style={{ textDecoration: "none", color: "white" }}
                    to="/prodlist"
                  >
                    Product Lists
                  </Link>
                </Nav>
                <Nav>
                  <Button className="me-2" onClick={handleClick}>
                    Logout
                  </Button>
                </Nav>
              </>
            ) : (
              <>
                <Nav className="ms-auto">
                  <Link to="/login">
                    <Button className="me-2">login</Button>{" "}
                  </Link>
                 
                </Nav>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
};

export default Navbaar;
