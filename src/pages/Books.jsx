import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, Link, useNavigate } from "react-router-dom";
import "../style/Books.css";

const useQuery = () => new URLSearchParams(useLocation().search);

const Books = () => {
  const queryParam = useQuery().get("q") || "";
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState(queryParam);

  const navigate = useNavigate();

  useEffect(() => {
    if (queryParam) {
      fetchBooks(queryParam);
    } else {
      fetchRandomBooks();
    }
  }, [queryParam]);

  const fetchBooks = async (searchQuery) => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("https://openlibrary.org/search.json", {
        params: { q: searchQuery, limit: 20 },
      });
      setBooks(res.data.docs);
    } catch {
      setError("Failed to fetch books.");
    } finally {
      setLoading(false);
    }
  };

  const fetchRandomBooks = async () => {
    const randomTerms = ["fiction", "history", "science", "adventure", "magic"];
    const term = randomTerms[Math.floor(Math.random() * randomTerms.length)];
    fetchBooks(term);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/books?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="books-container">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleEnterKey}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="books-list">
        {books.length > 0 ? (
          books.map((book) => (
            <Link
              to={`/book/${book.key.replace("/works/", "")}`}
              className="book-card"
              key={book.key}
            >
              {book.cover_i && (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                  alt={book.title}
                />
              )}
              <h3>{book.title}</h3>
              <p>{book.author_name?.join(", ")}</p>
            </Link>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
};

export default Books;
