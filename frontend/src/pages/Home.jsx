import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-5" style={{ background: "#F8F1DE" }}>
        <div className="container text-center">

          <h1
            className="fw-bold"
            style={{ fontSize: "3rem", color: "#8B4513" }}
          >
            Your Gateway to Infinite Stories
          </h1>

          <p className="mt-3 text-secondary">
            Discover captivating books, connect with passionate sellers,
            and fuel your love for reading only at <b>BookVerse</b>.
          </p>

          <Link
            to="/books"
            className="btn mt-3 px-4"
            style={{
              backgroundColor: "#C79A63",
              color: "white",
              borderRadius: "25px",
            }}
          >
            Start Exploring
          </Link>

        </div>
      </section>

      {/* Category Section */}
      <section
        className="py-5"
        style={{ background: "#FFFBEF" }}
      >
        <div className="container">

          <h2
            className="text-center mb-5 fw-bold"
            style={{ color: "#8B4513" }}
          >
            Explore by Category
          </h2>

          <div className="row text-center">

            <div className="col-md-3 mb-3">
              <div className="card shadow border-0 p-4">
                <h1>📖</h1>
                <h5>Fiction</h5>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card shadow border-0 p-4">
                <h1>🔬</h1>
                <h5>Science</h5>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card shadow border-0 p-4">
                <h1>👤</h1>
                <h5>Biography</h5>
              </div>
            </div>

            <div className="col-md-3 mb-3">
              <div className="card shadow border-0 p-4">
                <h1>🧒</h1>
                <h5>Children's Books</h5>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section
        className="text-center py-5"
        style={{ background: "#F8F1DE" }}
      >
        <button className="btn btn-dark">
          Contact Us
        </button>
      </section>
    </>
  );
}

export default Home;