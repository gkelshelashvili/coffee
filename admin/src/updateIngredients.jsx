// src/components/AdminPanel/Ingredients/UpdateIngredient.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateIngredient } from 'https://crudapi.co.uk/api'

const UpdateIngredient = ({ ingredient }) => {
  const [name, setName] = useState(ingredient.name);
  const [description, setDescription] = useState(ingredient.description);
  const [price, setPrice] = useState(ingredient.price);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedIngredient = { name, description, price };
    dispatch(updateIngredient(ingredient.id, updatedIngredient));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(event) => setDescription(event.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
      </label>
      <button type="submit">Update Ingredient</button>
    </form>
  );
};

export default UpdateIngredient