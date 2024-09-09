import React from "react";
import "./LoginPage.style.css";
import { Button } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="loginpage_container">
      <h1>Log in to Spotify</h1>
      <Button className="loginpage_loginbtn">
        <FcGoogle className="loginpage_googleicon" />
        Continue With Google
      </Button>
    </div>
  );
};

export default Login;
