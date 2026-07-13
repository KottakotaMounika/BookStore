import { useEffect, useState } from "react";
import API from "../services/api";

function Cart() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (user) {
      fetchCart();
    }
  }, []);

  const fetchCart = async () => {
    try {
      const res = await API.get(`/cart/${user.id}`);
      setCart(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Increase Quantity
  const increaseQty = async (cartId) => {
    try {
      await API.put(`/cart/increase/${cartId}`);
      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  // Decrease Quantity
  const decreaseQty = async (cartId) => {
    try {
      await API.put(`/cart/decrease/${cartId}`);
      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  // Remove Item
  const removeItem = async (cartId) => {
    const confirmDelete = window.confirm(
      "Remove this book from cart?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/cart/remove/${cartId}`);
      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  // Checkout
  const checkout = async () => {
    try {
      const res = await API.post("/orders/checkout", {
        userId: user.id,
      });

      alert(res.data.message);

      fetchCart();
    } catch (error) {
      console.log(error);
      alert("Checkout Failed");
    }
  };

  const total = cart.reduce((sum, item) => {
    return sum + item.book.price * item.quantity;
  }, 0);

  return (
    <div className="container mt-5">

      <h2 className="mb-4">🛒 My Cart</h2>

      {cart.length === 0 ? (
        <div className="alert alert-warning">
          Your Cart is Empty
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div
              className="card shadow mb-4"
              key={item._id}
            >
              <div className="card-body">

                <h4>{item.book.title}</h4>

                <p>
                  <strong>Author :</strong> {item.book.author}
                </p>

                <p>
                  <strong>Category :</strong> {item.book.category}
                </p>

                <p>
                  <strong>Price :</strong> ₹{item.book.price}
                </p>

                <div className="d-flex align-items-center mb-3">

                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      decreaseQty(item._id)
                    }
                  >
                    -
                  </button>

                  <h5 className="mx-3 mt-2">
                    {item.quantity}
                  </h5>

                  <button
                    className="btn btn-success"
                    onClick={() =>
                      increaseQty(item._id)
                    }
                  >
                    +
                  </button>

                </div>

                <button
                  className="btn btn-outline-danger"
                  onClick={() =>
                    removeItem(item._id)
                  }
                >
                  Remove
                </button>

              </div>
            </div>
          ))}

          <div className="card shadow p-4">

            <h3>Total : ₹{total}</h3>

            <button
              className="btn btn-primary mt-3"
              onClick={checkout}
            >
              Checkout
            </button>

          </div>
        </>
      )}
    </div>
  );
}

export default Cart;