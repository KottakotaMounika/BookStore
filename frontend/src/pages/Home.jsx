import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const res = await API.get("/books");
      setBooks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">

      <h2 className="mb-4 text-center">
        📚 Welcome to BookVerse
      </h2>

      <div className="row">

        {books.length === 0 ? (
          <h4 className="text-center">No Books Available</h4>
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

                  <Link
                    to={`/book/${book._id}`}
                    className="btn btn-primary"
                  >
                    View Details
                  </Link>

                </div>

              </div>

            </div>
          ))
        )}

      </div>

    </div>
  );
}

export default Home;