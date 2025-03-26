import { combineReducers } from 'redux';
import { ADD_PLANT_TO_CART, REMOVE_PLANT_FROM_CART } from './actions';

const initialPlants = [
  { id: 1, name: 'Snake Plant', price: 10.99 },
  { id: 2, name: 'Spider Plant', price: 8.99 },
  { id: 3, name: 'ZZ Plant', price: 12.99 },
  { id: 4, name: 'Pothos', price: 9.99 },
  { id: 5, name: 'Dracaena', price: 11.99 },
  { id: 6, name: 'Philodendron', price: 13.99 },
];

const plantReducer = (state = initialPlants) => state;

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PLANT_TO_CART:
      return [...state, action.plant];
    case REMOVE_PLANT_FROM_CART:
      return state.filter((plant) => plant.id !== action.plant.id);
    default:
      return state;
  }
};

export default combineReducers({
  plants: plantReducer,
  cart: cartReducer,
});
