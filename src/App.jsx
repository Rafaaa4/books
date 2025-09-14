import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx"
import Books from "./pages/Books.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import Navbar from "./componend/Navbar.jsx";

const App = () => {
  return (
    <div>
      
      <Navbar />

      {/* Routes */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Books />} />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </div>
  );
};

export default App;
