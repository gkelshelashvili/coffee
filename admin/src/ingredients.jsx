import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import{createIngredient} from 'https://crudapi.co.uk/api'

const CreateIngredient = () => {
    const[name,setName] = useState('');
    const[description,setDescription] = useState('')
    const[price,setPrice] = useState(0)
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const newIngredient = {name,description,price};
        dispatch(createIngredient(newIngredient));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
            </label>
            <label>
                Description:
                <textarea value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
            </label>
            <label>
                Price:
                <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
            </label>
            <button type="submit">Create Ingredient</button>
        </form>
    )
}
export default CreateIngredient