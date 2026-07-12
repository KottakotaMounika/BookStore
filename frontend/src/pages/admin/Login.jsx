import { Link } from "react-router-dom";

function Login() {
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
          Login to Admin Account
        </h2>

        <form>
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
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          Don't have an account?

          <Link
            to="/admin/register"
            className="ms-2 text-decoration-none fw-semibold"
            style={{ color: "#8B4513" }}
          >
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;