import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useNavigate } from "react-router-dom";
import "./AppLayout.style.css"

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchByKeyword = (event) => {
    event.preventDefault();
    if(keyword === ""){
      navigate(``);
    }
    else{
      navigate(``);
    }
      
    setKeyword("");
  }

  const handleNavigation = (event, path) => {
    event.preventDefault();
    navigate(path);
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/" onClick={(e) => handleNavigation(e, '/')} className="">Logo<img alt="" src=""/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/" onClick={(e) => handleNavigation(e, '/')}>Home</Nav.Link>
              <Nav.Link href="/" onClick={(e) => handleNavigation(e, '/')}>Home</Nav.Link>

            </Nav>
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
              <Button type="submit" variant="outline-danger" className="">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet/> {/* 자식 라우트의 컴포넌트가 여기에 렌더링됩니다. */}
    </div>
  );
};

export default AppLayout;
