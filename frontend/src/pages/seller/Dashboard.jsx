function Dashboard() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container mt-5">

      <h2>Welcome Seller</h2>

      <h4>{user?.name}</h4>

      <hr />

      <div className="row">

        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h5>My Books</h5>
            <h2>0</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow">
            <h5>Orders</h5>
            <h2>0</h2>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;