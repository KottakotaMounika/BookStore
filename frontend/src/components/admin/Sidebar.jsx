import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaStore,
  FaBook,
  FaShoppingCart,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/admin/login");
  };

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: <FaUsers />,
    },
    {
      name: "Sellers",
      path: "/admin/sellers",
      icon: <FaStore />,
    },
    {
      name: "Books",
      path: "/admin/books",
      icon: <FaBook />,
    },
    {
      name: "Orders",
      path: "/admin/orders",
      icon: <FaShoppingCart />,
    },
  ];

  return (
    <div
      style={{
        width: "250px",
        minHeight: "100vh",
        background: "#8B4513",
        color: "white",
      }}
    >
      <h3 className="text-center py-4">📚 BookVerse</h3>

      {menuItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`d-flex align-items-center text-decoration-none px-4 py-3 ${
            location.pathname === item.path ? "bg-dark" : ""
          }`}
          style={{ color: "white" }}
        >
          <span className="me-3">{item.icon}</span>
          {item.name}
        </Link>
      ))}

      <button
        onClick={logout}
        className="btn btn-danger w-75 ms-4 mt-5"
      >
        <FaSignOutAlt className="me-2" />
        Logout
      </button>
    </div>
  );
}

export default Sidebar;