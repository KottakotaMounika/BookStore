import { useEffect, useState } from "react";
import API from "../../services/api";

function Products() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await API.get(`/books/seller/${user.id}`);
      setBooks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>My Products</h2>

      <div className="row mt-4">

        {books.length === 0 ? (
          <h4>No Books Added</h4>
        ) : (
          books.map((book) => (
            <div className="col-md-4 mb-4" key={book._id}>

              <div className="card shadow h-100">

                <div className="card-body">

                  <h4>{book.title}</h4>

                  <p>
                    <strong>Author:</strong> {book.author}
                  </p>

                  <p>
                    <strong>Category:</strong> {book.category}
                  </p>

                  <p>
                    <strong>Price:</strong> ₹{book.price}
                  </p>

                  <button className="btn btn-warning me-2">
                    Edit
                  </button>

                  <button className="btn btn-danger">
                    Delete
                  </button>

                </div>

              </div>

            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default Products;