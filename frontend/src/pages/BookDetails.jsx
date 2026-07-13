import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const res = await API.get(`/books/${id}`);
      setBook(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAddToCart = async () => {
  if (!user) {
    alert("Please login first");
    navigate("/login");
    return;
  }

  try {
    const res = await API.post("/cart/add", {
      user: user.id,
      book: book._id,
    });

    alert(res.data.message);

    navigate("/cart");

  } catch (error) {
    console.log(error);
    alert("Failed to add book to cart");
  }
};

  if (!book) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  return (
    <div className="container mt-5">

      <div className="card shadow p-4">

        <h2>{book.title}</h2>

        <hr />

        <p><strong>Author:</strong> {book.author}</p>

        <p><strong>Category:</strong> {book.category}</p>

        <p><strong>Price:</strong> ₹{book.price}</p>

        <p><strong>Description:</strong></p>

        <p>{book.description}</p>

        <button
  className="btn btn-success"
  onClick={handleAddToCart}
>
  Add To Cart
</button>

      </div>

    </div>
  );
}

export default BookDetails;