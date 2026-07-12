import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../services/api";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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
      const response = await API.post("/auth/register", {
        ...formData,
        role: "admin",
      });

      alert(response.data.message);

      navigate("/admin/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
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
          Admin Registration
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label>Name</label>

            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Email</label>

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
            type="submit"
            className="btn w-100"
            style={{
              backgroundColor: "#8B4513",
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