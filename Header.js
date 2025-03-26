import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h2>Plant Shop</h2>
    <nav>
      <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/cart">Cart</Link>
    </nav>
  </header>
);

export default Header;

