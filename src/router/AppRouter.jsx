import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "../layout/MainLayout";
import NotePage from "../pages/NotePage";
import CreateNotePage from "../pages/CreateNotePage";
import RegisterPage from "../pages/RegisterPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<NotePage />} />
          <Route path="create" element={<CreateNotePage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
