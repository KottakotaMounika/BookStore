import { useEffect, useState } from "react";
import API from "../../services/api";
import SellerLayout from "../../layouts/SellerLayout";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [bookCount, setBookCount] = useState(0);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await API.get(`/books/seller/${user.id}`);
      setBookCount(res.data.length);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SellerLayout>

      <h2>Welcome Seller</h2>

      <h3>{user.name}</h3>

      <hr />

      <div className="row">

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h4>My Books</h4>
            <h2>{bookCount}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow p-3">
            <h4>Orders</h4>
            <h2>0</h2>
          </div>
        </div>

      </div>

    </SellerLayout>
  );
}

export default Dashboard;