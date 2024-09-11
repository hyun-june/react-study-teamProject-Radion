import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/Homepage/HomePage";
import AppLayout from "./layout/AppLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import DetailPage from "./pages/DetailPage/DetailPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />{" "}
          <Route path="login" element={<LoginPage />} />

          <Route path="album">
            <Route path=":id" element={<DetailPage/>} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} /> {/* 오류 화면 */}
      </Routes>
    </div>
  );
}

export default App;
