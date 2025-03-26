import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removePlantFromCart } from '../actions';

const ShoppingCartPage = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((plant, index) => (
          <div key={index}>
            {plant.name} - ${plant.price}
            <button onClick={() => dispatch(removePlantFromCart(plant))}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ShoppingCartPage;

