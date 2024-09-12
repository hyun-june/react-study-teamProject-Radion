import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/Homepage/HomePage";
import AppLayout from "./layout/AppLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import AlbumDetailPage from "./pages/AlbumDetailPage/AlbumDetailPage";
import TrackDetailPage from "./pages/TrackDetailPage/TrackDetailPage";
import { UserContextProvider } from "./context/UserContext";
import PrivateRoute from "./route/PrivateRoute";
import MusicPlayer from "./common/MusicPlayer/MusicPlayer";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />{" "}
            <Route
              path="login"
              element={!isAuthenticated ? <LoginPage /> : <Navigate to="/" />}
            />

            <Route path="albums">
              <Route path=":id" element={<AlbumDetailPage/>} />
            </Route>

            <Route path="tracks">
              <Route path=":id" element={<TrackDetailPage/>} />
            </Route>
          </Route>
          {/* 오류 화면 */}
          <Route path="/music" element={<MusicPlayer/>}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </UserContextProvider> 
    </div>
  );
}

export default App;
