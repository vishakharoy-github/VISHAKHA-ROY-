export const ADD_PLANT_TO_CART = 'ADD_PLANT_TO_CART';
export const REMOVE_PLANT_FROM_CART = 'REMOVE_PLANT_FROM_CART';

export function addPlantToCart(plant) {
  return { type: ADD_PLANT_TO_CART, plant };
}

export function removePlantFromCart(plant) {
  return { type: REMOVE_PLANT_FROM_CART, plant };
}
