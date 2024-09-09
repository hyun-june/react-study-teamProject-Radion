import React from "react";
import "./Login.style.css";
import { Button } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="loginpage_container">
      <h2>Log in to Spotify</h2>
      <Button className="loginpage_loginbtn">
        <FcGoogle className="loginpage_googleicon" />
        Continue With Google
      </Button>
    </div>
  );
};

export default Login;
