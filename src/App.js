import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/Homepage/HomePage";
import AppLayout from "./layout/AppLayout";

{/* <Route path=":id" element={} /> // 파라미터 받아오기 */}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>

          <Route index element={<HomePage />} /> {/* index : 위 path를 그대로 path로 쓰겠다*/}







        </Route>

        <Route path="*" element={<NotFoundPage/>} /> {/* 오류 화면 */}
      </Routes>
    </div>
  );
}

export default App;
