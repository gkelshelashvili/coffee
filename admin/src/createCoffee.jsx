// // src/components/AdminPanel/Coffees/CreateCoffee.js
// import React, { useState } from 'eact';
// import { useDispatch } from 'eact-redux';
// import { createCoffee } from 'https://crudapi.co.uk/api'

// const CreateCoffee = () => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [ingredients, setIngredients] = useState([]);
//   const dispatch = useDispatch();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const newCoffee = { title, description, ingredients };
//       await dispatch(createCoffee(newCoffee));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Title:
//         <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Description:
//         <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
//       </label>
//       <br />
//       <button type="submit">Create Coffee</button>
//     </form>
//   );
// };

// export default CreateCoffee

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCoffee } from 'https://crudapi.co.uk/api';

const CreateCoffee = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([]); // initialize as an empty array
  const dispatch = useDispatch();

  const handleIngredientChange = (e) => {
    setIngredients([...ingredients, e.target.value]); // update ingredients array
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCoffee = { title, description, ingredients };
      await dispatch(createCoffee(newCoffee));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br />
      <label>
        Ingredients:
        <input type="text" onChange={handleIngredientChange} />
      </label>
      <br />
      <button type="submit">Create Coffee</button>
    </form>
  );
};

export default CreateCoffee;