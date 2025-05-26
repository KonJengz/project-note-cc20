import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

function MainLayout() {
  return (
    <div>
      <NavBar />

      <div className="p-10">
        <Outlet />
      </div>
    </div>
  );
}
export default MainLayout;
