import { useEffect, useState } from "react";
import API from "../services/api";

function Cart() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await API.get(`/cart/${user.id}`);
      setCart(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const total = cart.reduce((sum, item) => {
    return sum + item.book.price * item.quantity;
  }, 0);

  return (
    <div className="container mt-5">

      <h2>My Cart</h2>

      <hr />

      {cart.length === 0 ? (
        <h4>Your Cart is Empty</h4>
      ) : (
        <>
          {cart.map((item) => (
            <div
              className="card shadow p-3 mb-3"
              key={item._id}
            >
              <h4>{item.book.title}</h4>

              <p>
                <strong>Author:</strong> {item.book.author}
              </p>

              <p>
                <strong>Price:</strong> ₹{item.book.price}
              </p>

              <p>
                <strong>Quantity:</strong> {item.quantity}
              </p>
            </div>
          ))}

          <hr />

          <h3>Total : ₹{total}</h3>

          <button className="btn btn-success mt-3">
            Checkout
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;