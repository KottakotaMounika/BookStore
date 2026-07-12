import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../services/api";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "seller",
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

      const res = await API.post("/auth/register", formData);

      alert(res.data.message);

      navigate("/seller/login");

    } catch (err) {

      alert(err.response?.data?.message || "Registration Failed");

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

      <div
        className="card shadow p-4"
        style={{
          width: "420px",
        }}
      >

        <h2 className="text-center mb-4">
          Seller Registration
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">

            <label>Name</label>

            <input
              type="text"
              name="name"
              className="form-control"
              onChange={handleChange}
              required
            />

          </div>

          <div className="mb-3">

            <label>Email</label>

            <input
              type="email"
              name="email"
              className="form-control"
              onChange={handleChange}
              required
            />

          </div>

          <div className="mb-3">

            <label>Password</label>

            <input
              type="password"
              name="password"
              className="form-control"
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
            Signup
          </button>

        </form>

        <div className="text-center mt-3">

          Already have an account?

          <Link
            to="/seller/login"
            className="ms-2 text-decoration-none"
          >
            Login
          </Link>

        </div>

      </div>

    </div>

  );

}

export default Register;