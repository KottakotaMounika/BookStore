import { Link } from "react-router-dom";

function Register() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "80vh",
        backgroundColor: "#F8F1DE",
      }}
    >
      <div
        className="card shadow p-4"
        style={{
          width: "420px",
          borderRadius: "10px",
        }}
      >
        <h2 className="text-center mb-4 fw-bold">
          Admin Registration
        </h2>

        <form>

          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>

          <button
            className="btn w-100"
            style={{
              background: "#8B4513",
              color: "white",
            }}
          >
            Signup
          </button>

        </form>

        <div className="text-center mt-3">

          Already have an account?

          <Link
            to="/admin/login"
            className="ms-2 text-decoration-none"
            style={{ color: "#8B4513" }}
          >
            Login
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Register;