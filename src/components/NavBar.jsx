import { NavLink } from "react-router";

function NavBar() {
  const menus = [
    { id: 1, menu: "Note", path: "/" },
    { id: 2, menu: "Create Note", path: "/create" },
    { id: 3, menu: "Register", path: "/register" },
  ];

  return (
    <nav className="h-13 bg-amber-700 text-white flex justify-center items-center gap-6">
      {menus.map((item) => (
        <NavLink
          key={item.id}
          className={"cursor-pointer hover:underline"}
          to={item.path}
        >
          {item.menu}
        </NavLink>
      ))}
    </nav>
  );
}
export default NavBar;
