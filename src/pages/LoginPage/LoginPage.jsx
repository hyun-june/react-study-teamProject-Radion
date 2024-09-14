import React, { useState, useEffect, useContext } from "react";
import "./LoginPage.style.css";
import { Button } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import radionLogo from "../../assets/radion_logo.png";

const Login = () => {
  // 사용자 정보 상태
  // const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext); // 전역 사용자 상태 가져오기
  const [localUser, setLocalUser] = useState(null);

  // 사용자 세션 유지 (새로고침 시 로그인 유지)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setLocalUser(JSON.parse(storedUser)); // 로컬 스토리지에서 사용자 정보 로드
      setUser(JSON.parse(storedUser)); // Set globally
    }
  }, [setUser]);

  // Google 로그인 핸들러
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const accessToken = tokenResponse.access_token;
      console.log("Access Token:", accessToken);

      // 사용자 프로필 정보 가져오기
      try {
        const userProfileResponse = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        const userProfile = userProfileResponse.data;
        console.log("User Profile:", userProfile);

        // 사용자 정보 저장 (로컬 스토리지)
        localStorage.setItem("user", JSON.stringify(userProfile));
        setLocalUser(userProfile);
        setUser(userProfile); // Set globally
        navigate("/"); // 로그인후 메인페이지로 이동
      } catch (error) {
        console.error("Failed to fetch user profile", error);
      }
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  // 로그아웃 핸들러
  // const logout = () => {
  //   localStorage.removeItem("user"); // 로컬 스토리지에서 사용자 정보 제거
  //   setLocalUser(null);
  //   setUser(null); // 사용자 상태 초기화
  // };

  return (
    <div className="loginpage_container">
      {/* when user is not logged in */}
      {!localUser && (
        <div className="loginpage_content">
          <div
            className="loginpage_logo_container"
            onClick={() => {
              navigate("/");
            }}
          >
            <img
              src={radionLogo}
              alt="radion-logo"
              className="loginpage_logo"
            />
            <span className="loginpage_logo_text">radion</span>
          </div>

          <Button className="loginpage_loginbtn" onClick={login}>
            <FcGoogle className="loginpage_googleicon" />
            Log in with Google
          </Button>
        </div>
      )}
      {/* <div className="copyright">© 2024 Radion LLC</div> */}
    </div>
  );
};

export default Login;
