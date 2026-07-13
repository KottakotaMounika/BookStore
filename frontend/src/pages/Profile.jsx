import { useEffect, useState } from "react";
import API from "../services/api";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await API.get(`/orders/user/${user.id}`);
      setOrders(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>My Orders</h2>
      <hr />

      {orders.length === 0 ? (
        <h4>No Orders Found</h4>
      ) : (
        orders.map((order) => (
          <div className="card shadow p-3 mb-3" key={order._id}>
            <h4>{order.book.title}</h4>

            <p>
              <strong>Price:</strong> ₹{order.book.price}
            </p>

            <p>
              <strong>Quantity:</strong> {order.quantity}
            </p>

            <p>
              <strong>Total:</strong> ₹{order.totalPrice}
            </p>

            <p>
              <strong>Status:</strong> {order.status}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Profile;