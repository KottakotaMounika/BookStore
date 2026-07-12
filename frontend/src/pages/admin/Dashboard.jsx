import { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import API from "../../services/api";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalSellers: 0,
    totalBooks: 0,
    totalOrders: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await API.get("/admin/dashboard");
      setStats(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="container-fluid p-4">
        <h2>Welcome, {user?.name}</h2>
        <hr />

        <div className="row mt-4">

          <div className="col-md-3">
            <div className="card shadow p-3">
              <h5>Total Users</h5>
              <h2>{stats.totalUsers}</h2>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow p-3">
              <h5>Total Sellers</h5>
              <h2>{stats.totalSellers}</h2>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow p-3">
              <h5>Total Books</h5>
              <h2>{stats.totalBooks}</h2>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow p-3">
              <h5>Total Orders</h5>
              <h2>{stats.totalOrders}</h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;