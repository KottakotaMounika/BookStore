import { useState } from "react";
import API from "../../services/api";

function AddBook() {

  const user = JSON.parse(localStorage.getItem("user"));

  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    price: "",
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await API.post("/books/add", {
        ...book,
        seller: user.id,
      });

      alert(res.data.message);

      setBook({
        title: "",
        author: "",
        category: "",
        description: "",
        price: "",
      });

    } catch (err) {
      alert("Failed to Add Book");
    }
  };

  return (
    <div className="container mt-5">

      <h2>Add Book</h2>

      <form onSubmit={handleSubmit}>

        <input
          className="form-control mb-3"
          placeholder="Title"
          name="title"
          value={book.title}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          placeholder="Author"
          name="author"
          value={book.author}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          placeholder="Category"
          name="category"
          value={book.category}
          onChange={handleChange}
        />

        <textarea
          className="form-control mb-3"
          placeholder="Description"
          name="description"
          value={book.description}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          placeholder="Price"
          type="number"
          name="price"
          value={book.price}
          onChange={handleChange}
        />

        <button
          className="btn btn-success"
        >
          Add Book
        </button>

      </form>

    </div>
  );
}

export default AddBook;