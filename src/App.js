import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/Homepage/HomePage";
import AppLayout from "./layout/AppLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import { UserContextProvider } from "./context/UserContext";
import PrivateRoute from "./route/PrivateRoute";
{
  /* <Route path=":id" element={} /> // 파라미터 받아오기 */
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            {/* index : 위 path를 그대로 path로 쓰겠다*/}
            <Route index element={<HomePage />} />{" "}
            {/* 로그인 페이지는 인증되지 않은 사용자만 접근 */}
            <Route
              path="login"
              element={!isAuthenticated ? <LoginPage /> : <Navigate to="/" />}
            />
          </Route>
          {/* 오류 화면 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
