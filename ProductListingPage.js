import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPlantToCart } from '../actions';
import PlantCard from './PlantCard';

const ProductListingPage = () => {
  const plants = useSelector(state => state.plants);
  const dispatch = useDispatch();

  return (
    <div className="product-listing">
      {plants.map(plant => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onAdd={() => dispatch(addPlantToCart(plant))}
        />
      ))}
    </div>
  );
};

export default ProductListingPage;
