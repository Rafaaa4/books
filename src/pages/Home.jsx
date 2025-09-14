import React from 'react';
import '../style/Home.css';
import heroImage from '../assets/ChatGPT Image 14 sept. 2025, 11_38_38.png'; 

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Book World</h1>
      <img src={heroImage} alt="Books Illustration" />
    </div>
  );
};

export default Home;
