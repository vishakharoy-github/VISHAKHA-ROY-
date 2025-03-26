import React from 'react';

const PlantCard = ({ plant, onAdd }) => (
  <div className="plant-card">
    <h3>{plant.name}</h3>
    <p>${plant.price}</p>
    <button onClick={onAdd}>Add to Cart</button>
  </div>
);

export default PlantCard;

