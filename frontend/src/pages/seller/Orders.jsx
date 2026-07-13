import { useEffect, useState } from "react";
import API from "../../services/api";
import SellerLayout from "../../layouts/SellerLayout";

function Orders() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await API.get(`/orders/seller/${user.id}`);
      setOrders(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SellerLayout>

      <h2>My Orders</h2>

      <hr />

      {orders.length === 0 ? (
        <h4>No Orders Yet</h4>
      ) : (
        <table className="table table-bordered shadow">
          <thead className="table-dark">
            <tr>
              <th>Book</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Qty</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.book.title}</td>
                <td>{order.user.name}</td>
                <td>{order.user.email}</td>
                <td>{order.quantity}</td>
                <td>₹{order.totalPrice}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </SellerLayout>
  );
}

export default Orders;