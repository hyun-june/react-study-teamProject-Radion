import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import "./AppLayout.style.css";
import radionLogo from "../assets/radion_logo.png";
import { CiSearch } from "react-icons/ci";
import { UserContext } from "../context/UserContext";

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext); // UserContext 사용

  const searchByKeyword = (event) => {
    event.preventDefault();
    if (keyword === "") {
      navigate(``);
    } else {
      navigate(``);
    }

    setKeyword("");
  };

  const handleNavigation = (event, path) => {
    event.preventDefault();
    navigate(path);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/" onClick={(e) => handleNavigation(e, "/")}>
            <div className="navbar_logo">
              <img alt="" src={radionLogo} className="navbar_logo_img" />
              <span className="navbar_logo_text">radion</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Nav.Link href="/" onClick={(e) => handleNavigation(e, "/")}>
                Home
              </Nav.Link>
              <Nav.Link href="/" onClick={(e) => handleNavigation(e, "/")}>
                Home
              </Nav.Link> */}
            </Nav>
            <Form className="form-inline" onSubmit={searchByKeyword}>
              <div className="input-group">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={keyword}
                  onChange={(event) => setKeyword(event.target.value)}
                />
                {/* 부트스트랩 <Button>컴포넌트 사용 */}
                <Button type="submit" className="navbar_search_btn">
                  <CiSearch className="navbar_search_icon" />
                </Button>
              </div>
            </Form>

            {user ? (
              <div className="navbar_user_info">
                <span>{user.name}</span>
                <Button className="navbar_logout_btn" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            ) : (
              <Button
                className="navbar_login_btn"
                onClick={(e) => handleNavigation(e, "/login")}
              >
                Log in
              </Button>
            )}
            {/* 기본 <button>태그 사용 */}
            {/* <button
                type="submit"
                className="navbar_login_btn"
                onClick={(e) => handleNavigation(e, "/login")}
              >
                Log in
              </button> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet /> {/* 자식 라우트의 컴포넌트가 여기에 렌더링됩니다. */}
    </div>
  );
};

export default AppLayout;
