import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/BookDetails.css";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const res = await axios.get(`https://openlibrary.org/works/${id}.json`);
        setBook(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBookDetails();
  }, [id]);

  if (loading) return <p className="loading">Loading...</p>;
  if (!book) return <p className="error">Book not found.</p>;

  // Get cover image
  const coverId = book.covers?.[0];
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
    : "https://via.placeholder.com/300x450?text=No+Cover";

  return (
    <div className="book-details-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="book-details-card">
        <img className="book-cover" src={coverUrl} alt={book.title} />

        <div className="book-info">
          <h1 className="book-title">{book.title}</h1>
          {book.description && (
            <p className="book-description">
              {typeof book.description === "string"
                ? book.description
                : book.description.value}
            </p>
          )}

          {book.subjects && (
            <div className="book-tags">
              {book.subjects.slice(0, 6).map((tag, index) => (
                <span key={index} className="book-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <a
            href={`https://openlibrary.org/works/${id}/download`}
            target="_blank"
            rel="noopener noreferrer"
            className="download-button"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
