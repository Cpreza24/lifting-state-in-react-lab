import { useState } from 'react';

//Add ingredients to an array that gets lifted to state in app.jsx
const IngredientList = ({ addIngredient, availableIngredients }) => {
  return (
    <>
      <ul>
        {availableIngredients.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => addIngredient(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IngredientList;
