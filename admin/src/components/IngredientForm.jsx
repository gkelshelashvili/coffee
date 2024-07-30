import React, { useState } from 'react'
import '../App.css'
const IngredientForm = ({onFormSubmit}) => {
    const [name,setName] = useState()
    const [price,setPrice] = useState()
    const [description,setDescription] = useState()

    const onSubmit = (e) => {
        e.preventDefault()
        onFormSubmit(name,price,description)
    }
  return (
    <form className='ingredientForm' onSubmit={onSubmit}>
        <p className="text">IngredientForm</p>
        <div className='ingredinet'>
          <input className='input' type="text" placeholder='Name' onChange={e => setName(e.target.value)}/>
          <input className='input'type="number" placeholder='Price' onChange={e => setPrice(e.target.value)}/>
          <input className='input' type="text" placeholder='Description' onChange={e => setDescription(e.target.value)}/>
          <button className='btn' type='submit'>Add</button>
        </div>
    </form>
  )
}

export default IngredientForm