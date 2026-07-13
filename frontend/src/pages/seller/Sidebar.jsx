import { Link, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBook,
  FaPlus,
  FaShoppingCart,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/seller/login");
  };

  return (
    <div
      style={{
        width: "250px",
        minHeight: "100vh",
        background: "#8B4513",
        color: "white",
      }}
    >
      <h3 className="text-center py-4">BookVerse</h3>

      <ul className="list-unstyled px-3">

        <li className="mb-3">
          <Link
            to="/seller/dashboard"
            className="text-white text-decoration-none"
          >
            <FaTachometerAlt /> Dashboard
          </Link>
        </li>

        <li className="mb-3">
          <Link
            to="/seller/add-book"
            className="text-white text-decoration-none"
          >
            <FaPlus /> Add Book
          </Link>
        </li>

        <li className="mb-3">
          <Link
            to="/seller/products"
            className="text-white text-decoration-none"
          >
            <FaBook /> My Products
          </Link>
        </li>

        <li className="mb-3">
          <Link
            to="/seller/orders"
            className="text-white text-decoration-none"
          >
            <FaShoppingCart /> Orders
          </Link>
        </li>

        <li className="mt-5">
          <button
            onClick={logout}
            className="btn btn-danger w-100"
          >
            <FaSignOutAlt /> Logout
          </button>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;