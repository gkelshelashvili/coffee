// src/components/AdminPanel/Ingredients/IngredientList.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from 'https://crudapi.co.uk/api'

const IngredientList = () => {
  const [ingredients, setIngredients] = useState([]);
  const dispatch = useDispatch();
  const ingredientState = useSelector((state) => state.ingredients);

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  useEffect(() => {
    setIngredients(ingredientState.ingredients);
  }, [ingredientState]);

  return (
    <ul>
      {ingredients.map((ingredient) => (
        <li key={ingredient.id}>
          <span>{ingredient.name}</span>
          <span>{ingredient.description}</span>
          <span>{ingredient.price}</span>
        </li>
      ))}
    </ul>
  );
};

export default IngredientList;