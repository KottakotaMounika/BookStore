import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../services/api";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("/auth/login", formData);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      alert(response.data.message);

      navigate("/admin/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

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
          Admin Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email Address</label>

            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>

            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            className="btn w-100"
            style={{
              backgroundColor: "#8B4513",
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
            className="ms-2 text-decoration-none"
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