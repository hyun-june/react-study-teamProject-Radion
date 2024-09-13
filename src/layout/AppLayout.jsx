import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "./AppLayout.style.css";
import radionLogo from "../assets/radion_logo.png";
import { CiSearch } from "react-icons/ci";
import { UserContext } from "../context/UserContext";

const AppLayout = () => {
  // const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const location = useLocation(); // Hook to get the current URL's path (location.pathname)
  const { user, setUser } = useContext(UserContext); // UserContext 사용

  // const searchByKeyword = (event) => {
  //   event.preventDefault();
  //   if (keyword === "") {
  //     navigate(``);
  //   } else {
  //     navigate(``);
  //   }

  //   setKeyword("");
  // };

  const handleNavigation = (event, path) => {
    event.preventDefault();
    navigate(path);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          {/* 데스크탑에서 보이는 nav bar */}
          {location.pathname !== "/login" && (
            <>
              <Navbar.Brand href="/" onClick={(e) => handleNavigation(e, "/")}>
                <div className="navbar_logo">
                  <img alt="" src={radionLogo} className="navbar_logo_img" />
                  <span className="navbar_logo_text">radion</span>
                </div>
              </Navbar.Brand>
              <Nav className="d-none d-lg-flex me-auto">
                <Nav.Link onClick={(e) => handleNavigation(e, "/")}>
                  Home
                </Nav.Link>
                <Nav.Link onClick={(e) => handleNavigation(e, "/playlist")}>
                  Playlist
                </Nav.Link>
              </Nav>
              <Navbar.Toggle
                aria-controls="navbarScroll"
                className="ms-auto custom-toggle"
              />
            </>
          )}

          {/* 모바일사이즈일때 보이는 logo & 햄버거 메뉴 */}
          {location.pathname !== "/login" && (
            <Navbar.Collapse id="navbarScroll" className="d-lg-none">
              <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                <Nav.Link
                  className="hamburger_menu_home_link"
                  onClick={(e) => handleNavigation(e, "/")}
                >
                  Home
                </Nav.Link>
                <Nav.Link onClick={(e) => handleNavigation(e, "/playlist")}>
                  Playlist
                </Nav.Link>
                {user ? (
                  <Nav.Link
                    className="hamburger_menu_login_link"
                    onClick={handleLogout}
                  >
                    Log out
                  </Nav.Link>
                ) : (
                  <Nav.Link
                    className="hamburger_menu_login_link"
                    onClick={(e) => handleNavigation(e, "/login")}
                  >
                    Log in
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          )}

          {/* 검색 인풋창 */}
          {/* <Form className="form-inline" onSubmit={searchByKeyword}>
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
          {/* <Button type="submit" className="navbar_search_btn">
                  <CiSearch className="navbar_search_icon" />
                </Button> */}
          {/* </div>
            </Form> */}

          {user ? (
            <div className="navbar_user_info">
              <span>{user.name}</span>
              <Button className="navbar_logout_btn" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            // Conditionally hide the "Log in" button if on the /login page
            location.pathname !== "/login" && (
              <Button
                className="navbar_login_btn"
                onClick={(e) => handleNavigation(e, "/login")}
              >
                Log in
              </Button>
            )
          )}
          {/* 기본 <button>태그 사용 */}
          {/* <button
                type="submit"
                className="navbar_login_btn"
                onClick={(e) => handleNavigation(e, "/login")}
              >
                Log in
              </button> */}
        </Container>
      </Navbar>
      <Outlet /> {/* 자식 라우트의 컴포넌트가 여기에 렌더링됩니다. */}
    </div>
  );
};

export default AppLayout;
