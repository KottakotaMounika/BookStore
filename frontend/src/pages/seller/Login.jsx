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
      const res = await API.post("/auth/login", formData);

      if (res.data.user.role !== "seller") {
        alert("You are not a Seller");
        return;
      }

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Seller Login Successful");

      navigate("/seller/dashboard");

    } catch (err) {
      alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "80vh",
        background: "#F8F1DE",
      }}
    >
      <div className="card shadow p-4" style={{ width: "420px" }}>
        <h2 className="text-center mb-4">
          Seller Login
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label>Email</label>

            <input
              className="form-control"
              type="email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>

            <input
              className="form-control"
              type="password"
              name="password"
              onChange={handleChange}
              required
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
            to="/seller/register"
            className="ms-2"
          >
            Signup
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Login;