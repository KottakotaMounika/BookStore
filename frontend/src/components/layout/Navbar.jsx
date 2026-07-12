import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "#F7EFD9",
        borderBottom: "1px solid #ddd",
        padding: "12px 0",
      }}
    >
      <div className="container">

        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{
            color: "#8B4513",
            fontSize: "28px",
          }}
        >
          📚 BookVerse
        </Link>

        <div>

          <Link
            to="/login"
            className="btn btn-danger btn-sm me-2"
          >
            User
          </Link>

          <Link
            to="/seller/login"
            className="btn btn-success btn-sm me-2"
          >
            Seller
          </Link>

          <Link
            to="/admin/login"
            className="btn btn-warning btn-sm"
          >
            Admin
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;