function Footer() {
  return (
    <footer
      style={{
        background: "#F8F1DE",
        padding: "40px 0",
        textAlign: "center",
      }}
    >
      <button
        className="btn mb-3"
        style={{
          backgroundColor: "#8B4513",
          color: "white",
        }}
      >
        Contact Us
      </button>

      <p style={{ color: "#555" }}>
        "Embark on a literary journey with our BookVerse where every page
        turns into an adventure."
      </p>

      <p>
        📞 Call At: 127-865-886-67
      </p>

      <small>
        © 2026 BookVerse. All Rights Reserved.
      </small>
    </footer>
  );
}

export default Footer;