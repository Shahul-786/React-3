import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import AppNavbar from './Navbar';
import AppCarousel from './Carousel';
import AppProductList from './ProductList';

function App() {
  return (
    <Router>
      <div>
        <AppNavbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="carousel">
    <AppCarousel />
  </div>
);

const Products = () => (
  <div>
    <h2>Products</h2>
    <div className="product-list">
      <AppProductList />
    </div>
  </div>
);

const Reviews = () => (
  <div className="reviews">
    <h2>Reviews</h2>
    <ul>
      <li>Great quality and design!</li>
      <li>Fast shipping. Very satisfied.</li>
      <li>Highly recommended.</li>
      <li>Awesome product, exceeded expectations!</li>
      <li>Excellent customer service. Will buy again.</li>
      <li>Beautifully crafted. Worth the price.</li>
    </ul>
  </div>
);

export default App;
