// src/components/AdminPanel/Ingredients/DeleteIngredient.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteIngredient } from 'https://crudapi.co.uk/api'

const DeleteIngredient = ({ ingredient }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteIngredient(ingredient.id));
  };

  return (
    <button onClick={handleDelete}>Delete Ingredient</button>
  );
};

export default DeleteIngredient;